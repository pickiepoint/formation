/*
on peut définir un objet 
comme une structure complexe de contenus*/
// Définir une fonction constructeur
function Personne (nom, prenom){
    //Propriétés
    this.nom=nom;
    this.prenom=prenom;
    //méthode ( Camel case selon les standars)
    this.sePresenter= function(){
        console.log("bonjour, je m'appelle " +
        this.prenom + " " +this.nom);
    }
}
// instanciation de l'objet 
var bob= new Personne("Dylan","Bob");
console.log(bob.nom);
console.log(bob.prenom);
bob.sePresenter(); 
// 

