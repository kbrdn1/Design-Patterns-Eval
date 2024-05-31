# Design Patterns Eval

Install Bun:
Bun supports Linux (x64 & arm64), macOS (x64 & Apple Silicon) and Windows (x64).

> Linux users — Kernel version 5.6 or higher is strongly recommended, but the minimum is 5.1.
```bash
# with install script (recommended)
curl -fsSL https://bun.sh/install | bash

# on windows
powershell -c "irm bun.sh/install.ps1 | iex"

# with npm
npm install -g bun

# with Homebrew
brew tap oven-sh/bun
brew install bun

# with Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run path/your-file.ts
```

To run all exercice:
  
```bash
bun start
```

This project was created using `bun init` in bun v1.1.10 [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Durée de l'évaluation
- Vous avez à la base 2h pour réaliser l'évaluation. 
- Sauf pour la personne ayant droit à un tiers temps (L'évaluation sera envoyée 30 minutes en avance à cette / ces personnes).

## Règle de l'évaluation
- Pour toutes les problématiques suivantes, vous devez :
    - Expliquer quel Design Pattern (et le nommer) est associé à cette problématique.
    - Réaliser le code du Design Pattern **ainsi que** le code d'utilisation du Pattern pour prouver qu'il fonctionne.
- Bien entendu, comme pour les exercices en cours un simple programme console suffit.
- Bonus : Réaliser l'UML (sur draw.io ou autre outil de modélisation UML, vous pouvez aussi le faire sur papier) correspondant au Design Pattern en appliquant le contexte de la problématique dans l'UML du pattern. L'UML sera uniquement un bonus ! (Sûrement +0,5 par UML réalisé)
- Il me semble presque impossible de réaliser tous les patterns et c'est fait exprès ! L'objectif est d'en réaliser le plus possible sur l'ensemble proposé. La note 20 ne sera pas uniquement accessible en ayant réalisé tous les patterns. La note dépendra de la qualité et de la quantité de patterns réalisé.
- Le rendu se fait en m'envoyant un zip de votre dossier complet. **Renommez le zip avec votre nom et prénom svp !**. Dans le zip :
	- Explication du choix du pattern pour la problématique
	- UML (Bonus)
	- Code du pattern
	- Program.cs qui utilise le pattern
- Vous pouvez soit faire un projet contenant tous les patterns, ou un projet par pattern (Mais svp, pas une solution par pattern)

## Problématiques proposées :
1. Gestion de la présence d'une et une seule responsable de promotion, cette responsable de promotion reste le même objet toute la durée de vie de l'application. Il doit tout de même être possible de modifier le nom de la responsable sans instancier un nouvel objet.

2. Une station météo donne le temps qu'il fait "Pluie", "Beau temps", "Neige", "Chaleur extrême", ... Plusieurs appareils différents doivent communiquer avec la station météo afin de pouvoir afficher le temps qu'il fait sur leur écran : 
    - Téléphone
    - Ordinateur portable
    - Tablette
    - Voiture  
Chaque changement de météo doit être pris en compte pour tous les appareils et s'afficher sur l'appareil.

3. Gestion du status d'une commande MacDo (drive) : 
    - En attente de prise en compte de commande
    - Commande prise en compte
    - Commande payée
    - Commande non payée
    - Commande préparée
    - Commande livrée
    - Commande terminée
==> A vous de définir les actions (avancer au prochain guichet, paiement, etc...) qui permettent de passer d'un état à l'autre. N'hésitez pas à réaliser un diagramme UML (diagramme états-transitions) adapté pour vous assurer que votre flow est cohérent par rapport à votre implémentation.

4. Mettre à disposition un code permettant d'ajouter des éléments à un sapin de Noël, par exemple, des guirlandes, des boules, des étoiles, des petits anges. Vous devez être en mesure de compter le nombre d'éléments qui sont ajoutés au sapin (sans les différencier, s'il y a 2 guirlandes, 1 étoile, 3 boules, votre code doit retourner : "6 éléments sont présents sur le sapin").

5. Vous avez plusieurs types d'étudiants : Le bon, le mauvais, le moyen. Chaque étudiant peut avoir un comportement sur la journée de cours : Rêvasser, Attentionné, Questionneur, Dormeur, Absent.
Vous devez faire en sorte de pouvoir composer entre n'importe quel type d'étudiant et n'importe quel comportement directement à la compilation. Donc il peut y avoir un étudiant fort qui rêvasse, un étudiant moyen qui dort, un étudiant mauvais qui questionne, etc... Tout ça sans multiplier les classes. (Attention, on parle d'ajout de comportement, ne vous trompez pas de pattern)

6. Considérant ce code. A vous de trouver le moyen de rendre compatible l'utilisation de la classe ComposantPdf avec la classe DocumentHtml :

```typescript
interface Document {
    contenu: string;
    dessine(): void;
    imprime(): void;
}

class DocumentHtml implements Document {
    protected _contenu: string = "";

    get contenu(): string {
        return this._contenu;
    }

    set contenu(value: string) {
        this._contenu = value;
    }

    dessine(): void {
        console.log("Dessine document HTML : " + this.contenu);
    }

    imprime(): void {
        console.log("Imprime document HTML : " + this.contenu);
    }
}

class ComposantPdf {
    protected contenu: string = "";

    pdfFixeContenu(contenu: string): void {
        this.contenu = contenu;
    }

    pdfPrepareAffichage(): void {
        console.log("Affichage PDF : Début");
    }

    pdfRafraichit(): void {
        console.log("Affichage contenu PDF : " + this.contenu);
    }

    pdfTermineAffichage(): void {
        console.log("Affichage PDF : Fin");
    }

    pdfEnvoieImprimante(): void {
        console.log("Impression PDF : " + this.contenu);
    }
}
```

7. Simplification de la création d'un objet **simple**, mais qui peut être instancié via des méthodes. L'objet créer sera un dé, ce dé peut prendre 3 formes différentes :
- Un dé classique : 6 faces, ce dé peut être lancé et donne une valeur random entre 1 et 6 (inclus)
- Un dé pipé : 6 faces mais ne fera uniquement que des 6
- Un dé 9 faces : Ce dé peut être lancé et donne une valeur random entre 1 et 9 (inclus)
Les méthodes attendues sont : 
- CreateClassicDice
- CreateLoadedDice
- CreateNineFaceDice
Ces méthodes retournent un objet de type IDice (Interface du produit à créer)

8. Vous développez une application de dessin qui doit supporter plusieurs formes géométriques (comme des cercles, des rectangles, etc.) et doit être compatible avec plusieurs bibliothèques de rendu graphique (comme OpenGL et DirectX). Vous voulez pouvoir ajouter de nouvelles formes ou de nouvelles bibliothèques de rendu sans avoir à modifier le code existant. (Attention, ici il n'est pas demandé d'avoir un point d'entré pour créer les objets...)

9. Design Pattern au choix parmis la liste de ceux qui n'ont pas été vu en cours (hors workshop ou pattern du cours). Pensez à expliquer votre problématique en commentaire ou dans un readme :
    - Chain Of Responsibility
    - Mediator
    - Interpretor
    - Visitor
    - Memento
    - Flyweight
    - Prototype => **NON AUTORISE**
    - Template Method => **NON AUTORISE**