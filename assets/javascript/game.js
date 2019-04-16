
$(document).ready(function() {
   
   
    var fighters = [
        {Name: 'Han-Solo', Image:'assets/images/Hansolo.jpg', Health: '120', Attack:'8',AttackBonus:'8',Counter:'6'},
        {Name: 'Greedo', Image:'assets/images/Greedo.jpg', Health: '80', Attack:'9',AttackBonus:'9',Counter:'5'},
        {Name: 'Boba-Fett', Image:'assets/images/Bobafett.jpeg', Health: '180', Attack:'6',AttackBonus:'6',Counter:'25'},
        {Name: 'Lando-Calrissian', Image:'assets/images/Lando.png', Health: '130', Attack:'7',AttackBonus:'7',Counter:'20'},
        // {Name: 'Jar Jar Binks', Image:'assets/images/JarJar.jpg', Health: '200', Attack:'50',AttackBonus:'50',Counter:'40'},
    ];
    
    var chosenOne = [];
    var enemies = [];
    var defender = [];
    // Dynamically making bootsrap card in jquery ftw!
        for (var i = 0; i < fighters.length; i++){
        var column = $("<div>");
        $(column).addClass("col-md-3");
        $("#row-one").append(column); 
        var character = $("<button>");
        $(character).addClass(fighters[i].Name);
        $(character).addClass("card");
        $(character).addClass("fighters");
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

        $(".fighters").on("click",function(){
            if ($(this).hasClass(fighters[0].Name)){
                chosenOne = fighters[0];
                fighters.splice(0,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log("I am Han Solo");
                console.log(chosenOne);
                console.log(enemies);

                $("#row-one").empty();
                var column = $("<div>");
                $(column).addClass("col-md-3");
                $("#row-one").append(column); 
                var character = $("<button>");
                $(character).addClass(chosenOne.Name);
                $(character).addClass("card");
                $(character).addClass("chosen-one");
                $(column).append(character);
                var image = $("<img>");
                $(image).addClass("card-img-top")
                $(image).attr("src" , chosenOne.Image);
                $(character).append(image);
                var cardBody = $("<div>");
                $(cardBody).addClass("card-body");
                $(character).append(cardBody);
                var cardText = $("<p>");
                $(cardText).addClass("card-text");
                $(character).append(cardText);
                $(cardText).text(chosenOne.Name + " " + chosenOne.Health);

                for (var i = 0; i < enemies.length; i++){
                    var column = $("<div>");
                    $(column).addClass("col-md-3");
                    $("#row-two").append(column); 
                    var character = $("<button>");
                    $(character).addClass(enemies[i].Name);
                    $(character).addClass("card");
                    $(character).addClass("enemy");
                    $(column).append(character);
                    var image = $("<img>");
                    $(image).addClass("card-img-top")
                    $(image).attr("src" , enemies[i].Image);
                    $(character).append(image);
                    var cardBody = $("<div>");
                    $(cardBody).addClass("card-body");
                    $(character).append(cardBody);
                    var cardText = $("<p>");
                    $(cardText).addClass("card-text");
                    $(character).append(cardText);
                    $(cardText).text(enemies[i].Name + " " + enemies[i].Health);
                    
                    
                    }

            }
            else if ($(this).hasClass(fighters[1].Name)){
                chosenOne = fighters[1];
                fighters.splice(1,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log("I am Greedo");
                console.log(chosenOne);
                console.log(enemies);

                $("#row-one").empty();
                var column = $("<div>");
                $(column).addClass("col-md-3");
                $("#row-one").append(column); 
                var character = $("<button>");
                $(character).addClass(chosenOne.Name);
                $(character).addClass("card");
                $(character).addClass("chosen-one");
                $(column).append(character);
                var image = $("<img>");
                $(image).addClass("card-img-top")
                $(image).attr("src" , chosenOne.Image);
                $(character).append(image);
                var cardBody = $("<div>");
                $(cardBody).addClass("card-body");
                $(character).append(cardBody);
                var cardText = $("<p>");
                $(cardText).addClass("card-text");
                $(character).append(cardText);
                $(cardText).text(chosenOne.Name + " " + chosenOne.Health);

                for (var i = 0; i < enemies.length; i++){
                    var column = $("<div>");
                    $(column).addClass("col-md-3");
                    $("#row-two").append(column); 
                    var character = $("<button>");
                    $(character).addClass(enemies[i].Name);
                    $(character).addClass("card");
                    $(character).addClass("chosen-one");
                    $(column).append(character);
                    var image = $("<img>");
                    $(image).addClass("card-img-top")
                    $(image).attr("src" , enemies[i].Image);
                    $(character).append(image);
                    var cardBody = $("<div>");
                    $(cardBody).addClass("card-body");
                    $(character).append(cardBody);
                    var cardText = $("<p>");
                    $(cardText).addClass("card-text");
                    $(character).append(cardText);
                    $(cardText).text(enemies[i].Name + " " + enemies[i].Health);
                    
                    
                    }
            }
            else  if ($(this).hasClass(fighters[2].Name)){
                chosenOne = fighters[2];
                fighters.splice(2,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log("I am Boba Fett");
                console.log(chosenOne);
                console.log(enemies);

                $("#row-one").empty();
                var column = $("<div>");
                $(column).addClass("col-md-3");
                $("#row-one").append(column); 
                var character = $("<button>");
                $(character).addClass(chosenOne.Name);
                $(character).addClass("card");
                $(character).addClass("chosen-one");
                $(column).append(character);
                var image = $("<img>");
                $(image).addClass("card-img-top")
                $(image).attr("src" , chosenOne.Image);
                $(character).append(image);
                var cardBody = $("<div>");
                $(cardBody).addClass("card-body");
                $(character).append(cardBody);
                var cardText = $("<p>");
                $(cardText).addClass("card-text");
                $(character).append(cardText);
                $(cardText).text(chosenOne.Name + " " + chosenOne.Health);

                for (var i = 0; i < enemies.length; i++){
                    var column = $("<div>");
                    $(column).addClass("col-md-3");
                    $("#row-two").append(column); 
                    var character = $("<button>");
                    $(character).addClass(enemies[i].Name);
                    $(character).addClass("card");
                    $(character).addClass("enemy");
                    $(column).append(character);
                    var image = $("<img>");
                    $(image).addClass("card-img-top")
                    $(image).attr("src" , enemies[i].Image);
                    $(character).append(image);
                    var cardBody = $("<div>");
                    $(cardBody).addClass("card-body");
                    $(character).append(cardBody);
                    var cardText = $("<p>");
                    $(cardText).addClass("card-text");
                    $(character).append(cardText);
                    $(cardText).text(enemies[i].Name + " " + enemies[i].Health);
                    
                    
                    }
            }
            else if ($(this).hasClass(fighters[3].Name)){
                chosenOne = fighters[3];
                fighters.splice(3,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log("I am Lando");
                console.log(chosenOne);
                console.log(enemies);

                $("#row-one").empty();
                var column = $("<div>");
                $(column).addClass("col-md-3");
                $("#row-one").append(column); 
                var character = $("<button>");
                $(character).addClass(chosenOne.Name);
                $(character).addClass("card");
                $(character).addClass("chosen-one");
                $(column).append(character);
                var image = $("<img>");
                $(image).addClass("card-img-top")
                $(image).attr("src" , chosenOne.Image);
                $(character).append(image);
                var cardBody = $("<div>");
                $(cardBody).addClass("card-body");
                $(character).append(cardBody);
                var cardText = $("<p>");
                $(cardText).addClass("card-text");
                $(character).append(cardText);
                $(cardText).text(chosenOne.Name + " " + chosenOne.Health);

                for (var i = 0; i < enemies.length; i++){
                    var column = $("<div>");
                    $(column).addClass("col-md-3");
                    $("#row-two").append(column); 
                    var character = $("<button>");
                    $(character).addClass(enemies[i].Name);
                    $(character).addClass("card");
                    $(character).addClass("enemy");
                    $(column).append(character);
                    var image = $("<img>");
                    $(image).addClass("card-img-top")
                    $(image).attr("src" , enemies[i].Image);
                    $(character).append(image);
                    var cardBody = $("<div>");
                    $(cardBody).addClass("card-body");
                    $(character).append(cardBody);
                    var cardText = $("<p>");
                    $(cardText).addClass("card-text");
                    $(character).append(cardText);
                    $(cardText).text(enemies[i].Name + " " + enemies[i].Health);
                    
                    
                }
            }

            
                    $(".enemy").on("click",function(){
                    console.log("Button Clicked");
                    if ($(this).hasClass(enemies[0].Name)){
                    defender = enemies[0];
                    enemies.splice(0,1);
                    console.log(enemies);
                    console.log(defender);

                var column = $("<div>");
                $(column).addClass("col-md-3");
                $("#row-four").append(column); 
                var character = $("<button>");
                $(character).addClass(defender.Name);
                $(character).addClass("card");
                $(character).addClass("defender");
                $(column).append(character);
                var image = $("<img>");
                $(image).addClass("card-img-top")
                $(image).attr("src" , defender.Image);
                $(character).append(image);
                var cardBody = $("<div>");
                $(cardBody).addClass("card-body");
                $(character).append(cardBody);
                var cardText = $("<p>");
                $(cardText).addClass("card-text");
                $(character).append(cardText);
                $(cardText).text(defender.Name + " " + defender.Health);

                $("#row-two").empty();

                for (var i = 0; i < enemies.length; i++){
                    var column = $("<div>");
                    $(column).addClass("col-md-3");
                    $("#row-two").append(column); 
                    var character = $("<button>");
                    $(character).addClass(enemies[i].Name);
                    $(character).addClass("card");
                    $(character).addClass("enemy");
                    $(column).append(character);
                    var image = $("<img>");
                    $(image).addClass("card-img-top")
                    $(image).attr("src" , enemies[i].Image);
                    $(character).append(image);
                    var cardBody = $("<div>");
                    $(cardBody).addClass("card-body");
                    $(character).append(cardBody);
                    var cardText = $("<p>");
                    $(cardText).addClass("card-text");
                    $(character).append(cardText);
                    $(cardText).text(enemies[i].Name + " " + enemies[i].Health);
                    
                    
                }
                                        
                }
                    else if ($(this).hasClass(enemies[1].Name)){
                    defender = enemies[1];
                    enemies.splice(1,1);
                    console.log(enemies);
                    console.log(defender);

                var column = $("<div>");
                $(column).addClass("col-md-3");
                $("#row-four").append(column); 
                var character = $("<button>");
                $(character).addClass(defender.Name);
                $(character).addClass("card");
                $(character).addClass("defender");
                $(column).append(character);
                var image = $("<img>");
                $(image).addClass("card-img-top")
                $(image).attr("src" , defender.Image);
                $(character).append(image);
                var cardBody = $("<div>");
                $(cardBody).addClass("card-body");
                $(character).append(cardBody);
                var cardText = $("<p>");
                $(cardText).addClass("card-text");
                $(character).append(cardText);
                $(cardText).text(defender.Name + " " + defender.Health);

                $("#row-two").empty();

                for (var i = 0; i < enemies.length; i++){
                    var column = $("<div>");
                    $(column).addClass("col-md-3");
                    $("#row-two").append(column); 
                    var character = $("<button>");
                    $(character).addClass(enemies[i].Name);
                    $(character).addClass("card");
                    $(character).addClass("enemy");
                    $(column).append(character);
                    var image = $("<img>");
                    $(image).addClass("card-img-top")
                    $(image).attr("src" , enemies[i].Image);
                    $(character).append(image);
                    var cardBody = $("<div>");
                    $(cardBody).addClass("card-body");
                    $(character).append(cardBody);
                    var cardText = $("<p>");
                    $(cardText).addClass("card-text");
                    $(character).append(cardText);
                    $(cardText).text(enemies[i].Name + " " + enemies[i].Health);
                    
                                        
                    }
                }
                    else if ($(this).hasClass(enemies[2].Name)){
                    defender = enemies[2];
                    enemies.splice(2,1);
                    console.log(enemies);
                    console.log(defender);

                var column = $("<div>");
                $(column).addClass("col-md-3");
                $("#row-four").append(column); 
                var character = $("<button>");
                $(character).addClass(defender.Name);
                $(character).addClass("card");
                $(character).addClass("defender");
                $(column).append(character);
                var image = $("<img>");
                $(image).addClass("card-img-top")
                $(image).attr("src" , defender.Image);
                $(character).append(image);
                var cardBody = $("<div>");
                $(cardBody).addClass("card-body");
                $(character).append(cardBody);
                var cardText = $("<p>");
                $(cardText).addClass("card-text");
                $(character).append(cardText);
                $(cardText).text(defender.Name + " " + defender.Health);

                $("#row-two").empty();

                for (var i = 0; i < enemies.length; i++){
                    var column = $("<div>");
                    $(column).addClass("col-md-3");
                    $("#row-two").append(column); 
                    var character = $("<button>");
                    $(character).addClass(enemies[i].Name);
                    $(character).addClass("card");
                    $(character).addClass("enemy");
                    $(column).append(character);
                    var image = $("<img>");
                    $(image).addClass("card-img-top")
                    $(image).attr("src" , enemies[i].Image);
                    $(character).append(image);
                    var cardBody = $("<div>");
                    $(cardBody).addClass("card-body");
                    $(character).append(cardBody);
                    var cardText = $("<p>");
                    $(cardText).addClass("card-text");
                    $(character).append(cardText);
                    $(cardText).text(enemies[i].Name + " " + enemies[i].Health);
                    
                                        
                    }
            
                }
            });
            
        });
    
        
       

        

    
    
});
