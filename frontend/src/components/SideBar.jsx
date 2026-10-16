import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const SideBar = ({ links = [], title = "Dashboard", onLogout }) => {
  // List of index portal root paths that require exact matching
  const rootPortalPaths = ["/admin", "/employer", "/job-seeker", "/job-seekers"];

  return (
    <div className="d-flex flex-column h-100 p-3 text-light">
      {/* Sidebar Header / Brand Title */}
      <div className="mb-4 pb-3 border-bottom border-secondary-subtle">
        <h5 className="fw-bold m-0 text-white text-truncate">{title}</h5>
      </div>

      {/* Navigation Links Group */}
      <nav className="d-flex flex-column gap-2 flex-grow-1">
        {links.map((link) => {
          // Check if link matches exact override or is a root portal path
          const isExact = link.exact ?? rootPortalPaths.includes(link.path);

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={isExact}
              className={({ isActive }) =>
                `text-decoration-none rounded-3 px-3 py-2 d-flex align-items-center gap-3 transition-all ${isActive ? "fw-semibold shadow-sm" : "opacity-75-hover"
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? "#2A3036" : "#FFFFFF",
                backgroundColor: isActive ? "#E5D3AF" : "transparent",
                transition: "all 0.2s ease-in-out",
              })}
            >
              {/* Link Icon */}
              {link.icon && (
                <span className="fs-5 d-flex align-items-center" aria-hidden="true">
                  {link.icon}
                </span>
              )}

              {/* Link Name */}
              <span className="fs-6 text-truncate">{link.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Reusable Footer / Logout Area */}
      <div className="pt-3 mt-auto border-top border-secondary-subtle">
        <button
          onClick={onLogout}
          className="btn text-white w-100 d-flex align-items-center gap-3 px-3 py-2 border-0 bg-transparent text-start opacity-75-hover"
          style={{ transition: "all 0.2s ease-in-out" }}
        >
          <FiLogOut className="fs-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;