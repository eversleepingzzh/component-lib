import React, {Component} from 'react';
import './style/index.css'


class MenuItem extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        const {click} = this.props
        return (
            <li className='menu-item'
                onClick={click}
            >
                {this.props.children}
            </li>
        )
    }
}


export default MenuItem
