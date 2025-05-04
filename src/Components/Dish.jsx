import { useContext } from "react";
import { assets } from "../Assets/Assets";
import Rating from "../Assets/rating_stars.png";
import { StoreContext } from "../Context/StoreContext";
const Dish = ({ id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="rounded-2xl shadow-xl relative">
      <img className="rounded-t-2xl" src={image} alt={name} />
      {!cartItems[id] ? (
        <img
          onClick={() => addToCart(id)}
          src={assets.add_icon_white}
          alt="Add_Icon"
          className="absolute top-35 right-2 w-[30px] h-[30px] cursor-pointer"
        />
      ) : (
        <div className="flex items-center gap-2 bg-white rounded-full absolute top-35 right-2 px-[3px] py-[2px] shadow-lg">
          <img
            onClick={() => removeFromCart(id)}
            src={assets.remove_icon_red}
            alt="Remove_Icon"
            className="w-[30px] h-[30px] cursor-pointer"
          />
          <p>{cartItems[id]}</p>
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_green}
            alt="Add_Icon"
            className="w-[30px] h-[30px] cursor-pointer"
          />
        </div>
      )}
      <div className="px-3 md:px-5 py-1 md:py-2">
        <div className="flex items-center justify-between my-3">
          <h3 className="text-[20px] font-medium">{name}</h3>
          <img src={Rating} alt="Rating Stars" className="w-[70px] h-[15px]" />
        </div>
        <p className="text-[#747474] text-[14px]">{description}</p>
        <p className="text-[20px] text-[#ff6354] font-semibold my-2">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default Dish;
