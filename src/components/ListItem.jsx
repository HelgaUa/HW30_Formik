import React from 'react';
import { Button } from './Button.jsx';

export function ListItem(props) {
    const { id, handleUpdateItem, text, checked } = props;
    const name = `checked_${Math.random()}`;
    const handleRemove = () => {
        const currentItems = JSON.parse(localStorage.getItem('todos'));
        const newItems = currentItems.filter((item) => item.id !== id);
        localStorage.setItem('todos', JSON.stringify(newItems));
        handleUpdateItem(newItems);
    };

    return (
        <li className="list_component">
            <input id={name} className="form-check-input" type="checkbox" />
            <label htmlFor={name} className="list_component_text">
                {text}
            </label>
            <Button
                className="btn btn-outline-danger"
                onClick={handleRemove}
                style={{ textDecoration: checked ? 'line-through' : 'initial' }}
            >
                Remove
            </Button>
        </li>
    );
}