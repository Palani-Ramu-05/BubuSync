import './Task.css';

function Task({ task, onToggle, onDelete }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default Task;