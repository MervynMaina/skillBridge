import { useState, useMemo } from "react";
import {
    FaSearch,
    FaUsers,
    FaUserCheck,
    FaUserClock,
    FaUserSlash,
    FaTrash,
    FaEnvelope,
    FaFileDownload,
    FaCheckCircle,
    FaBan,
    FaGraduationCap,
} from "react-icons/fa";

const AdminJobSeeker = () => {
    // Mock Job Seekers Data (In production, replace with useFetch("http://localhost:4000/job-seekers"))
    const [seekers, setSeekers] = useState([
        {
            id: "1",
            fullName: "Mervyn Maina",
            email: "mervyn.maina@dev.co.ke",
            primarySkill: "Full-Stack Development (Python / Kotlin)",
            experienceLevel: "Mid-Level",
            status: "Active",
            resumeUploaded: true,
            appliedJobsCount: 12,
            joinedDate: "2026-01-10",
        },
        {
            id: "2",
            fullName: "Jane Wanjiku",
            email: "jane.wanjiku@tech.or.ke",
            primarySkill: "UI/UX Design & Research",
            experienceLevel: "Senior",
            status: "Active",
            resumeUploaded: true,
            appliedJobsCount: 8,
            joinedDate: "2026-02-01",
        },
        {
            id: "3",
            fullName: "Brian Ochieng",
            email: "brian.o@cloudsolutions.com",
            primarySkill: "DevOps & Cloud Systems",
            experienceLevel: "Junior",
            status: "Pending Verification",
            resumeUploaded: false,
            appliedJobsCount: 2,
            joinedDate: "2026-03-05",
        },
        {
            id: "4",
            fullName: "Amina Hassan",
            email: "amina.hassan@data.org",
            primarySkill: "Data Analysis & SQL",
            experienceLevel: "Mid-Level",
            status: "Suspended",
            resumeUploaded: true,
            appliedJobsCount: 0,
            joinedDate: "2025-11-20",
        },
        {
            id: "5",
            fullName: "Kevin Kiptoo",
            email: "kevin.k@neteng.co.ke",
            primarySkill: "Network Engineering",
            experienceLevel: "Senior",
            status: "Active",
            resumeUploaded: true,
            appliedJobsCount: 15,
            joinedDate: "2026-01-18",
        },
    ]);

    // Search & Filter States
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    // Filtering Logic
    const filteredSeekers = useMemo(() => {
        return seekers.filter((seeker) => {
            const query = searchTerm.toLowerCase().trim();
            const matchesSearch =
                !query ||
                seeker.fullName.toLowerCase().includes(query) ||
                seeker.email.toLowerCase().includes(query) ||
                seeker.primarySkill.toLowerCase().includes(query);

            const matchesStatus =
                statusFilter === "all" ||
                seeker.status.toLowerCase() === statusFilter.toLowerCase();

            return matchesSearch && matchesStatus;
        });
    }, [seekers, searchTerm, statusFilter]);

    // Status Action Handlers
    const handleVerify = (id) => {
        setSeekers((prev) =>
            prev.map((s) => (s.id === id ? { ...s, status: "Active" } : s))
        );
    };

    const handleSuspend = (id) => {
        setSeekers((prev) =>
            prev.map((s) => (s.id === id ? { ...s, status: "Suspended" } : s))
        );
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this job seeker account?")) {
            setSeekers((prev) => prev.filter((s) => s.id !== id));
        }
    };

    // Metrics Summary
    const counts = useMemo(() => {
        return {
            total: seekers.length,
            active: seekers.filter((s) => s.status === "Active").length,
            pending: seekers.filter((s) => s.status === "Pending Verification").length,
            suspended: seekers.filter((s) => s.status === "Suspended").length,
        };
    }, [seekers]);

    return (
        <div className="container-fluid p-0">
            {/* Title Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                <div>
                    <h3 className="fw-bold text-dark mb-1">Job Seekers Management</h3>
                    <p className="text-muted small mb-0">
                        Monitor candidate profiles, verify resumes, and manage job seeker account statuses.
                    </p>
                </div>
            </div>

            {/* Metrics Header Cards */}
            <div className="row g-3 mb-4">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Total Candidates</span>
                                <h3 className="fw-bold text-dark m-0 mt-1">{counts.total}</h3>
                            </div>
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                <FaUsers className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Active Seekers</span>
                                <h3 className="fw-bold text-success m-0 mt-1">{counts.active}</h3>
                            </div>
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle text-success">
                                <FaUserCheck className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Pending Verification</span>
                                <h3 className="fw-bold text-warning m-0 mt-1">{counts.pending}</h3>
                            </div>
                            <div className="bg-warning bg-opacity-10 p-3 rounded-circle text-warning">
                                <FaUserClock className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Suspended</span>
                                <h3 className="fw-bold text-danger m-0 mt-1">{counts.suspended}</h3>
                            </div>
                            <div className="bg-danger bg-opacity-10 p-3 rounded-circle text-danger">
                                <FaUserSlash className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Table Card */}
            <div className="card border-0 shadow-sm bg-body">
                {/* Search & Filter Header */}
                <div className="card-header bg-transparent border-bottom py-3">
                    <div className="row g-3 justify-content-between align-items-center">
                        {/* Search Bar */}
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="input-group input-group-sm">
                                <span className="input-group-text bg-body-tertiary text-muted border-end-0">
                                    <FaSearch />
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-start-0 bg-body-tertiary"
                                    placeholder="Search by candidate name, email, or skill..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Filter Dropdown */}
                        <div className="col-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-md-end gap-2">
                            <label htmlFor="status-filter" className="small text-muted fw-semibold mb-0">
                                Status:
                            </label>
                            <select
                                id="status-filter"
                                className="form-select form-select-sm w-auto"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All Statuses</option>
                                <option value="active">Active</option>
                                <option value="pending verification">Pending Verification</option>
                                <option value="suspended">Suspended</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Data Table */}
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th scope="col" className="ps-4">Candidate</th>
                                <th scope="col">Primary Skill</th>
                                <th scope="col">Experience</th>
                                <th scope="col">Applications</th>
                                <th scope="col">Resume</th>
                                <th scope="col">Status</th>
                                <th scope="col" className="text-end pe-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSeekers.length > 0 ? (
                                filteredSeekers.map((seeker) => (
                                    <tr key={seeker.id}>
                                        {/* Candidate Identity */}
                                        <td className="ps-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div
                                                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                                    style={{ width: "38px", height: "38px", minWidth: "38px" }}
                                                >
                                                    {seeker.fullName.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-dark">{seeker.fullName}</div>
                                                    <small className="text-muted d-flex align-items-center gap-1">
                                                        <FaEnvelope className="fs-8" /> {seeker.email}
                                                    </small>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Primary Skill */}
                                        <td className="fw-semibold text-secondary">
                                            <div className="d-flex align-items-center gap-1">
                                                <FaGraduationCap className="text-primary opacity-75" />
                                                <span>{seeker.primarySkill}</span>
                                            </div>
                                        </td>

                                        {/* Experience Level */}
                                        <td>
                                            <span className="badge bg-body-secondary text-dark border px-2 py-1 rounded-pill">
                                                {seeker.experienceLevel}
                                            </span>
                                        </td>

                                        {/* Applications Submitted */}
                                        <td>
                                            <span className="fw-semibold text-dark">{seeker.appliedJobsCount}</span>
                                            <span className="text-muted small ms-1">jobs</span>
                                        </td>

                                        {/* Resume Upload Status */}
                                        <td>
                                            {seeker.resumeUploaded ? (
                                                <button
                                                    className="btn btn-sm btn-link text-decoration-none p-0 d-inline-flex align-items-center gap-1 text-primary fw-semibold"
                                                    title="Download Resume"
                                                >
                                                    <FaFileDownload /> PDF
                                                </button>
                                            ) : (
                                                <span className="text-muted small fst-italic">Missing</span>
                                            )}
                                        </td>

                                        {/* Account Status Badge */}
                                        <td>
                                            <span
                                                className={`badge rounded-pill px-2.5 py-1.5 ${seeker.status === "Active"
                                                    ? "bg-success-subtle text-success border border-success-subtle"
                                                    : seeker.status === "Pending Verification"
                                                        ? "bg-warning-subtle text-warning-emphasis border border-warning-subtle"
                                                        : "bg-danger-subtle text-danger border border-danger-subtle"
                                                    }`}
                                            >
                                                {seeker.status}
                                            </span>
                                        </td>

                                        {/* Action Controls */}
                                        <td className="text-end pe-4">
                                            <div className="btn-group btn-group-sm" role="group">
                                                {seeker.status !== "Active" && (
                                                    <button
                                                        className="btn btn-outline-success"
                                                        title="Activate / Verify Account"
                                                        onClick={() => handleVerify(seeker.id)}
                                                    >
                                                        <FaCheckCircle /> Verify
                                                    </button>
                                                )}
                                                {seeker.status === "Active" && (
                                                    <button
                                                        className="btn btn-outline-warning text-dark"
                                                        title="Suspend Account"
                                                        onClick={() => handleSuspend(seeker.id)}
                                                    >
                                                        <FaBan /> Suspend
                                                    </button>
                                                )}
                                                <button
                                                    className="btn btn-outline-danger"
                                                    title="Delete Candidate"
                                                    onClick={() => handleDelete(seeker.id)}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center py-5 text-muted">
                                        <div className="mb-2">
                                            <FaUsers className="fs-1 text-secondary opacity-50" />
                                        </div>
                                        <h6 className="fw-semibold mb-1">No Candidates Found</h6>
                                        <p className="small mb-0">No job seeker profiles match your search criteria.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer Counter */}
                <div className="card-footer bg-transparent border-top py-3 d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                        Showing <span className="fw-semibold text-dark">{filteredSeekers.length}</span> of{" "}
                        <span className="fw-semibold text-dark">{seekers.length}</span> candidate accounts
                    </small>
                </div>
            </div>
        </div>
    );
};

export default AdminJobSeeker;