import {
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full px-8 py-2 items-center bg-red-300">
      <div className="flex justify-end">
        <ul className="flex gap-6 text-white font-semibold">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="relative">
            <Link to="/cart" >Cart</Link>
            <span className="flex justify-center items-center text-xs text-white absolute w-5 h-5 -top-2 -right-5 rounded-full bg-green-500">10</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar