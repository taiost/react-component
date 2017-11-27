/**
 * Created by xutao on 2017/6/9.
 * 计数器组件
 */

import React from 'react';
import './component.scss';
const {Component} = React;

class Count extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.initValue
    };
  }

  onClick(next) {
    const {
      value
    } = this.state;
    this.setState({
      value: value + next
    });
  }

  render() {
    const {
      value
    } = this.state;
    return (
      <div>
        <div className="header">{`当前值：${value}`} </div>
        <button onClick={this.onClick.bind(this, 1)}>点击+1</button>
        <button onClick={this.onClick.bind(this, -1)}>点击-1</button>
      </div>
    )
  }
}

//导出组件
export default Count;