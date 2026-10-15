// 햄버거 메뉴 클릭
const hamburgerBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener("click", ()=>{
    // 메뉴 열기, 닫기
    menu.classList.toggle("show");
});

// 화면 변경시 메뉴 닫기
window.addEventListener("resize", ()=>{
    menu.classList.remove("show")
})