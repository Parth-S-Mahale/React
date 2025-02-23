import "./css/TodoItems.css";
import tick from "./assets/tick.png";
import not_tick from "./assets/not_tick.png";
import cross from "./assets/cross.png";

const TodoItems = ({ number, display, text, setTodos }) => {

    const deleteTodo = (number) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.number !== number);
        setTodos(data);
    };

    const toggle = (number) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for (let i = 0; i < data.length; i++) {
            if (data[i].number === number) {
                if (data[i].display === "") {
                    data[i].display = "line-through";
                } else {
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    };

    return (
        <div className="todoItems">
            <div
                className={`todoitems-container ${display}`}
                onClick={() => {
                    toggle(number);
                }}
            >
                {display === "" ? (
                    <img src={not_tick} alt="" />
                ) : (
                    <img src={tick} alt="" />
                )}
                <div className="todoItems-text">{text}</div>
            </div>
            <img
                className="todoitems-cross-icon"
                onClick={() => {
                    deleteTodo(number);
                }}
                src={cross}
                alt=""
            />
        </div>
    );
};

export default TodoItems;
