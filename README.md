# Créer une application Typescript pour afficher les villes à partir d'un code postal

## Pour cet exercice utilisez Typescript, Parcel.js et axios

L'interface doit comporter un champ de formulaire pour saisir le code postal et un bouton pour valider

A la validation, votre script doit récupérer les communes correspondantes et les afficher a l'écran, si aucune commune n'est trouvée faire afficher "Code postal non reconnu"

URL pour opendata : https://public.opendatasoft.com/explore/dataset/laposte_hexasmal/api/?disjunctive.code_commune_insee&disjunctive.nom_de_la_commune&disjunctive.code_postal&disjunctive.ligne_5

# Consigne à suivre par ChatGPT

## Voici les étapes pour créer une application typescript pour afficher les villes à partir d'un code postal:

    1 . Créez un nouveau projet avec Parcel.js en utilisant la commande npx parcel init.

    2 . Ajoutez Typescript à votre projet en exécutant la commande npm install typescript --save-dev.

    3 . Ajoutez axios à votre projet en utilisant la commande npm install axios.

    4 . Créez un fichier HTML pour votre interface utilisateur. Il devrait inclure un champ de formulaire pour saisir le code postal et un bouton pour valider.

    5 . Créez un fichier typescript pour implémenter la logique de l'application. Il devrait comprendre une fonction qui utilise axios pour effectuer une requête à l'API OpenData et récupérer les informations sur les communes correspondantes.

    6 . Dans la fonction de récupération de données, vérifiez si une commune est trouvée pour le code postal entré. Si oui, affichez les communes correspondantes à l'écran. Si non, affichez le message "Code postal non reconnu".

    7 . Compilez votre code en utilisant la commande npx tsc et lancez votre application en utilisant la commande npx parcel index.html.

    8 . Testez votre application en saisissant des codes postaux différents et en vérifiant si les communes correspondantes sont affichées ou si le message "Code postal non reconnu" est affiché.
# Brief_PARCEL_AXIOS_TS
