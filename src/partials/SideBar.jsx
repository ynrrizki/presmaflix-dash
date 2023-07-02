import * as iconBs from "react-icons/bs";
import * as iconFa from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const route = {
  content: "/",
  video: "/video",
  login: "/login",
};

const SideBar = () => {
  let currentRoute = useLocation().pathname;
  return (
    <div
      className={`top-0 left-0 
        h-screen w-16 m-0 
        flex flex-col
        bg-primary text-white shadow-lg
        dark:bg-gray-900 dark:text-white
        `}
    >
      <SideBarIcon icon={<iconFa.FaFire size="28" />} text="Presmaflix" />
      <hr className="divider" />
      <SideBarIcon
        icon={<iconBs.BsFilm size="20" />}
        to={route.content}
        text="Content"
        currentRoute={currentRoute}
      />
      <SideBarIcon
        icon={<iconBs.BsPlayBtn size="20" />}
        to={route.video}
        text="Video"
        currentRoute={currentRoute}
      />
      <SideBarIcon
        icon={<iconFa.FaSignOutAlt size="20" />}
        to={route.login}
        currentRoute={currentRoute}
      />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡", to = "/", currentRoute }) => {
  const isActive = currentRoute === to;
  const sidebarIcon = isActive
    ? "sidebar-icon group active"
    : "sidebar-icon group";
  console.log(isActive);

  return (
    <Link to={to}>
      <div className={sidebarIcon}>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </Link>
  );
};

SideBarIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string,
  to: PropTypes.string,
  currentRoute: PropTypes.string,
};

export default SideBar;
