function area() {
    let length = parseInt(prompt("what is the length? "));
    let width = parseInt(prompt("What is the width? "));
    let area = length * width;
    alert("The area is: " + area);
}

function perimeter() {
    let length = parseInt(prompt("what is the length? "));
    let width = parseInt(prompt("What is the width? "));
    let perimeter = 2 * length + 2 * width;                                                          ;
    alert(" The perimeter is: " + perimeter);
}

function volume() {
    let length = parseInt(prompt("what is the length? "));
    let width = parseInt(prompt("What is the width? "));
    let height = parseInt(prompt("What is the height? "));
    let volume = length * width * height;
    alert(" The volume is: " + volume);
}
