export default function Sponsors() {
  return (
    <div>
      {/* ***************************************************************************************************************** */}
      {/*                                                  CALL TO ACTION                                                   */}
      {/* ***************************************************************************************************************** */}

      <section className="relative md:py-24 py-16  bg-gray-50 dark:bg-slate-800">
        <div className="container mt-16">
          <div className="grid grid-cols-1 text-center">
            {/* <h6 className="text-green-600 text-sm font-bold uppercase mb-2"></h6> */}
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Sponsor Sustainable Innovation
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Sponsors help promote sustainable innovation and bring our
              projects to life. <br /> Support us in our journey towards
              eco-friendly transportation and contact us to find out more about
              becoming a sponsor!
            </p>

            <div className="mt-6">
              <a
                href="contact.html"
                className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md ltr:mr-2 rtl:ml-2 mt-2"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>

      {/* ***************************************************************************************************************** */}
      {/*                                                        SPONSORS                                                   */}
      {/* ***************************************************************************************************************** */}

      {/* Business Partner */}
      <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
        <div className="container pt-8">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Our Sponsors
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Thank you to our amazing sponsors for supporting us and our
              mission!!
            </p>
          </div>
          {/*end grid*/}

          <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div className="mx-auto py-4">
              <img src="assets/logos/favicon.png" className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <img
                src="assets/images/client/google.svg"
                className="h-6"
                alt=""
              />
            </div>

            <div className="mx-auto py-4">
              <img
                src="assets/images/client/lenovo.svg"
                className="h-6"
                alt=""
              />
            </div>

            <div className="mx-auto py-4">
              <img
                src="assets/images/client/paypal.svg"
                className="h-6"
                alt=""
              />
            </div>

            <div className="mx-auto py-4">
              <img
                src="assets/images/client/shopify.svg"
                className="h-6"
                alt=""
              />
            </div>

            <div className="mx-auto py-4">
              <img
                src="assets/images/client/spotify.svg"
                className="h-6"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
