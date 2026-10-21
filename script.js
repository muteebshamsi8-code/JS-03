let marksInput = document.getElementById("marks");
let checkBtn = document.getElementById("checkBtn");
let result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  let marks = Number(marksInput.value);

  if (marks >= 80) {
    result.innerHTML = "Excellent";
  } else if (marks >= 60) {
    result.innerHTML = "Good";
  } else if (marks >= 40) {
    result.innerHTML = "Pass";
  } else {
    result.innerHTML = "Fail";
  }
});
