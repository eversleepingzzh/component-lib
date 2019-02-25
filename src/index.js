
import React, {Component} from 'react';
import {createPortal, findDOMNode} from 'react-dom';
import DropDown from './Dropdown.js';
import MenuItem from './MenuItem.js'
import addDOMEventListener from 'add-dom-event-listener';
import { contains } from './utils'

function noop() {}

class AutoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
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
        addDOMEventListener(document.body,'click',this.onDocumentClick)
    }

    componentWillMount() {

    }

    // componentDidupdate(_, prevState) {
    //     console.log(11111);
    //     this.clickOuter = addDOMEventListener(document.body,'click',function() {
    //         console.log('hello i am ok');
    //     })
    // }


    handleChange = (e) => {
        const {onChange} = this.props
        let value = e.target.value
        if(onChange){ onChange(value)}
        this.setOpenState(true)
        this.handleSearch(value)
    }

    handleFocus = (e) => {
        const {onFocus} = this.props
        if(onFocus){ onFocus('focus') }
        this.setOpenState(true)
    }

    handleBlur = (e) => {
        const {onBlur} = this.props
        if(onBlur){ onBlur('blur') }
    }

    handleSearch = (value) => {
        const {onSearch} = this.props
        if(onSearch){ onSearch(value)}
    }

    onDocumentClick = (e) => {

        let root = this.getElementRef()

        let target = e.target
        let r = contains(root,target)
        console.log(r,this.onPopupMouseDown);
        if(!r && !this.onPopupMouseDown) {
            this.setOpenState(false)
        }
    }

    setInputValue = (value) => {
        this.input.value = value
        this.setOpenState(false)
    }

    getElementRef = () => {
        return findDOMNode(this)
    }

    saveInput = (node) => {
        this.input = node
    }

    setOpenState = (open) => {
        let value = this.input.value
        if(value && open) {
            this.setState({
                open: open
            })
        }else {
            this.setState({
                open: false
            })
        }
    }

    clickOnDropDown = () => {
        this.onPopupMouseDown = true
        clearTimeout(this.mouseDownTimeout);
        this.mouseDownTimeout = setTimeout(() => {
            this.onPopupMouseDown = false
        },0)
    }

    renderMenu() {
        const { dataSource } = this.props
        var options
        options = dataSource.map((item,index) => {
            return(
                <MenuItem key={index}
                          click={() => {
                            this.setInputValue(item)
                          }}
                >{item}</MenuItem>
            )
        })

        return (
            <DropDown
                targetDom={this.getElementRef}
                clickOnDropDown={this.clickOnDropDown}
            >
                {options}
            </DropDown>
        )
    }


    render() {
        const {props, state} = this
        return(
            <div>
                <input
                    className={'auto-complete-input'}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    ref = {this.saveInput}
                    placeholder = {props.placeholder}
                />
                {
                    state.open ? this.renderMenu() : null
                }
            </div>
        )
    }
}

export default AutoComplete;
