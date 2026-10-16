import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const JobCards = ({ allJobs }) => {
    return (
        <div>
            <div className="row mt-2">
                {
                    allJobs.map((job) => (
                        <div className=" col-lg-5 mb-4" key={job.id}>
                            <div className="card h-100 border-0 shadow-sm rounded-4 p-3">

                                {/* Job Title + Type */}
                                <div className="d-flex justify-content-between mb-2">
                                    <h5 className="fw-bold mb-0 text-dark">
                                        {job.jobTitle}
                                    </h5>

                                    <span className="fw-bold text-danger">
                                        {job.discretion}
                                    </span>
                                </div>

                                {/* Location */}
                                <p className="text-muted mb-2">
                                    <CiLocationOn className="me-1" />
                                    {job.location}
                                </p>

                                {/* Company */}
                                <h6 className="text-primary fw-semibold mb-3">
                                    {job.companyName}
                                </h6>

                                {/* Description */}
                                <p className="text-muted small">
                                    {job.jobDescription?.slice(0, 100)}...
                                </p>

                                {/* Footer */}
                                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                                    <small className="text-muted">
                                        View opportunity
                                    </small>

                                    <Link 
                                    className="btn btn-primary btn-sm rounded-pill px-3"
                                    to={`/job-details/${job.id}`}
                                    >
                                        More Details
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default JobCards;