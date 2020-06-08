import React, { useState } from 'react';
import { Header } from './Header';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import './App.css';

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
