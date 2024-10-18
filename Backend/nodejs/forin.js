var students = {
  name: 'abc',
  age: 19,
  city: 'phagwara',
};

var count = 0;
for (var i in students) {
  
  if (students.hasOwnProperty(i)) {
    
    if (count %2  ===0 ) {
      console.log(students[i]);
    }
    count++;
  }
}
