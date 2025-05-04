import { useState } from "react";
import { menu_list } from "../Assets/Assets";
const Menu = ({ Category, setCategory }) => {
  return (
    <div id="Menu" className="container mx-auto py-5 px-5 md:px-10 lg:px-20">
      <div>
        <h2 className="text-[25px] md:text-[35px] font-semibold">
          Explore our Menu
        </h2>
        <p className="text-[#747474] max-w-[750px] text-[15px] md:text-[17px] mt-1 md:mt-3">
          Experience the convenience of food delivery at your fingertips with
          our app. Order now and enjoy delicious meals delivered straight to
          your door.
        </p>
      </div>
      <div className=" flex justify-between items-center gap-5 md:gap-7 my-10 overflow-scroll scrollbar-hide">
        {menu_list.map((item) => {
          const { id, menu_name, menu_image } = item;
          return (
            <div
              onClick={() =>
                setCategory((prev) => (prev === menu_name ? "All" : menu_name))
              }
              key={id}
              className="flex flex-col items-center gap-3"
            >
              <img
                src={menu_image}
                alt={menu_name}
                className={`w-[7.5vw] min-w-[80px] rounded-full cursor-pointer transition-all duration-100 object-cover ${
                  Category === menu_name
                    ? "border-2 md:border-4 border-[#ff6347] p-[2px] md:p-[1px]"
                    : ""
                }`}
              />
              <h3 className="text-[15px] md:text-[22px] text-[#747474] font-medium">
                {menu_name}
              </h3>
            </div>
          );
        })}
      </div>
      <hr className="border-0 bg-[#e2e2e2] h-[3px]" />
    </div>
  );
};

export default Menu;
