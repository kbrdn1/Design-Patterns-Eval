// Run: bun run 3-state/index.ts

console.log("==================================")
console.log("Exerxice 3: State Pattern")
console.log("==================================")

// Interface pour les états
interface OrderState {
  next(order: Order): void;
  pay(order: Order): void;
  prepare(order: Order): void;
  deliver(order: Order): void;
  complete(order: Order): void;
}

// Classe pour les commandes qui implémente l'interface OrderState pour gérer les états
class WaitingForOrderState implements OrderState {
  // Méthode pour passer à l'état suivant
  next(order: Order): void {
    order.setState(new OrderTakenState());
  }
  
  // Méthode pour payer la commande
  pay(order: Order): void {
    console.log("Cannot pay, order not taken yet.");
  }
  
  // Méthode pour préparer la commande
  prepare(order: Order): void {
    console.log("Cannot prepare, order not taken yet.");
  }
  
  // Méthode pour livrer la commande
  deliver(order: Order): void {
    console.log("Cannot deliver, order not taken yet.");
  }
  
  // Méthode pour compléter la commande
  complete(order: Order): void {
    console.log("Cannot complete, order not taken yet.");
  }
}

// Classe pour les commandes qui implémente l'interface OrderState pour gérer les états
class OrderTakenState implements OrderState {
  // Méthode pour passer à l'état suivant
  next(order: Order): void {
    console.log("Order already taken, proceed to payment.");
  }
  
  // Méthode pour payer la commande
  pay(order: Order): void {
    order.setState(new OrderPaidState());
  }
  
  // Méthode pour préparer la commande
  prepare(order: Order): void {
    console.log("Cannot prepare, order not paid yet.");
  }
  
  // Méthode pour livrer la commande
  deliver(order: Order): void {
    console.log("Cannot deliver, order not paid yet.");
  }
  
  // Méthode pour compléter la commande
  complete(order: Order): void {
    console.log("Cannot complete, order not paid yet.");
  }
}

// Classe pour les commandes qui implémente l'interface OrderState pour gérer les états
class OrderPaidState implements OrderState {
  // Méthode pour passer à l'état suivant
  next(order: Order): void {
    console.log("Order already paid, proceed to preparation.");
  }
  
  // Méthode pour payer la commande
  pay(order: Order): void {
    console.log("Order already paid.");
  }
  
  // Méthode pour préparer la commande
  prepare(order: Order): void {
    order.setState(new OrderPreparedState());
  }
  
  // Méthode pour livrer la commande
  deliver(order: Order): void {
    console.log("Cannot deliver, order not prepared yet.");
  }
  
  // Méthode pour compléter la commande
  complete(order: Order): void {
    console.log("Cannot complete, order not prepared yet.");
  }
}

// Classe pour les commandes qui implémente l'interface OrderState pour gérer les états
class OrderUnpaidState implements OrderState {
  
  // Méthode pour passer à l'état suivant
  next(order: Order): void {
    console.log("Cannot proceed, order is unpaid.");
  }
  
  // Méthode pour payer la commande
  pay(order: Order): void {
    order.setState(new OrderPaidState());
  }
  
  // Méthode pour préparer la commande
  prepare(order: Order): void {
    console.log("Cannot prepare, order not paid yet.");
  }
  
  // Méthode pour livrer la commande
  deliver(order: Order): void {
    console.log("Cannot deliver, order not paid yet.");
  }
  
  // Méthode pour compléter la commande
  complete(order: Order): void {
    console.log("Cannot complete, order not paid yet.");
  }
}

// Classe pour les commandes qui implémente l'interface OrderState pour gérer les états
class OrderPreparedState implements OrderState {
  
  // Méthode pour passer à l'état suivant
  next(order: Order): void {
    console.log("Order already prepared, proceed to delivery.");
  }
  
  // Méthode pour payer la commande
  pay(order: Order): void {
    console.log("Order already paid.");
  }
  
  // Méthode pour préparer la commande
  prepare(order: Order): void {
    console.log("Order already prepared.");
  }
  
  // Méthode pour livrer la commande
  deliver(order: Order): void {
    order.setState(new OrderDeliveredState());
  }
  
