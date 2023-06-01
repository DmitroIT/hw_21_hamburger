export class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let totalPrice = this.size.price + this.stuffing.price;
        for (const topping of this.toppings) {
            totalPrice += topping.price;
        }
        return totalPrice;
    }

    calculateCalories() {
        let totalCalories = this.size.calories + this.stuffing.calories;
        for (const topping of this.toppings) {
            totalCalories += topping.calories;
        }
        return totalCalories;
    }
}
