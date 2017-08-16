

//Konstruktor jest wywoływany w momencie instancjalizacji (moment, w którym instancja obiektu zostaje utworzona). Konstruktor jest metodą klasy. W JavaScript, funkcja służy za konstruktor obiektu. Nie ma jednak wyraźnej potrzeby definiowania konstruktora. Każda akcja zadeklarowana w konstruktorze zostanie wykonana w momencie utworzenia obiektu.

//Konstruktor jest używany do ustawienia właściwości obiektu lub do wywołania metod przygotowujących obiekt do użytku.

 //W JavaScript, funkcja służy za konstruktor obiektu.
document.addEventListener("DOMContentLoaded", function(){




 var Furry = function() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}
//tworzymy  konstruktor (funkcję/klasę) Furry i przypisujemy jej właściwości (x,y,direction), które od razu definiujemy (0,0, right). Umożliwia to this.

//Właściwości(atrybuty obiektu) są zmiennymi zawartymi wewnątrz klasy.

var Coin = function() {
    // lub var x = Math.....
    this.x = Math.floor(Math.random() * 10); // losowanie wartości dla x
    this.y = Math.floor(Math.random() * 10);
}

//konstruktor Game, który będzie przechowywał egzemplarz Furry'ego, monetę, planszę gry i aktualny wynik gracza. Obiekt ten będzie również posiadał metody do zarządzania grą.
var Game = function(){ //lub function Game() {

    this.board = document.querySelectorAll("#board > div"); // wyszukiwanie divów - pól planszy
    this.furry = new Furry();  //definiujemy właściwość furry dla klasy(funkcji) Game i robimy to w momencie utworzenia obiektu
    this.coin = new Coin();
    this.score = 0;
    this.startGame = function(){
        var self = this;
        this.setInterval = setInterval(function(){
            self.moveFurry(); // funckja move furry wywoluje sie co 0,5sek; dodaje sie jeden element i ukrywa się (remove); klasa przeskakuje z elementu do elementu
            // usuwa w jednym, ddaje w drugim i tak co 0,5sek
        }, 250);

    }

    this.index = function(x,y) {
        return x + (y * 10);
    }

        // jedenmu z tych bordow nadajemy klasę furry i tam pojawi się furry
     this.showFurry = function(){
     this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    }
    // cala plansza - znajduje index wlasciwy dla furrego; klasa fury, zeby byl widoczny

     this.showCoin = function(){
     this.board[this.index(this.coin.x,this.coin.y)].classList.add('coin');
    }

    this.hideVisibleFurry =function(){
        document.querySelector('.furry').classList.remove('furry');
    }

    this.moveFurry = function(){

        this.hideVisibleFurry();
        if(this.furry.direction =="right")
        {
            this.furry.x +=1; // wywolywanie +1 ; w funkcji sthis.showFurry pokaze sie w polu obok
                }
        else if(this.furry.direction =="left")
        {
            this.furry.x -=1;
                }
        else if(this.furry.direction =="top")
        {
            this.furry.y += 1;
        }
        else if(this.furry.direction =="bottom")
        {
            this.furry.y -= 1;
        }
        this.gameOver();

    }

    this.turnFurry = function(event){
        switch (event.which) {
            case 37:
            this.furry.direction = "left";
            break;
            case 38:
            this.furry.direction = "bottom";
            break;
            case 39:
            this.furry.direction = "right";
            break;
            case 40:
            this.furry.direction = "top";
            break;
        }
}
    this.gameOver = function(){
        if(this.furry.x > 9 || this.furry.x < 0 || this.furry.y >9 || this.furry.y <0)
        {
            console.log("Game over");
            clearInterval(this.setInterval);
        } else {
            this.checkCoinCollision();
            this.showFurry();
        }
    }



    this.checkCoinCollision = function(){
        if(this.furry.x == this.coin.x && this.furry.y == this.coin.y)
        {
            document.querySelector('.coin'). classList.remove('coin');
            this.score +=1;
            this.coin = new Coin();
            this.showCoin();
            document.querySelector('div> strong').innerText = this.score;

        }
    }


}

var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();


document.addEventListener('keydown', function(event){
    game.turnFurry(event);
});


});








// // Przypuśćmy, że mamy już stworzone jakieś obiekty. Po jakimś czasie chcielibyśmy dodać do nich nową metodę. Dodajemy więc nową metodę do naszej foremki, ale okazuje się, że dostaną ją dopiero nowe obiekty stworzone na podstawie tej formy. Aby zmienić prototyp (a co za tym idzie i wszystkie obiekty stworzone na jego podstawie) posłużymy się instrukcją prototype.
// Game.prototype.index = function (x,y) {
// // definiujemy metodę (czyli właściwość, ktora jest funkcją) dla konstruktora Game i robimy to w momencie jej utworzenia
// // metoda - funkcja w klasie (w funkcji) - function(x,y){}
// // Game - obiekt, prototype - dodawanie metody;
// //...index = function (x,y) {} przypisanie właściwości (w przypadku funkcji - metody), ktora liczy wedlug wzrou poniżej
// return x + (y * 10);
// }
//
//
// Game.prototype.showFurry[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
//
// Game.prototype.showCoin[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
//
//
// console.log(showCoin.classList);
