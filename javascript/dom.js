/*
le document objet model ou dom est une
 interface de programmation pour les documents html. 
 Il fournit une une representation structuree du
  document html sous forme d'un arbre
  et definit la facon dont la structure
   peut être manipulée par javascript*/
   // creation d'un element div du dom
   let div1 = document.createElement("div");

   //creation d'un element texte du dom
   let text1= document.createTextNode("text1");

   //ajout de text1 à div1
   div1.appendChild(text1);

   //ajout de div1 a body
   document.body.appendChild(div1);

   // gestion de l'evenement click
   div1.onclick = function(){
       console.log("click sur le div 1");

   }


   //recuperation d'un element du dom
   let h1= document.getElementById("h1");
   //gestion de l'evnement 
   h1.onclick= function(){
       console.log("click sur le h1");
   }
//main récupere lélément bouton"add"
//gere les evenements sur ce bouton, cree une intance de la class carte
//creation de la class carte
//constructeur: initialise les proprietes
//--->question, reponse, creation des éléments du dom , article,p pour question, pour reponse
//methode drawCarte: créer deux éléments textes
// rajoutes ces éléments a ces éléments cartes (articles)
//ajoutes la carte dans la section #Cartes 
