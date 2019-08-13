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
	var name, email, phone, state, city, zip, newsletter;
	var nameFlag, emailFlag, phoneFlag, stateFlag, cityFlag, zipFlag, newsFlag = 0;
	var message = "ATTENTION! The following inputs have problems: "

	name = document.getElementById("name").value;
	email = document.getElementById("email").value;
	phone = document.getElementById("phone").value;
	state = document.getElementById("state").value;
	city = document.getElementById("city").value;
	zip = document.getElementById("zip").value;
	newsletter = document.getElementById("newsletter").value;

	alert ("The input is " +name+" , "+email+" , "+phone+" , "+state+" , "+city+" , "+zip+" , "+newsletter);

/*	//Validating the name

	if(name !== null)
	{
		var letters = /^[0-9a-zA-Z]+$/;
		if(name.match(letters))
		{
			nameFlag = 1;
		}
		else
		{
			message = message + "\nThe name field must not be empty and should only contain letters and spaces.";
		}	
	}
	else
	{
		message = message + "\nThe name field must not be empty and should only contain letters and spaces.";
	}

	//Validating the email

	if (email !== null)
	{
		emailFlag = 1;
	}
	else
	{
		message = message + "\nThe email field must not be empty."
	}

	//Validating the state

	if(state !== "default")
	{
		stateFlag = 1;
	}
	else
	{
		message = message + "\nYou must select a valid state."
	}

	//Validating the city

	if(city !== null)
	{
		if (city.match(letters))
		{
			cityFlag = 1;
		}
		else
		{
			message = message + "\nThe city name must consist of only letters and spaces."
		}
	}
	else
	{
		cityFlag = 1;
	}

	//Validating the zipcode

	if(zip !== null)
	{
		if(zip>=10000 && zip <==99999)
		{
			zipFlag = 1;
		}
		else
		{
			message = message + "\nThe zipcode must be a five-digit number."
		}
	}
	else
	{
		zipFlag = 1;
	}

	if(newsletter !== null)
	{
		newsFlag = 1;
	}
	else
	{
		message = message + "\nYou must select whether or not you wish to receive the newsletter."
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

