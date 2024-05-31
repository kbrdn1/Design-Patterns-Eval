// Run: bun run 4-decorator/index.ts

console.log("==================================")
console.log("Exerxice 4: Decorator Pattern")
console.log("==================================")

// Interface pour les sapins de Noël
interface ChristmasTree {
    getDescription(): string;
    getElementsCount(): number;
}

// Classe BasicChristmasTree qui implémente l'interface ChristmasTree
class BasicChristmasTree implements ChristmasTree {
    // Méthode pour afficher la description du sapin
    getDescription(): string {
        return 'Sapin de Noël';
    }

    // Méthode pour afficher le nombre d'éléments du sapin
    getElementsCount(): number {
        return 0;
    }
}

// Classe abstraite TreeDecorator qui implémente l'interface ChristmasTree
abstract class TreeDecorator implements ChristmasTree {
    protected tree: ChristmasTree;

    // Constructeur pour initialiser l'objet ChristmasTree
    constructor(tree: ChristmasTree) {
        this.tree = tree;
    }

    // Méthode pour afficher la description du sapin
    getDescription(): string {
        return this.tree.getDescription();
    }

    // Méthode pour afficher le nombre d'éléments du sapin
    getElementsCount(): number {
        return this.tree.getElementsCount();
    }
}

// Classes GarlandDecorator qui hérite de la classe TreeDecorator
class GarlandDecorator extends TreeDecorator {
    // Méthode pour afficher la description du sapin
    getDescription(): string {
        return `${this.tree.getDescription()}, guirlandes`;
    }

    // Méthode pour afficher le nombre d'éléments du sapin
    getElementsCount(): number {
        return this.tree.getElementsCount() + 1;
    }
}

// Classes BallDecorator qui hérite de la classe TreeDecorator
class BallDecorator extends TreeDecorator {
    // Méthode pour afficher la description du sapin
    getDescription(): string {
        return `${this.tree.getDescription()}, boules`;
    }

    // Méthode pour afficher le nombre d'éléments du sapin
    getElementsCount(): number {
        return this.tree.getElementsCount() + 1;
    }
}

// Classes StarDecorator qui hérite de la classe TreeDecorator
class StarDecorator extends TreeDecorator {
    // Méthode pour afficher la description du sapin
    getDescription(): string {
        return `${this.tree.getDescription()}, étoile`;
    }

    // Méthode pour afficher le nombre d'éléments du sapin
    getElementsCount(): number {
        return this.tree.getElementsCount() + 1;
    }
}

// Classes AngelDecorator qui hérite de la classe TreeDecorator
class AngelDecorator extends TreeDecorator {
    // Méthode pour afficher la description du sapin
    getDescription(): string {
        return `${this.tree.getDescription()}, petits anges`;
    }

    // Méthode pour afficher le nombre d'éléments du sapin
    getElementsCount(): number {
        return this.tree.getElementsCount() + 1;
    }
}

// Création d'un sapin de Noël sans décorations
let tree: ChristmasTree = new BasicChristmasTree();

// Ajout de décorations au sapin
tree = new GarlandDecorator(tree); // Ajout de guirlandes
tree = new BallDecorator(tree); // Ajout de boules
tree = new BallDecorator(tree); // Ajout de boules
tree = new StarDecorator(tree); // Ajout d'une étoile
tree = new AngelDecorator(tree); // Ajout de petits anges

// Affichage de la description du sapin et du nombre d'éléments
console.log(tree.getDescription());
console.log(`${tree.getElementsCount()} éléments sont présents sur le sapin`);