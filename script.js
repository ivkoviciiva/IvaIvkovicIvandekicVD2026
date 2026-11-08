let izvodjaci = ["Jelena Tomašević","Nataša Bekvalac","Zdravko Čolić",
    "Sergej Ćetković","Željko Samardžić"];

for (let i = 0; i<izvodjaci.length; i++){
    console.log(izvodjaci[i]);
}

let gost = document.getElementById("gostIznenadjenja");

if(gost){
    gost.addEventListener("mouseover", function(){

        gost.src = "slike/gostiznenadjenja.jpeg";

        let porukaGost = document.getElementById("porukaGost");

        if(porukaGost){
            porukaGost.innerHTML = "Gost iznenađenja je Jelena Rozga!";
            porukaGost.style.fontSize = "25px";
            porukaGost.style.color = "brown";
        }
    });
}

izvodjaci.push ("Jelena Rozga");
console.log(izvodjaci.length);

function izracunajCenu (brojKarata, cenaKarte){
    return brojKarata * cenaKarte;
}

function proveriKod(kod){
    let poruka = document.getElementById("poruka");

    if (kod == "KOD100"){
        poruka.innerHTML = "Kod je uspešno primenjen!";
        poruka.style.color = "green";
    }
    else{
        poruka.innerHTML = "Kod nije ispravan!";
        poruka.style.color = "red";
    }
}

let dugmePopust = document.getElementById("dugmePopust");

dugmePopust.addEventListener("click", function(){
    let kod = document.getElementById("kod").value;

    kod = kod.toUpperCase();

    proveriKod(kod);
});

let forma = document.getElementById("kupovinaKarata");

if(forma){
    forma.addEventListener("submit", function(event){
        event.preventDefault();

        let ime = document.getElementById("imeiprezime").value;
        let email = document.getElementById("email").value;
        let brojKarata = document.getElementById("brojKarata").value;
        let vrstaKarte  = document.getElementById("vrstaKarte").value;

        let cenaJedneKarte;
        switch (vrstaKarte){

            case "parter":
                cenaJedneKarte = 2500;
                break;
            case "istok":
                cenaJedneKarte = 3000;
                break;
            case "jug":
                cenaJedneKarte = 3000;
                break;
            case "zapad":
                cenaJedneKarte = 3000;
                break;
            case "vip":
                cenaJedneKarte = 5000;
                break;
            default:
                cenaJedneKarte = 0;
        }
        

        let ukupnaCena = izracunajCenu(brojKarata, cenaJedneKarte);

        let poruka = document.getElementById("poruka");

        poruka.innerHTML = 
        "<h2>Kupovina uspešna!</h2>" +
        "<p>Kupac:" +ime+ "</p>" +
        "<p>Email:" +email+ "</p>" +
        "<p>Ukupna cena:" +ukupnaCena+ "dinara</p>";

        poruka.style.background = "#f2f2f2";
        poruka.style.border = "2px solid grey";
});
}
