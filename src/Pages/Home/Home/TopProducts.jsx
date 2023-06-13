import car1 from "../../../assets/gallery/car1.jpg";
import car4 from "../../../assets/gallery/car2.jpg";
import car2 from "../../../assets/gallery/car3.jpg";
import car3 from "../../../assets/gallery/car5.jpg";
import car6 from "../../../assets/gallery/car6.jpg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const TopProducts = () => {
    useEffect(() => {
        AOS.init({
          
        });
      }, []);
    return (
        <>
            <h2 className="text-4xl font-bold pl-4 mt-12">Top Products</h2>

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
                    <figure><img src={car2} alt="cars" /></figure>
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
                {/* card start */}
                <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                    <figure><img src={car3} alt="cars" /></figure>
                    <div className="card-body flex-grow-0">
                        <h2 className="card-title">Eco Electric</h2>
                        <p>Price: $349</p>
                        <div className="inline-flex items-center">
                            <p className="mr-2">Ratings:</p>
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStarHalfAlt className="text-yellow-500" />
                        </div>

                    </div>
                </div>
                {/* card end */}
            </div>

            {/* Latest collection section start here */}
            <h2 className="text-4xl font-bold pl-4 mt-12">Latest Collection</h2>

            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 my-5'>
                {/* card start */}
                <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                    <figure><img src={car4} alt="cars" /></figure>
                    <div className="card-body flex-grow-0">
                        <h2 className="card-title">Speedster Racer</h2>
                        <p>Price: $149</p>
                        <div className="inline-flex items-center">
                            <p className="mr-2">Ratings:</p>
                            <FaStar className="text-yellow-500" />
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
                    <figure><img src={car3} alt="cars" /></figure>
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
                {/* card start */}
                <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
                    <figure><img src={car6} alt="cars" /></figure>
                    <div className="card-body flex-grow-0">
                        <h2 className="card-title">Eco Electric</h2>
                        <p>Price: $349</p>
                        <div className="inline-flex items-center">
                            <p className="mr-2">Ratings:</p>
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStarHalfAlt className="text-yellow-500" />
                        </div>

                    </div>
                </div>
                {/* card end */}
            </div>
            {/* Latest collection section end here */}

        </>
    );
};

export default TopProducts;