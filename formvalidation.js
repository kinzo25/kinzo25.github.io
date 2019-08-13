//Form validation on submit
//Name: must only be letters and spaces
//Email: already validated, must be non-null
//Phone: already validated
//State: value must not be default
//City: must only have letters and spaces IF ENTERED
//Zipcode: length must be five IF ENTERED
//Interests: not necessary to validate
//Newsletter: one of them must be selected

function validate()
{
	var name, email, state, city, zip, newsletter;
	var nameFlag, emailFlag, stateFlag, cityFlag, zipFlag, newsFlag = 0;
	var message = "ATTENTION! The following inputs have problems: ";

	name = document.getElementById("name").value;
	email = document.getElementById("email").value;
	state = document.getElementById("state").value;
	city = document.getElementById("city").value;
	zip = document.getElementById("zip").value;
	newsletter = document.getElementById("newsletter").value;

	alert ("The input is " +name+" , "+email+" , "+state+" , "+city+" , "+zip+" , "+newsletter);

	//Validating the name

	if(name !== "")
	{
		alert("inside first branch name");
		var letters = /^[a-zA-Z\s]*$/;
		if(name.match(letters))
		{
			alert("inside second branch name");
			nameFlag = 1;
		}
		else
		{
			alert("inside third branch name");
			message = message + "\nThe name field must not be empty and should only contain letters and spaces.";
			alert(message);
			nameFlag = 0;
		}	
	}
	else
	{
		alert("inside fourth branch name");
		message = message + "\nThe name field must not be empty and should only contain letters and spaces.";
		alert(message);
		nameFlag = 0;
	}

	//Validating the email

	if (email !== "")
	{
		alert("inside first branch email");
		emailFlag = 1;
	}
	else
	{
		alert("inside second branch email");
		message = message + "\nThe email field must not be empty.";
		alert(message);
		emailFlag = 0;
	}

	//Validating the state

	if(state !== "default")
	{
		alert("inside first branch state");
		stateFlag = 1;
	}
	else
	{
		alert("inside second branch state");
		message = message + "\nYou must select a valid state.";
		alert(message);
		stateFlag = 0;
	}

	//Validating the city

	if(city !== "")
	{
		var letters = /^[a-zA-Z\s]*$/;
		if (city.match(letters))
		{
			alert("inside first branch city");
			cityFlag = 1;
		}
		else
		{
			alert("inside second branch city");
			message = message + "\nThe city name must consist of only letters and spaces.";
			alert(message);
			cityFlag = 0;
		}
	}
	else
	{
		alert("inside third branch city");
		cityFlag = 1;
	}

	//Validating the zipcode

	if(zip !== "")
	{
		var numbers = /^\d{5}$/;
		if(zip.length == 5 && zip.match(numbers))
		{
			alert("inside first branch zip");
			zipFlag = 1;
		}
		else
		{
			alert("inside second branch zip");
			message = message + "\nThe zipcode must be a five-digit number.";
			alert(message);
			zipFlag = 0;
		}
	}
	else
	{
		alert("inside third branch zip");
		zipFlag = 1;
	}

	//Validating newsletter
/*
	if(newsletter !== null)
	{
		newsFlag = 1;
	}
	else
	{
		message = message + "\nYou must select whether or not you wish to receive the newsletter.";
		newsFlag = 1;
	}
*/
	alert(message);
/*

	var errorFlag = nameFlag&&emailFlag&&stateFlag&&cityFlag&&zipFlag&&newsFlag;
	if (errorFlag == 0)
	{
		window.location.assign("https://www.w3schools.com");
	}
	else
	{
		window.location.assign("https://www.google.com");
	}
	return message;
}


function changeHTML(x)
{
	input = x
	if (input=1)
	{
		alert ("case x = 1");
    	document.getElementById("test").innerHTML="Please enter all required values.";
	}
	else
	{
		alert("case x = 0");
		document.getElementById("test").innerHTML="You're good, go on";
	}*/
}

