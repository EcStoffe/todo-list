import React from 'react';

const List = props => (
    <ul>
        {
            props.items.map((item, index) =>
            <li key={index}>
            <input className='checkBoxField'  type="checkbox" checked={item.checked} onClick={() => props.onToggle(index)}/>
            <span className={item.checked ? 'itemDone' : 'itemNotDone'}>{item.text}</span>
                <button className='btnrem glyphicon glyphicon-eject' onClick={() => props.onRemove(index)} />
            </li>)
        }
    </ul>
);

export default List;