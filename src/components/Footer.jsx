import { FaRegEnvelope, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex flex-col-reverse lg:flex-row justify-between lg:footer-horizontal w-full bg-base-200 items-center py-8 lg:py-12 px-0 lg:px-45 2xl:px-65">
      <aside className="flex flex-col items-center lg:items-baseline text-sm lg:text-xl">
        <div className="flex items-center gap-2">
          <FaRegEnvelope />
          <p>fadelsaad.dev@gmail.com</p>
        </div>
        <p>© {new Date().getFullYear()} Fadel Saad - All right reserved</p>
      </aside>
      {/* desktop view logos */}
      <nav className="hidden lg:flex gap-5 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/fadel-saad-622684203/" target="_blank">
          <FaLinkedinIn size={30} />
        </a>
        <a href="https://github.com/Fadel-Saad" target="_blank">
          <FaGithub size={30} />
        </a>
        <a>
          <FaInstagram size={30} />
        </a>
      </nav>
      {/* mobile view logos */}
      <nav className="flex lg:hidden gap-5 md:place-self-center md:justify-self-end mb-4 lg:mb-0">
        <a href="https://www.linkedin.com/in/fadel-saad-622684203/" target="_blank">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://github.com/Fadel-Saad" target="_blank">
          <FaGithub size={20} />
        </a>
        <a>
          <FaInstagram size={20} />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
