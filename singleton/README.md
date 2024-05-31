# UML

```mermaid
class PromotionManager {
    -static instance: PromotionManager
    -constructor(name: string)
    +static getInstance(name: string): PromotionManager
    +setName(name: string): void
    +getName(): string
}
```