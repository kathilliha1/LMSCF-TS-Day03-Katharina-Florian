var Dating = /** @class */ (function () {
    function Dating(a, b) {
        this.image = a;
        this.slogan = b;
    }
    Dating.prototype.datingtop = function () {
        return " \n\t<div class=\"\"> \n\t\t\t<a>" + this.image + "</a>\n\t\t\t<h2>" + this.slogan + "</h2>\n\n\t</div>\n\t";
    };
    return Dating;
}());
var pleaseWork = new Dating("`<img src='spagetti-bolognese.jpg'>`", "möge das nudelmonster mit dir sein");
document.write(pleaseWork.datingtop());
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
        return "\n\t\t<div class= col-sm-5 bg-dark>\n\t<img src=\"" + this.image + "\" class=\"rounded m-2\" alt=\"Cinque Terre\">\n\n\t<p class=\" row justify-content-start\">Name: " + this.name + "</p>\n\t<p class=\" row justify-content-start\">Age: " + this.age + "</p>\n\t<p class=\" row justify-content-start\">Location: " + this.location + "</p>\n\t<p class=\" row justify-content-start\">Hobbies: " + this.hobbies + "</p>\n\t<p class=\" row justify-content-start\">Favorites: " + this.favourite + "</p>\n\t\n\t\n</div>\n\t\t";
    };
    return Datinglike;
}());
var pleaseDateMe = new Datinglike("spagetti-bolognese.jpg", "Karl", 49, "Vienna", "sometimes", "nudelmonster");
document.write(pleaseDateMe.datingdown());
