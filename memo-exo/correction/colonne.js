class Colonne {
    constructor(titre) {
        //proriétées de la colonne
        this.titre = titre;
        this.elementButton = this.createBoutonAdd();
        this.drawColonne()
        this.elementButton.onclick = addCarte;
    }

    createBoutonAdd() {
        console.log("dans createButtonAdd");
        let BoutonAdd = document.createElement("button");
        BoutonAdd.textContent = "ajouter une carte";
        return boutonAdd;

    }
    drawColonne() {
        console.log("dans drawColonne")
        const sectionColonne = document.createElement("section")
        sectionColonne.setAttribute("class", "colonne")
        sectionColonne.appendChild(this.elementButton)
        const titre = document.createElement("h2")
        titre.textContent= this.titre
        sectionColonne.appendChild(titre)

        document.body.appendChild(sectionColonne)

    }
}
addCarte(){
    const carte = new Carte ("question", "reponse")
}