
import React, {Component} from 'react';
import './style.css';

function noop() {}

class AutoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    static defaultProps = {
        dataSource: [],
        style: {},
        onSelect: noop,
        onSearch: noop,
        placeholder: "placeholder"
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    saveInput(node) {
        this.input = node
    }

    handleChange(e) {
        const {onChange} = this.props
        let value = e.target.value
        if(onChange){ onChange(value)}
        this.handleSearch(value)
    }

    handleFocus(e) {
        const {onFocus} = this.props
        if(onFocus){ onFocus('focus') }
    }

    handleBlur(e) {
        const {onBlur} = this.props
        if(onBlur){ onBlur('blur') }
    }

    handleSearch(value) {
        const {onSearch} = this.props
        if(onSearch){ onSearch(value)}
    }

    setInputValue = (value) => {
        console.log(this.input.value, 'input')
        this.input.value = value
    }
    renderMenu() {
        const { dataSource } = this.props

        var options
        options = dataSource.map((item,index) => {
            return(
                <div key={index} onClick={() => {
                    console.log(item)
                    this.setInputValue(item)
                }}>{item}</div>
            )
        })

        return (
            <div className={'menu'}>
                {options}
            </div>
        )
    }



    render() {
        const {props, state} = this
        return(
            <div>
                <input
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    ref = {this.saveInput.bind(this)}
                />
                {
                    this.renderMenu()
                }
            </div>
        )
    }
}

export default AutoComplete;
