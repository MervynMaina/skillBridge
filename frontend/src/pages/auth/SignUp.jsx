
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">

                    {/* Heading */}
                    <div className="text-center mb-4">
                        <h2 className="fw-bold">Create Your Account</h2>
                        <p className="text-muted">
                            Choose how you want to use SkillBridge
                        </p>
                    </div>

                    <div className="row g-4">

                        {/* Job Seeker */}
                        <div className="col-md-6 ">
                            <div className="card  border-0 shadow-sm h-100 p-4">

                                <h4 className="fw-bold">
                                    Find Your Next Opportunity
                                </h4>

                                <p className="text-muted">
                                    Apply for exclusive jobs on SkillBridge,
                                    build your profile, and get discovered by
                                    employers looking for talented candidates.
                                </p>

                                <p className="text-muted">
                                    Use our AI assistant to understand how well
                                    you qualify for different job opportunities.
                                </p>

                                <Link
                                    className="btn btn-outline-primary mt-auto"
                                    to="/job-seekers"
                                >
                                    Register as Job Seeker
                                </Link>
                            </div>
                        </div>

                        {/* Employer */}
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm h-100 p-4">

                                <h4 className="fw-bold">
                                    Find the Right Talent
                                </h4>

                                <p className="text-muted">
                                    Hire talented candidates for your open
                                    positions on SkillBridge and grow your
                                    organization with the right people.
                                </p>

                                <p className="text-muted">
                                    Register, post jobs, and explore candidate
                                    profiles to find the perfect match.
                                </p>

                                <Link
                                    className="btn btn-outline-dark mt-auto"
                                    to="/employers"
                                >
                                    Register as Employer
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Login */}
                    <div className="text-center mt-5">
                        <p className="text-muted mb-2">
                            Already have an account?
                        </p>

                        <Link
                            className="btn btn-primary px-4"
                            to="/login"
                        >
                            Login
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;