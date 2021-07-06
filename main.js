var members = [
    "https://www.nicepng.com/png/detail/35-351393_first-visit-mother-and-baby-cartoon-png.png",

    "https://thumbs.dreamstime.com/z/illustration-cartoon-father-carrying-son-his-arms-cartoon-father-carrying-son-his-arms-145730921.jpg",

    "https://www.clipartmax.com/png/middle/221-2216870_brothers-and-sisters-cartoon.png", 

    "https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-stock-vector-little-girl-avatar-character-vector-illustration-design.jpg?ver=6", 

    "https://cdn5.vectorstock.com/i/1000x1000/06/14/grandfather-cartoon-design-vector-18750614.jpg",

    "https://thumbs.dreamstime.com/b/grandmother-portrait-cute-old-woman-bag-walking-stick-wearing-glasses-short-grey-hair-senior-lady-walk-grandma-86364329.jpg"
    ];

    var names = [
    "Soni Singh", 
    "Ranbir singh", 
    "Diljeet singh", 
    "Rocky singh", 
    "Alia singh", 
    "Rudolph Serrao"
    ];

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 6) {
    
    count = 0;

    }

    }