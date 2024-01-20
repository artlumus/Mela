function sprawdz1()
{
	let mela_age = 8 ;
	let age1= document.getElementById("your_age1").value; //pobiera wartość z inputu your_age1
	
	if(age1>mela_age) document.getElementById("result1").innerHTML="You live on this planet longer than me.";
	else if (age1<mela_age) document.getElementById("result1").innerHTML="I live on this planet longer than you.";
	else document.getElementById("result1").innerHTML="Data is incorrect."
}

function sprawdz2()
{
	let age2= document.getElementById("your_age2").value; //pobiera wartość z inputu your_age2
	
	let earlyYears = 2; //first two years of life
	earlyYears *= 10.5; //first two years multiplied by 10.5
	laterYears = age2 - 2; //my age - 2 because we already made calculations for them above
	laterYears *= 4; //calculation for later years multiplied by 4

	ageInDogYears = earlyYears + laterYears; //age as a dog	

	console.log(ageInDogYears);

	document.getElementById("result2").innerHTML="You are " + ageInDogYears + " years old in dog years.";
}

function sprawdz3()
{
	let age3 = document.getElementById("your_age3").value;
	
	let age2= 8;
	console.log(ageInDogYears);
	document.getElementById("result3").innerHTML="I am " + ageInDogYears + " years old in dog years.";
	
}