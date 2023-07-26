import Script from "next/script"
import "../styles/scss/tailwind-css.scss"

export default function projects() {
    return (
        <>
  <meta charSet="UTF-8" />
  <title>Projects - Electrium Mobility</title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="theme-color" content="#40B549" />
  <meta name="og:image" content="/assets/logos/favicon.png" />
  <meta
    name="description"
    content="Electrium Mobility is a design team in the Sedra Student Design Center in the University of Waterloo. Our goal is to create personal electric vehicles!"
  />
  <meta
    name="keywords"
    content="evehicle, sustainability, waterloo, design team, bike, scooter, skateboard, electric"
  />
  <meta name="author" content="Shreethemes" />
  <meta name="version" content="1.7.0" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* favicon */}
  <link rel="shortcut icon" href="assets/logos/favicon.png" sizes="32x32" />
  {/* Css */}
  <link href="assets/libs/tiny-slider/tiny-slider.css" rel="stylesheet" />
  {/* Main Css */}
  <link
    href="assets/libs/@iconscout/unicons/css/line.css"
    type="text/css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="assets/css/icons.css" />
  <link rel="stylesheet" href="assets/css/tailwind.css" />
  {/* Loader Start */}
  {/* <div id="preloader">
  <div id="status">
      <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
      </div>
  </div>
    </div> */}
  {/* Loader End */}
  {/* Start Navbar */}
  <nav id="topnav" className="defaultscroll is-sticky">
    <div className="container">
      {/* Logo container*/}
      <a className="logo" href="index.html">
        <img
          src="assets/logos/logo-light-mode.png"
          width={180}
          className="inline-block dark:hidden"
          alt=""
        />
        <img
          src="assets/logos/logo-dark-mode.png"
          width={180}
          className="hidden dark:inline-block"
          alt=""
        />
      </a>
      {/* End Logo container*/}
      <div className="menu-extras">
        <div className="menu-item">
          {/* Mobile menu toggle*/}
          <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
            <div className="lines">
              <span />
              <span />
              <span />
            </div>
          </a>
          {/* End mobile menu toggle*/}
        </div>
      </div>
      {/*Login button Start*/}
      <ul className="buy-button list-none mb-0">
        <li className="inline mb-0">
          <a
            href=""
            className="btn btn-icon rounded-full bg-green-600/5 hover:bg-green-600 border-green-600/10 hover:border-green-600 text-green-600 hover:text-white"
          >
            <i data-feather="dollar-sign" className="h-4 w-4" />
          </a>
        </li>
        <li className="inline mb-0">
          <a
            href="https://www.youtube.com/@electriummobility"
            target="_blank"
            className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
          >
            <i data-feather="youtube" className="h-4 w-4" />
          </a>
        </li>
        <li className="inline mb-0">
          <a
            href="https://www.instagram.com/electriummobility/"
            target="_blank"
            className="btn btn-icon rounded-full bg-pink-600/5 hover:bg-pink-600 border-pink-600/10 hover:border-pink-600 text-pink-600 hover:text-white"
          >
            <i data-feather="instagram" className="h-4 w-4" />
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
            <i data-feather="linkedin" className="h-4 w-4" />
          </a>
        </li>
        <li className="inline mb-0">
          <a
            href="mailto:electriummobility@gmail.com"
            target="_blank"
            className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
          >
            <i data-feather="mail" className="h-4 w-4" />
          </a>
        </li>
      </ul>
      {/*Login button End*/}
      <div id="navigation">
        {/* Navigation Menu*/}
        <ul className="navigation-menu">
          {/* <li><a href="index.html" class="sub-menu-item">Home</a></li> */}
          <li>
            <a href="about.html" className="">
              About
            </a>
          </li>
          <li>
            <a href="team.html" className="">
              Team
            </a>
          </li>
          <li>
            <a href="sponsors.html" className="">
              Sponsors
            </a>
          </li>
          {/* <li><a href="index.html" class="sub-menu-item">FAQs</a></li> */}
          <li className="has-submenu parent-menu-item">
            <a href="projects.html">Projects</a>
            <span className="menu-arrow" />
            <ul className="submenu">
              <li>
                <a href="documentation-electric-bike.html" className="">
                  Electric Bike
                </a>
              </li>
              <li>
                <a href="documentation-electric-skateboard.html" className="">
                  Electric Skateboard
                </a>
              </li>
              <li>
                <a href="documentation-onewheel.html" className="">
                  Onewheel
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="competitions.html" className="">
              Competitions
            </a>
          </li>
          <li>
            <a href="contact.html" className="">
              Contact
            </a>
          </li>
        </ul>
        {/*end navigation menu*/}
      </div>
      {/*end navigation*/}
    </div>
    {/*end container*/}
  </nav>
  {/*end header*/}
  {/* End Navbar */}
  {/* ***************************************************************************************************************** */}
  {/*                                                        BANNER                                                     */}
  {/* ***************************************************************************************************************** */}
  {/* Start Hero */}
  {/* <section class="relative table w-full py-36 lg:py-44"> */}
  {/* Hero content */}
  {/* </section>end section */}
  {/* End Hero */}
  {/* ***************************************************************************************************************** */}
  {/*                                              WHO WE ARE + WHAT WE DO                                              */}
  {/* ***************************************************************************************************************** */}
  {/* Content section */}
  {/* End */}
  {/* ***************************************************************************************************************** */}
  {/*                                                        PROJECTS                                                   */}
  {/* ***************************************************************************************************************** */}
  <section className="relative md:py-24 py-16" id="projects">
    <div className="container md:mt-24 mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center">
        <div className="md:col-span-12 text-center">
          <h1 className="text-green-600 text-4xl font-bold mb-4">
            Our Projects
          </h1>
        </div>
        <div className="md:col-span-12 md:mb-7">
          <p className="text-slate-400 max-w-none text-center">
            Check out what we've been working on, and read more about our
            project process and documentation.
          </p>
        </div>
      </div>
      {/*end grid*/}
      {/* Long-term Projects */}
      {/* <div class="mb-10">
      <h2 class="text-2xl font-bold mb-4">Long-term Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      {/* Project 1 */}
      {/* <div class="max-w-xs mx-auto">
          <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img class="w-full h-48 object-cover object-center" src="project1.jpg" alt="Project 1">
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Project 1</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div> */}
      {/* Project 2 */}
      {/* <div class="max-w-xs mx-auto">
          <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img class="w-full h-48 object-cover object-center" src="project2.jpg" alt="Project 2">
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Project 2</h3>
              <p class="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div> */}
      {/* Project 3 */}
      {/* <div class="max-w-xs mx-auto">
          <div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img class="w-full h-48 object-cover object-center" src="project3.jpg" alt="Project 3">
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">Project 3</h3>
              <p class="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div> */}
      {/* Add more long-term projects here */}
      {/* </div>end grid */}
      {/* </div>end mb-10 */}
      {/* Short-term Projects */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Short-term Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/projects/electric_bike.jpg" alt="" />
            <div className="content p-6">
              <a
                href="documentation-electric-bike.html"
                className="title h5 text-lg font-medium hover:text-green-600 duration-500 ease-in-out"
              >
                Electric Bike
              </a>
              <p className="text-slate-400 mt-3">
                <i>Turbo</i> is our electric bike capable of reaching a maximum
                speed of 20 km/h, carrying up to 100 kg, and offering a 5-hour
                battery life for effortless journeys across any terrain.
              </p>
              <div className="mt-4">
                <a
                  href="documentation-electric-bike.html"
                  className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/projects/electric_skateboard.jpg" alt="" />
            <div className="content p-6">
              <a
                href="documentation-electric-skateboard.html"
                className="title h5 text-lg font-medium hover:text-green-600 duration-500 ease-in-out"
              >
                Electric Skateboard
              </a>
              <p className="text-slate-400 mt-3">
                <i>VoltSkate</i> is our custom-built electric skateboard, with
                intuitive handheld remote control, customizable riding modes,
                and a compact, portable design for effortless transportation and
                storage.
              </p>
              <div className="mt-4">
                <a
                  href="documentation-electric-skateboard.html"
                  className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/projects/electric_onewheel.jpg" alt="" />
            <div className="content p-6">
              <a
                href="documentation-onewheel.html"
                className="title h5 text-lg font-medium hover:text-green-600 duration-500 ease-in-out"
              >
                OneWheel
              </a>
              <p className="text-slate-400 mt-3">
                Our Electric OneWheel is an exhilarating and eco-friendly
                single-wheel vehicle that combines sleek design, high
                performance, and user-centric features for a thrilling and
                comfortable ride.
              </p>
              <div className="mt-4">
                <a
                  href="documentation-onewheel.html"
                  className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end mb-10*/}
    </div>
    {/*end container*/}
  </section>
  {/*end section*/}
  {/* End */}
  {/* Footer Start */}
  <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
    <div className="container">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="py-[60px] px-0">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
              <div className="lg:col-span-4 md:col-span-12">
                <a href="#" className="text-[22px] focus:outline-none">
                  <img
                    src="assets/logos/logo-dark-mode.png"
                    width={250}
                    alt=""
                  />
                </a>
                <p className="mt-6 text-gray-300">
                  Hi, we're Electrium Mobility! We're a student design team in
                  the Sedra Student Design Centre at the University of Waterloo.
                </p>
                <ul className="list-none mt-6">
                  {/* <li class="inline"><a href="https://www.instagram.com/electriummobility/" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i class="uil uil-instagram align-middle" title="instagram"></i></a></li>
                          <li class="inline"><a href="https://discord.gg/jggFVza4XR" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i class="uil uil-discord align-middle" title="discord"></i></a></li>
                          <li class="inline"><a href="http://www.linkedin.com/company/electrium-mobility/" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i class="uil uil-linkedin" title="Linkedin"></i></a></li>
                          <li class="inline"><a href="" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i class="uil uil-youtube align-middle" title="youtube"></i></a></li>
                          <li class="inline"><a href="mailto:electriummobility@gmail.com" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><i class="uil uil-envelope align-middle" title="email"></i></a></li> */}
                  <li className="inline mb-0">
                    <a
                      href=""
                      className="btn btn-icon rounded-full bg-green-600/5 hover:bg-green-600 border-green-600/10 hover:border-green-600 text-green-600 hover:text-white"
                    >
                      <i data-feather="dollar-sign" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline mb-0">
                    <a
                      href="https://www.youtube.com/@electriummobility"
                      target="_blank"
                      className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
                    >
                      <i data-feather="youtube" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline mb-0">
                    <a
                      href="https://www.instagram.com/electriummobility/"
                      target="_blank"
                      className="btn btn-icon rounded-full bg-pink-600/5 hover:bg-pink-600 border-pink-600/10 hover:border-pink-600 text-pink-600 hover:text-white"
                    >
                      <i data-feather="instagram" className="h-4 w-4" />
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
                      <i data-feather="linkedin" className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="inline mb-0">
                    <a
                      href="mailto:electriummobility@gmail.com"
                      target="_blank"
                      className="btn btn-icon rounded-full bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white"
                    >
                      <i data-feather="mail" className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
                {/*end icon*/}
              </div>
              {/*end col*/}
              <div className="lg:col-span-2 md:col-span-4">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">
                  Pages
                </h5>
                <ul className="list-none footer-list mt-6">
                  <li>
                    <a
                      href="about.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> About
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="team.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Team
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="contact.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/*end col*/}
              <div className="lg:col-span-3 md:col-span-4">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">
                  Recent Projects
                </h5>
                <ul className="list-none footer-list mt-6">
                  <li>
                    <a
                      href="documentation-electric-bike.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Electric Bike
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="documentation-electric-skateboard.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Electric
                      Skateboard
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="documentation-onewheel.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Onewheel
                    </a>
                  </li>
                </ul>
              </div>
              {/*end col*/}
              <div className="lg:col-span-3 md:col-span-4">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">
                  Get involved
                </h5>
                <div className="grid grid-cols-1">
                  <a
                    href="join-our-team.html"
                    className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md mt-6"
                  >
                    <button type="submit" id="submitsubscribe" name="send">
                      Join Our Team
                    </button>
                  </a>
                  <a
                    href="become-a-sponsor.html"
                    className="btn bg-transparent hover:bg-green-600 border-green-600 text-green-600 hover:text-white rounded-md mt-3"
                  >
                    <button type="submit" id="submitsubscribe" name="send">
                      Become A Sponsor
                    </button>
                  </a>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end grid*/}
          </div>
          {/*end col*/}
        </div>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
    <div className="py-[30px] px-0 border-t border-slate-800">
      <div className="container text-center">
        <div className="grid md:grid-cols-2 items-center">
          <div className="ltr:md:text-left rtl:md:text-right text-center">
            <p className="mb-0">© Electrium Mobility. All Rights Reserved.</p>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </div>
  </footer>
  {/*end footer*/}
  {/* Footer End */}
  {/* Back to top */}
  <a
    href="#"
    onclick="topFunction()"
    id="back-to-top"
    className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 ltr:right-5 rtl:left-5 h-9 w-9 text-center bg-green-600 text-white leading-9"
  >
    <i className="uil uil-arrow-up" />
  </a>
  {/* Back to top */}
  {/* Switcher */}
  <div className="fixed top-[30%] -right-2 z-50">
    <span className="relative inline-block rotate-90">
      <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
      <label
        className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
        htmlFor="chk"
      >
        <i className="uil uil-moon text-[20px] text-yellow-500" />
        <i className="uil uil-sun text-[20px] text-yellow-500" />
        <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7" />
      </label>
    </span>
  </div>
  {/* Switcher */}
  {/* JAVASCRIPTS */}
  
  <Script src="/assets/libs/tiny-slider/min/tiny-slider.js"/>
  <Script src="/assets/libs/feather-icons/feather.min.js"/>
  <Script src="/assets/js/plugins.init.js"/>
  <Script src="/assets/js/app.js"/>
  {/* JAVASCRIPTS */}
</>

    )
}