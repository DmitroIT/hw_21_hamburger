
import { Hamburger } from "./oop/Resurses.js";
import { topping } from "./oop/HamburgerTuning/HamburgerTopping.js";
import { size } from "./oop/HamburgerTuning/HamburgerSize.js";
import { stuffing } from "./oop/HamburgerTuning/HamburgerStuffing.js";



const hamburger1 = new Hamburger(size.small, stuffing.cheese);
hamburger1.addTopping(topping.spice);
hamburger1.addTopping(topping.mayo);
console.log(`Стоимость: ${hamburger1.calculatePrice()} тугриков`)
console.log(`Количество каллорий: ${hamburger1.calculateCalories()}`)
console.log(/-------------------------/)


const hamburger2 = new Hamburger(size.large, stuffing.cheese)
hamburger2.addTopping(topping.mayo)
hamburger2.addTopping(topping.spice)
console.log(`Стоимость: ${hamburger2.calculatePrice()} тугриков`)
console.log(`Количество каллорий: ${hamburger2.calculateCalories()}`)
console.log(/-------------------------/)


