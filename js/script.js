function dodajUkorpu(proizvod){
    alert(proizvod + " je dodan u korpu!")
}

document.getElementById("contactForm")?.addEventListener("submit", function(event){
    event.preventDefault()
    let ime = document.getElementById("ime").value;
    let email = document.getElementById("email").value;
    let poruka = document.getElementById("poruka").value;
    if(!ime || !email || !poruka){
        alert("Molimo popunite sva polja!")
    }else{
        alert("Poruka poslana!")
    }
});