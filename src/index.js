import * as $ from "jquery";

import Post from "@models/Post";
import "./styles/styles.css";
import json from "./assets/json";
import WebpackLogo from "./assets/webpack-logo";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";
import './styles/less.less'

const post = new Post("Webpack post title", WebpackLogo);

$("pre").addClass('code').html(post.toString());

console.log("Post to string:", post.toString());

// console.log("JSON:", json);
// console.log("XML: ", xml);
// console.log("CSV: ", csv);
