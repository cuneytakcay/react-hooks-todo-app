import React from 'react';

export function TodoList({ todo }) {
    return (
        <div className="todo-item">
            <button 
                className="check-btn" 
                arial-label="Check"
            >
                &#10004;
            </button>
            {todo.text}
            <button 
                className="delete-btn" 
                aria-label="Delete"
            >
                &#10006;
            </button>
        </div>
    );
}