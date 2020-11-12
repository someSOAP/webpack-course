import * as $ from 'jquery';
import Post from '@models/Post';
import json from '@/assets/json';
import WebpackLogo from '@/assets/webpack-logo';
import '@/styles/styles';
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'

const post = new Post("Webpack Post Title", WebpackLogo);

$("pre").addClass('code').html(post.toString());

console.log(json);
console.log(xml);
console.log(csv);