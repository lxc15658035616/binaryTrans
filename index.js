#!/usr/bin/env node
var http=require('http');
var fs=require('fs/promises');
var events=require('events');
// http.createServer(function(request,response){
//   response.writeHead(200,{"content-type":"text/html"});
//   response.end('helloworld!');
// }).listen(8888);
var data=fs.readFile('./package.json');
data.then(function(data){
  var int16=new Int16Array(data);
  //console.log(int16);
  //eventEmitter.emit("sayhello");
})
var eventEmitter=new events.EventEmitter();
eventEmitter.on("sayhello",function(){
  console.log('helloworld');
})
// console.log(Buffer.alloc(10,1));
// console.log(Buffer.from("人生自古誰無死","utf-8"));
const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// 拷贝 `arr` 的内容。
const buf1 = Buffer.from(arr);

// 与 `arr` 共享内存。
const buf2 = Buffer.from(arr.buffer);
//
// console.log(buf1.length);
// // 打印: <Buffer 88 a0>
// console.log(buf2.length);
// 打印: <Buffer 88 13 a0 0f>
const buf = Buffer.from([1, 2, 3, 4]);
const uint32array = new Uint32Array(
    buf.buffer,
    buf.byteOffset,
    buf.length / Uint32Array.BYTES_PER_ELEMENT
);
// for(var v of buf.entries()){
//   console.log(v);
// }
console.log(buf);

buf.slice(0,1)[0]=2;
console.log(buf);








//
