import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"
import logo from "../assets/As.webp"

const Navbar = () => {
  return (
    <nav className="flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center">
            <a href="/" aria-label="Home">
                <img src={logo}  className="mx-2" width={80} height={50}
                 alt="logo" />
            </a>
        </div>

        <div className="m-8 flex items-center jutify-center gap-4 text-2xl" >
            <a href="www.linkedin.com/in/aditya-salkar-9587aa230"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                >
                <FaLinkedin />
            </a>

            <a href="https://github.com/AdityaSalkar18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                >
                <FaGithub />
            </a>

            <a href="https://www.instagram.com/aditya_salkar1806/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                >
                <FaInstagram />
            </a>

            <a href="mailto:adityasalkar1806@gmail.com"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Gmail">
   <FaEnvelope /> {/* This will display a Gmail-style envelope icon */}
</a>

        </div>
    </nav>
  )
}

export default Navbar