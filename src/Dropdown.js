import React, {Component} from 'react';
import {createPortal, findDOMNode} from 'react-dom';
import domAlign from 'dom-align';


function noop() {}


class DropDown extends Component {
    constructor(props) {
        super(props)
        const doc = window.document;
        this.node = doc.createElement('div');
        this.node.style.position = 'absolute'
        this.node.style.top = '0',
        this.node.style.left = '0',
        this.node.style.width = '100%';
        doc.body.appendChild(this.node);
    }

    static defaultProps = {
        options:[],
        onSelect: noop,

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

    componentDidMount() {
        this.alignItem()
    }

    render() {
        return createPortal(
            <div className='dropdown-menu'>
                {this.props.children}
            </div>,
            this.node
        )
    }
}


export default DropDown
