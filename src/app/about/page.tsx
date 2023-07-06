export default function About() {
    return (
        <div>
        {/* // <!-- ***************************************************************************************************************** -->
        // <!--                                                     ABOUT US                                                      -->
        // <!-- ***************************************************************************************************************** -->

        // <!-- Start Section--> */}
        <section className="relative md:py-24 py-16 overflow-hidden">
            <div className="container md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                    <div className="relative">
                        <img src="assets/graphics/bike-graphic.svg" className="max-w-[440px] mx-auto" alt=""/>
                        <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-green-600/5 bottom-0 ltr:left-0 rtl:right-0 rotate-45 -z-1 rounded-3xl"></div>
                    </div>

                    <div className="ltr:lg:ml-8 rtl:lg:mr-8">
                        <h4 className="mb-6 md:text-4xl text-3xl lg:leading-normal leading-normal font-medium text-green-600">About Us</h4>
                        <p className="text-slate-400">Electrium Mobility is a student-led design team at the University of Waterloo focused on shaping the future of transportation through electric vehicles. With a strong emphasis on sustainability and innovation, we create affordable electric vehicles and promote their adoption. Our mission is to inspire students, build awareness, and advocate for the economic and environmental benefits of electric mobility. Join us as we revolutionize the automotive industry and contribute to a greener future.</p>

                    </div>
                </div>
            </div> {/* <!--end container--> */}
        </section> {/* <!--end section--> */}
        {/* <!-- End Section--> */}
        

        {/* <!-- ***************************************************************************************************************** -->
        <!--                                                      OUR VALUES                                                   -->
        <!-- ***************************************************************************************************************** --> */}

        {/* <!-- Start --> */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Values</h3>
    
                    </div> {/* <!--end grid--> */}
    
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-0 gap-[30px]">
                        <div className="text-center md:px-6">
                            <div className="w-28 h-28 bg-indigo-600/5 text-indigo-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <i className="uil uil-airplay"></i>
                            </div>
    
                            <div className="content mt-7">
                                <a href="page-services.html" className="title h5 text-lg font-medium hover:text-green-600">Sustainability</a>
                                <p className="text-slate-400 mt-3">We aim to raise awareness and create sustainable vehicle technologies, empowering students to make greener transportation choices.</p>
                            </div>
                        </div>
                        
                        <div className="text-center md:px-6">
                            <div className="w-28 h-28 bg-red-600/5 text-red-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <i className="uil uil-presentation-play"></i>
                            </div>
    
                            <div className="content mt-7">
                                <a href="" className="title h5 text-lg font-medium hover:text-red-600">Affordability</a>
                                <p className="text-slate-400 mt-3">We are dedicated to raising awareness about the economic benefits of electric vehicles, advocating for sustainable transportation for students.</p>
                            </div>
                        </div>
                        
                        <div className="text-center md:px-6">
                            <div className="w-28 h-28 bg-emerald-600/5 text-emerald-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <i className="uil uil-mobile-android"></i>
                            </div>
    
                            <div className="content mt-7">
                                <a href="" className="title h5 text-lg font-medium hover:text-emerald-600">Portability</a>
                                <p className="text-slate-400 mt-3">We aim to create convenient and compact electric vehicles that empower students to commute efficiently and sustainably.</p>
                            </div>
                        </div>
                        
                        <div className="text-center md:px-6">
                            <div className="w-28 h-28 bg-amber-600/5 text-amber-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <i className="uil uil-crop-alt"></i>
                            </div>
    
                            <div className="content mt-7">
                                <a href="" className="title h5 text-lg font-medium hover:text-amber-600">Student Learning</a>
                                <p className="text-slate-400 mt-3">We are dedicated to empowering students with the knowledge and skills to design and build electric vehicles. </p>
                            </div>
                        </div>
                    </div> {/* <!--end grid--> */}
                </div> {/* <!--end container--> */}
            </section> {/* <!--end section--> */}
        {/* <!-- End --> */}


        {/* <!-- ***************************************************************************************************************** -->
         <!--                                                        FAQS                                                       -->
         <!-- ***************************************************************************************************************** --> */}

        <section className="relative md:py-24 py-16 bg-[url('../../assets/images/Competition images/CompetitionPlaceholder.jpg')] bg-bottom bg-no-repeat bg-cover">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                    {/* <!-- <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p> --> */}
                </div> {/* <!--end grid--> */}

                <div className="md:flex justify-center">
                    <div className="lg:w-2/3 md:w-full">
                        <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                            {/* <!-- <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold bg-white dark:bg-slate-900" id="accordion-collapse-heading-2">
                                    <button type="button" className="flex justify-between items-center p-5 w-full font-medium ltr:text-left rtl:text-right" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                        <span>What is the purpose of Electrium Mobility?</span>
                                        <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-1" className="hidden bg-white dark:bg-slate-900" aria-labelledby="accordion-collapse-heading-1">
                                    <div className="p-5">
                                        <p className="text-slate-400 dark:text-gray-400">We are a student-led design team whose purpose is to help students learn how to build electric vehicles.</p>
                                    </div>
                                </div>
                            </div> -->

                            <!-- <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold bg-white dark:bg-slate-900" id="accordion-collapse-heading-2">
                                    <button type="button" className="flex justify-between items-center p-5 w-full font-medium ltr:text-left rtl:text-right" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                        <span>Are there any specific competitions the team participates in?</span>
                                        <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-1" className="hidden bg-white dark:bg-slate-900" aria-labelledby="accordion-collapse-heading-1">
                                    <div className="p-5">
                                        <p className="text-slate-400 dark:text-gray-400">There aren't any external competitions at the moment, but we have an internal competition at the end of the term where you will race your electric vehicles against each other.</p>
                                    </div>
                                </div>
                            </div> --> */}

                            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold bg-white dark:bg-slate-900" id="accordion-collapse-heading-1">
                                    <button type="button" className="flex justify-between items-center p-5 w-full font-medium ltr:text-left rtl:text-right" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                        <span>What is the purpose of Electrium Mobility?</span>
                                        <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-1" className="hidden bg-white dark:bg-slate-900" aria-labelledby="accordion-collapse-heading-1">
                                    <div className="p-5">
                                        <p className="text-slate-400 dark:text-gray-400">We are a student-led design team whose purpose is to help students learn how to build electric vehicles.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold bg-white dark:bg-slate-900" id="accordion-collapse-heading-2">
                                    <button type="button" className="flex justify-between items-center p-5 w-full font-medium ltr:text-left rtl:text-right" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                        <span>Are there any specific competitions the team participates in?</span>
                                        <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-2" className="hidden bg-white dark:bg-slate-900" aria-labelledby="accordion-collapse-heading-2">
                                    <div className="p-5">
                                        <p className="text-slate-400 dark:text-gray-400">There aren't any external competitions at the moment, but we have an internal competition at the end of the term where you will race your electric vehicles against each other.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold bg-white dark:bg-slate-900" id="accordion-collapse-heading-3">
                                    <button type="button" className="flex justify-between items-center p-5 w-full font-medium ltr:text-left rtl:text-right" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                        <span>What teams can I join?</span>
                                        <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-3" className="hidden bg-white dark:bg-slate-900" aria-labelledby="accordion-collapse-heading-3">
                                    <div className="p-5">
                                        <p className="text-slate-400 dark:text-gray-400">We have 6 subteams: electrical, firmware, mechanical, web development, finance, and management/marketing. You can only join 1 subteam, but everyone is welcome to participate in other subteam's meetings and learning new skills!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold bg-white dark:bg-slate-900" id="accordion-collapse-heading-4">
                                    <button type="button" className="flex justify-between items-center p-5 w-full font-medium ltr:text-left rtl:text-right" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
                                        <span>What projects can I work on?</span>
                                        <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-4" className="hidden bg-white dark:bg-slate-900" aria-labelledby="accordion-collapse-heading-4">
                                    <div className="p-5">
                                        <p className="text-slate-400 dark:text-gray-400">Currently, you can choose to work on 1 of 3 projects: an electric bike, electric skateboard, and a onewheel. At the end of the term, you will be able to race your electric vehicles against each other!</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold bg-white dark:bg-slate-900" id="accordion-collapse-heading-5">
                                    <button type="button" className="flex justify-between items-center p-5 w-full font-medium ltr:text-left rtl:text-right" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
                                        <span>Is prior experience required to join the team?</span>
                                        <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-5" className="hidden bg-white dark:bg-slate-900" aria-labelledby="accordion-collapse-heading-5">
                                    <div className="p-5">
                                        <p className="text-slate-400 dark:text-gray-400">Nope, all beginners are welcome! If you have no experience, will teach you as long as you are interested!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 className="text-base font-semibold bg-white dark:bg-slate-900" id="accordion-collapse-heading-6">
                                    <button type="button" className="flex justify-between items-center p-5 w-full font-medium ltr:text-left rtl:text-right" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false" aria-controls="accordion-collapse-body-6">
                                        <span>Can I switch between sub-teams if I'm interested in multiple areas</span>
                                        <svg data-accordion-icon className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-6" className="hidden bg-white dark:bg-slate-900" aria-labelledby="accordion-collapse-heading-6">
                                    <div className="p-5">
                                        <p className="text-slate-400 dark:text-gray-400">Yes, you may switch between sub-teams.</p>
                                    </div>
                                </div>
                            </div>

                            <br/><br/>
                        </div>
                    </div>
                </div>
            </div> {/* <!--end container--> */}
        </section> {/* <!--end section--> */}
    </div>
    );
}