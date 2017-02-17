// JavaScript File

TinyTurtle.apply(window)


function square(width)   {
forward(width);
left(90);
forward(width);
left(90);
forward(width);
left (90);
forward (width);
}

stamp();

function rightsquare(width)   {
forward(width);
right(90);
forward(width);
right(90);
forward(width);
right (90);
forward (width);
}
function triangle(width){
forward(width);
right(120);
forward(width);
right(120);
forward(width);
}
stamp()

function lefttriangle(width){
forward(width);
left(120);
forward(width);
left(120);
forward(width);
}


square(20);
square(50);
square(30);
square(60);
triangle(40);
triangle(40);
triangle(40);
rightsquare(30);
rightsquare(60);
rightsquare(40);
rightsquare(70);
lefttriangle(40);
lefttriangle(40);
lefttriangle(40);