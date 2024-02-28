const h2 = document.createElement("h2");
h2.textContent = "QA Ninja | Power Home Remodeling";

const p = document.createElement("p");
p.textContent = "Currently a Qualty Assurance tester for the BT Department at Power Homde Remodeling. I have a BS in Computer Science from West Chester University. I had a concentration in Java and Python. I user to work as a Wordpress Developer before starting my Power journey."


document.getElementById("about").appendChild(h2);

document.getElementById("about").appendChild(p);

function responsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 
