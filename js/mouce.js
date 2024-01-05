
var tailElements = [];
var isTracking = false;
let lastMousePosition = { x: 0, y: 0 };

document.addEventListener('mousemove', function (event) {
    if (!isTracking) {
        isTracking = true;
    }

    leftX = event.clientX - 10;
    topY = event.clientY - 40;
    leftX += window.scrollX;
    topY += window.scrollY;


    lastMousePosition.x = leftX;
    lastMousePosition.y = topY;
    update(lastMousePosition);
});




document.addEventListener('mouseleave', function () {
    isTracking = false;
    tailElements.forEach(function (tail) {
        tail.remove();
    });
    tailElements = [];
});

function update(mousePos) {
    var tail = document.createElement('div');
    tail.classList.add('tail');
    document.body.appendChild(tail);
    tail.style.left = mousePos.x + 'px';
    tail.style.top = mousePos.y + 'px';
    tailElements.push(tail);

    if (tailElements.length > 1) {
        tailElements.shift().remove();
    }
}