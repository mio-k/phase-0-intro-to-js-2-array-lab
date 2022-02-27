// Write your solution here!
const cats = [`Milo`, `Otis`, `Garfield`];
function destructivelyAppendCat(newCat) {
    cats.push(newCat);
}
function destructivelyPrependCat(newCat){
    cats.unshift(newCat);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
  const moreCats = [...cats];
  moreCats.push(name);
  return moreCats;
}
function prependCat(name){
    const evenMoreCats = [...cats];
    evenMoreCats.unshift(name);
    return evenMoreCats;
}
function removeLastCat() {
   const minusTheLastCat = [...cats];
   minusTheLastCat.splice(minusTheLastCat.length-1,1)
   return minusTheLastCat;
}
function removeFirstCat(){
    return cats.slice(1);
}