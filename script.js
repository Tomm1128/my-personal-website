const h2 = document.createElement("h2");
h2.textContent = "Quality Assurance Tester";

const h3 = document.createElement("h3");
h3.textContent = "Currently a Qualty Assurance tester for the BT Department at Power Home Remodeling. I have a BS in Computer Science from West Chester University. I had a concentration in Java and Python. I used to work as a Wordpress Developer before starting my Power journey."


document.getElementById("about").appendChild(h2);

document.getElementById("about").appendChild(h3);

function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 
