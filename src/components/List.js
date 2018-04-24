import React from 'react';

const List = props => (
    <ul>
        {
            props.items.map((item, index) =>
            <li key={index}>
            <input type="checkbox" checked={item.checked} onClick={() => props.onToggle(index)}/>
            <span className={item.checked ? 'itemDone' : 'itemNotDone'}>{item.text}</span>
                <button onClick={() => props.onRemove(index)}>Remove me!</button>
            </li>)
        }
    </ul>
);

export default List;