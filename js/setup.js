var SETUP_ITEM = document.querySelector(".setup");
var SETUP_SIMILAR_ITEM = document.querySelector(".setup-similar-item");
var fragment = document.createDocumentFragment();
var randomName = 0;
SETUP_ITEM.classList.remove("hidden");
var wizards=[{name:"Иван"}];
function casual(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

for (var i = 0; i <= 2; i++) {
  randomName = casual(1, 9);
  if (randomName == 1) {
    wizards[i].name = "Иван";
  }
  if (randomName == 2) {
    wizards[i].name = "Хуан Себастьян";
  }
  if (randomName == 3) {
    wizards[i].name = "Мария";
  }
  if (randomName == 4) {
    wizards.name = "Кристоф";
  }
  if (randomName == 5) {
    wizards[i].name = "Виктор";
  }
  if (randomName == 6) {
    wizards[i].name = "Юлия";
  }
  if (randomName == 7) {
    wizards[i].name = "Люпита";
  }
  if (randomName == 8) {
    wizards[i].name = "Вашингтон";
  }
}

for (var i = 0; i <= 2; i++) {
  randomName = casual(1, 8);

  if (randomName == 1) {
    wizards[i].surname = "Марья";
  }
  if (randomName == 2) {
    wizards[i].surname = "Верон";
  }
  if (randomName == 3) {
    wizards[i].surname = "Мирабелла";
  }
  if (randomName == 4) {
    wizards[i].surname = "Вальц";
  }
  if (randomName == 5) {
    wizards[i].surname = "Онопко";
  }
  if (randomName == 6) {
    wizards[i].surname = "Топольницкая";
  }
  if (randomName == 7) {
    wizards[i].surname = "Нионго";
  }
  if (randomName == 8) {
    wizards[i].surname = "Ирвинг";
  }
}

for(var i=0; i<=5; i++)
  {
    randomName=casual(1,6);
    if(randomName==1)
      {
        wizards[i].coatColor="rgb (101, 137, 164)";
      }
    if(randomName==2)
      {
        wizards[i].coatColor="rgb (241, 43, 107)";
      }
    if(randomName==3)
      {
        wizards[i].coatColor="rgb (146, 100, 161)";
      }
    if(randomName==4)
      {
        wizards[i].coatColor="rgb (56, 159, 117)";
      }
      if(randomName==5)
     {
       wizards[i].coatColor="rgb (215, 210, 55)";
     }
    if(randomName==6)
      {
        wizards[i].coatColor="rgb (0, 0, 0)";
      }

  }

for(var i=0; i<=4; i++)
{
   randomName=casual(1,6);
  if(randomName==1)
    {
     wizards.eyesColor="black";
    }
   if(randomName==2)
     {
       wizards.eyesColor="red";
     }
  if(randomName==3)
    {
      wizards.eyesColor="blue";
    }
  if(randomName==4)
   {
     wizards.eyesColor="yellow";
   }
  if(randomName==5)
    {
      wizards.eyesColor="green";
    }
}

console.log(wizards[0].name);
console.log(wizards[0].surname);
console.log(wizards.coatColor);
console.log(wizards.eyesColor);
/*for (var i=0; i<=5; i++)
  {
    var NAME_ITEM[i]=document.createElement("p");
      NAME_ITEM[i].className="setup-similar-label";
      NAME_ITEM[i].innerHTML=wizards[i].name;
     SETUP_SIMILAR_ITEM.appendChild(NAME_ITEM[i]);
  }
*/
