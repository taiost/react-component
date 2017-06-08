/**
 * Created by xutao on 2017/6/9.
 * 计数器组件
 */

import React from 'react';
const {Component, PropTypes} = React;

class Count extends Component {
  static propTypes = {
    initValue: PropTypes.number
  };
  static defaultProps = {
    initValue: 0
  };

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
        <div>{`当前值是：${value}`} </div>
        <button onClick={this.onClick.bind(this, 1)}>点击加一</button>
        <button onClick={this.onClick.bind(this, -1)}>点击减一</button>
      </div>
    )
  }
}

//导出组件
export default Count;