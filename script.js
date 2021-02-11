//find all element with "tab" class and have it
// const tabs = document.querySelectorAll("#Tabs button > span")
const tabs = [...document.getElementsByClassName("Tab")]


// console.log(tabs);


//find all element with "Page" class and have it as a NodeList
const pages = document.querySelectorAll("#content > div.Page")
// console.log(pages);

function render(event) {
  const section = event.target.dataset.section;
  console.log(section);
  pages.forEach(page=> page.classList.add("hidden"))

  document.getElementById(section).classList.remove("hidden")
}
console.log(tabs);
tabs.forEach(element => {
  element.onclick = event => render(event)
});

class Rectangle {
  constructor(hauteur,largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }

  grandir(param,clbk){
    this.hauteur += param
    this.largeur += param
    if (clbk) {
      clbk()
    }
  }
}

const rect = new Rectangle(10,10)

function sayBigger(){
  console.log("je suis grand");
}

rect.grandir(10,sayBigger)






















// const tabs = document.querySelectorAll(".Tab");
// console.log(tabs);

// const pages = document.querySelectorAll(".Page");



// function render(event) {
//   const section = event.target.dataset.section;
//   pages.forEach((tab) => tab.classList.add("hidden"));
//   document.getElementById(section).classList.remove("hidden");
// }

// tabs.forEach((tab) => (tab.onclick = render));