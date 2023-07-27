// TODO
'use client'
import { links } from './data';
import Image from 'next/image';
import Link from 'next/link';
import "../src/styles/scss/navbar.scss"

const toggleMenu = () => {
  if(process.browser){ 
    const menuToggle = document.getElementById("isToggle");
    menuToggle?.classList.toggle("open");
      var isOpen = document.getElementById("navigation");
      if (isOpen?.style.display === "block") {
          isOpen.style.display = "none";
      } else if (isOpen?.style.display === "none"){
          isOpen.style.display = "block";
      }
  }
}

const Navbar = () => {

  return (
    <nav id="topnav" className="defaultscroll is-sticky nav-sticky">
      <div className="container">
        <a className="logo" href="/">
          <Image
            src="/assets/logos/logo-light-mode.png"
            className="inline-block dark:hidden"
            alt="Electrium Mobility Logo"
            width={180}
            height={50}
          />
          <Image
            src="/assets/logos/logo-dark-mode.png"
            className="hidden dark:inline-block"
            alt="Electrium Mobility Logo"
            width={180}
            height={50}
          />
        </a>
        <div className="menu-extras">
          <div className="menu-item">
            <a
              className="navbar-toggle"
              id="isToggle"
              onClick={toggleMenu}
            >
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </a>
          </div>
        </div>
        <ul className="buy-button list-none mb-0">
          <li className="inline mb-0">
            <a
              href=""
              className="btn btn-icon rounded-full bg-green-600/5 hover:bg-green-600 border-green-600/10 hover:border-green-600 text-green-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-dollar-sign h-4 w-4"
              >
                <line x1={12} y1={1} x2={12} y2={23} />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </a>
          </li>
          <li className="inline mb-0">
            <a
              href="https://www.youtube.com/@electriummobility"
              target="_blank"
              className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-youtube h-4 w-4"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </li>
          <li className="inline mb-0">
            <a
              href="https://www.instagram.com/electriummobility/"
              target="_blank"
              className="btn btn-icon rounded-full bg-pink-600/5 hover:bg-pink-600 border-pink-600/10 hover:border-pink-600 text-pink-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram h-4 w-4"
              >
                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </li>
          <li className="inline mb-0">
            <a
              href="https://discord.gg/jggFVza4XR"
              target="_blank"
              className="btn btn-icon rounded-full bg-purple-500/5 hover:bg-purple-500 border-purple-500/10 hover:border-purple-500 text-purple-500 hover:text-white"
            >
              <svg
                className="h-4 w-4"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Discord</title>
                <path
                  fill="currentColor"
                  d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                />
              </svg>
            </a>
          </li>
          <li className="inline mb-0">
            <a
              href="http://www.linkedin.com/company/electrium-mobility/"
              target="_blank"
              className="btn btn-icon rounded-full bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin h-4 w-4"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x={2} y={9} width={4} height={12} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </li>
          <li className="inline mb-0">
            <a
              href="mailto:electriummobility@gmail.com"
              target="_blank"
              className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail h-4 w-4"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </li>
        </ul>
        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <a href="about" className="">
                About
              </a>
            </li>
            <li>
              <Link href="team">Team</Link>
            </li>
            <li>
              <a href="sponsors" className="">
                Sponsors
              </a>
            </li>
            <li className="has-submenu parent-menu-item">
              <a href="projects">Projects</a>
              <span className="menu-arrow" />
              <ul className="submenu">
                <li>
                  <a href="documentation-electric-bike" className="">
                    Electric Bike
                  </a>
                </li>
                <li>
                  <a href="documentation-electric-skateboard" className="">
                    Electric Skateboard
                  </a>
                </li>
                <li>
                  <a href="documentation-onewheel" className="">
                    Onewheel
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="competitions" className="">
                Competitions
              </a>
            </li>
            <li>
              <a href="contact" className="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav>
    //   <div className='nav-center'>
    //     <div className='container'>
    //       <ul className='links'>
    //         {links.map((link) => {
    //           const { id, url, text } = link;
    //           return (
    //             <li key={id}>
    //               <a href={url}>{text}</a>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
