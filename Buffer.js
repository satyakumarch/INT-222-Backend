// var buff=Buffer.alloc(10);
// console.log(buff);
// buff.write('write');
// var a=buff.toString();
// //console.log(buff);
// console.log(a);


// //method 2
// var buff2=new Buffer('node');
// console.log(buff2);

// //method 3
// var buff3=Buffer.from([1,2,3,4,5,6]);
// console.log(buff3);

// //lenght calculation
//  var length=buff.length;
//  console.log(length);

//  //concenate
//  list=[buff2,buff3];
//  var add=Buffer.concat(list);
//  console.log(add);
 //console.log (buff2+buff3);


//  const buffersrc=new Buffer('ABC');
//  const bufferDest=Buffer.alloc(3);
//  buffersrc.copy(bufferDest);
//  console.log();

//  const bufferold=new Buffer(
//     'nodejsisthere to introdunceyou industr');
//     const bufferNew=bufferold.slice(0,6);
//     console.log(bufferNew.toString());
//     console.log(bufferold.indexOf('to'));

    const buffer0=new Buffer('m');
    const bufferT=new Buffer('n');

    // var result=buffer0.compare(bufferT);
    // console.log(result);


    //a readable stream
    // accessing strream

    const {Readable}=require('stream')
    const inStream=new Readable({
        read(){}
    });




// //create a zero-filled buffer of length 10
// const buf1=Buffer.alloc(10);
// console.log(buf1);

// //create an unnitialized buffer of lenght 10
// const buf2=Buffer.allocUnsafeSlow(10);
// console.log(buf2);
// //create a buffer containing array
// const buf3=Buffer.from([1,2,3,4]);
// console.log(buf3);

// //create a buffer from string
// const buf4=Buffer.from('hello world','utf8');
// console.log(buf4);