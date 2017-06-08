/**
 * Created by xutao on 2017/6/9.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Count from './component';

ReactDom.render(
  <Count initValue={1} />,
  document.getElementById('content')
);