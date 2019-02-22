import React from 'react';
import { render} from 'react-dom';
import AutoComplete from '../../src';


function onSelect(value) {
  console.log('onSelect', value);
}

class Complete extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          dataSource: [],
        }
    }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value + '@qq.com',
        value + '@163.com',
        value + '@gmail.com',
      ],
    });
  }

  log = (value) => {
      console.log(value)
  }

  render() {
    const { dataSource } = this.state;
    return (
       <div style={{position:'absolute', top:'200px', left: '200px'}}>
        <AutoComplete
            dataSource={dataSource}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={this.handleSearch}
            onBlur={this.log}
            onFocus={this.log}
            onChange={this.log}
            placeholder="input here"
            />
        </div>
    );
  }
}

render(<Complete />, document.getElementById("root"));