  // Méthode pour compléter la commande
  complete(order: Order): void {
    console.log("Cannot complete, order not delivered yet.");
  }
}

// Classe pour les commandes qui implémente l'interface OrderState pour gérer les états
class OrderDeliveredState implements OrderState {
  // Méthode pour passer à l'état suivant
  next(order: Order): void {
    console.log("Order already delivered, proceed to completion.");
  }
  
  // Méthode pour payer la commande
  pay(order: Order): void {
    console.log("Order already paid.");
  }
  
  // Méthode pour préparer la commande
  prepare(order: Order): void {
    console.log("Order already prepared.");
  }
  
  // Méthode pour livrer la commande
  deliver(order: Order): void {
    console.log("Order already delivered.");
  }
  
  // Méthode pour compléter la commande
  complete(order: Order): void {
    order.setState(new OrderCompletedState());
  }
}

// Classe pour les commandes qui implémente l'interface OrderState pour gérer les états
class OrderCompletedState implements OrderState {
  // Méthode pour passer à l'état suivant
  next(order: Order): void {
    console.log("Order already completed.");
  }
  
  // Méthode pour payer la commande
  pay(order: Order): void {
    console.log("Order already completed.");
  }
  
  // Méthode pour préparer la commande
  prepare(order: Order): void {
    console.log("Order already completed.");
  }
  
  // Méthode pour livrer la commande
  deliver(order: Order): void {
    console.log("Order already completed.");
  }
  
  // Méthode pour compléter la commande
  complete(order: Order): void {
    console.log("Order already completed.");
  }
}

// Classe pour les commandes qui implémente l'interface OrderState pour gérer les états
class Order {
  private state: OrderState;

  // Le constructeur initialise l'état de la commande à WaitingForOrderState
  constructor() {
    this.state = new WaitingForOrderState();
  }

  // Méthode pour changer l'état de la commande
  setState(state: OrderState): void {
    this.state = state;
  }

  // Méthode pour passer à l'état suivant
  next(): void {
    this.state.next(this);
  }

  // Méthode pour payer la commande
  pay(): void {
    this.state.pay(this);
  }

  // Méthode pour préparer la commande
  prepare(): void {
    this.state.prepare(this);
  }

  // Méthode pour livrer la commande
  deliver(): void {
    this.state.deliver(this);
  }

  // Méthode pour compléter la commande
  complete(): void {
    this.state.complete(this);
  }
}

// Example usage

// Création d'une commande
const order = new Order();

// 1. Etat initial de la commande: WaitingForOrderState
console.log("--- Initial state of the order: WaitingForOrderState ---");
order.pay() // Cannot pay, order not placed yet.
order.prepare() // Cannot prepare, order not paid yet.
order.deliver() // Cannot deliver, order not paid yet.
order.complete() // Cannot complete, order not paid yet.

order.next() // Proceed to payment.

// 2. Etat de la commande: OrderTakenState
console.log("\n--- State of the order: OrderTakenState ---");
order.prepare() // Proceed to delivery.
order.deliver() // Proceed to completion.
order.complete() // Proceed to completion.
order.pay() // Cannot pay, order already paid.

// 3. Etat de la commande: OrderPaidState
console.log("\n--- State of the order: OrderPaidState ---");
order.pay() // Order already paid, proceed to preparation.
order.deliver() // Cannot deliver, order not prepared yet.
order.complete() // Cannot complete, order not prepared yet.
order.prepare() // Proceed to preparation.

// 4. Etat de la commande: OrderPreparedState
console.log("\n--- State of the order: OrderPreparedState ---");
order.pay() // Order already paid.
order.prepare() // Order already prepared.
order.complete() // Cannot complete, order not delivered yet.
order.deliver() // Proceed to delivery.

// 5. Etat de la commande: OrderDeliveredState
console.log("\n--- State of the order: OrderDeliveredState ---");
order.pay() // Order already paid.
order.prepare() // Order already prepared.
order.deliver() // Order already delivered.
order.complete() // Proceed to completion.

// 6. Etat de la commande: OrderCompletedState
console.log("\n--- State of the order: OrderCompletedState ---");
order.pay() // Order already completed.
order.prepare() // Order already completed.
order.deliver() // Order already completed.
order.complete() // Order already completed.

