import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const About = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-6">
                        <span className="badge rounded-pill  text-bg-dark p-3 my-3">
                            About Us
                        </span>
                        <h2>
                            About skill<span className="text-primary">Bridge</span>
                        </h2>
                        <p className="text-muted mb-3 p-2">
                            Welcome to SkillBridge, your trusted partner in navigating the modern
                            employment landscape. Inspired by the efficiency of top job boards
                            like MyJobMag, our platform is designed to seamlessly connect talented
                            job seekers with verified employment opportunities. We understand that
                            finding the right job or the perfect candidate can be overwhelming,
                            which is why we have streamlined the recruitment process into a fast,
                            reliable, and user-friendly experience.
                        </p>
                        <Link 
                            className="btn rounded-pill text-bg-primary "
                            to="/signup"
                            >
                            Get Started <span className="ms-2"> <FaArrowRight /> </span>
                        </Link>
                        <div className="border border-bottom my-3 border-1" />
                        <div className="d-flex justify-content-around">
                            <div>
                                <h3>
                                    95%
                                </h3>
                                <p>
                                    Of our applicants are <br /> able to land well paying jobs
                                </p>
                            </div>
                            <div>
                                <h3>
                                    350+
                                </h3>
                                <p>
                                    Companies that are verified on our <br /> platform to reduce risk of fraud
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="images/about-us.jpg"
                            alt="about skill bridge"
                            className="rounded-4"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </div>
                {/* Second section of about page */}
                <div className="my-3">
                    <div
                        className="card border-0 shadow-sm p-4 text-light"
                        style={{
                            backgroundColor: "#3B7597"
                        }}
                    >
                        <h2>
                            Our Promise
                        </h2>
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Employers</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore iste eum vel expedita ut non placeat, similique pariatur impedit.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h5>Job Seekers</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore iste eum vel expedita ut non placeat, similique pariatur impedit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;