## Installation 

-télécharger le repository

-ouvrez le dossier dans votre IDE 

-dans le dossier back, faites un "npm install" afin de télécharger les dépendances qui ne sont pas sur votre machine 

-idem Côté front


### Lancer le code 

-mettez-vous dans le dossier back et faites un "nodemon index.js", ce qui va lancer le server. Si vous n'avez pas nodemon faites un npm i nodemon puis relancer la commande

-mettez-vous ensuite dans le dossier front et faites un npm start pour lancer le front 

 

### `Fonctionnement technique de l'application` 

DOSSIER BACK (8 fichiers): 

-le back fonctionne avec NodeJS, le framework Express et l'ORM Sequelize 

-nous avons ici un seul modèle "Word", créé avec Sequelize 

-sequelize va permettre ici de créer une table du même nom sur une base de données mysql 

-nous avons un index général (index.js) qui va faire le lien entre le serveur et l'index des routes 

-sur l'index des routes, nous avons un lien avec la route word qui contient toutes les routes finales que l'on va trouver en back 

-methode POST dans le fichier "word.js" : il permet de poster la data au moment du click sur le bouton 'jouer' en front. Ce POST push la data contenue dans le fichier "verbs" et le fichier "traductor", celui-ci grâce à une api de traduction, va traduire les mots contenus dans le fichier verbs. Il s'agit ici d'un tableau d'objet ou chaque objet contient le mot en français, la traduction en anglais et le level de difficulté. 

-premier GET : ce get va envoyer 1 objet aléatoire avec comme condition que l'id soit entre 0 et 500 (500 est le nombre total d'objet) 

-deuxième GET : il va get un objet avec un level supérieur au level envoyé par le params 

-troisième GET : il va get un objet avec un level inférieur au level envoyé par le params 

 

DOSSIER FRONT (5 fichiers) : 

-le front fonctionne avec la librairie React 

-le fichier "router" : ici nous avons 4 routes dans une balise switch de React router dom. L'accueil, la page de jeu, la page win et la page lose. 

-le fichier "homepage" : il contient un post de la data au click sur le bouton 'let's play' avec un conditionnel qui redirige sur la page game si la response du.then est "true" (création de la table)

-le fichier game : 
        -il contient le jeu dans son ensemble. 
        -nous avons ici une fonction qui va get la data grâce à un conditionnel qui a trois possibilités => 
        1.GET la data d'un mot au démarrage du jeu 
        2.GET la data avec un level supérieur si le mot d'avant est gagné 
        3.GET la data avec un level inférieur si le mot d'avant est perdu 
        -nous avons également 3 constantes qui permettent de vérifier si le get de la data est undefined 
        -nous avons également un algorithme qui permet d'ajouter ou soustraire les points, de reset l'input et de définir un boolean qui conditionnera le get de la data 
        -Enfin, une fonction qui va gérer la redirection sur une page you win ou you lose en fonction du nombre de point, si 0 =you lose, si 20 = you win 

-le fichier you win ainsi que le fichier you lose contient une redirection pour rejouer 

-un fichier css pour l'appli globale. 
 

### `info sur le developpement` 

Cette application a de nombreuses possibilités d'évolution et notamment au niveau : 
- du design 
- de la possibilité de créer une page personnelle à l'utilisateur avec un système d'authentification qui permettrait de répertorier les anciennes parties de l'utilisateur.
- de la mise en place d'un timer pour rajouter un peu de pression au jeu. 

... et encore beaucoup d'autres possibilités. 

Cette application a été développée en 1 jour et demi par Anthony Portier, développeur Full-Stack. 

