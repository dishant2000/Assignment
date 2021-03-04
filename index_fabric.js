

var canvas = new fabric.Canvas("c");


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
// canvas.setDimensions({
//     width: '100%',
//     height: '100%'
// }, {
//     cssOnly: false
// });

// event listner for window resinzing
window.addEventListener("resize", function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    init();
});

canvas.setDimensions({ width: window.innerWidth, height: window.innerHeight });

function Speed_Display(speed) {
    let display_block = document.querySelector('#container_result');
    display_block.innerHTML = `<p style="color:black;">speed = <strong>${Math.round(speed.toFixed(2))}</strong> </p>`;
}


// function Position_Display(pos) {
//     let display_block = document.querySelector('#container_result_position');
//     display_block.innerHTML = `<p style="color:black;">pos = <strong>${Math.round(pos.toFixed(2))}</strong> </p>`;
// }



var friction_value, Speed_value;

let myform = document.querySelector('#form_wrapper');
console.log(myform);
function StartHandler() {
    myform.addEventListener('submit', (e) => {
        e.preventDefault();
        friction_value = myform['Friction'].value;
        Speed_value = myform['Speed'].value;
        Speed_value = parseFloat(Speed_value);
        friction_value = parseFloat(friction_value);
        init();

    });

}
StartHandler();

var ball = new fabric.Circle({
    radius: 35,
    fill: '#413c69',
    left: innerWidth / 2,
    top: innerHeight / 2,
});


canvas.add(ball);
canvas.renderAll();

function update() {
    var y = ball.get('top');
    var r = ball.get('radius');
    // console.log(y, r);
    if (y + r + 40 > innerHeight) {
        Speed_value = (-1 * Speed_value * friction_value) * 1;
    }
    else {
        Speed_value = Speed_value + 2;
    }
    y += Speed_value;
    ball.set({ top: y });
    canvas.renderAll();
    Speed_Display(Math.round(Speed_value));
    // Position_Display(Math.round(y) - innerHeight + 65);
    requestAnimationFrame(update);
}

function init() {
    // canvas.clearRect(0, 0, innerWidth, innerHeight);
    // canvas.clear();
    requestAnimationFrame(update);

}


