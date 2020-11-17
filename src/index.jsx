import * as $ from 'jquery';
import Post from '@models/Post';
import json from '@/assets/json';
import WebpackLogo from '@/assets/webpack-logo';
import './babel_test';
import '@/styles/styles';
import '@/styles/less.less';
import '@/styles/scss.scss';
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'

import React from 'react';
import { render } from 'react-dom';

const post = new Post("Webpack Post Title", WebpackLogo);

$("pre").addClass('code').html(post.toString());

console.log(json);
console.log(xml);
console.log(csv);

const App = () => (
    <div>REACT WORKS</div>
);

render(<App/>, document.getElementById('app'))