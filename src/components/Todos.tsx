import Todo from "../models/todo";

import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = ({
  items,
  onRemove,
}) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={onRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
