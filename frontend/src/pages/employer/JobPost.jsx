import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaPaperPlane, FaBriefcase, FaDollarSign, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const JobPost = () => {
    const navigate = useNavigate();

    // Controlled Form State
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        employmentType: "",
        description: "",
        requirements: "",
        experienceLevel: "",
        minSalary: "",
        maxSalary: "",
        currency: "KES",
        deadline: "",
    });

    const [loading, setLoading] = useState(false);

    // Input Change Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Form Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple Validation
        if (
            !formData.title ||
            !formData.location ||
            !formData.employmentType ||
            !formData.description ||
            !formData.requirements ||
            !formData.deadline
        ) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setLoading(true);

        try {
            // In production / CAT demo, connect with:
            // await fetch("http://localhost:4000/jobs", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify({ ...formData, createdAt: new Date().toISOString() }),
            // });

            toast.success("Job posting published successfully!");
            navigate("/employer");
        } catch (error) {
            toast.error("Failed to publish job posting.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid p-0">
            {/* Title Header */}
            <div className="mb-4">
                <h3 className="fw-bold text-dark mb-1">Post a Job Opportunity</h3>
                <p className="text-muted small mb-0">
                    Create a new role listing to connect with qualified candidates across SkillBridge.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="card border-0 shadow-sm bg-body p-4 rounded-3">
                    <div className="row g-3">
                        {/* Section Title */}
                        <div className="col-12 border-bottom pb-2 mb-2">
                            <h5 className="fw-semibold text-dark d-flex align-items-center gap-2 mb-0">
                                <FaBriefcase className="text-primary" /> Basic Information
                            </h5>
                        </div>

                        {/* Job Title */}
                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Job Title <span className="text-danger">*</span></label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="e.g. Frontend Developer (React)"
                                required
                            />
                        </div>

                        {/* Location */}
                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Location <span className="text-danger">*</span></label>
                            <div className="input-group">
                                <span className="input-group-text bg-body-tertiary">
                                    <FaMapMarkerAlt className="text-muted" />
                                </span>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="e.g. Nairobi, Kenya or Remote"
                                    required
                                />
                            </div>
                        </div>

                        {/* Employment Type */}
                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Employment Type <span className="text-danger">*</span></label>
                            <select
                                name="employmentType"
                                value={formData.employmentType}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="" disabled>Select employment type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>

                        {/* Required Experience Level */}
                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Required Experience <span className="text-danger">*</span></label>
                            <select
                                name="experienceLevel"
                                value={formData.experienceLevel}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="" disabled>Select experience level</option>
                                <option value="No experience">No experience</option>
                                <option value="Less than 1 year">Less than 1 year</option>
                                <option value="1-2 years">1-2 years</option>
                                <option value="3-5 years">3-5 years</option>
                                <option value="5+ years">5+ years</option>
                            </select>
                        </div>

                        {/* Salary Range Section */}
                        <div className="col-12 border-bottom pb-2 mt-4 mb-2">
                            <h5 className="fw-semibold text-dark d-flex align-items-center gap-2 mb-0">
                                <FaDollarSign className="text-success" /> Compensation Range
                            </h5>
                        </div>

                        <div className="col-12 col-md-4">
                            <label className="form-label fw-semibold">Currency</label>
                            <select
                                name="currency"
                                value={formData.currency}
                                onChange={handleChange}
                                className="form-select"
                            >
                                <option value="KES">KES (Kenyan Shilling)</option>
                                <option value="USD">USD ($)</option>
                                <option value="EUR">EUR (€)</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-4">
                            <label className="form-label fw-semibold">Minimum Salary</label>
                            <input
                                type="number"
                                name="minSalary"
                                value={formData.minSalary}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="e.g. 80000"
                            />
                        </div>

                        <div className="col-12 col-md-4">
                            <label className="form-label fw-semibold">Maximum Salary</label>
                            <input
                                type="number"
                                name="maxSalary"
                                value={formData.maxSalary}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="e.g. 120000"
                            />
                        </div>

                        {/* Role Descriptions Section */}
                        <div className="col-12 border-bottom pb-2 mt-4 mb-2">
                            <h5 className="fw-semibold text-dark mb-0">Role Details</h5>
                        </div>

                        {/* Job Description */}
                        <div className="col-12">
                            <label className="form-label fw-semibold">Job Description <span className="text-danger">*</span></label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="form-control"
                                rows="4"
                                placeholder="Describe key responsibilities and daily team objectives..."
                                required
                            ></textarea>
                        </div>

                        {/* Requirements */}
                        <div className="col-12">
                            <label className="form-label fw-semibold">Requirements & Skills <span className="text-danger">*</span></label>
                            <textarea
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                className="form-control"
                                rows="4"
                                placeholder="List key technical skills, certifications, and educational qualifications..."
                                required
                            ></textarea>
                        </div>

                        {/* Deadline */}
                        <div className="col-12 col-md-6 mt-3">
                            <label className="form-label fw-semibold">Application Deadline <span className="text-danger">*</span></label>
                            <div className="input-group">
                                <span className="input-group-text bg-body-tertiary">
                                    <FaCalendarAlt className="text-muted" />
                                </span>
                                <input
                                    type="date"
                                    name="deadline"
                                    value={formData.deadline}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Action */}
                        <div className="col-12 pt-3 border-top mt-4 d-flex justify-content-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn text-white px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm"
                                style={{ backgroundColor: "#790D16" }}
                            >
                                <FaPaperPlane />
                                <span>{loading ? "Publishing..." : "Publish Job Posting"}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default JobPost;