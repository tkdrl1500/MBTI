"use strict";

const dropDownBtn = document.querySelector(".navBar-btn");
const dropDownBox = document.querySelector(".dropDownBox");
const startBtn = document.querySelector(".startBtn");
const inputBar = document.querySelector("#inputBar-text");
const qna = document.querySelector(".qna");
const answerFist = document.querySelector(".answerF");
const answerSecond = document.querySelector(".answerS");
const contentFist = document.querySelector("#contentFist");
const contentSecond = document.querySelector("#contentSecond");

dropDownBtn.addEventListener("click", () => {
  dropDownBox.classList.toggle("show");
});

dropDownBtn.addEventListener("blur", () => {
  dropDownBox.classList.toggle("show");
});

startBtn.addEventListener("click", () => {
  if (inputBar.value === "") {
    alert("내용을 입력하세요!");
  } else {
    contentFist.style.WebkitAnimation = "fadeOut 1s";
    contentFist.style.animation = "fadeOut 1s";
    setTimeout(() => {
      contentSecond.style.WebkitAnimation = "fadeIn 1s";
      contentSecond.style.animation = "fadeIn 1s";
      setTimeout(() => {
        contentFist.style.display = "none";
        contentSecond.style.display = "block";
      }, 400);
    }, 400);
  }
});

// 질문 창
function goNext() {
  let q = qna;
  q.innerHTML = questionList[0].q;

  let a = answerFist;
  a.innerHTML = questionList[0].a[0].answer;

  let b = answerSecond;
  b.innerHTML = questionList[0].a[1].answer;
}

goNext();
