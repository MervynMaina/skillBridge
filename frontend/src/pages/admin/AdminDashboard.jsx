import { Link } from "react-router-dom";
import { FaUsers, FaBriefcase, FaBuilding, FaFileAlt, FaArrowUp, FaPlus } from "react-icons/fa";

const AdminDashboard = () => {
    // Stat Card Metrics Data
    const stats = [
        {
            title: "Total Employers",
            count: "128",
            growth: "+12% this month",
            icon: <FaBuilding className="text-primary fs-3" />,
            bgColor: "bg-primary-subtle",
            link: "/admin/employers",
        },
        {
            title: "Job Seekers",
            count: "1,450",
            growth: "+18% this month",
            icon: <FaUsers className="text-success fs-3" />,
            bgColor: "bg-success-subtle",
            link: "/admin/job-seekers",
        },
        {
            title: "Active Jobs",
            count: "312",
            growth: "+5% this week",
            icon: <FaBriefcase className="text-warning fs-3" />,
            bgColor: "bg-warning-subtle",
            link: "/admin/jobs",
        },
        {
            title: "Applications",
            count: "4,890",
            growth: "+24% this month",
            icon: <FaFileAlt className="text-info fs-3" />,
            bgColor: "bg-info-subtle",
            link: "/admin/jobs",
        },
    ];

    // Sample Recent Activity / Applications Data
    const recentActivities = [
        {
            id: 1,
            applicant: "Jane Doe",
            jobTitle: "Senior Python Developer",
            company: "TechCorp Kenya",
            status: "Applied",
            date: "2 mins ago",
        },
        {
            id: 2,
            applicant: "John Smith",
            jobTitle: "Android Developer (Kotlin)",
            company: "Logistics Hub",
            status: "Under Review",
            date: "15 mins ago",
        },
        {
            id: 3,
            applicant: "Mercy Wanjiku",
            jobTitle: "UI/UX Designer",
            company: "Fintech Ltd",
            status: "Shortlisted",
            date: "1 hour ago",
        },
    ];

    return (
        <div className="container-fluid p-0">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold text-dark mb-1">Admin Dashboard Overview</h3>
                    <p className="text-muted mb-0">Welcome back! Here is what's happening today.</p>
                </div>
                <Link to="/admin/jobs" className="btn btn-primary d-flex align-items-center gap-2 shadow-sm">
                    <FaPlus /> Post / Manage Jobs
                </Link>
            </div>

            {/* Metrics Cards Grid */}
            <div className="row g-3 mb-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="col-12 col-sm-6 col-xl-3">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-3">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className={`p-3 rounded-3 ${stat.bgColor}`}>{stat.icon}</div>
                                    <span className="badge bg-success-subtle text-success d-flex align-items-center gap-1 fs-6">
                                        <FaArrowUp style={{ fontSize: "0.75rem" }} /> {stat.growth}
                                    </span>
                                </div>
                                <h6 className="text-muted fw-normal mb-1">{stat.title}</h6>
                                <h2 className="fw-bold text-dark mb-2">{stat.count}</h2>
                                <Link to={stat.link} className="text-decoration-none small text-primary fw-semibold">
                                    View details &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid: Recent Activity Table & Quick Info */}
            <div className="row g-3">
                {/* Recent Applications / Activity */}
                <div className="col-12 col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold mb-0 text-dark">Recent Job Applications</h5>
                            <Link to="/admin/jobs" className="btn btn-sm btn-outline-primary">
                                View All
                            </Link>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Applicant</th>
                                        <th>Job Title</th>
                                        <th>Company</th>
                                        <th>Status</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentActivities.map((act) => (
                                        <tr key={act.id}>
                                            <td className="fw-semibold text-dark">{act.applicant}</td>
                                            <td>{act.jobTitle}</td>
                                            <td>{act.company}</td>
                                            <td>
                                                <span
                                                    className={`badge ${act.status === "Shortlisted"
                                                        ? "bg-success"
                                                        : act.status === "Under Review"
                                                            ? "bg-warning text-dark"
                                                            : "bg-secondary"
                                                        }`}
                                                >
                                                    {act.status}
                                                </span>
                                            </td>
                                            <td className="text-muted small">{act.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* System Summary / Quick Actions Sidebar */}
                <div className="col-12 col-lg-4">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-white border-0 py-3">
                            <h5 className="fw-bold mb-0 text-dark">Quick Management</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-grid gap-2">
                                <Link to="/admin/employers" className="btn btn-outline-dark text-start p-3 rounded-3 d-flex justify-content-between align-items-center">
                                    <span>Verify New Employers</span>
                                    <span className="badge bg-danger rounded-pill">3 Pending</span>
                                </Link>
                                <Link to="/admin/jobs" className="btn btn-outline-dark text-start p-3 rounded-3 d-flex justify-content-between align-items-center">
                                    <span>Pending Job Approvals</span>
                                    <span className="badge bg-warning text-dark rounded-pill">7 Jobs</span>
                                </Link>
                                <Link to="/admin/settings" className="btn btn-outline-dark text-start p-3 rounded-3 d-flex justify-content-between align-items-center">
                                    <span>System Configuration</span>
                                    <span className="text-muted">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;