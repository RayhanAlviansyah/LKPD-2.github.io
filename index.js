// no 1 //
let nama = prompt (" masukan nama " ) 
let gaji_pokok = parseFloat (prompt("masukan gaji"));
let tunj = 20/100 * gaji_pokok 
let pjk = 15/100 * (gaji_pokok+tunj) 
let gaji_bersih = gaji_pokok + tunj - pjk 
console.log (`nama karyawan : ${nama}, tunjangan yang di dapat : ${tunj}, pajak yang harus di bayar ${pjk}, gaji bersih ${gaji_bersih}`)

// no 2 // 
let jam = parseFloat (prompt("masukan jam")) 
let menit = parseFloat (prompt("masukan menit")) 
let detik = parseFloat (prompt("masukan detik")) 
let hasil = (jam * 3600) + (menit * 60) + detik
console.log (`${hasil} detik`)

// no 3 // 
let jumdetik = parseFloat (prompt("masukan jumla detik"))
let jam1 = jumdetik / 3600 
let hsljm = Math.floor (jam1) 
let menit1 = jumdetik / 60 
let menit2 = Math.floor (menit1)
let kurjam = hsljm * 60 
let hslmen =  menit2 - kurjam
let kurmen = hslmen * 60
let kurjam1 = hsljm * 3600
let hsldetik = jumdetik - kurmen - kurjam1
console.log (`jadi ${jumdetik}, detik jika di konvert menjadi ${hsljm} jam ${hslmen} menit ${hsldetik} detik`)
