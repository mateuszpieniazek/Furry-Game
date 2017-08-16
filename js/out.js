/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

console.log('hi5!')

//Konstruktor jest wywoływany w momencie instancjalizacji (moment, w którym instancja obiektu zostaje utworzona). Konstruktor jest metodą klasy. W JavaScript, funkcja służy za konstruktor obiektu. Nie ma jednak wyraźnej potrzeby definiowania konstruktora. Każda akcja zadeklarowana w konstruktorze zostanie wykonana w momencie utworzenia obiektu.

//Konstruktor jest używany do ustawienia właściwości obiektu lub do wywołania metod przygotowujących obiekt do użytku.

 //W JavaScript, funkcja służy za konstruktor obiektu.

function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}
//tworzymy  konstruktor (funkcję/klasę) Furry i przypisujemy jej właściwości (x,y,direction), które od razu definiujemy (0,0, right). Umożliwia to this.

//Właściwości(atrybuty obiektu) są zmiennymi zawartymi wewnątrz klasy.

function Coin() {
    this.x = Math.floor(Math.random() * 10); // losowanie wartości dla x
    this.y = Math.floor(Math.random() * 10);
}

//konstruktor Game, który będzie przechowywał egzemplarz Furry'ego, monetę, planszę gry i aktualny wynik gracza. Obiekt ten będzie również posiadał metody do zarządzania grą.
function Game() {

    var board = document.querySelectorAll("#board div"); // wyszukiwanie divów - pól planszy

    this.furry = new Furry();  //definiujemy właściwość furry dla klasy(funkcji) Game i robimy to w momencie utworzenia obiektu
    this.coin = new Coin();
    this.score = 0;

    Game.prototype.index = function (x,y) {
    // definiujemy metodę (czyli właściwość, ktora jest funkcją) dla konstruktora Game i robimy to w momencie jej utworzenia
    // metoda - funkcja w klasie (w funkcji) - function(x,y){}
    // Game - obiekt, prototype - dodawanie metody;
    //...index = function (x,y) {} przypisanie właściwości (w przypadku funkcji - metody), ktora liczy wedlug wzrou poniżej
    return x + (y * 10);
    }


    //7//
    // Aby pokazać Furry'ego, wystarczy elementowi <div> planszy, odpowiadającemu pozycji x i y Furry'ego, nadać klasę .furry. Podobnie należy zrobić z monetą.
    // Napisz metodę w konstruktorze Game() - showFurry(), która to zrobi. Wykorzystaj metodę przeliczającą pozycję, którą napisałeś w poprzednim punkcie.

    this.showFurry[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');

    this.showCoin[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');

}

// Przypuśćmy, że mamy już stworzone jakieś obiekty. Po jakimś czasie chcielibyśmy dodać do nich nową metodę. Dodajemy więc nową metodę do naszej foremki, ale okazuje się, że dostaną ją dopiero nowe obiekty stworzone na podstawie tej formy. Aby zmienić prototyp (a co za tym idzie i wszystkie obiekty stworzone na jego podstawie) posłużymy się instrukcją prototype.






function Gra (showFurry, showCoin) {


showFurry();
showCoin();
}


/***/ })
/******/ ]);