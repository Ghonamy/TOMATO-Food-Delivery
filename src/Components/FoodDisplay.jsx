import { useContext } from "react";
import { food_list } from "../Assets/Assets";
import Dish from "./Dish";
import { StoreContext } from "../Context/StoreContext";
const FoodDisplay = ({ Category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div
      id="Food-Display"
      className="container mx-auto py-5 px-5 md:px-10 lg:px-20"
    >
      <h2 className="text-[28px] md:text-[35px] font-medium">
        Top Dishes Near You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-5">
        {food_list.map((dish) => {
          const { id, name, image, price, description, category } = dish;
          if (Category === "All" || Category === category) {
            return (
              <Dish
                key={id}
                id={id}
                name={name}
                image={image}
                price={price}
                description={description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
