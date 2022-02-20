const categories = document.querySelector("#categories");
const categoriesArr = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArr.length}`);

for (let i = 0; i < categoriesArr.length; i += 1) {
  console.log(`Category: ${categoriesArr[i].querySelector("h2").textContent}`);
  console.log(
    `Elements: ${categoriesArr[i].querySelector("ul").children.length}`
  );
}
