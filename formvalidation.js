//Form validation on submit
//Name: must only be letters and spaces
//Email: already validated, must be non-null
//Phone: already validated
//State: value must not be default
//City: must only have letters and spaces IF ENTERED
//Zipcode: length must be five IF ENTERED
//Interests: not necessary to validate
//Newsletter: must select one of the two

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
	if(document.getElementById("newsletterY").checked)
	{
		newsletter = "Yes";
	}
	else if (document.getElementById("newsletterN").checked)
	{
		newsletter = "No";
	}
	else
	{
		newsletter = "";
	}

//	alert ("The input is " +name+" , "+email+" , "+state+" , "+city+" , "+zip+" , "+newsletter);

	//Validating the name

	if(name !== "")
	{
		var letters = /^[a-zA-Z\s]*$/;
		if(name.match(letters))
		{
			nameFlag = 1;
		}
		else
		{
			message = message + "\nThe name field must not be empty and should only contain letters and spaces.";
			nameFlag = 0;
		}	
	}
	else
	{
		message = message + "\nThe name field must not be empty and should only contain letters and spaces.";
		nameFlag = 0;
	}

	//Validating the email

	if (email !== "")
	{
		emailFlag = 1;
	}
	else
	{
		message = message + "\nThe email field must not be empty.";
		emailFlag = 0;
	}

	//Validating the state

	if(state !== "default")
	{
		stateFlag = 1;
	}
	else
	{
		message = message + "\nYou must select a valid state.";
		stateFlag = 0;
	}

	//Validating the city

	if(city !== "")
	{
		var letters = /^[a-zA-Z\s]*$/;
		if (city.match(letters))
		{
			cityFlag = 1;
		}
		else
		{
			message = message + "\nThe city name must consist of only letters and spaces.";
			cityFlag = 0;
		}
	}
	else
	{
		cityFlag = 1;
	}

	//Validating the zipcode

	if(zip !== "")
	{
		var numbers = /^\d{5}$/;
		if(zip.length == 5 && zip.match(numbers))
		{
			zipFlag = 1;
		}
		else
		{
			message = message + "\nThe zipcode must be a five-digit number.";
			zipFlag = 0;
		}
	}
	else
	{
		zipFlag = 1;
	}

	//Validating the Newsletter radio button

	if(newsletter !== "")
	{
		newsFlag = 1;
	}
	else
	{
		message = message + "\nYou must select whether or not you wish to subscribe to the newsletter.";
		newsFlag = 0;
	}

	if(message !== "ATTENTION! The following inputs have problems: ")
	{
		alert(message);
	}
	else
	{
		alert ("Thank you for your submission. Welcome to the community!");
	}
