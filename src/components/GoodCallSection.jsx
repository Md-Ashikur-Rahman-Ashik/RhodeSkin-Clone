import Image from "next/image";
import React from "react";

const GoodCallSection = () => {
  return (
    <div className="container mx-auto my-8">
      {/* Central Div */}
      <div className="flex md:flex-row-reverse flex-col-reverse">
        {/* First Child Element */}
        <Image
          src={"/GoodCallImg.webp"}
          alt="Travel Section Image"
          width={1000}
          height={1000}
          className="md:w-1/2 w-full rounded-r-xl"
        ></Image>
        {/* Second Child Div */}
        <div className="md:w-1/2 w-full p-8 bg-[#efefef] rounded-l-xl flex flex-col justify-end">
          <h3 className="text-[34px] text-[#67645E] md:w-2/3 font-bold">
            text. treat. tint.
          </h3>
          <p className="text-[#67645E] md:w-2/3 font-medium my-4">
            Take zalmar with you everywhere this winter. The Lip Case is
            compatible with iPhone and your favorite Peptide Lip Treatment or
            Tint.
          </p>
          <button className="border lg:w-1/4 md:w-1/2 w-2/3 h-[35px] border-[#67645E] text-[#67645E] px-4 py-1 rounded-full hover:bg-white hover:text-gray-500 font-medium transition">
            GOOD CALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodCallSection;
