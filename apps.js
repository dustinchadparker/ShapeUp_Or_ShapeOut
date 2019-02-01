let shapeContainer = document.getElementById("shapes-container");
let MAX = 600;

class Shape {
    constructor() {

        this.div = document.createElement('div');
        shapeContainer.appendChild(this.div);
        this.div.style.left = `${this.randomNum()}px`;
        this.div.style.top = `${this.randomNum() + 115}px`;

      


        //updates statistics in sidepanel
        this.div.addEventListener('click', () => {

            //parses width and height to numbers

            let parsedWidth = parseInt(this.div.style.width);
            let parsedHeight = parseInt(this.div.style.height);
            
            //gets the Shape name, capitalizes first letter
            let lowercasedName = this.div.getAttribute("class");
            let nameOfShape = lowercasedName.charAt(0).toUpperCase() + lowercasedName.slice(1);
            console.log(nameOfShape);
            document.getElementById('shape-id').innerHTML = "Shape Name: " + nameOfShape;

            //triangle doesn't have a width so setting height to width <><>
            if (nameOfShape === 'Triangle') {
                let parsedStuff = parseInt(this.div.style.borderBottom);
                
                parsedWidth = parsedStuff;
                parsedHeight = parsedStuff;
            }

            //gets width of div
            document.getElementById('shape-width').innerHTML = "Width: " + (parsedWidth);

            //gets height of div
            document.getElementById('shape-height').innerHTML = "Height: " + (parsedHeight);

            //gets radius of div
            document.getElementById('shape-radius').innerHTML = "Radius: " + (parsedWidth / 2);

            //gets area of div
            let area = 0;
            if (nameOfShape === 'Triangle') {
                area = 0.5 * parsedHeight * parsedHeight;
            } else if (nameOfShape === 'Circle') {
                area = 3.1415 * ((parsedWidth / 2) ^ 2);
            } else {
                area = (parsedHeight * parsedWidth);
            }
            document.getElementById('shape-area').innerHTML = "Area: " + parseFloat(area).toFixed(3);

            //gets perimeter of div
            let perimeter = 0;
            if (nameOfShape === 'Triangle') {
                perimeter = 2 * parsedHeight + (Math.sqrt(2) * parsedHeight);
            } else if (nameOfShape === 'Circle') {
                perimeter = 2 * ((parsedWidth / 2) * 3.1415);
            } else {
                perimeter = (parsedHeight * 2 + parsedWidth * 2);
            }
            document.getElementById('shape-perimeter').innerHTML = "Perimeter: " + parseFloat(perimeter).toFixed(3);

        });

          //double clicking removes div element from page
          this.div.addEventListener('dblclick', () => {
            this.div.remove();
        });

        

    }

    //generates a random number between 0 and 600
    randomNum() {
        return Math.floor(Math.random() * 600);
    }

}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        let dia = radius * 2;
        this.div.classList.add('circle');
        this.div.style.width = dia + "px";
        this.div.style.height = dia + "px";


    }
}

class Triangle extends Shape {
    constructor(height) {
        super();
        this.height = height;
        this.div.classList.add('triangle');
        this.div.style.borderBottom = height + 'px solid yellow';
        this.div.style.borderRight = height + 'px solid transparent';

    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.div.classList.add('rectangle');
        this.div.style.width = width + "px";
        this.div.style.height = height + "px";


    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
        this.div.classList.add('square');
        this.div.style.width = sideLength + "px";
        this.div.style.height = sideLength + "px";
    }
}

//creates a triangle on click
let tri = document.getElementById('triangle-button');
tri.addEventListener('click', () => {
    triHeight = document.getElementById('heightT').value;
    new Triangle(triHeight);
});



//creates a circle on click
let cir = document.getElementById('circle-button');
cir.addEventListener('click', () => {
    cirRadius = document.getElementById('radiusC').value;
    new Circle(cirRadius);
});


//creates a square on click
let sq = document.getElementById('square-button');
sq.addEventListener('click', () => {
    sqSideLength = document.getElementById('sideSq').value;
    new Square(sqSideLength);
});

//creates a rectangle on click
let rect = document.getElementById('rectangle-button');
rect.addEventListener('click', () => {
    heightRect = document.getElementById('heightR').value;
    widthRect = document.getElementById('widthR').value;
    new Rectangle(widthRect, heightRect);
});