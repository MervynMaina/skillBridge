import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home/Home"
import { Route, Routes } from "react-router-dom"
import AllJobs from "./pages/AllJobs"
import About from "./pages/AboutUs"
import Contact from "./pages/ContactUs"
import JobDetails from "./pages/JobDetails"
import { Toaster } from "react-hot-toast"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import JobSeeker from "./pages/auth/signup/JobSeeker"
import EmployerSignup from "./pages/auth/signup/Employer"
import PublicLayout from "./layout/Public.jsx"
import AdminLayout from "./layout/AdminLayout.jsx"
import AdminDashboard from "./pages/admin/AdminDashboard.jsx"
import AdminEmployer from "./pages/admin/AdminEmployer.jsx"
import AdminSettings from "./pages/admin/AdminSettings.jsx"
import AdminJobSeeker from "./pages/admin/AdminJobSeekers.jsx"
import AdminJobs from "./pages/admin/AdminJobs.jsx"
import EmployerLayout from "./layout/EmployerLayout.jsx"
import EmployerDashboard from "./pages/employer/EmployerDashboard.jsx"
import Applicants from "./pages/employer/Applicants.jsx"
import JobPost from "./pages/employer/JobPost.jsx"
import EmployerSettings from "./pages/employer/EmployerSettings.jsx"
import JobSeekerLayout from "./layout/JobSeekerLayout.jsx"
import JobSeekerDashboard from "./pages/jobseeker/JobSeekerDashboard.jsx"
import AppliedJobs from "./pages/jobseeker/AppliedJobs.jsx"
import SkillsPage from "./pages/jobseeker/SkillsPage.jsx"
import JobSeekerSettings from "./pages/jobseeker/SeekerSetting.jsx"
import HelpSection from "./pages/jobseeker/HelpSection.jsx"

function App() {

  return (
    <div>
      <Toaster />

      <Routes>
        <Route element={<PublicLayout />} >
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/job-details/:id" element={<JobDetails />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/job-seekers" element={<JobSeeker />} />
          <Route path="/employers" element={<EmployerSignup />} />
        </Route>


        {/* Admin route */}
        <Route path="/admin" element={<AdminLayout />} >
          <Route index element={<AdminDashboard />} />
          <Route path="job-seekers" element={<AdminJobSeeker />} />
          <Route path="employers" element={<AdminEmployer />} />
          <Route path="jobs" element={<AdminJobs />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Employer Routes */}
        <Route path="/employer" element={<EmployerLayout />}>
          <Route index element={<EmployerDashboard />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="create-job" element={<JobPost />} />
          <Route path="settings" element={<EmployerSettings />} />
        </Route>
        {/* Job seekers routes */}
        <Route path="/job-seeker" element={<JobSeekerLayout />}>
          <Route index element={<JobSeekerDashboard />} />
          <Route path="applications" element={<AppliedJobs />} />
          <Route path="settings" element={<JobSeekerSettings />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="help" element={<HelpSection />} />
        </Route>
      </Routes>


    </div>
  )
}

export default App
