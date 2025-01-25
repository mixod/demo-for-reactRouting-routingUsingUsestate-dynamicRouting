import { NavLink } from "react-router-dom";
import { data } from "../../assets/data";
function ContactMain() {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <NavLink to={"/contact/" + item.id}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactMain;
