# TP 1 - Node JS

## Contenu
1. Inscription C9 / Installer NodeJS
2. Tudoriel NodeJS
3. Des Exercices

## Inscription C9 / Installer NodeJS

### Inscription C9
Pour vous inscrire, vous avez besoin d'une invitation:
* Remplir le [formulaire](https://docs.google.com/forms/d/e/1FAIpQLScPsk85MAH9ID-dWYGmnBLendLRfTAjo-ozi-AULiE-JC4Brw/viewform)
* Vous recevrez un e-mail d'invitation
* Suivez le lien dans l'e-mail pour vous inscrire

### Installer NodeJS
* Navigez vers [www.nodejs.org](http://www.nodejs.org)
* Telechargez NodeJS version 6 TLS pour votre systeme d'exploitation (Windows/Linux/Mac)

## Tutoriel NodeJS

### Variables

````js
var x = 20;

console.log (x);
````

### Chaines

````js
var chaine = [1, 2, 3, 4, "text", {}, ... ];
console.log (chaine [1]);

// functions

chaine.push (1) // ajouter un element
````

### Fonctions

````js
function function_name ()
{
    // code goes here
    return value;
}
````

### Objects

````js
var object = {
    field1: ...,
    field2: ...,
    do_something: function ()
    {
        
    },
    do_another: function ()
    {
        
    },
    ...
};

object.field1 = ...
object.do_another();
````

## Des Excercices

  1. Créez une variable de type: nombre, booléen et string:
  2. En utilisant la fonction [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof|typeof]], déterminez le type de variables définies dans l'excercise précédente.
  3. Créez une liste avec tous les prenoms de votre groupe (doublons autorisés).
    * Triez la liste.
    * En utilisant une autre liste, déterminez la fréquence de chaque nom.
    * Affichez le nom le nom le plus fréquent.
    * Affichez le nom le nom le moins fréquent.
    * Dans la liste initiale, inversez l'ordre des éléments.
  4. En utilisant un objet, créez une base de données dans laquelle vous stockez le numéros de téléphone de votre collègues du groupe.
  5. Ecrivez une séquence de code qui affiche toutes les numbres paris, divisibles avec 7 dans l'interval [0,3463]. Modifiez la code de sorte que l'algortihme arrêts après l'apparition du premier multiple du 833.
