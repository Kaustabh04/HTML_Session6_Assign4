
  /* I have tried to print the employee object properties in the console
     using two way. So the console print the object properties twice in two
	 different way.
  */

  // Create employee objects array 
  
  var employee = [
    {  
	  name : "Kaustabh",
	  age : 35,
	  salary : "Rs15000",
	  city : "Kolkata",
	  state : "West Bengal",
	  pinCode : 700026,
    },
	{
	  name : "Sayan",
	  age : 30,
	  salary : "Rs12000",
	  city : "Kolkata",
	  state : "West Bengal",
	  pinCode : 700026,	
    },
	{
	  name : "Robin",
	  age : 32,
	  salary : "Rs13000",
	  city : "Mumbai",
	  state : "Maharastra",
	  pinCode : 1001,
    },
	{
	  name : "Biplab",
	  age : 31,
	  salary : "Rs14000",
	  city : "Mumbai",
	  state : "Maharastra",
	  pinCode : 2001,
    },
	{
	  name : "Nilesh",
	  age : 36,
	  salary : "Rs20000",
	  city : "Kolkata",
	  state : "West Bengal",
	  pinCode : 700034
	} 
  ];
  
  // Declare variable x
  
  var x;
  
  // For in loop
  
  for(x in employee){
	
	// Print Each employee details in console
	
	console.log("Employee " + x + " = " + employee[x]['name']+ " " + employee[x]['age']+ " " + employee[x]['salary']+ " "+ employee[x]['city']+ " " + employee[x]['state']+ " " + employee[x]['pinCode']);
	
  }
  
    // Second way using forEach
	
	employee.forEach(myFunction);
  
  // For in loop
  function myFunction (employee, x){
    for(x in employee){
	
	// Print Each employee details in console
	
	console.log("Employee " + x + " = " + employee[x]);
    }
  }
  
