function hesapla(){
    let sinav1=document.getElementById("sinav1");
    let sinav2=document.getElementById("sinav2");
    let performans=document.getElementById("performans");
    let sonuc=document.getElementById("sonuc");

    let ortalama=(sinav1*1+sinav2*1+performans*1)/3;

    if(ortalama>=50){
        sonuc.innerHTML="Geçtiniz" +ortalama.toFixed(2);
    }

    else{
        sonuc.innerHTML="Kaldınız" +ortalama.toFixed(2);
    }
}