// static/script.js

// 예시 데이터베이스 (학번-이름 → 계정 정보)
const studentAccounts = {
  "2301_김민수": { id: "kimms2301@school.edu", pw: "pass2301" },
  "2302_이서연": { id: "leesy2302@school.edu", pw: "pass2302" },
  "2303_박지후": { id: "parkjh2303@school.edu", pw: "pass2303" },
  "2304_김민성": { id: "parkjh2304@school.edu", pw: "pass2304" },
  // 필요한 만큼 추가 가능
};

document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const studentId = document.getElementById("student-id").value.trim();
  const studentName = document.getElementById("student-name").value.trim();
  const key = `${studentId}_${studentName}`;

  const resultContainer = document.getElementById("result");
  const resultId = document.getElementById("result-id");
  const resultPw = document.getElementById("result-pw");

  if (studentAccounts[key]) {
    resultId.textContent = studentAccounts[key].id;
    resultPw.textContent = studentAccounts[key].pw;
    resultContainer.classList.remove("hidden");
  } else {
    resultId.textContent = "없음";
    resultPw.textContent = "없음";
    resultContainer.classList.remove("hidden");
  }
});
