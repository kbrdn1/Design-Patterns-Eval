// Run: bun run 5-strategy/index.ts

console.log("==================================")
console.log("Exerxice 5: Strategy Pattern")
console.log("==================================")

// Interface pour les comportements
interface Behavior {
    act(): void;
}

// Classe Daydreaming qui implémente l'interface Behavior
class Daydreaming implements Behavior {
    // Méthode pour afficher l'action du comportement
    act() {
        console.log("Rêvasser");
    }
}

// Classe Attentive qui implémente l'interface Behavior
class Attentive implements Behavior {
    // Méthode pour afficher l'action du comportement
    act() {
        console.log("Attentionné");
    }
}

// Classe Questioning qui implémente l'interface Behavior
class Questioning implements Behavior {
    // Méthode pour afficher l'action du comportement
    act() {
        console.log("Questionneur");
    }
}

// Classe Sleeping qui implémente l'interface Behavior
class Sleeping implements Behavior {
    // Méthode pour afficher l'action du comportement
    act() {
        console.log("Dormeur");
    }
}

// Classe Absent qui implémente l'interface Behavior
class Absent implements Behavior {
    // Méthode pour afficher l'action du comportement
    act() {
        console.log("Absent");
    }
}

// Classe Student qui prend un type et un comportement en paramètre
class Student {
    constructor(public type: string, private behavior: Behavior) {}

    // Méthode pour exécuter le comportement
    performBehavior() {
        console.log(`${this.type} étudiant:`);
        this.behavior.act();
    }
}

// Création des étudiants avec différents comportements
const goodStudent = new Student("Bon", new Daydreaming()); // Bon étudiant
const averageStudent = new Student("Moyen", new Sleeping()); // Étudiant moyen
const badStudent = new Student("Mauvais", new Questioning()); // Mauvais étudiant

// Exécution des comportements
goodStudent.performBehavior(); // Bon étudiant: Rêvasser
averageStudent.performBehavior(); // Étudiant moyen: Dormeur
badStudent.performBehavior(); // Mauvais étudiant: Questionneur