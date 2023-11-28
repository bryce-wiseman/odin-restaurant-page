import _ from 'lodash';
import { makeHeader, makeNav, makeReview, makeWaste } from './page-load.js';

let content = document.getElementById('content')

  
content.appendChild(makeHeader());
let header = document.getElementById('header')
header.appendChild(makeNav())
content.appendChild(makeReview())
content.appendChild(makeWaste())  