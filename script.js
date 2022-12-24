function zodiacSign()
{
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    
    console.log(day);
    console.log(month);
   
    if((month==1 && day >=20) ||(month == 2 && day<=18))
    {
        console.log("Aquarius");
        document.getElementById("zodiacOut").innerHTML = "Aquarius";
        zodiacSign = "Aquarius"
    }
    else if((month==2 && day >=19) ||(month == 3 && day<=19))
    {
        console.log("Pisces");
        document.getElementById("zodiacOut").innerHTML = "Pisces";
    }
    else if((month==3 && day >=20) ||(month == 4 && day<=18))
    {
        console.log("Aries");
        document.getElementById("zodiacOut").innerHTML = "Aries";
    }
    else if((month==4 && day >=19) ||(month == 5 && day<=20))
    {
        console.log("Taurus");
        document.getElementById("zodiacOut").innerHTML = "Taurus";
    }
    else if((month==5 && day >=21) ||(month == 6 && day<=20))
    {
        console.log("Gemini");
        document.getElementById("zodiacOut").innerHTML = "Gemini";
    }
    else if((month==6 && day >=21) ||(month == 7 && day<=22))
    {
        console.log("Cancer");
        document.getElementById("zodiacOut").innerHTML = "Cancer";
    }
    else if((month==7 && day >=23) ||(month == 8 && day<=22))
    {
        console.log("Leo");
        document.getElementById("zodiacOut").innerHTML = "Leo";
    }
    else if((month==8 && day >=23) ||(month == 9 && day<=22))
    {
        console.log("Virgo");
        document.getElementById("zodiacOut").innerHTML = "Virgo";
    }
    else if((month==9 && day >=23) ||(month ==10 && day<=22))
    {
        console.log("Libra");
        document.getElementById("zodiacOut").innerHTML = "Libra";
    }
    else if((month==10 && day >=23) ||(month == 11 && day<=21))
    {
        console.log("Scorpio");
        document.getElementById("zodiacOut").innerHTML = "Scorpio";
    }
    else if((month==11 && day >=22) ||(month == 12 && day<=21))
    {
        console.log("Saggittarius");
        document.getElementById("zodiacOut").innerHTML = "Saggittarius";
    }
    else if((month==12 && day >=22) ||(month == 1 && day<=19))
    {
        console.log("Capricorn");
        document.getElementById("zodiacOut").innerHTML = "Capricorn";
    }
}
