import { useState } from "react";
import { toast } from "react-hot-toast";
import {
    FaSearch,
    FaQuestionCircle,
    FaEnvelope,
    FaPaperPlane,
    FaFileAlt,
    FaUserCheck,
    FaBriefcase,
    FaShieldAlt,
} from "react-icons/fa";

const HelpSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [contactForm, setContactForm] = useState({
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    // FAQ Categories and Data
    const faqs = [
        {
            id: "faq-1",
            category: "Applications",
            icon: <FaBriefcase className="text-primary" />,
            question: "How do I track the status of my submitted application?",
            answer:
                "You can view real-time updates for all submitted job applications under the 'Applied Jobs' tab in your candidate portal. Statuses update automatically when employers review or shortlist your profile.",
        },
        {
            id: "faq-2",
            category: "Profile & Resume",
            icon: <FaFileAlt className="text-success" />,
            question: "What format should my uploaded resume CV be in?",
            answer:
                "SkillBridge supports PDF format up to 5MB. Make sure your contact details and key tech stack skills match what is listed in your profile settings.",
        },
        {
            id: "faq-3",
            category: "Employer Contact",
            icon: <FaUserCheck className="text-warning" />,
            question: "Can employers see my contact details directly?",
            answer:
                "Your basic profile, tech stack skills, and resume are visible to verified employers when you apply for a job or when your job search status is set to 'Actively Looking'.",
        },
        {
            id: "faq-4",
            category: "Account & Privacy",
            icon: <FaShieldAlt className="text-danger" />,
            question: "How do I change my job search availability?",
            answer:
                "Navigate to 'Settings' > 'Personal Credentials' and update your Job Search Availability dropdown status (Actively Looking, Open to Offers, or Not Available).",
        },
    ];

    // Search Filter for FAQs
    const filteredFaqs = faqs.filter(
        (item) =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Support Form Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!contactForm.subject || !contactForm.message) {
            toast.error("Please fill in both the subject and your message.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setContactForm({ subject: "", message: "" });
            toast.success("Support ticket submitted! Our team will respond via email shortly.");
        }, 800);
    };

    return (
        <div className="container-fluid p-0">
            {/* Title Header */}
            <div className="mb-4">
                <h3 className="fw-bold text-dark mb-1">Help & Support Center</h3>
                <p className="text-muted small mb-0">
                    Find answers to common questions about your job search or contact SkillBridge platform support.
                </p>
            </div>

            {/* Search Filter Header */}
            <div className="card border-0 shadow-sm p-4 bg-body rounded-3 mb-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                        <h5 className="fw-bold text-dark mb-2">How can we help you today?</h5>
                        <p className="text-muted small mb-3">
                            Search topics, application guides, or troubleshooting steps.
                        </p>

                        <div className="input-group">
                            <span className="input-group-text bg-body-tertiary border-end-0 text-muted">
                                <FaSearch />
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0 bg-body-tertiary"
                                placeholder="Search FAQs (e.g. tracking, resume, privacy)..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                {/* Accordion List for FAQs */}
                <div className="col-12 col-lg-7">
                    <div className="card border-0 shadow-sm bg-body p-4 rounded-3 h-100">
                        <h5 className="fw-semibold text-dark d-flex align-items-center gap-2 mb-3">
                            <FaQuestionCircle className="text-primary" /> Frequently Asked Questions
                        </h5>

                        {filteredFaqs.length > 0 ? (
                            <div className="accordion accordion-flush" id="faqAccordion">
                                {filteredFaqs.map((faq, index) => (
                                    <div key={faq.id} className="accordion-item border-bottom">
                                        <h2 className="accordion-header" id={`heading-${faq.id}`}>
                                            <button
                                                className={`accordion-button ${index !== 0 ? "collapsed" : ""} fw-semibold text-dark`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse-${faq.id}`}
                                                aria-expanded={index === 0 ? "true" : "false"}
                                                aria-controls={`collapse-${faq.id}`}
                                            >
                                                <span className="me-2">{faq.icon}</span>
                                                {faq.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse-${faq.id}`}
                                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                            aria-labelledby={`heading-${faq.id}`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body text-secondary small leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-5 text-muted">
                                <p className="mb-0">No matching help articles found for "{searchTerm}".</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact Support Direct Inquiry */}
                <div className="col-12 col-lg-5">
                    <div className="card border-0 shadow-sm bg-body p-4 rounded-3 h-100">
                        <h5 className="fw-semibold text-dark d-flex align-items-center gap-2 mb-2">
                            <FaEnvelope className="text-primary" /> Direct Support Ticket
                        </h5>
                        <p className="text-muted small mb-3">
                            Can't find what you're looking for? Send a query directly to our support desk.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Subject / Issue Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. Issue downloading application resume"
                                    value={contactForm.subject}
                                    onChange={(e) =>
                                        setContactForm((prev) => ({ ...prev, subject: e.target.value }))
                                    }
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Message Description</label>
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Provide brief details about what you need assistance with..."
                                    value={contactForm.message}
                                    onChange={(e) =>
                                        setContactForm((prev) => ({ ...prev, message: e.target.value }))
                                    }
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn text-white w-100 py-2 d-inline-flex align-items-center justify-content-center gap-2 shadow-sm"
                                style={{ backgroundColor: "#1E293B" }}
                            >
                                <FaPaperPlane />
                                <span>{loading ? "Submitting..." : "Send Ticket"}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSection;