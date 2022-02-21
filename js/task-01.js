// const categories = document.querySelector("#categories");
const categoriesArr = document.querySelector("#categories").querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArr.length}`);

categoriesArr.forEach( (elemnt) => {
  console.log(
    `Category: ${elemnt.querySelector("h2").textContent}
Elements: ${elemnt.querySelector("ul").children.length}`
  );
});
