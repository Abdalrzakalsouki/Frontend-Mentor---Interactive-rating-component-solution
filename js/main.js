let ratings = document.getElementsByTagName("li");
let active = false;
let index = 0;
let ratingValue = 1;

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", () => {
    if (active === false) {
      index = i;
      ratings[index].style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--primary-color");
      ratings[index - 1].style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--gray-2");
      ratingValue = ratings[index].innerText;
      active = true;
    } else if (active === true && index === i) {
      ratings[index].style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--blue-1");
      ratings[index - 1].style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--blue-1");
      ratingValue = 1;
      active = false;
    }
  });
}

let submit = document.getElementById("submit");
let ratingPage = document.getElementsByClassName("rating-page")[0];
let thanksPage = document.getElementsByClassName("thanks-page")[0];
let subHead = document.getElementById("sub-head");

submit.addEventListener("click", () => {
  ratingPage.style.display = "none";
  thanksPage.style.display = "block";
  subHead.innerText = ratingValue;
});
