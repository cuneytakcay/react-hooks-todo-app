import React, { useState } from 'react';
import { Header } from './Header';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import './App.css';

function App() {
	const [todos, setTodos] = useState([
		{ text: 'First thing to do today', isChecked: false },
		{ text: 'Second thing to do today', isChecked: false },
		{ text: 'Third thing to do today', isChecked: false }
	]);

	const addItem = text => {
		const newTodos = [
			...todos, 
			{ text: text, isChecked: false }
		];
		setTodos(newTodos);
	};

	const completeItem = id => {
		const newTodos = [...todos];
		newTodos[id].isChecked = !newTodos[id].isChecked;
		setTodos(newTodos);
	};

	const deleteItem = id => {
		const newTodos = [...todos];
		newTodos.splice(id, 1);
		setTodos(newTodos);
	};

	return (
		<div className="app-container">
			<Header />
			<div className="todo-container">
				{todos.map((todo, index) => 
					<TodoList
						key={index}
						id={index}
						todo={todo}
						completeItem={completeItem}
						deleteItem={deleteItem}
					/>
				)}
			</div>
			<div className="add-todo-container">
				<TodoForm addItem={addItem} />
			</div>
		</div>
	);
}

export default App;
