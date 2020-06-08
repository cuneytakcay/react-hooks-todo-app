import React, { useState } from 'react';

export function TodoForm({ addItem }) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        addItem(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                placeholder="Add new item..."
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="add-btn" aria-label="Add">Add</button>
        </form>
    );
}