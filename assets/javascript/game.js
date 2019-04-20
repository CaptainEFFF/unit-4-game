
$(document).ready(function() {
   
   
    var fighters = [
        {Name: 'Han Solo', Image:'assets/images/Hansolo.jpg', Health: '140', Attack:'8',AttackBonus:'8',Counter:'6'},
        {Name: 'Greedo', Image:'assets/images/Greedo.jpg', Health: '120', Attack:'10',AttackBonus:'10',Counter:'5'},
        {Name: 'Boba Fett', Image:'assets/images/Bobafett.jpeg', Health: '180', Attack:'6',AttackBonus:'6',Counter:'20'},
        {Name: 'Lando Calrissian', Image:'assets/images/Lando.png', Health: '150', Attack:'7',AttackBonus:'7',Counter:'15'},
    ];
    
    var bonusFighters = [
        
        {Name: 'Darth Binks', Image:'assets/images/JarJar.jpg', Health: '200', Attack:'50',AttackBonus:'50',Counter:'40'},
        {Name: 'Storm Trooper', Image:'assets/images/storm.jpg',Health:'160',Attack:'1', AttackBonus: '1', Counter: '1'}
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
    var reset;
    var gamesWon = 0;
    var gamesLost = 0;
    
    // Dynamically making bootsrap card in jquery ftw!
    
       

    
    function initGame(){
        $("#row-one").empty();
        $("#row-two").empty();
        $("#row-four").empty();

        fighters = [
            {Name: 'Han Solo', Image:'assets/images/Hansolo.jpg', Health: '140', Attack:'8',AttackBonus:'8',Counter:'6'},
            {Name: 'Greedo', Image:'assets/images/Greedo.jpg', Health: '120', Attack:'10',AttackBonus:'10',Counter:'5'},
            {Name: 'Boba Fett', Image:'assets/images/Bobafett.jpeg', Health: '180', Attack:'6',AttackBonus:'6',Counter:'20'},
            {Name: 'Lando Calrissian', Image:'assets/images/Lando.png', Health: '150', Attack:'7',AttackBonus:'7',Counter:'15'},
        ];
        
        var bonusFighters = [
            
            {Name: 'Darth Binks', Image:'assets/images/JarJar.jpg', Health: '200', Attack:'50',AttackBonus:'50',Counter:'40'},
            {Name: 'Storm Trooper', Image:'assets/images/storm.jpg',Health:'160',Attack:'1', AttackBonus: '1', Counter: '1'}
            // Bonus fighters with unlock conditions. 
        ];

            chosenOne = [];
            enemies = [];
            defender = [];
            column;
            character;
            image;
            cardBody;
            cardText;
            battle;

            if (gamesWon >= 4 ){
                fighters.push(bonusFighters[0]);
            }
            
            if (gamesLost >= 1 ){
                fighters.push(bonusFighters[1]);

            }


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
            $(cardText).html("Name: " + fighters[i].Name + "<br/> Health: " + fighters[i].Health);
        }
        
        // initGame();
        
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
            $(cardText).html("Name: " + chosenOne.Name + "<br/> Health: " + chosenOne.Health);
            
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
                $(cardText).html("Name: " + enemies[i].Name + "<br/> Health: " + enemies[i].Health);
                
                
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
            $(cardText).html("Name: " + defender.Name + "<br/> Health: " + defender.Health);
            battle = $("<p>");
            $(battle).addClass("battle");
            $("#row-four").append(battle);
        }
        
        
        
        
        
        
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
            else if ($(this).hasClass(fighters[4].Name)){
                chosenOne = fighters[4];
                fighters.splice(4,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log("I am Darth Darth Binks");
                console.log(chosenOne);
                console.log(enemies);
                
                createChosenOne();
                createEnemies();
            }
            else if ($(this).hasClass(fighters[5].Name)){
                chosenOne = fighters[5];
                fighters.splice(5,1);
                enemies.push(fighters[0],fighters[1],fighters[2]);
                fighters = []
                console.log("I am ST 249");
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
                        $(".Health").html("Name: " + defender.Name + "<br/> Health: " + defender.Health);
                        $(".player-health").html("Name: " +chosenOne.Name + "<br/> Health: " + chosenOne.Health);
                    }
                    
                    
                    if(chosenOne.Health<=0){
                        console.log("Enemy Defeated");
                        $("#row-four").empty();
                        defender = [];
                        console.log("You Lose");
                        reset = $("<button> You Lost Try Again? </button>");
                        $("#row-four").append(reset);
                        $(reset).addClass("btn btn-danger");
                        gamesLost++;
                        console.log("Times Lost"+ gamesLost);
                    }
                    
                    if (defender.Health <= 0){
                        console.log("Enemy Defeated");
                        $("#row-four").empty();
                        defender = [];
                        console.log(enemies);
                        console.log(defender);
                        if(enemies.length === 0){
                            console.log("You Win");
                            reset = $("<button> Play Again? </button>");
                            $("#row-four").append(reset);
                            $(reset).addClass("btn btn-success");
                            gamesWon++;
                            console.log("Times Won"+ gamesWon);
                            
                        }
                        
                        
                    }
                    $(reset).on("click",function(){
                        // window.location.reload()
                        initGame();
                        console.log(fighters);
                    });
                    
                    
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
                    
                    
                });
            });         
        });  
    }
    initGame();
});
