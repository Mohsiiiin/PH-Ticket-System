import React from 'react';
import vector1 from "../assets/vector1.png"
const Banner = ({ticketsTotal, ticketsStatusTotal,resolveTotal}) => {
    return (
         <div className="w-full my-10 py-4 flex flex-col lg:flex-row gap-6 justify-center items-center">

  {/* Card 1 */}
  <div className="relative w-full max-w-[708px]">
    <img
      className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-[180px] sm:h-[220px] lg:h-[250px] object-cover rounded-xl"
      src={vector1}
      alt=""
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h2 className="text-lg sm:text-xl font-bold">In-Progress</h2>
      <h2 className="text-2xl sm:text-3xl font-semibold">{ticketsStatusTotal}</h2>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative w-full max-w-[708px]">
    <img
      className="w-full bg-gradient-to-r from-[#54CF68] to-[#00827A] h-[180px] sm:h-[220px] lg:h-[250px] object-cover rounded-xl "
      src={vector1}
      alt=""
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h2 className="text-lg sm:text-xl font-bold">Completed</h2>
      <h2 className="text-2xl sm:text-3xl font-semibold">{resolveTotal}</h2>
    </div>
  </div>

</div>
    );
};

export default Banner;