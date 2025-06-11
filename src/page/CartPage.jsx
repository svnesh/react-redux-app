import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../store/CartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemovetoCart = (item) => {
    dispatch(removeCart(item));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Cart Items</h1>
      <div className="flex flex-row flex-wrap items-center gap-8 p-4 m-4">
        {
          cartItems.map((item) => (
            <div key={item.id} className="flex flex-col w-70 px-4 py-2 gap-4 items-center rounded-xs border-solid outline-1 outline-offset-0 outline-gray-200 shadow-lg">
              <img src={item.image} className="w-30 h-30 object-cover"></img>
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p className="text-sm font-bold text-gray-600">INR: {item.price}</p>
              <button
                className="px-3 py-2 items-center text-sm font-medium bg-red-600 text-white rounded-2xl cursor-pointer"
                onClick={() => {
                  handleRemovetoCart(item);
                }}
              >
                Remore from cart
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CartPage