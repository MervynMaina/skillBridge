
const Footer = () => {
    return (
        <footer className="bg-dark text-light mt-5">

            <div className="container py-5">
                <div className="row g-4">

                    {/* Brand */}
                    <div className="col-lg-4 col-md-6">
                        <h4 className="fw-bold mb-3">
                            skill<span className="text-primary">Bridge</span>
                        </h4>

                        <p className="text-secondary pe-lg-5">
                            Connecting talented people with the right
                            opportunities and helping businesses build
                            exceptional teams.
                        </p>

                        {/* Social Media */}
                        <div className="d-flex gap-3 mt-4">

                            <a
                                href="#"
                                className="text-light fs-5"
                                aria-label="LinkedIn"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>

                            <a
                                href="#"
                                className="text-light fs-5"
                                aria-label="Twitter"
                            >
                                <i className="bi bi-twitter-x"></i>
                            </a>

                            <a
                                href="#"
                                className="text-light fs-5"
                                aria-label="Facebook"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a
                                href="#"
                                className="text-light fs-5"
                                aria-label="Instagram"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>

                        </div>
                    </div>


                    {/* Product */}
                    <div className="col-6 col-lg-2 col-md-3">
                        <h6 className="fw-bold mb-3">Product</h6>

                        <ul className="list-unstyled">

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-search me-2"></i>
                                    Browse Jobs
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-rocket-takeoff me-2"></i>
                                    Startup Jobs
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-globe2 me-2"></i>
                                    Remote Jobs
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-plus-circle me-2"></i>
                                    Post a Job
                                </a>
                            </li>

                        </ul>
                    </div>


                    {/* Resources */}
                    <div className="col-6 col-lg-2 col-md-3">
                        <h6 className="fw-bold mb-3">Resources</h6>

                        <ul className="list-unstyled">

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-question-circle me-2"></i>
                                    FAQ
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-headset me-2"></i>
                                    Support
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-shield-check me-2"></i>
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-file-earmark-text me-2"></i>
                                    Terms & Conditions
                                </a>
                            </li>

                        </ul>
                    </div>


                    {/* Company */}
                    <div className="col-6 col-lg-2 col-md-3">
                        <h6 className="fw-bold mb-3">Company</h6>

                        <ul className="list-unstyled">

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-info-circle me-2"></i>
                                    About Us
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-envelope me-2"></i>
                                    Contact Us
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-briefcase me-2"></i>
                                    Careers
                                </a>
                            </li>

                        </ul>
                    </div>


                    {/* Employers */}
                    <div className="col-6 col-lg-2 col-md-3">
                        <h6 className="fw-bold mb-3">For Employers</h6>

                        <ul className="list-unstyled">

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-megaphone me-2"></i>
                                    Post a Job
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-people me-2"></i>
                                    Find Talent
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-secondary text-decoration-none">
                                    <i className="bi bi-speedometer2 me-2"></i>
                                    Employer Dashboard
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>


                {/* Divider */}
                <hr className="border-secondary my-4" />


                {/* Bottom Footer */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

                    <p className="text-secondary mb-0 small">
                        © {new Date().getFullYear()} skillBridge. All rights reserved.
                    </p>

                    <div className="d-flex gap-3">

                        <a
                            href="#"
                            className="text-secondary text-decoration-none small"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="text-secondary text-decoration-none small"
                        >
                            Terms
                        </a>

                        <a
                            href="#"
                            className="text-secondary text-decoration-none small"
                        >
                            Cookies
                        </a>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;