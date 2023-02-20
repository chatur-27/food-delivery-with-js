var img = document.getElementsByClassName("img");

for(var i=0;i<2;i++) {
    img[i].addEventListener("mouseenter", function() {
        img[i].style.filter = "grayscale(0%)";
    });
    
    img[i].addEventListener("mouseleave", function() {
        img[i].style.filter = "grayscale(100%)";
    });
}

var headings = document.querySelectorAll(".heading");
    
for (var i = 0; i < headings.length; i++) {
    headings[i].addEventListener("mouseover", function() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.color = "#" + randomColor;
        
        this.classList.add("bounce");
        

        setTimeout(function() {
            this.classList.remove("bounce");
        }.bind(this), 1000);
    });
}

var button = document.querySelectorAll(".myButton");
    

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        this.innerText = "Thanks for clicking!";
        
        this.classList.add("pulse");
        
        setTimeout(function() {
            this.classList.remove("pulse");
        }.bind(this), 1000);
    });
}

var div = document.querySelectorAll(".div5,.div6");
    
for (var i = 0; i < div.length; i++) {
    div[i].addEventListener("click", function() {
    
        this.classList.add("shake");
        
        setTimeout(function() {
            this.classList.remove("shake");
        }.bind(this), 1000);
    });
}
