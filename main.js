import {toUpper} from 'javascript-rollup-plugin-node-resolve-and-commonjs-demo--to-upper'

function hello(name) {
  return 'Hello, ' + toUpper(name);
}

document.getElementById('main').innerText = hello('rollup')
