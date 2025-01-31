import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="shadow-2xl mb-3">
      <ul className="flex gap-10 max-w-6xl mx-auto justify-center items-center w-100 h-15 ">
        <li>
          <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
