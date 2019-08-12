//Form validation on submit

//First, we have to check if any of the required fields are empty.
//These fields are: Name, email, state and newsletter
//Next, we have to validate the inputs:
//Check that text boxes only have text
//Check that the state dropdown isn't selected at the default value
//Check that the zipcode is 5 numbers in length

function validate()
{
	alert ("inside js");

	var valueName = document.getElementById("name").value;
	var valueEmail = document.getElementById("email").value;
	var valueState = document.getElementById("state").value;
	var valueNews = document.getElementById("newsletter").value;

	//if any of the required fields are missing
	
	if (valueName == null && valueEmail == null && valueState == null && valueNews == null)
	{
		alert ("A required field is missing");
	}

}