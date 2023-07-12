export default function Projects() {
  return (
    <div>
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
          {/* <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Long-term Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          {/* Project 1 */}
          {/* <div className="max-w-xs mx-auto">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <img className="w-full h-48 object-cover object-center" src="project1.jpg" alt="Project 1">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Project 1</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div> */}

          {/* Project 2 */}
          {/* <div className="max-w-xs mx-auto">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <img className="w-full h-48 object-cover object-center" src="project2.jpg" alt="Project 2">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Project 2</h3>
                    <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div> */}

          {/* Project 3 */}
          {/* <div className="max-w-xs mx-auto">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <img className="w-full h-48 object-cover object-center" src="project3.jpg" alt="Project 3">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Project 3</h3>
                    <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                    <i>Turbo</i> is our electric bike capable of reaching a
                    maximum speed of 20 km/h, carrying up to 100 kg, and
                    offering a 5-hour battery life for effortless journeys
                    across any terrain.
                  </p>

                  <div className="mt-4">
                    <a
                      href="documentation-electric-bike.html"
                      className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                <img
                  src="assets/images/projects/electric_skateboard.jpg"
                  alt=""
                />

                <div className="content p-6">
                  <a
                    href="documentation-electric-skateboard.html"
                    className="title h5 text-lg font-medium hover:text-green-600 duration-500 ease-in-out"
                  >
                    Electric Skateboard
                  </a>
                  <p className="text-slate-400 mt-3">
                    <i>VoltSkate</i> is our custom-built electric skateboard,
                    with intuitive handheld remote control, customizable riding
                    modes, and a compact, portable design for effortless
                    transportation and storage.
                  </p>

                  <div className="mt-4">
                    <a
                      href="documentation-electric-skateboard.html"
                      className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                    >
                      Read More <i className="uil uil-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                <img
                  src="assets/images/projects/electric_onewheel.jpg"
                  alt=""
                />

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
                      Read More <i className="uil uil-arrow-right"></i>
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
    </div>
  );
}
