JavaScript Rollup "rollup-plugin-node-resolve" and "rollup-plugin-commonjs" Demo
================================================================================

在使用rollup打包时，如果需要把`node_modules/`目录下的文件包含进来，就需要使用`rollup-plugin-node-resolve`这个插件。

但是它的功能比较弱，仅能处理es module，也就是说，被包含的文件里面，应该使用了类似`export function`这样的语法，
而不是`module.exports`这样的commonjs语法。

如果使用了后者的语法（非常常见），那么就需要`rollup-plugin-commonjs`来配合。
它会把引入的commonjs模块的文件转换成es module，这样`rollup-plugin-node-resolve`就可以正常处理了。

需要注意的是，rollup-plugin-commonjs在寻找某个模块的export成员的能力比较弱，所以经常会出现找不到的情况，
这时需要使用`namedExports`参数来手动声明（在另一个Demo中）

```
npm install
npm run demo
```
