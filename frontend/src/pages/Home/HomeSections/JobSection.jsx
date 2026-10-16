import JobCards from "../../../components/JobCards";
import useFetch from "../../../hook/useFetch";

const JobSection = () => {

    const { loading, error, allData: jobs } = useFetch("http://localhost:4000/jobs");

    return (
        <div>
            <div className="container my-2">
                <h4 className="text-center mb-2">
                    Latest <span className="border-bottom border-3 border-primary p-1">Job</span> Vacancies
                </h4>
                <p className="text-muted text-center">
                    We have a wide range of jobs, click on one to apply.
                </p>
                {error && <div className="text-danger"> {error} </div>}
                {loading && (
                    <div className="d-flex align-items-center gap-2 text-success fw-semibold">
                        <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <span>Loading Jobs, Please wait...</span>
                    </div>
                )}
                {jobs && <JobCards allJobs={jobs.filter(job => job.discretion === "contract")} />}
            </div>
        </div>
    );
}

export default JobSection;