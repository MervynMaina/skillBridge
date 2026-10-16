import { useState } from "react";
import { toast } from "react-hot-toast";
import {
    FaGraduationCap,
    FaPlus,
    FaTimes,
    FaFileUpload,
    FaFilePdf,
    FaDownload,
    FaTrash,
    FaSave,
    FaCheckCircle
} from "react-icons/fa";

const SkillsPage = () => {
    // Candidate Profile & Skills State
    const [skills, setSkills] = useState([
        "Python",
        "Django",
        "Kotlin",
        "Android SDK",
        "Firebase",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
    ]);

    const [newSkill, setNewSkill] = useState("");
    const [primaryTitle, setPrimaryTitle] = useState("Full-Stack Developer (Python / Kotlin)");
    const [experienceLevel, setExperienceLevel] = useState("Mid-Level (3-5 Years)");
    const [resumeFile, setResumeFile] = useState({
        name: "Mervyn_Maina_CV_2026.pdf",
        size: "1.2 MB",
        uploadedDate: "2026-03-01",
    });

    const [loading, setLoading] = useState(false);

    // Add Skill Badge
    const handleAddSkill = (e) => {
        e.preventDefault();
        const trimmed = newSkill.trim();
        if (!trimmed) return;

        if (skills.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
            toast.error("Skill already exists in your list.");
            return;
        }

        setSkills([...skills, trimmed]);
        setNewSkill("");
        toast.success(`Added ${trimmed}`);
    };

    // Remove Skill Badge
    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter((s) => s !== skillToRemove));
    };

    // Handle Resume Upload Preview
    const handleResumeChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setResumeFile({
                name: file.name,
                size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
                uploadedDate: new Date().toISOString().split("T")[0],
            });
            toast.success("Resume uploaded successfully!");
        }
    };

    // Handle Remove Resume
    const handleRemoveResume = () => {
        setResumeFile(null);
        toast.success("Resume removed.");
    };

    // Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.success("Skills & Professional profile updated successfully!");
        }, 800);
    };

    return (
        <div className="container-fluid p-0">
            {/* Title Header */}
            <div className="mb-4">
                <h3 className="fw-bold text-dark mb-1">Skills & Professional Profile</h3>
                <p className="text-muted small mb-0">
                    Manage your tech stack, primary title, and downloadable resume CV for recruiter discovery.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Primary Role & Experience Level */}
                <div className="card border-0 shadow-sm bg-body p-4 rounded-3 mb-4">
                    <h5 className="fw-semibold text-dark d-flex align-items-center gap-2 mb-3">
                        <FaGraduationCap className="text-primary" /> Professional Overview
                    </h5>

                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Primary Job Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={primaryTitle}
                                onChange={(e) => setPrimaryTitle(e.target.value)}
                                placeholder="e.g. Full-Stack Developer"
                                required
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold">Experience Level</label>
                            <select
                                className="form-select"
                                value={experienceLevel}
                                onChange={(e) => setExperienceLevel(e.target.value)}
                            >
                                <option value="Entry-Level (0-1 Years)">Entry-Level (0-1 Years)</option>
                                <option value="Junior (1-2 Years)">Junior (1-2 Years)</option>
                                <option value="Mid-Level (3-5 Years)">Mid-Level (3-5 Years)</option>
                                <option value="Senior (5+ Years)">Senior (5+ Years)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Technical Skills Tag Input */}
                <div className="card border-0 shadow-sm bg-body p-4 rounded-3 mb-4">
                    <h5 className="fw-semibold text-dark mb-2">Technical Skills & Expertise</h5>
                    <p className="text-muted small mb-3">
                        Add relevant technologies, frameworks, and tools to stand out in automated job matching.
                    </p>

                    {/* Add Skill Form Input */}
                    <div className="input-group mb-3" style={{ maxWidth: "500px" }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. React, Kotlin, Docker..."
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={handleAddSkill}
                            className="btn text-white d-inline-flex align-items-center gap-1"
                            style={{ backgroundColor: "#1E293B" }}
                        >
                            <FaPlus /> Add Skill
                        </button>
                    </div>

                    {/* Active Skills Badges */}
                    <div className="d-flex flex-wrap gap-2 pt-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fs-6 d-inline-flex align-items-center gap-2"
                            >
                                {skill}
                                <button
                                    type="button"
                                    onClick={() => handleRemoveSkill(skill)}
                                    className="btn-close btn-close-white p-0 fs-8 ms-1"
                                    style={{ width: "8px", height: "8px" }}
                                    aria-label={`Remove ${skill}`}
                                >
                                    <FaTimes className="text-primary fs-7" />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Resume CV File Section */}
                <div className="card border-0 shadow-sm bg-body p-4 rounded-3 mb-4">
                    <h5 className="fw-semibold text-dark mb-2">Resume / Curriculum Vitae (CV)</h5>
                    <p className="text-muted small mb-3">
                        Upload your latest PDF resume. Employers will download this when reviewing your job applications.
                    </p>

                    {resumeFile ? (
                        <div className="d-flex align-items-center justify-content-between p-3 border rounded-3 bg-light">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-danger bg-opacity-10 p-3 rounded-3 text-danger">
                                    <FaFilePdf className="fs-3" />
                                </div>
                                <div>
                                    <h6 className="fw-bold text-dark mb-1">{resumeFile.name}</h6>
                                    <small className="text-muted">
                                        {resumeFile.size} • Uploaded on {resumeFile.uploadedDate}
                                    </small>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                                    onClick={() => toast.success("Downloading resume sample...")}
                                >
                                    <FaDownload /> Download
                                </button>
                                <button
                                    type="button"
                                    onClick={handleRemoveResume}
                                    className="btn btn-sm btn-outline-danger"
                                    title="Remove file"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="border border-dashed p-4 text-center rounded-3 bg-body-tertiary">
                            <FaFileUpload className="fs-1 text-secondary mb-2 opacity-50" />
                            <h6 className="fw-semibold text-dark mb-1">No Resume Uploaded</h6>
                            <p className="text-muted small mb-3">Upload a PDF file (Max 5MB)</p>
                            <label className="btn btn-sm text-white px-4 d-inline-flex align-items-center gap-2" style={{ backgroundColor: "#1E293B" }}>
                                <FaFileUpload /> Select PDF File
                                <input
                                    type="file"
                                    accept=".pdf"
                                    hidden
                                    onChange={handleResumeChange}
                                />
                            </label>
                        </div>
                    )}
                </div>

                {/* Save Bar */}
                <div className="d-flex justify-content-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn text-white px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm"
                        style={{ backgroundColor: "#1E293B" }}
                    >
                        <FaSave />
                        <span>{loading ? "Saving..." : "Save Profile Changes"}</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SkillsPage;