
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !message) {
            toast.error("Please fill in all the fields");
            return;
        }

        const messages = {
            name,
            email,
            phone,
            message
        };

        setLoading(true);

        fetch("http://localhost:4000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messages)
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error("Cannot submit the message");
                }

                return response.json();
            })
            .then(() => {
                toast.success("Message submitted successfully");

                setName("");
                setEmail("");
                setPhone("");
                setMessage("");

                navigate("/");
            })
            .catch((err) => {
                toast.error(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="container my-5">

            {/* Page Heading */}
            <div className="text-center mb-5">
                <h2 className="fw-bold">
                    Get In Touch
                </h2>

                <p className="text-muted">
                    Have a question or need assistance? Send us a message
                    and our team will get back to you.
                </p>
            </div>

            {/* Contact Information */}
            <div className="row g-4 mb-4">

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm h-100 p-4 text-center">
                        <h5 className="fw-bold">
                            Our Office
                        </h5>

                        <p className="text-muted">
                            Visit our office and speak with our team
                            about how SkillBridge can help you.
                        </p>

                        <p className="fw-semibold mb-0">
                            Westlands, Mpaka Road
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm h-100 p-4 text-center">
                        <h5 className="fw-bold">
                            Call Us
                        </h5>

                        <p className="text-muted">
                            Have an urgent question? Give us a call
                            and we will be happy to assist.
                        </p>

                        <p className="fw-semibold mb-0">
                            +254 799 737 826
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm h-100 p-4 text-center">
                        <h5 className="fw-bold">
                            Email Us
                        </h5>

                        <p className="text-muted">
                            Send us an email and our team will respond
                            as soon as possible.
                        </p>

                        <p className="fw-semibold mb-0">
                            info@skillbridge.co.ke
                        </p>
                    </div>
                </div>

            </div>

            {/* Contact Form */}
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-7">

                    <div className="card border-0 shadow-sm p-4 p-lg-5">

                        <div className="text-center mb-4">
                            <h4 className="fw-bold">
                                Send Us a Message
                            </h4>

                            <p className="text-muted">
                                Fill in the form below and we'll get back to you.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>

                            {/* Name */}
                            <div className="mb-3">
                                <label
                                    htmlFor="name"
                                    className="form-label"
                                >
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    placeholder="e.g. James Thornhill"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className="form-label"
                                >
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="e.g. james@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Phone */}
                            <div className="mb-3">
                                <label
                                    htmlFor="phone"
                                    className="form-label"
                                >
                                    Your Phone
                                </label>

                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-control"
                                    placeholder="e.g. +254720900000"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-3">
                                <label
                                    htmlFor="message"
                                    className="form-label"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id="message"
                                    className="form-control"
                                    placeholder="Write your message here..."
                                    style={{ height: "120px" }}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;
