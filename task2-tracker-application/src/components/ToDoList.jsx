import { useState, useRef } from "react";


function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "go to gym", completed: false },
  ]);
  const [inValue, setInValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const delText = useRef();
  const com = useRef();
  const dn = useRef();
  const container = useRef();

  


  const handelChange = (e) => {
    setInValue(e.target.value);
  };

  function handelSumbit(e, index) {
    e.preventDefault();

    if (inValue.trim() !== "") {
      if (editIndex === -1) {
        const newTask = {
          id: tasks.length + 1,
          text: inValue,
          completed: false,
        };
        // Add new task
        setTasks([...tasks, newTask]);
      } else {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? { ...task, text: inValue } : task
        );
        // Update existing task

        setTasks(updatedTasks);
        setEditIndex(-1);
      }
      setInValue("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, j) => j !== index);
    setTasks(updatedTasks);
  }

  function handelEdit(index) {
    setEditIndex(index);
    setInValue(tasks[index].text);
  }

  function completedTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
   
  }

  return (
    <main className="flex justify-center py-[3rem] h-auto">
      <div className="grid justify-center">
        <div className="grid gap-[4rem]">
          <h1 className="text-5xl font-bold m-auto font-main ">
            Task Tracker Application
          </h1>

          <form className="flex justify-center items-center gap-8">
            <input
              name="todolist"
              autoComplete="off"
              value={inValue}
              onChange={handelChange}
              type="text"
              className="text-[1.1rem] font-semibold border border-lime-400 rounded-lg w-[350px] h-[48px] py-6 px-4 m-auto outline-none"
            />
            <button
              onClick={handelSumbit}
              className="w-[120px] h-[50px] bg-lime-400 rounded-lg hover:text-black hover:scale-[1.08] text-white transition-[0.3s]"
            >
              {" "}
              {editIndex === -1 ? "Add" : "Update"}{" "}
            </button>
          </form>

          <div className="grid  w-full m-auto">
            <ol className=" grid  w-full gap-8 m-auto list-decimal">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className={` task flex justify-between py-6 px-6 shadow-lg rounded-2xl ${
                    editIndex !== -1 && index !== editIndex ? "hidden" : ""
                  }  ${
                    task.completed
                      ? " bg-lime-500 "
                      : "bg-white"
                  } `}
                >
                  <div className="flex gap-x-4  items-center ">
                    <span
                      className={`text-xl capitalize font-semibold px-4 py-1 rounded-md ${
                        task.completed
                          ? "line-through  bg-lime-500 text-white "
                          : "text-black"
                      }`}
                    >
                      {task.text}
                    </span>
                    <span>

                      <i className={`font-light   text-sm  
                    ${
                      task.completed
                        ? " visible text-white"
                        : " invisible text-gray-500"
                    }`}>Completed</i>
                    </span>
                  </div>

                  <div className="flex gap-x-5">
                    <span
                      title={task.completed ? "Not Complete" : "Complete"}
                      onClick={() => completedTask(index)}
                      className={`cursor-pointer py-2 px-3 border ${
                        task.completed
                          ? " border-white"
                          : " border-lime-500"
                      } rounded-lg hover:scale-95 transition-[0.3s]`}
                    >
                      <i className={`${task.completed
                          ? "text-white fa-xmark "
                          : " text-lime-400 fa-check "
                      }  fa-solid`}></i>
                    </span>
                    <span
                      title="Edit"
                      onClick={() => handelEdit(index)}
                      className={`cursor-pointer py-2 px-3 border ${
                        task.completed
                          ? " hidden "
                          : " block border-lime-500"
                      } rounded-lg hover:scale-95 transition-[0.3s]`}                    >
                      <i
                        ref={delText}
                        className={`${task.completed
                          ? "text-white "
                          : " text-lime-400"
                      }  fa-solid fa-pen`}
                      ></i>
                    </span>
                    <span
                      title="Delete"
                      onClick={() => deleteTask(index)}
                      className={`cursor-pointer py-2 px-3 border ${
                        task.completed
                          ? " border-white"
                          : " border-lime-500"
                      } rounded-lg hover:scale-95 transition-[0.3s]`}                    >
                      <i className={`${task.completed
                          ? "text-white "
                          : " text-lime-400"
                      }   fa-solid fa-trash`}></i>
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
export default ToDoList;
