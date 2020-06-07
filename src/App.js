import React, { useState } from 'react';
import './App.css';

const Header = () => (
	<div className="header">
		<h1>TODO LIST</h1>
	</div>
);

const TodoList = ({ todo }) => <div className="todo-item">{todo.text}</div>

const TodoForm = () => (
	<form>
		<input type="text" placeholder="Add new item..." />
		<button>Add</button>
	</form>
);

function App() {
	const [todos, setTodos] = useState([
		{ text: 'First thing to do today' },
		{ text: 'Second thing to do today' },
		{ text: 'Third thing to do today' },
	]);

	return (
		<div className="app-container">
			<Header />
			<div className="todo-container">
				{todos.map(todo => <TodoList todo={todo} />)}
			</div>
			<div className="add-todo-container">
				<TodoForm />
			</div>
		</div>
	);
}

export default App;
