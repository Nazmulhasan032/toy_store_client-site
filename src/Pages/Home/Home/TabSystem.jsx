import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import car1 from '../../../assets/gallery/car1.jpg';
import car2 from '../../../assets/gallery/car2.jpg';
import car3 from '../../../assets/gallery/car3.jpg';
import car4 from '../../../assets/gallery/car4.jpg';
import car5 from '../../../assets/gallery/car5.jpg';
import car6 from '../../../assets/gallery/car6.jpg';

const TabSystem = () => {



    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <h2 className='text-3xl font-bold mt-12'>Car Category</h2>
            <div className='mt-4 mb-12'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab><h2 className='font-bold'>Sports Cars</h2></Tab>
                        <Tab><h2 className='font-bold'>Regular Cars</h2></Tab>
                        <Tab><h2 className='font-bold'>Mini Cars</h2></Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 my-5'>
                            {/* card start */}
                            <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                                <figure><img src={car1} alt="cars" /></figure>
                                <div className="card-body flex-grow-0">
                                    <h2 className="card-title">Speedster Racer</h2>
                                    <p>Price: $150</p>
                                    <div className="inline-flex items-center">
                                        <p className="mr-2">Ratings:</p>
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStarHalfAlt className="text-yellow-500" />
                                    </div>

                                </div>
                            </div>
                            {/* card end */}
                            {/* card start */}
                            <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                                <figure><img src={car4} alt="cars" /></figure>
                                <div className="card-body flex-grow-0">
                                    <h2 className="card-title">Monster Mash</h2>
                                    <p>Price: $200</p>
                                    <div className="inline-flex items-center">
                                        <p className="mr-2">Ratings:</p>
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>

                                </div>
                            </div>
                            {/* card end */}

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 my-5'>
                            {/* card start */}
                            <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                                <figure><img src={car3} alt="cars" /></figure>
                                <div className="card-body flex-grow-0">
                                    <h2 className="card-title">Cruiser</h2>
                                    <p>Price: $250</p>
                                    <div className="inline-flex items-center">
                                        <p className="mr-2">Ratings:</p>
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStarHalfAlt className="text-yellow-500" />
                                    </div>

                                </div>
                            </div>
                            {/* card end */}
                            {/* card start */}
                            <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                                <figure><img src={car2} alt="cars" /></figure>
                                <div className="card-body flex-grow-0">
                                    <h2 className="card-title">City Wheels</h2>
                                    <p>Price: $400</p>
                                    <div className="inline-flex items-center">
                                        <p className="mr-2">Ratings:</p>
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>

                                </div>
                            </div>
                            {/* card end */}

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 my-5'>
                            {/* card start */}
                            <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                                <figure><img src={car5} alt="cars" /></figure>
                                <div className="card-body flex-grow-0">
                                    <h2 className="card-title">Convertible Roadster</h2>
                                    <p>Price: $129</p>
                                    <div className="inline-flex items-center">
                                        <p className="mr-2">Ratings:</p>
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStarHalfAlt className="text-yellow-500" />
                                        <FaStarHalfAlt className="text-yellow-500" />
                                    </div>

                                </div>
                            </div>
                            {/* card end */}
                            {/* card start */}
                            <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                                <figure><img src={car6} alt="cars" /></figure>
                                <div className="card-body flex-grow-0">
                                    <h2 className="card-title">Taxi Cab</h2>
                                    <p>Price: $277</p>
                                    <div className="inline-flex items-center">
                                        <p className="mr-2">Ratings:</p>
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>

                                </div>
                            </div>
                            {/* card end */}

                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default TabSystem;