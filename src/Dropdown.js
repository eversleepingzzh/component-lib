import React, {Component} from 'react';
import {createPortal, findDOMNode} from 'react-dom';
import domAlign from 'dom-align';
import './style/index.css'

function noop() {}


class DropDown extends Component {
    constructor(props) {
        super(props)
        const doc = window.document;
        this.node = doc.createElement('div');
        this.node.style.position = 'absolute'
        this.node.style.top = '0'
        this.node.style.left = '0'
        this.node.style.width = '100%';
        doc.body.appendChild(this.node);

        this.state = {
            width: 0
        }
    }

    static defaultProps = {
        options:[],
        onSelect: noop,
    }

    componentDidMount() {
        this.alignItem()//对齐
        let width = this.getInputWidth()
        this.setState({
            width
        })
    }

    getInputWidth = () => {
        const {targetDom} = this.props
        let dom = targetDom()
        return dom.offsetWidth + 'px'
    }

    getRootDom = () => {
        return findDOMNode(this)
    }


    alignItem = () => {
        const {targetDom} = this.props
        let source = this.getRootDom()
        let target = targetDom()
        let alignConfig = {
            points: ['tl', 'bl']
        }
        if(target && source) {domAlign(source,target,alignConfig)}
    }


    render() {
        let {width} = this.state
        return createPortal(
            <div
                className='dropdown-menu'
                style={{width: width}}
                onMouseDown={this.props.clickOnDropDown}
            >
                {this.props.children}
            </div>,
            this.node
        )
    }
}


export default DropDown
