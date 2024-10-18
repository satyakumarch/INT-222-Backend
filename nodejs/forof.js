var students = {
    name: 'John',
    age: 25,
    city: 'New York',
  };
  
  var count = 0;
  
  
  for (var [key, value] of Object.entries(students)) {
   
    if (count % 2 === 0) {
      console.log(value);
    }
    count++;
  }
  