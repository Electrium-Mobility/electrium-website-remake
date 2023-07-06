export default function Home() {
  return (
      <div>

{/* Start Hero */}
        <section className="relative table w-full py-36 lg:py-44">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="ltr:md:mr-6 rtl:md:ml-6">
                            <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Building <span className="text-green-600">Sustainable, Affordable</span> Transportation</h4>
                            <p className="text-slate-400 text-lg max-w-xl">Electrium Mobility is a student design team based at the University of Waterloo. Our goal is to create sustainable and affordable transportation in the form of Personal Electric Vehicles.</p>
                        
                            <div className="mt-6">
                                <a href="join-our-team.html" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md ltr:mr-2 rtl:ml-2 mt-2"> Join Our Team </a>
                                <a href="sponsors.html" className="btn bg-transparent hover:bg-green-600 border-green-600 text-green-600 hover:text-white rounded-md mt-2"> Become A Sponsor</a>
                            </div>
                        </div>
                    </div>{/*end col*/}

                    <div className="md:col-span-5">
                        <img src="assets/graphics/bike-graphic-2.svg" alt=""/>
                    </div>{/*end col*/}
                </div>{/*end grid*/}
            </div>{/*end container*/}
        </section>{/*end section*/}
        {/* End Hero */}


        {/* ***************************************************************************************************************** */}
        {/*                                                        SPONSORS                                                   */}
        {/* ***************************************************************************************************************** */}

        {/* Business Partner */}
        {/* <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div className="container">
                <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                    <div className="mx-auto py-4">
                        <img src="assets/images/client/amazon.svg" className="h-6" alt="">
                    </div>

                    <div className="mx-auto py-4">
                        <img src="assets/images/client/google.svg" className="h-6" alt="">
                    </div>
                    
                    <div className="mx-auto py-4">
                        <img src="assets/images/client/lenovo.svg" className="h-6" alt="">
                    </div>
                    
                    <div className="mx-auto py-4">
                        <img src="assets/images/client/paypal.svg" className="h-6" alt="">
                    </div>
                    
                    <div className="mx-auto py-4">
                        <img src="assets/images/client/shopify.svg" className="h-6" alt="">
                    </div>
                    
                    <div className="mx-auto py-4">
                        <img src="assets/images/client/spotify.svg" className="h-6" alt="">
                    </div>
                </div>
            </div>
        </section> */}
        {/* Business Partner */}
        

        {/* ***************************************************************************************************************** */}
        {/*                                              WHO WE ARE + WHAT WE DO                                              */}
        {/* ***************************************************************************************************************** */}

        {/* Start */}
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container">
                

                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-5">
                        <img src="assets/graphics/skateboard-graphic.svg" alt=""/>
                    </div>
                    <div className="lg:col-span-7 mt-8 md:mt-0">
                        <div className="ltr:lg:ml-10 rtl:lg:mr-10">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">We're Electrium Mobility,</h3>
                            <p className="text-slate-400 max-w-xl">Welcome to Electrium Mobility, a student-led design team located at the Sedra Student 
                                Design Center at the University of Waterloo. Comprised of passionate individuals, 
                                we are committed to shaping the future of transportation through the creation of electric 
                                vehicles. With a strong focus on sustainability and innovation, our mission is to 
                                increase awareness and promote the adoption of greener transportation options. </p>

                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex"><i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2"></i> Innovative Design</li>
                                <li className="mb-1 flex"><i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2"></i> Affordability and Accessibility</li>
                                <li className="mb-1 flex"><i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2"></i> Collaborative Approach</li>
                            </ul>

                        </div>
                    </div>
                </div>{/*end grid*/}
            </div>{/*end container*/}

            <br/><br/><br/><br/>

            <div className="container md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-5 md:order-2 order-1">
                        <img src="assets/graphics/what-we-do-graphic.svg" alt=""/>
                    </div>
                    <div className="lg:col-span-7 md:order-1 order-2 mt-8 md:mt-0">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What We Do</h3>
                        <p className="text-slate-400 max-w-xl">At Electrium Mobility, we are driven by a shared vision of revolutionizing the automotive industry 
                            through the development of cutting-edge electric vehicles. Using our expertise in 
                            engineering, we aim to create affordable electric vehicles that deliver outstanding performance 
                            and efficiency. Through our various projects, collaborations, and 
                            educational initiatives, we are actively advocating for the economic benefits and positive environmental impact of electric 
                            vehicles. Our ultimate goal is to inspire and equip students with the knowledge 
                            and skills necessary to contribute to the future of electric mobility.</p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex"><i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2"></i> Design and Build</li>
                            <li className="mb-1 flex"><i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2"></i> Awareness and Education</li>
                            <li className="mb-1 flex"><i className="uil uil-check-circle text-green-600 text-xl ltr:mr-2 rtl:ml-2"></i> Sustainable and Affordable Transportation</li>
                        </ul>

                        <br/>

                        <div className="mt-4">
                            <a href="about.html" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Read More <i className="uil uil-angle-right-b align-middle"></i></a>
                        </div>
                    </div>
                </div>{/*end grid*/}
            </div>{/*end container*/}
        </section>{/*end section*/}
        {/* End */}


        {/* ***************************************************************************************************************** */}
        {/*                                                        PROJECTS                                                   */}
        {/* ***************************************************************************************************************** */}

        {/* Start */}
        <section className="relative md:py-24 py-16" id="ticket">
            <div className="container md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div className="md:col-span-6">
                        <h6 className="text-green-600 text-sm font-bold uppercase mb-2">Projects</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Recent Projects</h3>
                    </div>

                    <div className="md:col-span-6">
                        <p className="text-slate-400 max-w-xl">Check out what we've been working on, and read more about our project process and documentation.</p>
                    </div>
                </div>{/*end grid*/}

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img src="assets/images/projects/electric_bike.jpg" alt=""/>

                        <div className="content p-6">
                            <a href="documentation-electric-bike.html" className="title h5 text-lg font-medium hover:text-green-600 duration-500 ease-in-out">Electric Bike</a>
                            <p className="text-slate-400 mt-3"><i>Turbo</i> is our electric bike capable of reaching a maximum speed of 20 km/h, carrying up to 100 kg, and offering a 5-hour battery life for effortless journeys across any terrain </p>
                            
                            <div className="mt-4">
                                <a href="documentation-electric-bike.html" className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img src="assets/images/projects/electric_skateboard.jpg" alt=""/>

                        <div className="content p-6">
                            <a href="documentation-electric-skateboard.html" className="title h5 text-lg font-medium hover:text-green-600 duration-500 ease-in-out">Electric Skateboard</a>
                            <p className="text-slate-400 mt-3"><i>VoltSkate</i> is our custom-built electric skateboard, with intuitive handheld remote control, customizable riding modes, and a compact, portable design for effortless transportation and storage.</p>
                            
                            <div className="mt-4">
                                <a href="documentation-electric-skateboard.html" className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                        <img src="assets/images/projects/electric_onewheel.jpg" alt=""/>

                        <div className="content p-6">
                            <a href="documentation-onewheel.html" className="title h5 text-lg font-medium hover:text-green-600 duration-500 ease-in-out">OneWheel</a>
                            <p className="text-slate-400 mt-3">Our Electric OneWheel is an exhilarating and eco-friendly single-wheel vehicle that combines sleek design, high performance, and user-centric features for a thrilling and comfortable ride.</p>
                            
                            <div className="mt-4">
                                <a href="documentation-onewheel.html" className="btn btn-link font-normal hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>{/*end grid*/}
            </div>{/*end container*/}
        </section>{/*end section*/}
        {/* End */}

        {/* ***************************************************************************************************************** */}
        {/*                                                   CALL TO ACTION                                                  */}
        {/* ***************************************************************************************************************** */}

        {/* Start */}
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Get Involved</h3>

                    <p className="max-w-xl mx-auto"> Be a part of the green transportation revolution! We're looking for students passionate about sustainable mobility.
                        Join our team to learn more about our projects and collaborate on cutting-edge electric vehicle projects. </p>
                </div>{/*end grid*/}

                <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
                    <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6">
                        <h5 className="text-2xl font-semibold mb-4">Join Our Team</h5>
                        <p className="text-slate-400 mb-4">Join us and unleash your creativity and passion for sustainable transportation. As a member, you'll have the opportunity to gain hands-on experience in design and engineering.</p>
                        <a href="join-our-team.html" className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Learn How<i className="uil uil-arrow-right align-middle"></i></a>
                    </div>

                    <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6">
                        <h5 className="text-2xl font-semibold mb-4">Become A Sponsor</h5>
                        <p className="text-slate-400 mb-4">Become a valued sponsor support our mission of advancing affordable and sustainable transportation solutions</p>
                        <a href="sponsors.html" className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Learn How<i className="uil uil-arrow-right align-middle"></i></a>
                    </div>

                    <br/>
                </div>{/*end grid*/}
            </div>{/*end container*/}
        </section>{/*end section*/}


      </div>
  );
}