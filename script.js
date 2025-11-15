let yogi = document.getElementById("yogi");
let reni = document.getElementById("reni");
let ale = document.getElementById("ale");
let alfath = document.getElementById("alfath");
let atha = document.getElementById("atha");

let btnAyah = document.getElementById("btn-ayah");
let btnBunda = document.getElementById("btn-bunda");
let btnKakak = document.getElementById("btn-kakak");
let btnAlfath = document.getElementById("btn-myself");
let btnAtha = document.getElementById("btn-atha");

// 1. Masukkan semua konten ke dalam Array agar mudah di-loop
const allContents = [yogi, reni, ale, alfath, atha];

// 2. Buat fungsi untuk menyembunyikan SEMUA, lalu munculkan SATU target
function showOnly(targetElement) {
    // Sembunyikan semua dulu
    allContents.forEach(el => {
        el.classList.add('hide'); // Pastikan semua punya class 'hide'
    });
    
    // Baru munculkan yang ditarget
    targetElement.classList.remove('hide'); 
}

// 3. Event Listeners
btnAyah.addEventListener('click', () => showOnly(yogi));
btnBunda.addEventListener('click', () => showOnly(reni));
btnKakak.addEventListener('click', () => showOnly(ale));
btnAlfath.addEventListener('click', () => showOnly(alfath));
btnAtha.addEventListener('click', () => showOnly(atha));