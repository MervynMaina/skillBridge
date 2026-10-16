
const HeroSection = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <h1 className="display-4">
                            Shaping your <br /> future with the best <br /> recruitment.
                        </h1>

                        <p className="fs-5 text-muted">
                            Growth and success go hand in hand. We will help you with it. <br />
                            Focus on getting your dream job.
                        </p>

                        <form>
                            <div
                                className="input-group input-group-sm"
                                style={{ width: "50%" }}
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Leave us your email"
                                />

                                <button className="btn btn-primary">
                                    Get Notification
                                </button>
                            </div>
                        </form>

                        <div className="my-3">
                            <h6 className="me-1">
                                <i className="text-primary bi bi-check-circle-fill me-2"></i>
                                <span className="ms-1">
                                    Update Everyday
                                </span>
                            </h6>

                            <h6>
                                <i className="text-primary bi bi-check-circle-fill me-2"></i>
                                <span className="ms-1">
                                    Easy Application From The Email
                                </span>
                            </h6>

                            <h6 className="me-1">
                                <i className="text-primary bi bi-check-circle-fill me-2"></i>
                                <span className="ms-1">
                                    Land your dream job
                                </span>
                            </h6>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-md-6">
                        <img 
                        src="images/HeroSection.jpg" 
                        alt="job-search-image" 
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover"
                        }}
                        className="rounded-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
