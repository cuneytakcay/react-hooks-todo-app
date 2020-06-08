import React from 'react';

export function TodoForm({ todo }) {
    return (
        <form>
            <input type="text" placeholder="Add new item..." />
            <button className="add-btn" aria-label="Add">Add</button>
        </form>
    );
}