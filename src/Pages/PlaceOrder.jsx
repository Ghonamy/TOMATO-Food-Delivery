import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="container mx-auto py-5 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center mt-20 mb-36 gap-10">
        <div className="w-full lg:w-[50%] mr-0 lg:mr-20">
          <h2 className="text-[30px] font-semibold mb-8">
            Delivery Information
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onFocus={(e) => (e.target.style.outlineColor = "#ff6345")}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onFocus={(e) => (e.target.style.outlineColor = "#ff6345")}
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onFocus={(e) => (e.target.style.outlineColor = "#ff6345")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Street"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onFocus={(e) => (e.target.style.outlineColor = "#ff6345")}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onFocus={(e) => (e.target.style.outlineColor = "#ff6345")}
              />
              <input
                type="text"
                placeholder="State"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onFocus={(e) => (e.target.style.outlineColor = "#ff6345")}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <input
                type="text"
                placeholder="Zip Code"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onFocus={(e) => (e.target.style.outlineColor = "#ff6345")}
              />
              <input
                type="text"
                placeholder="Country"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onFocus={(e) => (e.target.style.outlineColor = "#ff6345")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onFocus={(e) => (e.target.style.outlineColor = "#ff6345")}
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%]">
          <h3 className="text-[20px] md:text-[25px] font-semibold">
            Cart Totals
          </h3>
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-[#555] text-[17px] md:text-[20px]">Subtotal</p>
              <p className="text-[#555] text-[17px] md:text-[20px]">
                ${getTotalCartAmount()}
              </p>
            </div>
            <hr className="border-0 h-[1px] bg-[#757575]" />
            <div className="flex justify-between items-center">
              <p className="text-[#555] text-[17px] md:text-[20px]">
                Delivery Fee
              </p>
              <p className="text-[#555] text-[17px] md:text-[20px]">${5}</p>
            </div>
            <hr className="border-0 h-[1px] bg-[#757575]" />
            <div className="flex justify-between items-center">
              <p className="text-[#555] text-[18px] md:text-[23px] font-semibold">
                Total
              </p>
              <p className="text-[#555] text-[18px] md:text-[23px] font-semibold">
                ${getTotalCartAmount() + 5}
              </p>
            </div>

            <button className="w-[230px] h-[40px] text-white bg-[#ff6345] rounded mt-4 md:mt-8 mx-auto cursor-pointer">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
