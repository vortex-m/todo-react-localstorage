import { useState } from "react";
import { useToDo } from "../Context";

function Form() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useToDo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) {
      return null;
    }
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Add To-Do"
        className="w-full border border-black/20 rounded-l-lg px-3 outline-none duration-150 bg-white/90 py-3"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-red-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
