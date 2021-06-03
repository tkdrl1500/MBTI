"use strict";

const dropDownBtn = document.querySelector(".navBar-btn");
const dropDownBox = document.querySelector(".dropDownBox");
const startBtn = document.querySelector(".startBtn");
const inputBar = document.querySelector("#inputBar-text");

dropDownBtn.addEventListener("click", () => {
  dropDownBox.classList.toggle("show");
});

dropDownBtn.addEventListener("blur", () => {
  dropDownBox.classList.toggle("show");
});

startBtn.addEventListener("click", () => {
  if (inputBar.value === "") {
    alert("내용을 입력하세요!");
  }
});
