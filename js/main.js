"use strict";

function HashStorageFunc() {}
HashStorageFunc.prototype.addValue = function (key, value) {
   return this[key] = value;
}
HashStorageFunc.prototype.getValue = function (key) {
   return this[key]
}
HashStorageFunc.prototype.deleteValue = function (key) {

   delete this[key]

}
HashStorageFunc.prototype.getKeys = function (key) {
   return Object.keys(this)
}
const drinkStorage = new HashStorageFunc();
const nameDrink = document.querySelector('#enterDrink');
nameDrink.addEventListener('click', () => {
   const keyDrink = prompt('Введите название напитка');
   let alcoholDrinkUser1 = ' ';
   const alcoholDrinkUser = confirm(' напиток алкогольный ок=ДА, отмена=НЕТ');
   (alcoholDrinkUser)?alcoholDrinkUser1 = 'да': alcoholDrinkUser1 = 'нет';
   const valueDrinkUser = prompt('рецепт его приготовления');
   const drink = {
      recept: valueDrinkUser,
      alcohol: alcoholDrinkUser1
   }
   drinkStorage.addValue(keyDrink.toLowerCase(), drink);
});

const resultDrink = document.querySelector('#resultDrink');
resultDrink.addEventListener('click', () => {
   const allInfoDrink = prompt('«получение информации о напитке»');
   const g = (drinkStorage.getValue(allInfoDrink));
   (Object.keys(drinkStorage).includes(allInfoDrink)) ?
   alert(`напиток ${allInfoDrink}
   алкогольный: ${g['alcohol']}
   рецепт приготовления:
   ${g['recept']}`): alert(`not ${allInfoDrink}`);

});
const deleteDrink = document.querySelector('#deleteDrink');
deleteDrink.addEventListener('click', () => {
   const deleteNameDrink = prompt('«удаление информации о напитке»');
   (Object.keys(drinkStorage).includes(deleteNameDrink))  ? alert(`${deleteNameDrink} удаленно успешно `) & drinkStorage.deleteValue(deleteNameDrink):alert("Ошибка");
});
const allDrink = document.querySelector('#allDrink');
allDrink.addEventListener('click', () => {
   alert(`«перечень всех напитков» ${drinkStorage.getKeys()}`);
});




