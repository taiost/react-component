/**
 * Created by xutao on 2017/6/9.
 */
import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import Count from '../../components/component';

ReactDom.render(
  <Count initValue={100} />,
  document.getElementById('content')
);