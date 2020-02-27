import * as lib from './lib/index.js';

console.log( 'calling one', lib[ Math.random() > 0.5 ? 'one' : 'two' ]() );
// console.log( 'calling two', lib.two() );