// Run: bun run singleton.index.ts

console.log("==================================")
console.log("Exerxice 1: Singleton Pattern")
console.log("==================================")

// Classe pour le manager de promotion en utilisant le singleton pour éviter la création de plusieurs instances
class PromotionManager {
    private static instance: PromotionManager;
    private constructor(private name: string) {}

    // Méthode pour récupérer l'instance du manager de promotion
    public static getInstance(name: string): PromotionManager {
        // Si l'instance n'existe pas, on la crée
        if (!PromotionManager.instance) {
            PromotionManager.instance = new PromotionManager(name);
        }
        // On retourne l'instance
        return PromotionManager.instance;
    }

    // Méthode pour définir le nom du manager
    public setName(name: string): void {
        this.name = name;
    }

    // Méthode pour récupérer le nom du manager
    public getName(): string {
        return this.name;
    }
}

// Usage example:

// On crée une instance du manager de promotion
const manager1 = PromotionManager.getInstance("Alice");
// On affiche le nom du manager
console.log(manager1.getName()); // Alice

// On crée une autre instance du manager de promotion
const manager2 = PromotionManager.getInstance("Bob");
// On affiche le nom du manager
console.log(manager2.getName()); // Alice

// On change le nom du manager de la première instance
manager1.setName("Carol");
// On affiche le nom du manager de la première instance
console.log(manager2.getName()); // Carol