// TP 1: Tournoi des sorciers
let personnages = [
    {
        nom_complet: "Harry Potter",
        age: 12,
        moldu: false,
        attaque: 8,
        vie: 20
    },
    {
        nom_complet: "Tom Jedusor",
        age: 31,
        moldu: false,
        attaque: 16,
        vie: 16
    },
    {
        nom_complet: "Hermione Granger",
        age: 12,
        moldu: true,
        attaque: 12,
        vie: 20
    },
    {
        nom_complet: "Albus Dumbledore",
        age: 65,
        moldu: false,
        attaque: 14,
        vie: 18
    },
];

// Exo 1: Trier les personnages par age et afficher la liste
// Exo 2: Afficher dans la console une liste des personnes mineurs
// Exo 3: Ajouter le nom et le prénom pour chaque utilisateur et afficher la liste de personnage
// Exo 4: En modifiant la fonction précedente et en utilisant la concatenation, ajouter les initials de chaque personnage
// Exo 5: Créer une fonction qui détermine le gagnant en simulant un combat entre 2 personnages (on renseignera le nom des personnages en paramètre de la fonction) et afficher les initials du gagnant
// Faire un combat entre Harry contre Hermione, Dumbledore contre Tom et enfin Harry contre Tom
// Exo 6: Ajouter dans la console les actions tour par tour (attaque) ainsi que les points de vie restant à la personne attaqué
// Exo 7: Ron Weasley était en retard, ajouter le dans la liste et simuler un combat contre Harry, puis Hermione. 
// PS: Ron a 12 ans, n'est pas moldu, attaque à 4 points mais possède 22 points de vie
// Exo 8: Dans un tournoi où chacun combat contre les autres qui aura le plus de victoire



//1. de plus jeunes au plus vieux
let ages = personnages.sort((a, b) => (a.age > b.age ? 1 : -1));
console.log(ages);
//correction
personnages.sort(function(perso1, perso2){
 return perso1.age - perso2.age
})
console.log(personnages);



//2. 
let mineurs = personnages.filter(ages => ages.age < 18)
    console.log(mineurs);
//correction 
let mineures = personnages.filter((ages) => {
    return ages.age < 18
})
console.log(mineures);



//3.
//je vais sélectionner le nom_complet
const noms = personnages.map(personnage => personnage.nom_complet);
console.log(noms)
//je vais transformer la chaine de caractère en tableau avec split 
//const tab = noms.split(" ");
//console.log(tab[0], tab[1]);

//Correction 3 et 4
personnages.map((perso) => {
    let prenomNom = perso.nom_complet.split(' ');
    //console.log(prenomNom);
    perso.nom = prenomNom[1]
    perso.prenom = prenomNom[0]
    perso.initial = `${perso.nom[0]}.${perso.prenom[0]}`
})
console.log(personnages);

//5.

const combat = (nomPerso1, nomPerso2) => {
    //on va copier le tableau des personnages
    const tableauDeCombat = personnages.slice();

    //on récupère l'objet du personnage 1 = filtre les personnages qui on le nomPerso1
    let perso1 = tableauDeCombat.filter((perso) => {
        return perso.nom === nomPerso1
    })
    perso1 = perso1[0]
     //on récupère l'objet du personnage 2
     let perso2 = tableauDeCombat.filter((perso) => {
        return perso.nom === nomPerso2
    })
    perso2 = perso2[0]

     // personnage 1 attaque personnage 2, puis l'inverse, jusqu'à ce que l'un a des points de vie infèrieur ou égale à 0

     //on affiche le nom de gagnant
}
//on fait combattre les personnages
combat("Potter", "Granger")

