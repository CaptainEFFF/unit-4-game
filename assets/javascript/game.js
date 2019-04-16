
$(document).ready(function() {
   
   
    var fighters = [
        {Name: 'Han Solo', Image:'assets/images/Hansolo.jpg', Health: '140', Attack:'8',AttackBonus:'8',Counter:'6'},
        {Name: 'Greedo', Image:'assets/images/Greedo.jpg', Health: '120', Attack:'10',AttackBonus:'10',Counter:'5'},
        {Name: 'Boba Fett', Image:'assets/images/Bobafett.jpeg', Health: '180', Attack:'6',AttackBonus:'6',Counter:'20'},
        {Name: 'Lando Calrissian', Image:'assets/images/Lando.png', Health: '150', Attack:'7',AttackBonus:'7',Counter:'15'},
        // {Name: 'Jar Jar Binks', Image:'assets/images/JarJar.jpg', Health: '200', Attack:'50',AttackBonus:'50',Counter:'40'},
    ];
    
    var chosenOne = [];
    var enemies = [];
    var defender = [];
    var column;
    var character;
    var image;
    var cardBody;
    var cardText;
    var battle;
    var battleTwo;
    // Dynamically making bootsrap card in jquery ftw!

    function initGame(){
        for (var i = 0; i < fighters.length; i++){
            column = $("<div>");
            $(column).addClass("col-md-3");
            $("#row-one").append(column); 
            character = $("<button>");
            $(character).addClass(fighters[i].Name);
            $(character).addClass("card");
            $(character).addClass("fighters");
            $(column).append(character);
            image = $("<img>");
            $(image).addClass("card-img-top")
            $(image).attr("src" , fighters[i].Image);
            $(character).append(image);
            cardBody = $("<div>");
            $(cardBody).addClass("card-body");
            $(character).append(cardBody);
            cardText = $("<p>");
            $(cardText).addClass("card-text");
            $(character).append(cardText);
            $(cardText).text("Name: " + fighters[i].Name + " |Health: " + fighters[i].Health);
        }

        $("row-two").empty();
        $("row-four").empty();
    }

    function createChosenOne(){
        $("#row-one").empty();
                 column = $("<div>");
                $(column).addClass("col-md-3");
                $("#row-one").append(column); 
                 character = $("<button>");
                $(character).addClass(chosenOne.Name);
                $(character).addClass("card");
                $(character).addClass("chosen-one");
                $(column).append(character);
                 image = $("<img>");
                $(image).addClass("card-img-top")
                $(image).attr("src" , chosenOne.Image);
                $(character).append(image);
                 cardBody = $("<div>");
                $(cardBody).addClass("card-body");
                $(character).append(cardBody);
                 cardText = $("<p>");
                $(cardText).addClass("card-text");
                $(cardText).addClass("player-health");
                $(character).append(cardText);
                $(cardText).text("Name: " + chosenOne.Name + " |Health: " + chosenOne.Health);

    }

    function createEnemies(){
        $("#row-two").empty();
        for (var i = 0; i < enemies.length; i++){
            column = $("<div>");
           $(column).addClass("col-md-3");
           $("#row-two").append(column); 
            character = $("<button>");
           $(character).addClass(enemies[i].Name);
           $(character).addClass("card");
           $(character).addClass("enemy");
           $(column).append(character);
            image = $("<img>");
           $(image).addClass("card-img-top")
           $(image).attr("src" , enemies[i].Image);
           $(character).append(image);
            cardBody = $("<div>");
           $(cardBody).addClass("card-body");
           $(character).append(cardBody);
            cardText = $("<p>");
           $(cardText).addClass("card-text");
           $(character).append(cardText);
           $(cardText).text("Name: " + enemies[i].Name + " |Health: " + enemies[i].Health);
           
           
           }
    }

    function createDefender(){
        column = $("<div>");
                $(column).addClass("col-md-3");
                $("#row-four").append(column); 
                 character = $("<button>");
                $(character).addClass(defender.Name);
                $(character).addClass("card");
                $(character).addClass("defender");
                $(column).append(character);
                 image = $("<img>");
                $(image).addClass("card-img-top")
                $(image).attr("src" , defender.Image);
                $(character).append(image);
                 cardBody = $("<div>");
                $(cardBody).addClass("card-body");
                $(character).append(cardBody);
                cardText = $("<p>");
                $(cardText).addClass("card-text");
                $(cardText).addClass("Health");
                $(character).append(cardText);
                $(cardText).text("Name: " + defender.Name + " |Health: " + defender.Health);
                battle = $("<p>");
                $(battle).addClass("battle");
                $(battleTwo).addClass("battle-two");
                $("#row-four").append(battle);
    }


    initGame();
        

        // Choose Your Character
        $(".fighters").on("click",function(){
            if ($(this).hasClass(fighters[0].Name)){
                chosenOne = fighters[0];
                fighters.splice(0,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log("I am Han Solo");
                console.log(chosenOne);
                console.log(enemies);

                createChosenOne();
                createEnemies();
            }


            else if ($(this).hasClass(fighters[1].Name)){
                chosenOne = fighters[1];
                fighters.splice(1,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log("I am Greedo");
                console.log(chosenOne);
                console.log(enemies);

                createChosenOne();
                createEnemies();
            }


            else  if ($(this).hasClass(fighters[2].Name)){
                chosenOne = fighters[2];
                fighters.splice(2,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log("I am Boba Fett");
                console.log(chosenOne);
                console.log(enemies);

                createChosenOne();
                createEnemies();
            }


            else if ($(this).hasClass(fighters[3].Name)){
                chosenOne = fighters[3];
                fighters.splice(3,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log("I am Lando");
                console.log(chosenOne);
                console.log(enemies);

                createChosenOne();
                createEnemies();
            }


            
            // Choose Your Enemy
            
            $(".enemy").on("click",function(){
                
                if ($(this).hasClass(enemies[0].Name)){
                    defender = enemies[0];
                    enemies.splice(0,1);
                    console.log(enemies);
                    console.log(defender);
                    
                    createDefender();
                    createEnemies();
                    
                }
                else if ($(this).hasClass(enemies[1].Name)){
                    defender = enemies[1];
                    enemies.splice(1,1);
                    console.log(enemies);
                    console.log(defender);
                    
                    createDefender();
                    createEnemies();
                }
                
                
                else if ($(this).hasClass(enemies[2].Name)){
                    defender = enemies[2];
                    enemies.splice(2,1);
                    console.log(enemies);
                    console.log(defender);
                    
                    createDefender();
                    createEnemies();
                    
                }     
            $(".attack").on("click",function(){
                            
                if ($(".defender").hasClass(defender.Name)){
            
                    $(".battle").html("You Attacked " + defender.Name + " for " + chosenOne.Attack + "<br/>" + defender.Name + " attacked you for " + defender.Counter);
                    defender.Health = +defender.Health - + chosenOne.Attack;
                    chosenOne.Attack = +chosenOne.Attack + +chosenOne.AttackBonus;
                    chosenOne.Health = +chosenOne.Health - +defender.Counter;
                    $(".Health").text(defender.Name + " " + defender.Health);
                    $(".player-health").text(chosenOne.Name + " " + chosenOne.Health);
                }
                
                
                 

                if (defender.Health <= 0){
                    console.log("Enemy Defeated");
                    $("#row-four").empty();
                    defender = [];
                    }
                    
                

                $(".enemy").on("click",function(){
                
                    if ($(this).hasClass(enemies[0].Name)){
                        defender = enemies[0];
                        enemies.splice(0,1);
                        console.log(enemies);
                        console.log(defender);
                        
                        createDefender();
                        createEnemies();
                        
                    }
                    else if ($(this).hasClass(enemies[1].Name)){
                        defender = enemies[1];
                        enemies.splice(1,1);
                        console.log(enemies);
                        console.log(defender);
                        
                        createDefender();
                        createEnemies();
                    }
                
                });

                if(enemies.length == 0 && defender == []){
                    console.log("You Win");

                }
                
            });
        });         
    });  
});
