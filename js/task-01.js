const categories = document.querySelector("#categories");
const categoriesArr = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArr.length}`);

categoriesArr.forEach(function (elemnt) {
  console.log(
    `Category: ${elemnt.querySelector("h2").textContent}
Elements: ${elemnt.querySelector("ul").children.length}`
  );
});
