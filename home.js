


let foodData = [
    {
        name:"Masala Dosa",
        veg: true ,
        ratings:4.5,
        time:"23 min",
        servings:"4 peoples" ,
        img : "Screenshot 2024-04-07 at 6.46.14 AM.png" 
    },
    {name:"Paneer Butter Masala",
    veg: true ,
    ratings:4.8,
    time:"37 min",
    servings:"4 peoples" ,
    img : "Screenshot 2024-04-07 at 6.38.21 AM.png" },
    {name:"Muradabadi Chicken Biryani",
    veg: false ,
    ratings:4.4,
    time:"1 hour 10 min",
    servings:"5 peoples" ,
    img : "Screenshot 2024-04-07 at 7.01.48 AM.png" },
    {name:"Misal Pav",
    veg: true ,
    ratings:3.9,
    time:"19 min",
    servings:"2 peoples" ,
    img : "Screenshot 2024-04-07 at 7.09.35 AM.png" },
    {name:"Bihari Camparan Meat",
    veg: false ,
    ratings:4.7,
    time:"55 min",
    servings:"4 peoples" ,
    img : "Screenshot 2024-04-07 at 7.40.15 AM.png" },
    {name:"Amritsari Kulcha",
    veg: true ,
    ratings:5,
    time:"38 min",
    servings:"3 peoples" ,
    img : "Screenshot 2024-04-07 at 7.50.53 AM.png" },
    {name:"Rajastani Dal Baati",
    veg: true ,
    ratings:4.9,
    time:"55 min",
    servings:"2 peoples" ,
    img : "Screenshot 2024-04-07 at 7.45.01 AM.png" },
    {name:"Dhokla",
    veg: true ,
    ratings:4.2,
    time:"38 min",
    servings:"7 peoples" ,
    img : "Screenshot 2024-04-07 at 8.43.09 AM.png" }
];
const homepage = document.querySelector('.home-page');
const recipedetails = document.querySelector('.recipe-details');
const processpage = document.querySelector('.process');

document.querySelector('.back-1').addEventListener('click', ()=>{
    homepage.classList.remove('remove');
    recipedetails.classList.add("remove");
});
document.querySelector('.back-2').addEventListener('click', ()=>{
    recipedetails.classList.remove('remove');
    processpage.classList.add("remove");
});
for (let i = 0;i<4;i++){
    const div = document.querySelector("#example").cloneNode(true);
    div.children[0].children[0].src = foodData[i].img;
    div.id = foodData[i].name.split(" ").join("-");
    div.children[1].children[0].textContent = foodData[i].name;
    div.children[1].children[1].children[1].textContent = foodData[i].ratings;
    div.children[2].children[0].children[0].children[1].textContent = foodData[i].time;
    div.children[2].children[0].children[1].textContent = `Servings: ${foodData[i].servings}`;
    if(foodData[i].veg == false){
        div.children[2].children[1].children[i].style.color = "red";
    }
    document.querySelector(".recipes-in-recommende-recipes").append(div);
}
for (let i = 4;i<8;i++){
    const div = document.querySelector("#example").cloneNode(true);
    div.children[0].children[0].src = foodData[i].img;
    div.id = foodData[i].name.split(" ").join("-");
    div.children[1].children[0].textContent = foodData[i].name;
    div.children[1].children[1].children[1].textContent = foodData[i].ratings;
    div.children[2].children[0].children[0].children[1].textContent = foodData[i].time;
    div.children[2].children[0].children[1].textContent = `Servings: ${foodData[i].servings}`;
    // if(i == 4){
    //     console.log(i);
    //     console.log(div.children[2].children[1].children[i]);
    // }
    document.querySelector(".recipes-in-trending-recipes").append(div);
}

document.querySelector("#Paneer-Butter-Masala").addEventListener("click",()=>{
    homepage.classList.add("remove");
    recipedetails.classList.remove('remove');
})
document.querySelector(".start-cooking-btn").addEventListener("click",()=>{
    recipedetails.classList.add('remove');
    start();

})







// fetch('db.json')
//   .then(response => response.json())
//   .then(data => {
//     recipe = data.Recipe;

//     function updateTime() {
//       seconds++;
//       if (seconds >= 60) {
//         seconds = 0;
//         minutes++;
//         if (minutes >= 60) {
//           minutes = 0;
//           hours++;
//         }
//       }
//       let timeString = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
//       document.querySelector(".time-remaining").textContent = timeString;
//       if (recipe) {
        
//         const currentTime = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
//         const recipeSteps = Object.keys(recipe);
//         const matchingStep = recipeSteps.find(step => step >= currentTime);
//         const recipeContainer = document.querySelector(".current-step");
//         recipeContainer.innerHTML = "";
//         if (matchingStep) {
//             recipeContainer.innerHTML = recipe[matchingStep];

//         }
//       }
//     }

//     function start() {
//       if (timer !== null) {
//         clearInterval(timer);
//       }
//       timer = setInterval(updateTime, 1000);
//       document.getElementById("start").disabled = true;
//       document.getElementById("pause").disabled = false;
//       document.getElementById("stop").disabled = false;
//       document.getElementById("pause").textContent = "pause";
//     }

//     function pause() {
//       clearInterval(timer);
//       timer = null;
//       pausedTime = (hours * 3600) + (minutes * 60) + seconds;
//       document.getElementById("pause").textContent = "continue";
//     }

//     function stop() {
//       clearInterval(timer);
//       timer = null;
//       hours = 0;
//       minutes = 0;
//       seconds = 0;
//       pausedTime = 0;
//       document.getElementById("time").textContent = "00:00:00";
//       document.getElementById("start").disabled = false;
//       document.getElementById("pause").disabled = true;
//       document.getElementById("stop").disabled = true;
//       document.getElementById("pause").textContent = "pause";
//       document.getElementById("recipeContainer").innerHTML = "";
//     }

//     function continue1() {
//       let remainingSeconds = pausedTime;
//       hours = Math.floor(remainingSeconds / 3600);
//       remainingSeconds -= hours * 3600;
//       minutes = Math.floor(remainingSeconds / 60);
//       seconds = remainingSeconds - minutes * 60;
//       start();
//       document.getElementById("pause").textContent = "pause";
//     }

//     // Assign event listeners after function definitions
//     // document.getElementById("start").onclick = start;
//     document.querySelector(".pause-btn").onclick = function() {
//       if (this.textContent === "pause") {
//         pause();
//       } else {
//         continue1();
//       }
//     };
//     // document.getElementById.onclick = stop;
//   });
