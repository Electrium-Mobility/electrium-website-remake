export default function Bike() {
  return (
    <div>
      {/* Start Hero */}
      <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="text-3xl leading-normal font-semibold">
              Electric Bike
            </h3>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}

        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block">
            <li className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out">
              Electrium Mobility
            </li>
            <li className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out">
              Projects
            </li>
            <li
              className="inline breadcrumb-item uppercase text-[13px] font-bold text-green-600"
              aria-current="page"
            >
              Electric Bike
            </li>
          </ul>
        </div>
      </section>
      {/*end section*/}
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {/* End Hero */}

      {/* Start Section*/}
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="tiny-single-item">
              <div className="tiny-slide">
                <div className="m-2">
                  <img
                    src="assets/images/portfolio/16.jpg"
                    className="rounded-md shadow dark:shadow-gray-800"
                    alt=""
                  />
                </div>
              </div>
              <div className="tiny-slide">
                <div className="m-2">
                  <img
                    src="assets/images/portfolio/17.jpg"
                    className="rounded-md shadow dark:shadow-gray-800"
                    alt=""
                  />
                </div>
              </div>
              <div className="tiny-slide">
                <div className="m-2">
                  <img
                    src="assets/images/portfolio/18.jpg"
                    className="rounded-md shadow dark:shadow-gray-800"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-5">
              <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-md">
                <h5 className="text-lg font-semibold border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">
                  Project Info:
                </h5>
                <dl className="grid grid-cols-12 mb-0">
                  <dt className="md:col-span-6 col-span-6 mt-2">Term:</dt>
                  <dd className="md:col-span-6 col-span-6 mt-2 text-slate-400">
                    Spring 2023
                  </dd>

                  <dt className="md:col-span-6 col-span-6 mt-2">
                    Electrical Lead:
                  </dt>
                  <dd className="md:col-span-6 col-span-6 mt-2 text-slate-400">
                    Sherwin Chiu
                  </dd>

                  <dt className="md:col-span-6 col-span-6 mt-2">
                    Firmware Lead:
                  </dt>
                  <dd className="md:col-span-6 col-span-6 mt-2 text-slate-400">
                    Sherwin Chiu
                  </dd>

                  <dt className="md:col-span-6 col-span-6 mt-2">
                    Mechanical Lead:
                  </dt>
                  <dd className="md:col-span-6 col-span-6 mt-2 text-slate-400">
                    Sherwin Chiu
                  </dd>
                </dl>
              </div>
            </div>
            {/*end col*/}

            <div className="lg:col-span-8 md:col-span-7">
              <div className="ltr:lg:mr-5 rtl:lg:ml-5">
                <h4 className="text-xl font-semibold mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">
                  Project Description:
                </h4>
                <p className="text-slate-400">
                  <i>Turbo</i> is far superior than your average bike,
                  travelling at a max speed of 20 km/h. The bike can carry a
                  maximum capacity of 100 kg. It has a battery life of 5 hours
                  but can function as a regular bike. No hill is too steep, no
                  destination is too far. Our state-of-the-art battery and motor
                  deliver incredible range and power, ensuring you'll reach your
                  destination effortlessly, no matter the terrain.
                </p>
                <p className="text-slate-400 mt-2">
                  And it's not just for commuters. With its ergonomic design and
                  adjustable seating, the Zephyr electric bike is perfect for
                  riders of all ages and fitness levels. Imagine creating
                  unforgettable memories as you explore new trails, embark on
                  family adventures, or simply enjoy a Sunday ride together.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/*End Section*/}
    </div>
  );
}
