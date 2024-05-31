// Run: bun run observer/index.ts

console.log("==================================")
console.log("Exerxice 2: Observer Pattern")
console.log("==================================")

// Interface pour les observateurs
interface Observer {
    update(weather: string): void;
}

// Classe pour la station météo
class WeatherStation {
    private observers: Observer[] = [];
    private weather: string = '';

    // Méthodes pour ajouter et supprimer des observateurs
    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    // Méthode pour supprimer un observateur
    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    // Méthode pour mettre à jour la météo, et notifier les observateurs a chaque changement de la météo
    public setWeather(weather: string): void {
        this.weather = weather;
        this.notifyObservers();
    }

    // Méthode pour notifier les observateurs
    private notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.weather);
        }
    }
}

// Classes Phone qui implémente l'interface Observer
class Phone implements Observer {
    // Méthode pour afficher la météo elle sera appelée par la station météo
    public update(weather: string): void {
        console.log(`Phone displays: ${weather}`);
    }
}

// Classes Laptop qui implémente l'interface Observer
class Laptop implements Observer {
    // Méthode pour afficher la météo elle sera appelée par la station météo
    public update(weather: string): void {
        console.log(`Laptop displays: ${weather}`);
    }
}

// Classes Tablet qui implémente l'interface Observer
class Tablet implements Observer {
    // Méthode pour afficher la météo elle sera appelée par la station météo
    public update(weather: string): void {
        console.log(`Tablet displays: ${weather}`);
    }
}

// Classes Car qui implémente l'interface Observer
class Car implements Observer {
    // Méthode pour afficher la météo elle sera appelée par la station météo
    public update(weather: string): void {
        console.log(`Car displays: ${weather}`);
    }
}

// Example usage:

// Création de la station météo
const weatherStation = new WeatherStation();

// Création des observateurs
const phone = new Phone();
const laptop = new Laptop();
const tablet = new Tablet();
const car = new Car();

// Ajout des observateurs à la station météo
weatherStation.addObserver(phone);
weatherStation.addObserver(laptop);
weatherStation.addObserver(tablet);
weatherStation.addObserver(car);

// Mise à jour de la météo
weatherStation.setWeather("Pluie"); // Tous les observateurs affichent "Pluie"
weatherStation.setWeather("Beau temps"); // Tous les observateurs affichent "Beau temps"
weatherStation.setWeather("Neige"); // Tous les observateurs affichent "Neige"
weatherStation.setWeather("Chaleur extrême"); // Tous les observateurs affichent "Chaleur extrême"