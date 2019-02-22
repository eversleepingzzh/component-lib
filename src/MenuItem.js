import React, {Component} from 'react';
import './style/menuItem.css'


class MenuItem extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className='menu-item'>
                {this.props.children}
            </li>
        )
    }
}


export default MenuItem
