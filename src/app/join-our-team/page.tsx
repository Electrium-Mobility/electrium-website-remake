export default function Skateboard() {
  return (
    <div>
      <section className="relative md:py-24 py-16  bg-gray-50 dark:bg-slate-800">
        <div className="container mt-16">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-6xl leading-normal font-semibold">
              Join Our Team
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              We are a community of students dedicated to learning and building
              cool things. Our focus is to create a welcoming, beginner-friendly
              environment for any students interested in personal electric
              vehicles.{" "}
            </p>

            <div className="mt-6">
              <a
                href="join-our-team.html"
                className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md ltr:mr-2 rtl:ml-2 mt-2"
              >
                Apply Now
              </a>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>

      {/* ***************************************************************************************************************** */}
      {/*                                                    WHY JOIN                                                       */}
      {/* ***************************************************************************************************************** */}

      <section className="relative md:py-24 py-16 overflow-hidden">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Why Join
          </h3>
        </div>
        {/*end grid*/}

        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <i
                  data-feather="hexagon"
                  className="h-32 w-32 fill-green-600/5 mx-auto"
                ></i>
                <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i data-feather="tool" className="h-8 w-8"></i>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href=""
                  className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-green-600 uppercase"
                >
                  Build
                </a>
                <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">
                  Get hands-on experience working on electric components,
                  developing code for the firmware, building the mechanical
                  structure of our vehicles, and so much more.
                </p>
              </div>
            </div>
            {/*end feature*/}

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <i
                  data-feather="hexagon"
                  className="h-32 w-32 fill-green-600/5 mx-auto"
                ></i>
                <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i data-feather="edit-2" className="h-8 w-8"></i>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href=""
                  className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-green-600 uppercase"
                >
                  Learn
                </a>
                <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">
                  Our team is beginner-friendly and fundamentally
                  student-centred. Get easy access to learning materials,
                  receive mentorship and guidance, all while building something
                  meaningful.
                </p>
              </div>
            </div>
            {/*end feature*/}

            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3">
                <i
                  data-feather="hexagon"
                  className="h-32 w-32 fill-green-600/5 mx-auto"
                ></i>
                <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i data-feather="globe" className="h-8 w-8"></i>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href=""
                  className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-green-600 uppercase"
                >
                  Community
                </a>
                <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">
                  We welcome all levels of skill and experience. We are a
                  community of students who are passionate about sharing our
                  knowledge to create great things.
                </p>
              </div>
            </div>
            {/*end feature*/}
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>

      {/* ***************************************************************************************************************** */}
      {/*                                                    HOW TO JOIN                                                */}
      {/* ***************************************************************************************************************** */}

      {/* Start */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              How To Join
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Ready to get building and take on new challenges? <br /> Apply
              today!
            </p>
          </div>
          {/*end grid*/}

          <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div className="lg:col-span-6 md:col-span-5">
              <div className="sticky top-20">
                <ul
                  className="flex-row p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
                  id="myTab"
                  role="tablist"
                >
                  <li role="presentation">
                    <button
                      className="px-6 py-4 ltr:text-left rtl:text-right text-base font-semibold rounded-md w-full transition-all duration-500 ease-in-out hover:bg-gray-600"
                      id="profile-tab"
                      type="button"
                      role="tab"
                    >
                      <span className="block text-green-600">Step 1</span>
                      <span className="text-xl mt-2 block font-bold">
                        Discover Electrium
                      </span>
                      <span className="block mt-2">
                        Learn more about our current projects and connect with
                        us through social media!
                      </span>
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      className="px-6 py-4 ltr:text-left rtl:text-right text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out hover:bg-gray-600"
                      id="dashboard-tab"
                      type="button"
                      role="tab"
                    >
                      <span className="block text-green-600">Step 2</span>
                      <span className="text-xl mt-2 block font-bold">
                        Submit Your Application
                      </span>
                      <span className="block mt-2">
                        Tell us about yourself and why you're interested in
                        joining Electrium! Applications open soon.
                      </span>
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      className="px-6 py-4 ltr:text-left rtl:text-right text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out hover:bg-gray-600"
                      id="settings-tab"
                      type="button"
                      role="tab"
                    >
                      <span className="block text-green-600">Step 3</span>
                      <span className="block text-xl mt-2 font-bold">
                        Interview With Us
                      </span>
                      <span className="block mt-2">
                        Chat with us so that we can get to know each other
                        better! Meet our team and ask us questions!
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-6 md:col-span-7">
              <div
                id="myTabContent"
                className="px-8 py-16 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
              >
                <div
                  className=""
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <img
                    src="assets/images/kickoff.jpg"
                    className="shadow rounded-md"
                    alt=""
                  />
                </div>
                {/*
                            <div className="hidden " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <img src="assets/images/cowork/8.jpg" className="shadow rounded-md" alt=""/>
                            </div>
                            <div className="hidden " id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                <img src="assets/images/cowork/9.jpg" className="shadow rounded-md" alt=""/>
                            </div>*/}
              </div>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}
    </div>
  );
}
