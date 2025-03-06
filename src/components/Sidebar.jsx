/* eslint-disable react/prop-types */
import { IoMenu } from "react-icons/io5";

function Sidebar({ triggerSideBar, sbarActive }) {
  return (
    <div className="h-0 md:hidden">
      <button
        onClick={triggerSideBar}
        className="relative top-5 left-5 inline-block"
      >
        <IoMenu size={20} />
      </button>
    </div>
  );
}

export default Sidebar;
