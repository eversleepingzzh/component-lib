import React, {Component} from 'react';
import './style/menu.css';



class Menu extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        <ul className='menu-container'>
            {this.props.children}
        </ul>
    }
}

export default Menu
