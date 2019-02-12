
import React, {Component} from 'react';
import './style.css';


class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            isShowMenu: false,
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleBlur(e) {
        console.log('blur');
        this.setState({
            isShowMenu: false
        })
    }

    handleFocus(e) {
        console.log('fous');
        if(this.state.value) {
            this.setState({
                isShowMenu: true
            })
        }
    }


    renderMenu() {
        return (
            <div>
                <p>{this.state.value}</p>
                <p>{this.state.value + this.state.value}</p>
                <p>{this.state.value + this.state.value + this.state.value}</p>
            </div>
        )
    }

    render() {
        const {isShowMenu} = this.state
        return(
            <div>
                <input
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                />
                {
                    isShowMenu && this.renderMenu()
                }
            </div>
        )
    }
}

export default MyComponent;
