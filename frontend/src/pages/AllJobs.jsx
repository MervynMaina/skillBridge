import { useState } from "react";
import JobCards from "../components/JobCards";
import useFetch from "../hook/useFetch";

const AllJobs = () => {

    const { allData: jobs, loading, error } = useFetch(
        "http://localhost:4000/jobs"
    );

    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Number of jobs to display on each page
    const jobsPerPage = 6;

    // Filter jobs
    const filteredJobs = jobs.filter((job) => {

        const searchMatch =
            job.companyName.toLowerCase().includes(search.toLowerCase()) ||
            job.jobTitle.toLowerCase().includes(search.toLowerCase());

        const locationMatch =
            job.location.toLowerCase().includes(location.toLowerCase());
        return searchMatch && locationMatch;
    });

    // Calculate indexes for pagination
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    console.log(indexOfFirstJob)
    console.log(indexOfLastJob)

    // Get only the jobs for the current page
    const currentJobs = filteredJobs.slice(
        indexOfFirstJob,
        indexOfLastJob
    );

    // Calculate total number of pages
    const totalPages = Math.ceil(
        filteredJobs.length / jobsPerPage
    );

    // Go to next page
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Go to previous page
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>

            <div className="container my-3">

                <div className="row">

                    {/* Search Section */}
                    <div className="col-md-4">

                        <h5>
                            Search through our job list.
                        </h5>

                        <div className="card border-0 shadow-sm p-4">

                            <form>

                                <div className="mb-3">

                                    <label htmlFor="company-name">
                                        Search by job-title or Company name
                                    </label>

                                    <input
                                        id="company-name"
                                        type="text"
                                        placeholder="e.g Developer or Safaricom"
                                        className="form-control my-2"
                                        value={search}
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label htmlFor="company-location">
                                        Search by Company Location
                                    </label>

                                    <input
                                        id="company-location"
                                        type="text"
                                        placeholder="e.g Waiyaki Way"
                                        className="form-control my-2"
                                        value={location}
                                        onChange={(e) => {
                                            setLocation(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                    />

                                </div>

                            </form>

                        </div>

                    </div>

                    {/* Jobs Section */}
                    <div className="col-md-8">

                        <h6 className="text-primary">
                            {filteredJobs.length} job(s) found
                        </h6>

                        {loading && (
                            <div className="text-success fw-bold">
                                Loading jobs . . .
                            </div>
                        )}

                        {error && (
                            <div className="text-danger fw-bold">
                                {error}
                            </div>
                        )}

                        {/* Display only 6 jobs */}
                        <JobCards allJobs={currentJobs} />

                        {/* No jobs message */}
                        {!loading &&
                            !error &&
                            filteredJobs.length === 0 && (
                                <div className="text-center p-4">

                                    <h3 className="fw-semibold">
                                        No jobs found
                                    </h3>

                                    <p className="text-muted">
                                        Try adjusting your search or
                                        filter criteria to find what
                                        you're looking for.
                                    </p>

                                </div>
                            )}

                        {/* Pagination */}
                        {!loading &&
                            !error &&
                            totalPages > 1 && (

                                <div className="d-flex justify-content-center align-items-center gap-3 my-4">

                                    <button
                                        className="btn btn-primary"
                                        onClick={previousPage}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>

                                    <span className="fw-semibold">
                                        Page {currentPage} of {totalPages}
                                    </span>

                                    <button
                                        className="btn btn-primary"
                                        onClick={nextPage}
                                        disabled={
                                            currentPage === totalPages
                                        }
                                    >
                                        Next
                                    </button>

                                </div>

                            )}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AllJobs;