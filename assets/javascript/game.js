
$(document).ready(function() {
   
   
    var fighters = [
        {Name: 'Han Solo', Image:'assets/images/Hansolo.jpg', Health: '120', Attack:'8',AttackBonus:'8',Counter:'6'},
        {Name: 'Greedo', Image:'assets/images/Greedo.jpg', Health: '80', Attack:'9',AttackBonus:'9',Counter:'5'},
        {Name: 'Boba Fett', Image:'assets/images/Bobafett.jpeg', Health: '180', Attack:'6',AttackBonus:'6',Counter:'25'},
        {Name: 'Lando Calrissian', Image:'assets/images/Lando.png', Health: '130', Attack:'7',AttackBonus:'7',Counter:'20'},
        // {Name: 'Jar Jar Binks', Image:'assets/images/JarJar.jpg', Health: '200', Attack:'50',AttackBonus:'50',Counter:'40'},
    ];
    
    var chosenOne = [];
    var enemies = [];
    // Dynamically making bootsrap card in jquery ftw!
        for (var i = 0; i < fighters.length; i++){
        var column = $("<div>");
        $(column).addClass("col-md-3");
        $("#row-one").append(column); 
        var character = $("<button>");
        $(character).addClass(fighters[i].Name);
        $(character).addClass("card");
        $(column).append(character);
        var image = $("<img>");
        $(image).addClass("card-img-top")
        $(image).attr("src" , fighters[i].Image);
        $(character).append(image);
        var cardBody = $("<div>");
        $(cardBody).addClass("card-body");
        $(character).append(cardBody);
        var cardText = $("<p>");
        $(cardText).addClass("card-text");
        $(character).append(cardText);
        $(cardText).text(fighters[i].Name + " " + fighters[i].Health);
        
        
        }

        $(".card").on("click",function(){
            if ($(this).hasClass(fighters[0].Name)){
                chosenOne = fighters[0];
                fighters.splice(0,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log(chosenOne);
                console.log(fighters);
                console.log(enemies);
                console.log("I am Han Solo");
            }
            else if ($(this).hasClass(fighters[1].Name)){
                chosenOne = fighters[1];
                fighters.splice(1,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log(chosenOne);
                console.log(fighters);
                console.log(enemies);
                console.log("I am Greedo");
            }
            else  if ($(this).hasClass(fighters[2].Name)){
                chosenOne = fighters[2];
                fighters.splice(2,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log(chosenOne);
                console.log(fighters);
                console.log(enemies);
                console.log("I am Boba Fett");
            }
            else if ($(this).hasClass(fighters[3].Name)){
                chosenOne = fighters[3];
                fighters.splice(3,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log(chosenOne);
                console.log(fighters);
                console.log(enemies);
                console.log("I am Lando");
            }
        });
    
    
});


