import React, {Component} from 'react';
import List from "./List";


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { text: "Homework", checked: false },
                { text: "Work", checked: true }
            ]
        };
    }

    onSubmit(e) {
        e.preventDefault();
        const newItem = [{ text: this.refs.input.value, checked: false }];
        if(this.refs.input.value.trim() === '') {
            return alert ('This is an empty field')
        }
        else {
        const newState = this.state.items.concat(newItem);
        this.setState({ items: newState });
        }
        this.refs.input.value = '';
    };

    onToggle(i) {
        const newState = this.state.items.map((item, index) => i === index ? { ...item, checked: !item.checked } : item);
        this.setState({ items: newState })
    }

    onRemove(i) {
        const newState = this.state.items.filter((item, index) => i !== index);
        this.setState({ items: newState });
    }

    onRemoveDone() {
        const newState = this.state.items.filter((item) => {
            if (!item.checked) {
                return item;
            } else {

            }
        });
        this.setState({ items: newState });
    }


    render() {
        return (
            <div className='mainContainer'>
                <h1>A todo list</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input placeholder='Enter task here...' type="text" ref="input"/>
                    <button type="submit">Submit</button>
                </form>
                <List items={this.state.items} onToggle={(item) => this.onToggle(item)} onRemove={(item) => this.onRemove(item)}/>
                <button className='summarizebtn' onClick={(item) => this.onRemoveDone(item)}>Summarize Me</button>
            </div>
    )}

}
