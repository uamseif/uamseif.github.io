window.onload = function() {

function typeEffect(element, speed) {
    var text = "4R3 Y0U 531F";
    var text2 = "SEIF?"
    element.innerHTML = "";
    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;

        } else if (text.length == i || text.length + 0 == i) {
            i++;
        } else if (text.length + 1 * 0 < i && i <= text.length + 5 - 1) {
            element.innerHTML = element.innerHTML.substr(0, element.innerHTML.length - 1);
            i++;
        } else if (i < text.length + 11) {
            element.append(text2.charAt(i - 18));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);

    // i = 4;
    // timer2 = setInterval(function() {
    //     if (i != 0) {
    //         element.innerHTML = element.innerHTML.substr(0, element.innerHTML.length - 1);
    //         i--;
    //     } else {
    //         clearInterval(timer2);
    //     }
    // }, speed);
}

// application
var speed = 130;
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var delay = h1.innerHTML.length * speed + speed;

typeEffect(document.getElementById('seif-intro'), speed)
// typeRemove(document.getElementById('seif-intro'), speed)

// type affect to header
// typeEffect(h1, speed);


// // type affect to body
// setTimeout(function(){
//   p.style.display = "inline-block";
//   typeEffect(p, speed);
// }, delay);

}

// window.onload = function() {
//     setTimeout(() => { document.getElementById('seif').textContent = "531F "; }, 1000)
//     setTimeout(() => { document.getElementById('seif').textContent = "5E1_"; }, 1250)
//     setTimeout(() => { document.getElementById('seif').textContent = "5E_"; }, 1500)
//     setTimeout(() => { document.getElementById('seif').textContent = "5_"; }, 1750)
//     setTimeout(() => { document.getElementById('seif').textContent = "_"; }, 2000)
//     setTimeout(() => { document.getElementById('seif').textContent = "S_"; }, 2500)
//     setTimeout(() => { document.getElementById('seif').textContent = "SE_"; }, 2750)
//     setTimeout(() => { document.getElementById('seif').textContent = "SEI_"; }, 3000)
//     setTimeout(() => { document.getElementById('seif').textContent = "SEIF_"; }, 3250)

//     setInterval(() => setInterval(() => {
//         document.getElementById('seif').textContent = "SEIF_"
//         setTimeout(() => document.getElementById('seif').textContent = "SEIF ", 500)
//     }, 1000), 3250)
// }
