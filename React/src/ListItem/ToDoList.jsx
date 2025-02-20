import "bootstrap-icons/font/bootstrap-icons.css";

const ToDoList = ({ items, handlechange, handledelete }) => {
  return (
    <div className="container">
      <div className="listitem">
        <ul>
          {items.map((item) => (
            <li className="listcontent">
              <input
                type="checkbox"
                id="check"
                checked={item.checked}
                onChange={() => handlechange(item.id)}
              ></input>

              <label htmlFor="check" className="labelvalue">
                {item.item}
              </label>

              <button className="btn" onClick={() => handledelete(item.id)}>
                <i class="bi bi-trash3"></i>{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
