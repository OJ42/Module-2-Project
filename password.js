const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to the password validator tool. \nPlease type a password that is at least 10 characters long with no spaces.", function(input){
	givenPassword = input.split(' ');
	
	password = givenPassword[0];

    if(password.length > 10){
        console.log("That password is successful")
       }else{
         console.log("That password is too short")      
    }  	

	// This line closes the connection to the command line interface.
	reader.close()
//does this update?
});


       