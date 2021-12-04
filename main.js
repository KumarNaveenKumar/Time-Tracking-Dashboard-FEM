console.log('Hello World!');
const btnDaily = document.getElementById("daily");
const btnWeekly = document.getElementById("weekly");
const btnMonthly = document.getElementById("monthly");

btnDaily.addEventListener("click", function() {
  document.getElementById("wo_hours").innerHTML ="8hrs";
  document.getElementById("pl_hours").innerHTML ="1hr";
  document.getElementById("st_hours").innerHTML ="4hrs";
  document.getElementById("ex_hours").innerHTML ="1hr";
  document.getElementById("so_hours").innerHTML ="2hrs";
  document.getElementById("sc_hours").innerHTML ="3hrs";
  
  
  document.getElementById("chwo").textContent = "Previous Day";
  document.getElementById("chpl").innerHTML = "Previous Day";
  document.getElementById("chst").innerHTML = "Previous Day";
  document.getElementById("chex").innerHTML = "Previous Day";
  document.getElementById("chso").innerHTML = "Previous Day";
  document.getElementById("chsc").innerHTML = "Previous Day";
  
  document.getElementById("ch_time_wo").textContent = "9hrs";
  document.getElementById("ch_time_pl").innerHTML = "2hrs";
  document.getElementById("ch_time_st").innerHTML = "5hrs";
  document.getElementById("ch_time_ex").innerHTML = "1.5hrs";
  document.getElementById("ch_time_so").innerHTML = "1hr";
  document.getElementById("ch_time_sc").innerHTML = "2hrs";
});




btnWeekly.addEventListener("click", function() {
  document.getElementById("wo_hours").innerHTML = "45hrs";
  document.getElementById("pl_hours").innerHTML = "10hr";
  document.getElementById("st_hours").innerHTML = "28hrs";
  document.getElementById("ex_hours").innerHTML = "7hrs";
  document.getElementById("so_hours").innerHTML = "14hrs";
  document.getElementById("sc_hours").innerHTML = "20hrs";


  document.getElementById("chwo").textContent = "Last Week";
  document.getElementById("chpl").innerHTML = "Last Week";
  document.getElementById("chst").innerHTML = "Last Week";
  document.getElementById("chex").innerHTML = "Last Week";
  document.getElementById("chso").innerHTML = "Last Week";
  document.getElementById("chsc").innerHTML = "Last Week";

  document.getElementById("ch_time_wo").textContent = "49hrs";
  document.getElementById("ch_time_pl").innerHTML = "12hrs";
  document.getElementById("ch_time_st").innerHTML = "25hrs";
  document.getElementById("ch_time_ex").innerHTML = "8hrs";
  document.getElementById("ch_time_so").innerHTML = "22hrs";
  document.getElementById("ch_time_sc").innerHTML = "19hrs";
});


btnMonthly.addEventListener("click", function() {
  document.getElementById("wo_hours").innerHTML = "165hrs";
  document.getElementById("pl_hours").innerHTML = "40hrs";
  document.getElementById("st_hours").innerHTML = "101hrs";
  document.getElementById("ex_hours").innerHTML = "30hrs";
  document.getElementById("so_hours").innerHTML = "65hrs";
  document.getElementById("sc_hours").innerHTML = "80hrs";


  document.getElementById("chwo").textContent = "Last Month";
  document.getElementById("chpl").innerHTML = "Last Month";
  document.getElementById("chst").innerHTML = "Last Month";
  document.getElementById("chex").innerHTML = "Last Month";
  document.getElementById("chso").innerHTML = "Last Month";
  document.getElementById("chsc").innerHTML = "Last Month";

  document.getElementById("ch_time_wo").textContent = "167hrs";
  document.getElementById("ch_time_pl").innerHTML = "99hrs";
  document.getElementById("ch_time_st").innerHTML = "5hrs";
  document.getElementById("ch_time_ex").innerHTML = "31hrs";
  document.getElementById("ch_time_so").innerHTML = "67hr";
  document.getElementById("ch_time_sc").innerHTML = "22hrs";
});