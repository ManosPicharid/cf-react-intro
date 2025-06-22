import { Trash2 } from "lucide-react";
// import {useCallback} from "react";

type Todo = {
  id: number;
  text: string;
};

type TodoListProps = {
  todos: Todo[];
  dispatch: React.Dispatch<{ type: "DELETE"; payload: number }>;
};

const TodoList = ({ todos, dispatch }: TodoListProps) => {
  const handleDelete = (id: number) => () => {
    dispatch({ type: "DELETE", payload: id });
  };

  // const handleDelete = useCallback(
  //   (id: number) => () => {
  //     dispatch({ type: "DELETE", payload: id });
  //   },
  //   [dispatch]
  // );

  return (
    <>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 p-2 rounded"
          >
            <span>{todo.text}</span>
            <button
              onClick={handleDelete(todo.id)}
              className="text-cf-dark-red"
            >
              <Trash2 size={18} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
