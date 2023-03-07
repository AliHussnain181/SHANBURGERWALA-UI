import React, { useEffect } from "react";
import b1 from "../assets/burger1.png"
import b2 from "../assets/burger2.png"
import b3 from "../assets/burger3.png"
import "../styles/cart.css"
import {
    cheeseBurgerIncrement,
    cheeseBurgerDecrement,
    vegCheeseBurgerIncrement,
    vegCheeseBurgerDecrement,
    burgerWithFriesIncrement,
    burgerWithFriesDecrement,
    calculatePrice,

} from "../redux/Slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ value, title, img, increment, decrement }) => (
    <div className=" w-[90%] h-[14vh] rounded-lg bg-[rgb(246,246,246)] flex justify-between mt-4 items-center mx-auto">
        <div className="flex items-center gap-x-1 ml-4">
            <p className="text-sm font-rob w-[19vw] sm:text-lg ">{title}</p>
            <img className="w-[14vh]" src={img} alt="" />
        </div>
        <div className="gap-x-7 mr-4">
            <button className="bg-[black] text-white w-[4vh] h-[6vh] rounded-sm" onClick={increment}>+</button>
            <input className="w-[6vh] h-[6vh] rounded-sm text-center" type="number" readOnly value={value} />
            <button className="bg-[black] text-white w-[4vh] h-[6vh] rounded-sm" onClick={decrement}>-</button>
        </div>
    </div>
);


const Cart = () => {

    const {
        cartItems: {
            cheeseBurger: { quantity: cheeseBurger },
            vegCheeseBurger: { quantity: vegCheeseBurger },
            burgerWithFries: { quantity: burgerWithFries },
        },
        subTotal,
        tax,
        shippingCharges,
        total,
    } = useSelector((state) => state.cart);


    const { cartItems: orderItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const increment = (item) => {
        switch (item) {
            case 1:
                dispatch(cheeseBurgerIncrement());
                dispatch(calculatePrice());
                break;
            case 2:
                dispatch(vegCheeseBurgerIncrement());
                dispatch(calculatePrice());
                break;
            case 3:
                dispatch(burgerWithFriesIncrement());
                dispatch(calculatePrice());
                break;

            default:
                dispatch(cheeseBurgerIncrement());
                dispatch(calculatePrice());
                break;
        }
    };

    const decrement = (item) => {
        switch (item) {
            case 1:
                if (cheeseBurger === 0) break;
                dispatch(cheeseBurgerDecrement());
                dispatch(calculatePrice());
                break;
            case 2:
                if (vegCheeseBurger === 0) break;
                dispatch(vegCheeseBurgerDecrement());
                dispatch(calculatePrice());
                break;
            case 3:
                if (burgerWithFries === 0) break;
                dispatch(burgerWithFriesDecrement());
                dispatch(calculatePrice());
                break;

            default:
                if (cheeseBurger === 0) break;
                dispatch(cheeseBurgerDecrement());
                dispatch(calculatePrice());
                break;
        }
    };


    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(orderItems));
        localStorage.setItem(
            "cartPrices",
            JSON.stringify({
                subTotal,
                tax,
                shippingCharges,
                total,
            })
        );
    }, [orderItems, subTotal, tax, shippingCharges, total]);

    return (

        <div className="cart h-[87vh] overflow-y-hidden">
            <div className="pt-11  sm:w-[70%] sm:mx-auto">
                <CartItem
                    title={"Cheese Burger"}
                    img={b1}
                    value={cheeseBurger}
                    increment={() => increment(1)}
                    decrement={() => decrement(1)}
                />
                <CartItem
                    title={"Veg Cheese Burger"}
                    img={b2}
                    value={vegCheeseBurger}
                    increment={() => increment(2)}
                    decrement={() => decrement(2)}
                />
                <CartItem
                    title={"Cheese Burger with French Fries"}
                    img={b3}
                    value={burgerWithFries}
                    increment={() => increment(3)}
                    decrement={() => decrement(3)}
                />

                <div className="w-[80%] flex justify-between mx-auto sm:w-[70%] text-white sm:mx-auto  mt-7">
                    <div className="font-open font-bold">
                        <p>Sub Total</p>
                        <p>Tax</p>
                        <p>Shiping Charges</p>
                        <p>Total</p>
                    </div>
                    <div className="font-rob text-center">
                        <p>{subTotal}</p>
                        <p>{tax}</p>
                        <p>{shippingCharges}</p>
                        <p>{total}</p>
                        <button className=" bg-[#428dca] text-white p-2 rounded-sm mb-5 mt-5 ">Check Out</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Cart
