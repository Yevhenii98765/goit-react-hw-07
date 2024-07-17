import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/Contacts/contactsSlice";
import s from "./Contact.module.css";
export const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const { name, number } = item;

  return (
    <li className={s.style}>
      <div className={s.info}>
        <div className={s.wraper}>
          <h3>Name: </h3>
          <p>{name}</p>
        </div>
        <div className={s.wraper}>
          <h3>Number: </h3>
          <p>{number}</p>
        </div>
      </div>
      <div className={s.button}>
        <button
          className={s.btn}
          onClick={() => dispatch(deleteContact(item.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
export default Contact;
