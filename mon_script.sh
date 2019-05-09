#!/bin/bash
 # definir les variables
repertoire="/home/crealead9/formation"
moi="myriam"
destination="/home/machin"
ip="192.168.9.107"

# se deplacer dans mon repertoire utilisateur
cd ~/
#creer l'archive du repertoire
tar -cf $moi.tar $repertoire
#copie chez thibault
#scp $moi.tar machin$ip:$destination/$moi.tar
#ici le script demandera le mdp de machin
# c'est fini on affiche que cest le cas
echo "j'ai finiii"
