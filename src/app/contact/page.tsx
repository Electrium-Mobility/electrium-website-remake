export default function Contact() {
  return (
    <div>
      {/* Start Section*/}
      <section className="relative md:py-24 py-16">
        {/* ***************************************************************************************************************** */}
        {/*                                             CONTACT INFORMATION                                                   */}
        {/* ***************************************************************************************************************** */}

        <div className="container">
          <div className="grid grid-cols-1 pt-16 pb-8 text-center">
            <h3 className="pt-12 mb-4 md:leading-normal text-4xl leading-normal font-semibold">
              Contact Us
            </h3>

            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Have any questions? <br />
              Interested in learning more about Electrium? <br />
              Let's chat!
            </p>
          </div>
          {/*end grid*/}

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6 mt-6">
              <div className="w-20 h-20 bg-green-600/5 text-green-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-envelope"></i>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Email</h5>

                <div className="mt-5">
                  <a
                    href="mailto:electriummobility@gmail.com"
                    className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                  >
                    electriummobility@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6 mt-6">
              <div className="w-20 h-20 bg-green-600/5 text-green-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-discord"></i>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Discord</h5>

                <div className="mt-5">
                  <a
                    href="https://discord.gg/jggFVza4XR"
                    target="_blank"
                    className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                  >
                    Join our discord server
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6 mt-6">
              <div className="w-20 h-20 bg-green-600/5 text-green-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-instagram"></i>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Instagram</h5>

                <div className="mt-5">
                  <a
                    href="https://www.instagram.com/electriummobility/"
                    target="_blank"
                    className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out"
                  >
                    Message us on instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*end grid*/}
          <br />
          <br />
        </div>
        {/*end container*/}
      </section>

      {/* ***************************************************************************************************************** */}
      {/*                                             SEND A MESSAGE FORM                                                   */}
      {/* ***************************************************************************************************************** */}

      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-6 md:col-span-6">
              <img src="assets/graphics/message.svg" alt="" />
            </div>

            <div className="lg:col-span-6 md:col-span-6 mt-8 md:mt-0">
              <div className="ltr:lg:ml-5 rtl:lg:mr-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch!
                  </h3>

                  {/* TODO There is an error on the onSubmit attribute due to the return validateForm() function */}

                  {/* <form action="mailto:contact@electriummobility.com" method="post" name="myForm" id="myForm" onSubmit="return validateForm()"> 
                                    <p className="mb-0" id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="ltr:text-left rtl:text-right">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <div className="form-icon relative mt-2">
                                                    <i data-feather="user" className="w-4 h-4 absolute top-3 ltr:left-4 rtl:right-4"></i>
                                                    <input name="name" id="name" type="text" className="form-input ltr:pl-11 rtl:pr-11" placeholder="Name:"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="ltr:text-left rtl:text-right">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <div className="form-icon relative mt-2">
                                                    <i data-feather="mail" className="w-4 h-4 absolute top-3 ltr:left-4 rtl:right-4"></i>
                                                    <input name="email" id="email" type="email" className="form-input ltr:pl-11 rtl:pr-11" placeholder="Email:"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="ltr:text-left rtl:text-right">
                                                <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                                <div className="form-icon relative mt-2">
                                                    <i data-feather="book" className="w-4 h-4 absolute top-3 ltr:left-4 rtl:right-4"></i>
                                                    <input name="subject" id="subject" className="form-input ltr:pl-11 rtl:pr-11" placeholder="Subject:"/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="mb-5">
                                            <div className="ltr:text-left rtl:text-right">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <div className="form-icon relative mt-2">
                                                    <i data-feather="message-circle" className="w-4 h-4 absolute top-3 ltr:left-4 rtl:right-4"></i>
                                                    <textarea name="comments" id="comments" className="form-input ltr:pl-11 rtl:pr-11 h-28" placeholder="Message:"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                                </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Section*/}
    </div>
  );
}
