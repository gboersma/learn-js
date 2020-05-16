function area() {
    let l = parseInt($('#length').val());
    let w = parseInt($('#width').val());
    let a = calculateArea(l, w);
    $("#answer").text("The area is: " + a);
}

function perimeter() {
    let l = parseInt($('#length').val());
    let w = parseInt($('#width').val());
    let p = calculatePerimeter(l, w);
    $("#answer").text(" The perimeter is: " + p);
}

function volume() {
    let l = parseInt($('#length').val());
    let w = parseInt($('#width').val());
    let h = parseInt($('#height').val());
    let v = calculateVolume(l, w, h);;
    $("#answer").text(" The volume is: " + v);
}
