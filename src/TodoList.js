import React from 'react';

export function TodoList({ todo, id, completeItem, deleteItem }) {
    return (
		<div
			className="todo-item"
			style={{ textDecoration: todo.isChecked ? 'line-through' : '' }}
		>
            <button 
                style={{ fontSize: todo.isChecked ? '14px' : '0px' }}
                className="check-btn" 
                arial-label="Check"
                onClick={() => completeItem(id)}
            >
                &#10004;
            </button>
            {todo.text}
            <button 
                className="delete-btn" 
				aria-label="Delete"
				onClick={() => deleteItem(id)}
            >
                &#10006;
            </button>
        </div>
    );
}