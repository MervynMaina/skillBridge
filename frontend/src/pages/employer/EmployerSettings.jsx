import { useState } from "react";
import { toast } from "react-hot-toast";
import { MdBusiness } from "react-icons/md";
import { FaCamera, FaSave, FaTrash, FaBuilding, FaUser } from "react-icons/fa";

const EmployerSettings = () => {
    // Logo File Preview State
    const [logo, setLogo] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        fullName: "Mervyn Maina",
        email: "mervyn@techcorp.co.ke",
        phone: "+254 700 000 000",
        companyName: "TechCorp Kenya",
        companyWebsite: "https://techcorp.co.ke",
        companyDescription: "Leading enterprise technology and logistics software solutions in East Africa.",
    });

    const [loading, setLoading] = useState(false);

    // Logo Change Handler
    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogo(URL.createObjectURL(file));
            toast.success("Logo uploaded successfully!");
        }
    };

    const handleRemoveLogo = () => {
        setLogo(null);
        toast.success("Logo removed.");
    };

    // Field Change Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API save
        setTimeout(() => {
            setLoading(false);
            toast.success("Company profile settings updated successfully!");
        }, 800);
    };

    return (
        <div className="container-fluid p-0">
            {/* Title Header */}
            <div className="mb-4">
                <h3 className="fw-bold text-dark mb-1">Company Settings</h3>
                <p className="text-muted small mb-0">
                    Manage your corporate branding, recruiter credentials, and company info.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Company Logo Section */}
                <div className="card border-0 shadow-sm bg-body p-4 rounded-3 mb-4">
                    <h5 className="fw-semibold text-dark mb-3">Company Logo</h5>

                    <div className="d-flex align-items-center gap-3">
                        <div
                            className="d-flex align-items-center justify-content-center bg-body-tertiary border rounded-3 overflow-hidden"
                            style={{ width: "90px", height: "90px", flexShrink: 0 }}
                        >
                            {logo ? (
                                <img
                                    src={logo}
                                    alt="Company logo preview"
                                    className="w-100 h-100"
                                    style={{ objectFit: "contain" }}
                                />
                            ) : (
                                <MdBusiness size={55} className="text-secondary opacity-50" />
                            )}
                        </div>

                        <div>
                            <p className="fw-semibold text-dark mb-1">Upload Company Logo</p>
                            <p className="text-muted small mb-2">
                                PNG or JPG recommended. Square dimensions work best.
                            </p>

                            <div className="d-flex align-items-center gap-2">
                                <label className="btn btn-outline-secondary btn-sm mb-0 d-inline-flex align-items-center gap-2">
                                    <FaCamera />
                                    <span>Choose Logo</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        hidden
                                        onChange={handleLogoChange}
                                    />
                                </label>

                                {logo && (
                                    <button
                                        type="button"
                                        onClick={handleRemoveLogo}
                                        className="btn btn-outline-danger btn-sm d-inline-flex align-items-center gap-1"
                                    >
                                        <FaTrash /> Remove
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Info Section */}
                <div className="card border-0 shadow-sm bg-body p-4 rounded-3 mb-4">
                    <h5 className="fw-semibold text-dark d-flex align-items-center gap-2 mb-3">
                        <FaUser className="text-primary" /> Contact Person Information
                    </h5>

                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>
                </div>

                {/* Company Info Section */}
                <div className="card border-0 shadow-sm bg-body p-4 rounded-3 mb-4">
                    <h5 className="fw-semibold text-dark d-flex align-items-center gap-2 mb-3">
                        <FaBuilding className="text-primary" /> Corporate Profile
                    </h5>

                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your company name"
                                required
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Company Website</label>
                            <input
                                type="url"
                                name="companyWebsite"
                                value={formData.companyWebsite}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="https://example.com"
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label fw-semibold">Company Description</label>
                            <textarea
                                name="companyDescription"
                                value={formData.companyDescription}
                                onChange={handleChange}
                                className="form-control"
                                rows="4"
                                placeholder="Tell candidates about your company culture, mission, and focus..."
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="d-flex justify-content-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn text-white px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm"
                        style={{ backgroundColor: "#790D16" }}
                    >
                        <FaSave />
                        <span>{loading ? "Saving..." : "Save Changes"}</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmployerSettings;