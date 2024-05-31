// Run: bun run 7-factory/index.ts

console.log("==================================")
console.log("Exerxice 7: Factory Pattern")
console.log("==================================")

// Interface pour les dés
interface IDice {
    roll: () => number;
}

// Classe ClassicDice qui implémente l'interface IDice
class ClassicDice implements IDice {
    // Méthode pour lancer le dé
    roll(): number {
        return Math.floor(Math.random() * 6) + 1;
    }
}

// Classe LoadedDice qui implémente l'interface IDice
class LoadedDice implements IDice {
    // Méthode pour lancer le dé
    roll(): number {
        return 6;
    }
}

// Classe NineFaceDice qui implémente l'interface IDice
class NineFaceDice implements IDice {
    // Méthode pour lancer le dé
    roll(): number {
        return Math.floor(Math.random() * 9) + 1;
    }
}

// Classe DiceFactory pour créer les dés
class DiceFactory {
    // Méthode pour créer un dé classique
    static createClassicDice(): IDice {
        return new ClassicDice();
    }

    // Méthode pour créer un dé truqué
    static createLoadedDice(): IDice {
        return new LoadedDice();
    }

    // Méthode pour créer un dé à neuf faces
    static createNineFaceDice(): IDice {
        return new NineFaceDice();
    }
}

// Création d'un dé classique
const classicDice = DiceFactory.createClassicDice();
console.log("Dé classique:", classicDice.roll()); // Dé classique: <nombre aléatoire entre 1 et 6>

// Création d'un dé truqué
const loadedDice = DiceFactory.createLoadedDice();
console.log("Dé truqué:", loadedDice.roll()); // Dé truqué: 6

// Création d'un dé à neuf faces
const nineFaceDice = DiceFactory.createNineFaceDice();
console.log("Dé à neuf faces:", nineFaceDice.roll()); // Dé à neuf faces: <nombre aléatoire entre 1 et 9>