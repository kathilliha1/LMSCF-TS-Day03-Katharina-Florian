var Dating = /** @class */ (function () {
    function Dating(a, b) {
        this.image = a;
        this.slogan = b;
    }
    Dating.prototype.datingtop = function () {
        return " \n\t<div class=\"col-sm-2 bg-dark\"> \n\t\t\t<img src=\"" + this.image + "\" class=\"rounded p-2 image\" alt=\"Cinque Terre\">\n\t\t\t<h2 class=\"text-light\">" + this.slogan + "</h2>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary m-2 \">match</button>\n\n\t</div>\n\t";
    };
    return Dating;
}());
var pleaseWork = new Dating("../Images/DarthMaul.jpg", "möge die macht mit dir sein");
document.getElementsByClassName("y")[0].innerHTML = (pleaseWork.datingtop());
var Datinglike = /** @class */ (function () {
    function Datinglike(a, b, c, d, e, f) {
        this.image = a;
        this.name = b;
        this.age = c;
        this.location = d;
        this.hobbies = e;
        this.favourite = f;
    }
    Datinglike.prototype.datingdown = function () {
        return "\n\t\t<div class= col-sm-3 bg-dark border>\n\t\t<img src=\"" + this.image + "\" class=\" rounded pic\" alt=\"Cinque Terre\">\n\n\t<p class=\" row justify-content-start\">Name: " + this.name + "</p>\n\t<p class=\" row justify-content-start\">Age: " + this.age + "</p>\n\t<p class=\" row justify-content-start\">Location: " + this.location + "</p>\n\t<p class=\" row justify-content-start\">Hobbies: " + this.hobbies + "</p>\n\t<p class=\" row justify-content-start\">Favorites: " + this.favourite + "</p>\n\t\n\t\n</div>\n\t\t";
    };
    return Datinglike;
}());
var pleaseDateOne = new Datinglike("../Images/DarthMaul.jpg", "Darth Moul", 49, "Vienna", "sometimes", "nudelmonster");
var pleaseDatetwo = new Datinglike("../Images/DarthVader.png", "Darth Vader", 55, "Lang Enzersdorf", "Schnorcheln", "eis essen");
var pleaseDateThree = new Datinglike("../Images/JarJar.jpg", "Jar Jar Bings", 14, "star wars", "comedy club", "blabla");
var pleaseDateFour = new Datinglike("../Images/JynErso.jpg", "Jyn Erso", 27, "mistelbach", "pläne fladern", "d");
var pleaseDateFive = new Datinglike("../Images/Padme.jpg", "Padme", 30, "ff", "d", "d");
var pleaseDateSix = new Datinglike("../Images/PrinzessionLea.jpg", "Prinzession Lea", 40, "ff", "üü", "dd");
var pleaseDateSeven = new Datinglike("../Images/RaySkywalker.png", "Ray Skywalker", 89, "asdf", "asdf", "sdf");
var pleaseDateEight = new Datinglike("../Images/Yoda.png", "Joda", 29, "asdfsadf", "asdfdsf", "asdfdsf");
var downout = [pleaseDateOne, pleaseDatetwo, pleaseDateThree, pleaseDateFour, pleaseDateFive, pleaseDateSix, pleaseDateSeven, pleaseDateEight];
for (var i = 0; i < downout.length; i++) {
    document.getElementsByClassName("upp")[0].innerHTML += (downout[i].datingdown());
}
