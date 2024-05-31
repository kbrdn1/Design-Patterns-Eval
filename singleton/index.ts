// Run: bun run singleton.index.ts

console.log("==================================")
console.log("Exerxice 1: Singleton Pattern")
console.log("==================================")

class PromotionManager {
    private static instance: PromotionManager;
    private constructor(private name: string) {}

    public static getInstance(name: string): PromotionManager {
        if (!PromotionManager.instance) {
            PromotionManager.instance = new PromotionManager(name);
        }
        return PromotionManager.instance;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

// Usage example:
const manager1 = PromotionManager.getInstance("Alice");
console.log(manager1.getName()); // Alice

const manager2 = PromotionManager.getInstance("Bob");
console.log(manager2.getName()); // Alice

manager1.setName("Carol");
console.log(manager2.getName()); // Carol