import { useState, useMemo } from "react";
import {
    FaSearch,
    FaBuilding,
    FaCheckCircle,
    FaHourglassHalf,
    FaBan,
    FaTrash,
    FaEnvelope,
    FaPlus
} from "react-icons/fa";

const AdminEmployer = () => {
    // Mock employer data (In production, replace with useFetch("http://localhost:4000/employers"))
    const [employers, setEmployers] = useState([
        {
            id: "1",
            companyName: "TechCorp Innovations",
            contactPerson: "Sarah Jenkins",
            email: "s.jenkins@techcorp.com",
            location: "San Francisco, CA",
            activeJobs: 5,
            status: "Verified",
            joinedDate: "2025-11-12",
        },
        {
            id: "2",
            companyName: "CreativePulse Media",
            contactPerson: "David Chen",
            email: "david@creativepulse.io",
            location: "Remote",
            activeJobs: 2,
            status: "Verified",
            joinedDate: "2026-01-05",
        },
        {
            id: "3",
            companyName: "AfriTech Logistics",
            contactPerson: "Mwaniki Kamau",
            email: "m.kamau@afritech.co.ke",
            location: "Nairobi, Kenya",
            activeJobs: 4,
            status: "Pending",
            joinedDate: "2026-02-18",
        },
        {
            id: "4",
            companyName: "CloudScale Solutions",
            contactPerson: "Alex Rivera",
            email: "alex@cloudscale.net",
            location: "Austin, TX",
            activeJobs: 0,
            status: "Suspended",
            joinedDate: "2025-08-20",
        },
        {
            id: "5",
            companyName: "FinTech Flow",
            contactPerson: "Elena Rostova",
            email: "elena@fintechflow.com",
            location: "New York, NY",
            activeJobs: 3,
            status: "Pending",
            joinedDate: "2026-03-01",
        },
    ]);

    // Filter and Search States
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    // Filtering Logic
    const filteredEmployers = useMemo(() => {
        return employers.filter((emp) => {
            const query = searchTerm.toLowerCase().trim();
            const matchesSearch =
                !query ||
                emp.companyName.toLowerCase().includes(query) ||
                emp.contactPerson.toLowerCase().includes(query) ||
                emp.email.toLowerCase().includes(query);

            const matchesStatus =
                statusFilter === "all" ||
                emp.status.toLowerCase() === statusFilter.toLowerCase();

            return matchesSearch && matchesStatus;
        });
    }, [employers, searchTerm, statusFilter]);

    // Action Handlers
    const handleVerify = (id) => {
        setEmployers((prev) =>
            prev.map((emp) => (emp.id === id ? { ...emp, status: "Verified" } : emp))
        );
    };

    const handleSuspend = (id) => {
        setEmployers((prev) =>
            prev.map((emp) => (emp.id === id ? { ...emp, status: "Suspended" } : emp))
        );
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this employer account?")) {
            setEmployers((prev) => prev.filter((emp) => emp.id !== id));
        }
    };

    // Status Counts for Summary Badges
    const counts = useMemo(() => {
        return {
            total: employers.length,
            verified: employers.filter((e) => e.status === "Verified").length,
            pending: employers.filter((e) => e.status === "Pending").length,
            suspended: employers.filter((e) => e.status === "Suspended").length,
        };
    }, [employers]);

    return (
        <div className="container-fluid p-0">
            {/* Page Title & Action Bar */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
                <div>
                    <h3 className="fw-bold text-dark mb-1">Employers Management</h3>
                    <p className="text-muted small mb-0">
                        Verify, monitor, and manage corporate employer accounts across the platform.
                    </p>
                </div>
                <button className="btn btn-primary d-inline-flex align-items-center gap-2 shadow-sm">
                    <FaPlus /> Add New Employer
                </button>
            </div>

            {/* Metrics Row */}
            <div className="row g-3 mb-4">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Total Accounts</span>
                                <h3 className="fw-bold text-dark m-0 mt-1">{counts.total}</h3>
                            </div>
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                <FaBuilding className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card border-0 shadow-sm p-3 bg-body rounded-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted small fw-semibold">Verified</span>
                                <h3 className="fw-bold text-success m-0 mt-1">{counts.verified}</h3>
                            </div>
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle text-success">
                                <FaCheckCircle className="fs-4" />
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
                                <FaHourglassHalf className="fs-4" />
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
                                <FaBan className="fs-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Table Card */}
            <div className="card border-0 shadow-sm bg-body">
                {/* Filter Toolbar Header */}
                <div className="card-header bg-transparent border-bottom py-3">
                    <div className="row g-3 justify-content-between align-items-center">
                        {/* Search Input */}
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="input-group input-group-sm">
                                <span className="input-group-text bg-body-tertiary text-muted border-end-0">
                                    <FaSearch />
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-start-0 bg-body-tertiary"
                                    placeholder="Search by company, contact, or email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Status Dropdown */}
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
                                <option value="verified">Verified</option>
                                <option value="pending">Pending</option>
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
                                <th scope="col" className="ps-4">Company Name</th>
                                <th scope="col">Contact Person</th>
                                <th scope="col">Location</th>
                                <th scope="col">Active Jobs</th>
                                <th scope="col">Status</th>
                                <th scope="col">Joined Date</th>
                                <th scope="col" className="text-end pe-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployers.length > 0 ? (
                                filteredEmployers.map((emp) => (
                                    <tr key={emp.id}>
                                        {/* Company */}
                                        <td className="ps-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div
                                                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                                    style={{ width: "38px", height: "38px", minWidth: "38px" }}
                                                >
                                                    {emp.companyName.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-dark">{emp.companyName}</div>
                                                    <small className="text-muted d-flex align-items-center gap-1">
                                                        <FaEnvelope className="fs-8" /> {emp.email}
                                                    </small>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Contact Person */}
                                        <td className="fw-semibold text-secondary">{emp.contactPerson}</td>

                                        {/* Location */}
                                        <td className="text-secondary small">{emp.location}</td>

                                        {/* Active Jobs Badge */}
                                        <td>
                                            <span className="badge bg-secondary-subtle text-secondary px-2 py-1 rounded-pill">
                                                {emp.activeJobs} Posted
                                            </span>
                                        </td>

                                        {/* Status Badge */}
                                        <td>
                                            <span
                                                className={`badge rounded-pill px-2.5 py-1.5 ${emp.status === "Verified"
                                                    ? "bg-success-subtle text-success border border-success-subtle"
                                                    : emp.status === "Pending"
                                                        ? "bg-warning-subtle text-warning-emphasis border border-warning-subtle"
                                                        : "bg-danger-subtle text-danger border border-danger-subtle"
                                                    }`}
                                            >
                                                {emp.status}
                                            </span>
                                        </td>

                                        {/* Joined Date */}
                                        <td className="text-muted small">{emp.joinedDate}</td>

                                        {/* Action Buttons */}
                                        <td className="text-end pe-4">
                                            <div className="btn-group btn-group-sm" role="group">
                                                {emp.status !== "Verified" && (
                                                    <button
                                                        className="btn btn-outline-success"
                                                        title="Verify Account"
                                                        onClick={() => handleVerify(emp.id)}
                                                    >
                                                        <FaCheckCircle /> Verify
                                                    </button>
                                                )}
                                                {emp.status !== "Suspended" && (
                                                    <button
                                                        className="btn btn-outline-warning text-dark"
                                                        title="Suspend Account"
                                                        onClick={() => handleSuspend(emp.id)}
                                                    >
                                                        <FaBan /> Suspend
                                                    </button>
                                                )}
                                                <button
                                                    className="btn btn-outline-danger"
                                                    title="Delete Account"
                                                    onClick={() => handleDelete(emp.id)}
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
                                            <FaBuilding className="fs-1 text-secondary opacity-50" />
                                        </div>
                                        <h6 className="fw-semibold mb-1">No Employers Found</h6>
                                        <p className="small mb-0">No accounts match your current search and filter criteria.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer with Summary Count */}
                <div className="card-footer bg-transparent border-top py-3 d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                        Showing <span className="fw-semibold text-dark">{filteredEmployers.length}</span> of{" "}
                        <span className="fw-semibold text-dark">{employers.length}</span> employer accounts
                    </small>
                </div>
            </div>
        </div>
    );
};

export default AdminEmployer;