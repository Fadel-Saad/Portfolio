import { FaRegEnvelope, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 items-center py-16 px-65">
      <aside className="flex flex-col text-xl ml-4">
        <div className="flex items-center gap-2">
          <FaRegEnvelope />
          <p>fadelsaad.dev@gmail.com</p>
        </div>
        <p>© {new Date().getFullYear()} Fadel Saad - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-5 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/fadel-saad-622684203/" target="_blank">
          <FaLinkedinIn size={36} />
        </a>
        <a href="https://github.com/Fadel-Saad" target="_blank">
          <FaGithub size={36} />
        </a>
        <a>
          <FaInstagram size={36} />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
