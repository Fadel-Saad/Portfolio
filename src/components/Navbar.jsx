function Navbar() {
  return (
    <nav className="hidden bg-base-100 fixed top-0 left-0 z-50 py-3 px-5 md:block w-full border-b border-b-base-200">
      <div className="sm:px-5 md:px-15 lg:px-25 xl:px-35 2xl:px-58 flex flex-row w-full justify-between items-center ">
        <a
          href="#Hero"
          className="font-bold w-50 text-center md:text-2xl lg:text-3xl xl:text-4xl"
        >
          Fadel Saad
        </a>
        <ul className="flex gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 items-center mr-18 md:text-2xl lg:text-3xl">
          <a
            href="#About"
            className="hover:underline hover:underline-offset-8 hover:decoration-secondary"
          >
            <li className="md:text-lg lg:text-2xl xl:text-3xl">About</li>
          </a>
          <span className="sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-primary rounded-full"></span>
          <a
            href="#Projects"
            className="hover:underline hover:underline-offset-8 hover:decoration-secondary"
          >
            <li className="md:text-lg lg:text-2xl xl:text-3xl">Projects</li>
          </a>
          <span className="sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-primary rounded-full"></span>
          <a
            href="#Skills"
            className="hover:underline hover:underline-offset-8 hover:decoration-secondary"
          >
            <li className="md:text-lg lg:text-2xl xl:text-3xl">Skills</li>
          </a>
          <span className="sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-primary rounded-full"></span>
          <a
            href="#Contact"
            className="hover:underline hover:underline-offset-8 hover:decoration-secondary"
          >
            <li className="md:text-lg lg:text-2xl xl:text-3xl">Contact</li>
          </a>
        </ul>
        {/* Theme Selector */}
        <div className="dropdown  py-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-2xl p-6 m-1"
          >
            Theme
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                aria-label="Dark"
                value="dark"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                aria-label="Halloween"
                value="halloween"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                aria-label="Emerald"
                value="emerald"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                aria-label="Aqua"
                value="aqua"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                aria-label="Valentine"
                value="valentine"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                aria-label="Abyss"
                value="abyss"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
