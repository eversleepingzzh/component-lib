import React, {Component} from 'react';
import classnames from 'classnames';
import './style/index.css'


class MenuItem extends Component{
    constructor(props) {
        super(props)
        this.state = {
            highlight: false
        }
    }

    render() {
        const {click} = this.props
        const {highlight} = this.state
        
        return (
            <li className={classnames('menu-item',{'menu-item-active':highlight})}
                onClick={click}
                onMouseEnter={() => {
                    this.setState({
                        highlight: true
                    })
                }}
                onMouseLeave={() => {
                    this.setState({
                        highlight: false
                    })
                }}
            >
                {this.props.children}
            </li>
        )
    }
}


export default MenuItem
