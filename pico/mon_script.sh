#!/bin/bash


#test des argumentss
if [ $# -ne 1 ]
then
    echo "le nombre argument n'est pas correct"
    exit
fi

#recuperation des arguments
repertoire="/home/crealead9/formation"
moi=$1
destination="/home/machin"
ip="192.168.9.107"
#on affiche
echo" bonjour $1"
echo" il y a $# argument (s)"

#se deplacer dans mon repertoire
cd ~/

#creer l'archive du repertoire

tar -cf $moi.tar 
$repertoire
#-ne = n'est pas équivalent à..
if [ $? -ne 0 ]
then 
    echo "la commance tar a échoué "
    exit
fi
#scp $moi.tar machin@$ip:$destination/$moi.tar

echo "j'ai finiiii"
