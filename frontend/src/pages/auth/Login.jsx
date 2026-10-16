
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-8">
                    <div className="card border-0 shadow-sm overflow-hidden">
                        <div className="row g-0">

                            {/* Left Side */}
                            <div className="col-md-6 bg-primary text-white d-flex align-items-center">
                                <div className="p-4 p-lg-5">
                                    <h2 className="fw-bold mb-3">
                                        Welcome Back!
                                    </h2>

                                    <p className="mb-0">
                                        Login to your SkillBridge account and
                                        continue exploring opportunities,
                                        managing jobs, and connecting with
                                        employers.
                                    </p>
                                </div>
                            </div>

                            {/* Login Form */}
                            <div className="col-md-6 p-4 p-lg-5">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold">Login</h3>
                                    <p className="text-muted mb-0">
                                        Enter your details to continue
                                    </p>
                                </div>

                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="e.g. james@gmail.com"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="text-end mb-3">
                                        <Link
                                            to="/forgot-password"
                                            className="text-decoration-none small"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Login
                                    </button>

                                    <div className="text-center mt-4">
                                        <span className="text-muted">
                                            Don't have an account?
                                        </span>

                                        <Link
                                            to="/signup"
                                            className="ms-2 text-decoration-none fw-semibold"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;