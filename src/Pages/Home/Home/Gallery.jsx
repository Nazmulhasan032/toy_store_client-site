import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import car1 from "../../../assets/gallery/car1.jpg";
import car2 from "../../../assets/gallery/car2.jpg";
import car3 from "../../../assets/gallery/car3.jpg";
import car4 from "../../../assets/gallery/car4.jpg";
import car5 from "../../../assets/gallery/car5.jpg";
import car6 from "../../../assets/gallery/car6.jpg";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      
    });
  }, []);

  return (
    <>
      <h2 className="text-4xl font-bold pl-4 mt-12">Gallery</h2>

      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 my-5">
        {/* card start */}
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
          <figure><img src={car1} alt="cars" /></figure>
          <div className="card-body">
            <h2 className="card-title">Speedster Racer</h2>
            <p>This sleek and speedy toy car is built for racing enthusiasts, with its aerodynamic design and high-performance wheels.</p>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
          <figure><img src={car2} alt="cars" /></figure>
          <div className="card-body">
            <h2 className="card-title">Monster Mash</h2>
            <p>The Monster Mash is a monster truck toy car with oversized wheels and a tough, rugged exterior. It ready to crush obstacles and perform impressive stunts, making it a hit among thrill-seekers.</p>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
          <figure><img src={car3} alt="cars" /></figure>
          <div className="card-body">
            <h2 className="card-title">Eco Electric</h2>
            <p>The Eco Electric toy car is an environmentally friendly choice, designed to mimic the appearance of an electric vehicle. It features a vibrant color scheme and promotes sustainable transportation play.</p>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
          <figure><img src={car4} alt="cars" /></figure>
          <div className="card-body">
            <h2 className="card-title">Retro Roadster</h2>
            <p>Inspired by classic cars of the past, the Retro Roadster is a charming toy car with a vintage look. It features a glossy finish and a convertible top, making it a stylish choice for young drivers.</p>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
          <figure><img src={car5} alt="cars" /></figure>
          <div className="card-body">
            <h2 className="card-title">Adventure Cruiser</h2>
            <p>The Adventure Cruiser is a rugged off-road toy car that can conquer any terrain. Its sturdy tires and durable construction make it perfect for outdoor adventures.</p>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
          <figure><img src={car6} alt="cars" /></figure>
          <div className="card-body">
            <h2 className="card-title">Turbo Tornado</h2>
            <p>The Turbo Tornado is a lightning-fast toy car that zooms across the floor with incredible speed. Its sleek design and powerful motor make it a favorite among speed demons and aspiring race car drivers.</p>
          </div>
        </div>
        {/* card end */}
      </div>
    </>
  );
};

export default Gallery;



























































// import car1 from "../../../assets/gallery/car1.jpg";
// import car2 from "../../../assets/gallery/car2.jpg";
// import car3 from "../../../assets/gallery/car3.jpg";
// import car4 from "../../../assets/gallery/car4.jpg";
// import car5 from "../../../assets/gallery/car5.jpg";
// import car6 from "../../../assets/gallery/car6.jpg";

// const Gallery = () => {
//     return (
//         <>
//             <h2 className="text-4xl font-bold pl-4 mt-12">Gallery</h2>

//             <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 my-5'>
//                 {/* card start */}
//                 <div className="card card-compact bg-base-100 shadow-xl">
//                     <figure><img src={car1} alt="cars" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">Speedster Racer</h2>
//                         <p>This sleek and speedy toy car is built for racing enthusiasts, with its aerodynamic design and high-performance wheels.</p>

//                     </div>
//                 </div>
//                 {/* card end */}
//                 {/* card start */}
//                 <div className="card card-compact bg-base-100 shadow-xl">
//                     <figure><img src={car2} alt="cars" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">Monster Mash</h2>
//                         <p>The Monster Mash is a monster truck toy car with oversized wheels and a tough, rugged exterior. It ready to crush obstacles and perform impressive stunts, making it a hit among thrill-seekers.</p>

//                     </div>
//                 </div>
//                 {/* card end */}
//                 {/* card start */}
//                 <div className="card card-compact bg-base-100 shadow-xl">
//                     <figure><img src={car3} alt="cars" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">Eco Electric</h2>
//                         <p>The Eco Electric toy car is an environmentally friendly choice, designed to mimic the appearance of an electric vehicle. It features a vibrant color scheme and promotes sustainable transportation play.</p>

//                     </div>
//                 </div>
//                 {/* card end */}
//                 {/* card start */}
//                 <div className="card card-compact bg-base-100 shadow-xl">
//                     <figure><img src={car4} alt="cars" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">Retro Roadster</h2>
//                         <p>Inspired by classic cars of the past, the Retro Roadster is a charming toy car with a vintage look. It features a glossy finish and a convertible top, making it a stylish choice for young drivers.</p>

//                     </div>
//                 </div>
//                 {/* card end */}
//                 {/* card start */}
//                 <div className="card card-compact bg-base-100 shadow-xl">
//                     <figure><img src={car5} alt="cars" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">Adventure Cruiser</h2>
//                         <p>The Adventure Cruiser is a rugged off-road toy car that can conquer any terrain. Its sturdy tires and durable construction make it perfect for outdoor adventures.</p>

//                     </div>
//                 </div>
//                 {/* card end */}
//                 {/* card start */}
//                 <div className="card card-compact bg-base-100 shadow-xl">
//                     <figure><img src={car6} alt="cars" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">Turbo Tornado</h2>
//                         <p>The Turbo Tornado is a lightning-fast toy car that zooms across the floor with incredible speed. Its sleek design and powerful motor make it a favorite among speed demons and aspiring race car drivers.</p>

//                     </div>
//                 </div>
//                 {/* card end */}

//             </div>

//         </>
//     );
// };

// export default Gallery;