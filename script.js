let btn_compute = document.getElementById("btn-compute");
let btn_clear = document.getElementById("btn-clear");
btn_clear.disabled = true;

btn_compute.addEventListener("click", (e) => {
  e.preventDefault();
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi_result = document.getElementById("bmi-result");
  let category_result = document.getElementById("category");

  //   console.log(weight, height);
  let bmi = calculateBMI(weight, height);
  console.log(bmi);

  bmi_result.value = bmi;

  let category = categorizeBMI(bmi);
  category_result.innerHTML = category;

  btn_clear.disabled = false;
});
btn_clear.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("bmi-result").value = "";
  document.getElementById("category").innerHTML = "";
  document.getElementById("weight").focus();
});

function calculateBMI(w, h) {
  return (w / (h * h)).toFixed(1);
}
function categorizeBMI(bmi) {
  if (bmi < 18.5) {
    category = "Under Weight";
  } else if (bmi < 24.9) {
    category = "Normal Weight";
  } else if (bmi < 29.9) {
    category = " Over Weight";
  } else {
    category = "Obesity";
  }
  return category;
}
