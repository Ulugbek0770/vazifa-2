a = 0 
b = 18
c = 50
d = 59
e = 150


var age = +prompt("Yoshingizni kriting")
if  (a <= age && age < b)  {
     alert("Siz hali yoshsiz o`qishingiz kerak")
}
else if ( b <= age  &&  age < c) {
    alert("Ishlashingiz kerak")
}
else if ( c <= age && age < d ) {
   alert("Yaqinda pensiyaga chiqasiz")
    
}
else if ( d <= age && age < e) {
    alert("pensionerga o`xshaysiz, hali trik bo`lsangiz ")
}

else{
    alert("Nimadur noto`g`ri ketdi")
}