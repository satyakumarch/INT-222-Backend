// const Even=require('event');
// var evenEmitter=new Even();
// evenEmitter.on('grade',(err,msg)=>{
//     console.log(msg);
// });
// evenEmitter.emit('grade',"first event");

//removing event
// const EventEmitter=require('event');
// var evenEmitter=new EventEmitter();
// var exa1=(msg)=>{
//     console.log("your message1"+msg);
// }
// var exa2=(msg)=>{
//     console.log()
// }


const Even=require('event');
var evenEmitter=new Even();
evenEmitter.on('grade',(a,b,c,d)=>{
    console.log(a+b+c+d);
});
evenEmitter.emit('grade',12,23,43,43);



