//Fonction pour additionner
function addNumber(nombreA, nombreB){
    return nombreA + nombreB;
}
//Fonction pour multiplier
function multiNumber(nombreA, nombreB){
    return nombreA * nombreB;
}
//Fonction pour soustraire
function sousNumber(nombreA, nombreB){
    return nombreA - nombreB;
}
//Fonction pour diviser
function diviNumber(nombreA, nombreB){

    if(nombreB == 0){
        throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
}


do{
    var choix= parseInt(prompt("Que souhaitez-vous faire ?\n\n 1 -Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));

}while(choix != 1 && choix != 2 && choix != 3 && choix != 4)
// si le choix n'est ni un ni deux ni trois ni quatre, alors la boucle se relance pour que l'utilisateur donne un nombre attendu 

do{
    var premierNombre = parseInt(prompt("Entrez un premier nombre :"));
    var deuxiemeNombre = parseInt(prompt("Entrez un deuxième nombre :"));

}while(isNaN(premierNombre) || isNaN(deuxiemeNombre))


try { 
switch (choix)  {
    case 1:
      var  resultat = addNumber(premierNombre, deuxiemeNombre);
        break;
    case 2:
        var resultat = multiNumber(premierNombre, deuxiemeNombre);
        break;
    case 3 :
        var  resultat =  sousNumber(premierNombre, deuxiemeNombre);
        break;
    case 4 :
        var resultat =  diviNumber(premierNombre, deuxiemeNombre); 
        break;
        default:

        throw new error("Une erreur est survenue.");
}
alert('voici le résultat : ' + resultat);
}
catch(error)
{
    alert(error);
}


