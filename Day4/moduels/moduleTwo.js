//import { } from "./moduleOne"; // regular export
//import Product from './moduleOne'; // default export

//import Product as obj from './moduleOne'; // alias

import * as test from './moduleOne.js';

import Product, {sayHi as hello} from './moduleOne.js'

test.sayHi("venkat")
//hello("js")