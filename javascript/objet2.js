// creation d'une classe es5
class Personne {
    constructor(nom, prenom){
        this.nom=nom;
        this.prenom=prenom;
    
}

sePresenter() {
    console.log("bonjour, je m'appelle " + 
    this.prenom + " " + this.nom);
    }
}
var franck = new Personne ("chazal","franck");
franck.sePresenter();

class Enseignant extends Personne {
    constructor(nom,prenom,diplome){
        super(nom,prenom);
        this.diplome= diplome;
    }
    enseigner(){
        console.log("j'enseigne le js!");
    }
}
var yvan = new Enseignant("douënel","yvan", "BAC")
yvan.sePresenter();
yvan.enseigner();
console.log(yvan.diplome)

class EnseignantProgrammation extends Enseignant{
    enseignerMT(){
    console.log("j'enseigne les maths");

    }
}
var tibaulth = new EnseignantProgrammation ("nomdefamil","thibaulth", " agregation");
tibaulth.sePresenter();
tibaulth.enseignerMT();