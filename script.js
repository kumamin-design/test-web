const users = [
  { name: "➀郎", age: 25, hobbies: ["ゲーム","スポーツ"] },
  { name: "➁子", age: 30, hobbies: ["裁縫","movie","料理","読書","ゲーム"]},
  { name: "➂郎", age: 20, hobbies: ["ゲーム","読書","スポーツ"] }
];


const ageinput = document.getElementById("ageInput");
const hobbyinput = document.getElementById("hobbyinput");
//const btn = document.getElementById("btn");
const btnreset = document.getElementById("btnreset");
//const result = document.getElementById("result");
const resultArea = document.getElementById("resultArea");
//const syokichi = resultArea.textContent;
const count = document.getElementById("count");


 /*メニューボタンのクリックでメニュー表示*/
 const mbtn = document.querySelector(".menu-btn");
 const menu = document.querySelector(".menu");

 mbtn.addEventListener("click", function() {  /*クリックしたら処理を実行*/
 menu.classList.toggle("active"); /*toggeleはon/offの切り替え*/

});

 /*メニューボタンかボタン以外の場所をクリックしたら非表示にする*/
document.addEventListener("click", function(e) {
  /*const menu = document.querySelector(".menu");*/
  /*const mbtn = document.querySelector(".menu-btn");*/

  /* メニューでもボタンでもない場所をクリックしたら*/
  if (!menu.contains(e.target) && !mbtn.contains(e.target)) {
    menu.classList.remove("active");
  }
});


//btn.addEventListener("click", () => {

  //年齢＋趣味の複合検索↓↓↓

  ageinput.addEventListener("input",mickeyserch);
  hobbyinput.addEventListener("input",mickeyserch);

 function mickeyserch (){
 const agevalue = Number(ageinput.value
  .trim()
  .normalize("NFKC")
 );
 const keyword = hobbyinput.value
   .trim()
   .toLowerCase()
   .normalize("NFKC");
const filtered = users
 .filter(user =>
   (!agevalue || user.age >= agevalue)&& //年齢条件チェック、未入力なら無視
   (!keyword ||         //趣味条件チェック、未入力なら全員OK
     user.hobbies.some(hobby =>
      hobby
       .toLowerCase()
       .includes(keyword)
   ))
  )


const list =filtered
 .map (user => `
  <li class="card2">
    <div class="name"> ${user.name}(${user.age}歳)</div>
    <div class ="hobby"> 趣味：${user.hobbies.join(", ")}</div>
  </li>
`)
.join("");

count.textContent = filtered.length + "件";

//resultArea.innerHTML = list || "<li>該当なし</li>";

if(list){
  resultArea.innerHTML = list;
  resultArea.style.color = ""; //赤文字を元に戻す
} else {
   resultArea.innerHTML = "該当なし";
   resultArea.style.color = "red";
   count.textContent = "0件";
}
}





btnreset.addEventListener("click", () =>{
  resultArea.innerHTML = "";
  count.innerHTML = "";
  ageinput.value = "";
  hobbyinput.value = "";
});
