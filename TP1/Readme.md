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
* Allez sur [www.nodejs.org](http://www.nodejs.org)
* Telechargez NodeJS version 6 TLS pour votre systeme d'exploiation (Windows/Linux/Mac)

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

## Des Excercises

  1. Créer une variable de type: nombre, booléen et string:
  2. Utilisation de la fonction [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof|typeof]], déterminer le type de variables définies dans l'excercise précédente.
  3. Faites une liste avec tous les prenoms de votre groupe (doublons autorisés).
    * Trier la liste
    * Utilisation d'une autre liste, déterminer la fréquence de chaque nom
    * Affichez le nom qui apparaît tirer le meilleue
    * Determinați numele care apare de cele mai puține ori ȋn lista inițialӑ.
    * Revenind la lista inițialӑ de nume, inversați ordinea elementelor.
  4. Creați cu ajutorul unui object o bazӑ de date ȋn care sӑ rețineți numerele de telefon ale colegilor de grupӑ.
  5. Scrieți o secvențӑ de cod care sӑ afișeze ȋn consolӑ toate numerele pare divizibile cu 7 din intervalul [0, 3463]. Ajustați codul astfel ȋncȃt la apariția primului multiplu al lui 833, algoritmul sӑ se opreascӑ.
