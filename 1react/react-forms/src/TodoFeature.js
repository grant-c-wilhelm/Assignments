import React, {Component} from 'react';
import Form from './Form';

class TodoFeature extends Component {
    constructor(){
        super();
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem (items){
        this.setState(ps => ({
            items: [items, ...ps.items]
        }))
    }
    render(){ 
        return (
            <div>
                <Form submit={this.addItem} />
                {/*our list and form get rendered here.*/}
            </div>
        )
    }
}

export default TodoFeature;