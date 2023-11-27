const container = document.getElementById("container");
document.getElementById("right").onclick = function() {
    document.getElementById("right").classList.add('correct');
    next();
};
function next(){
    let nextBtn = document.createElement("button");
    nextBtn.innerText = "Next ->";
    // next.onclick = question();

    container.appendChild(nextBtn);
}
// function question(){
//     let html = `<section>
//         <h1>What is the capital of Vietnam?</h1>
//         <div>
//             <button id = "right">Ha Noi</button>
//             <button>Ho Chi Minh City</button>
//         </div>
//         <div>
//             <button>Vientiane</button>
//             <button>Sai Gon</button>
//         </div>
//     </section>`;
//     document.body.innerHTML = html;
// }