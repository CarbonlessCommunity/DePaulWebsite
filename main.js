// main = document.getElementById("main");
// main.style.boxShadow = "none";

// bodyClasses = "se-bg font se-text-color x4-body x4-webkit x4-chrome x4-mac   ext-webkit ext-chrome ext-mac ext-desktop en_US react-toolbox";
// innerBody = document.getElementsByClassName(bodyClasses)[0];
// innerBody.style.color = "rgb(0, 0, 0)";
// innerBody.style.backgroundColor = "rgb(255, 255, 255)";

// comparativeEnergyPanel = document.getElementById("se-comparative-energy-panel");
// comparativeEnergyPanel.style.display = "none";

// for (i = 0; i < main.children.length; i++) {
//     element = main.children[i]
// 	if (element.id != "dashboard") {
//         element.style.display = "none";
// 	} else { // If it is the dashboard
//         element.style.top = "0px";
//         element.style.left = "0px";
//     }
// }

// ul = document.getElementsByClassName("x-tab-strip x-tab-strip-top")[1];
// currentStep = 0

// setInterval(() =>  {
//     console.log("shifting now");
//     ul.children[currentStep].children[1].click();
//     if(currentStep == 3) {
//         currentStep = 0
//     } else {
//         currentStep += 1;
//     }

// }, 6000);

FIFTEEN_MINUTES = 900000;

setInterval(() => {
	location.reload();
}, FIFTEEN_MINUTES)
