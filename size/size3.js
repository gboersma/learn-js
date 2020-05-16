function area() {
    let length = parseInt($('#length').val());
    let width = parseInt($('#width').val());
    let area = length * width;
    $("#answer").text("The area is: " + area);
}

function perimeter() {
    let l = parseInt($('#length').val());
    let w = parseInt($('#width').val());
    let p = calculatePerimeter(l, w);
    $("#answer").text(" The perimeter is: " + p);
}

function volume() {
    let length = parseInt($('#length').val());
    let width = parseInt($('#width').val());
    let height = parseInt($('#height').val());
    let volume = length * width * height;
    $("#answer").text(" The volume is: " + volume);
}
