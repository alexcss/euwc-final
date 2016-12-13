
;(function() {
    var menuToggle = document.querySelectorAll(".ba-main-menu__toggle"),
        body = document.getElementsByTagName("body")[0],
        overlay = document.querySelectorAll(".ba-overlay");

    menuToggle[0].onclick = function (){
        if (body.className === "ba-menu-open"){
            body.className = "";
        } else {
            body.className = "ba-menu-open";
        }
    };

    overlay[0].onclick = function (){
        body.className = "";
    };

})();
