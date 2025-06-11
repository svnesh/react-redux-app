import { useDispatch } from "react-redux";
import { addCart } from "../store/CartSlice";

const SingleProductPage = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddtoCart = (item) => {
    dispatch(addCart(item));
  };

  return (
    <div className="flex flex-col w-70 px-4 py-2 gap-4 items-center rounded-xs border-solid outline-1 outline-offset-0 outline-gray-200 shadow-lg">
      <img src={item.image} className="w-30 h-30 object-cover"></img>
      <h1 className="text-xl font-semibold">{item.title}</h1>
      {/* <p className="text-sm font-medium text-gray-600">{(item.description).toString().substring(0,150)}</p> */}
      <p className="text-sm font-bold text-gray-600">INR: {item.price}</p>
      <button
        className="px-3 py-2 items-center text-sm font-medium bg-blue-600 text-white rounded-2xl cursor-pointer"
        onClick={() => {
          handleAddtoCart(item);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default SingleProductPage;
