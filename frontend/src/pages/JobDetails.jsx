import { Link, useParams } from "react-router-dom"
import useFetch from "../hook/useFetch.js";
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";



const JobDetails = () => {

    const { id } = useParams();
    const { allData: job, error, loading } = useFetch(`http://localhost:4000/jobs/${id}`);


    return (
        <div>
            <div className="container mt-3">
                {loading && (
                    <div className="d-flex align-items-center gap-2 text-success fw-semibold">
                        <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <span>Loading job details, please wait...</span>
                    </div>
                )}
                {error &&  <div className="text-danger fw-bold"> { error } </div> }
                {job &&
                    <div className="row gap-4">
                        <div className="col-md-7">
                            <div className="card border-0 shadow-sm p-3">
                                <h4>
                                    {job.jobTitle}
                                </h4>
                                <h6 className="text-primary">
                                    {job.companyName}
                                </h6>
                                <span className="border-bottom my-2" />
                                <div className="d-flex justify-content-between">
                                    <span>
                                        <h6>Location</h6>
                                        <CiLocationOn /> {job.location}
                                    </span>
                                    <span>
                                        <h6>Employment Type</h6>
                                        <IoBriefcaseOutline /> {job.discretion}
                                    </span>
                                </div>
                                <h6 className="my-3"> Job Description</h6>
                                <p>
                                    {job.jobDescription}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <h5 className="p-2">
                                    Interested in this job?
                                </h5>
                                <small className="p-2 text-muted">
                                    Apply now and take next steps towards your career.
                                </small>
                                <Link className="btn btn-primary btn-sm">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default JobDetails;