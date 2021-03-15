#!/usr/bin/env node
var format=[
  {
    key:"name",
    terminal:",",
    type:"str"
  },
  {
    key:'age',
    size:4,
    type:'int',
    end:'big'
  },
  {
    key:'city',
    type:'array',
    sperator:',',
    terminal:'.'
  }
]
var buf=Buffer.allocUnsafe(100);
var name='人生自古谁无死';
var name_l=Buffer.byteLength(name);
var yanji='延吉';
var beijing='北京';
var city_l=Buffer.byteLength(yanji)+Buffer.byteLength(beijing);
buf.write(name,0);
buf.write(',',name_l);
buf.writeInt32BE(25,name_l+1);
buf.write(yanji,name_l+5);
buf.write(',',name_l+5+Buffer.byteLength(yanji));
buf.write(beijing,name_l+5+Buffer.byteLength(yanji)+1);
buf.write('.',name_l+5+Buffer.byteLength(yanji)+1+Buffer.byteLength(beijing));
function trans(){
  var res={};
  let index_name=buf.indexOf(',');
  res.name=buf.slice(0,index_name).toString();
  res.age=buf.readInt32BE(index_name+1);
  let city=[];
  let start=index_name+5;
  while(true){
    let index1=buf.indexOf(',',start);
    let index2=buf.indexOf('.',start);
    console.log(index1,index2);
    if(index1==-1){
      if(index2!=-1){
        city.push(buf.slice(start,index2).toString());
        break;
      }
      break;
    }
    if(index1!=-1&&index2!=-1){
      if(index1>index2){
        break;
      }
    }

    city.push(buf.slice(start,index1).toString());
    start=index1+1;
  }
  res.city=city;
  console.log(res);
}
trans();
//
