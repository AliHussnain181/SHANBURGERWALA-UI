import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import b1 from "../assets/burger1.png"
import b2 from "../assets/burger2.png"
import b3 from "../assets/burger3.png"
import "../styles/menu.css"
import MenuCard from "./MenuCard";
import { cheeseBurgerIncrement, vegCheeseBurgerIncrement, burgerWithFriesIncrement, calculatePrice } from "../redux/Slice/cartSlice";


const Menu = () => {

    const dispatch = useDispatch();




    const addToCartHandler = (itemNum) => {


         switch (itemNum) {
          case 1:
            dispatch(cheeseBurgerIncrement());
            dispatch(calculatePrice());
            toast.success("Added To Cart");
            break;
          case 2:
            dispatch(vegCheeseBurgerIncrement());
            dispatch(calculatePrice());
            toast.success("Added To Cart");
            break;
          case 3:
            dispatch(burgerWithFriesIncrement());
            dispatch(calculatePrice());
            toast.success("Added To Cart");
            break;
          default:
            dispatch(cheeseBurgerIncrement());
            dispatch(calculatePrice());
            toast.success("Added To Cart");
            break;
        }
      };
      

    return <div id="menu" className="menu">
        <div className="text-4xl overflow-hidden font-bold mt-20 text-center  font-open">MENU</div>
        <div className="sm:flex sm:gap-x-16 sm:mb-8 md:w-[90%] md:mx-auto">
            <MenuCard
                itemNum={1}
                burgerSrc={b1}
                price={200}
                title="Cheese Burger"
                handler={addToCartHandler}
                delay={0.1}
            />
            <MenuCard
                itemNum={2}
                burgerSrc={b2}
                price={500}
                title="Veg Cheese Burger"
                delay={0.5}
                handler={addToCartHandler}
            />
            <MenuCard
                itemNum={3}
                burgerSrc={b3}
                price={1800}
                title="Cheese Burger with French Fries"
                delay={0.8}
                handler={addToCartHandler}
            />
        </div>
    </div>
};

export default Menu;
