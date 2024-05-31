// Run: bun run observer/index.ts

console.log("==================================")
console.log("Exerxice 2: Observer Pattern")
console.log("==================================")

interface Observer {
    update(weather: string): void;
}

class WeatherStation {
    private observers: Observer[] = [];
    private weather: string = '';

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public setWeather(weather: string): void {
        this.weather = weather;
        this.notifyObservers();
    }

    private notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.weather);
        }
    }
}

class Phone implements Observer {
    public update(weather: string): void {
        console.log(`Phone displays: ${weather}`);
    }
}

class Laptop implements Observer {
    public update(weather: string): void {
        console.log(`Laptop displays: ${weather}`);
    }
}

class Tablet implements Observer {
    public update(weather: string): void {
        console.log(`Tablet displays: ${weather}`);
    }
}

class Car implements Observer {
    public update(weather: string): void {
        console.log(`Car displays: ${weather}`);
    }
}

// Example usage:
const weatherStation = new WeatherStation();

const phone = new Phone();
const laptop = new Laptop();
const tablet = new Tablet();
const car = new Car();

weatherStation.addObserver(phone);
weatherStation.addObserver(laptop);
weatherStation.addObserver(tablet);
weatherStation.addObserver(car);

weatherStation.setWeather("Pluie");
weatherStation.setWeather("Beau temps");
weatherStation.setWeather("Neige");
weatherStation.setWeather("Chaleur extrême");