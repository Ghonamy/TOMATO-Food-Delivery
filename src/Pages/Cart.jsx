import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { IoClose } from "react-icons/io5";
import { Link, Navigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, food_list, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 pt-5 md:pt-10 pb-14 items-center">
      <div className="grid grid-cols-6 gap-[15px] md:gap-[40px] text-[#808080] text-[13px] md:text-[18px] ml-0 lg:ml-[60px] lettercase md:uppercase">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="border-0 h-[1px] rounded-full bg-[#757575] my-3" />
      {food_list.map((dish) => {
        const { id, name, price, image } = dish;
        if (cartItems[id] > 0) {
          return (
            <div key={id}>
              <div className="grid grid-cols-6 gap-[15px] md:gap-[40px] items-center ml-0 lg:ml-[60px] text-[13px] md:text-[19px]">
                <img
                  className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded"
                  src={image}
                  alt="name"
                />
                <p>{name}</p>
                <p>${price}</p>
                <p>{cartItems[id]}</p>
                <p>${cartItems[id] * price}</p>
                <IoClose
                  onClick={() => removeFromCart(id)}
                  className="text-[20px] md:text-[25px] cursor-pointer"
                />
              </div>
              <hr className="border-0 h-[1px] rounded-full bg-[#757575] my-3" />
            </div>
          );
        }
      })}
      <div className="flex flex-col md:flex-row justify-between items-center my-8 md:my-14">
        <div className="ml-0 lg:ml-[60px] mr-0 lg:mr-60 w-[100%] lg:w-[50%]">
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
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
              </p>
            </div>
            <Link to={"/order"}>
              <button className="w-[230px] h-[40px] text-white bg-[#ff6345] rounded mt-4 md:mt-8 mx-auto cursor-pointer">
                BROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%]">
          <p className="text-[17px] md:text-[19px] text-center md:text-left text-[#555] mt-10 md:mt-0 mb-3 md:mb-5">
            If you have a promo code, Enter it here
          </p>
          <div className="flex items-center bg-[#eaeaea] rounded w-[350px] md:w-[400px] h-[45px]">
            <input
              className="w-[70%] pl-3 border-0 outline-0"
              type="text"
              placeholder="Promo Code"
            />
            <button className="bg-[#ff6345] text-white h-[45px] w-[30%] rounded-r-lg cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
