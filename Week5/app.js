class Food {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    describe() {
        return`${this.name} picks ${this.category}.`;
    }
}

class Customers {
    constructor(age) {
        this.age = age;
        this.food = [];
    }

    addFood(food) {
        if (food instanceof Food) {
            this.food.push(food);
        } else {
            throw new Error(`You can only add an instance of food. Argument is not food: ${food}`);
        }
    }

    describe() {
        return `${this.name} has ${this.food.length} food.`;
    }
}

class Menu {
    constructor() {
        this.meals = [];
        this.selectedMeal = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while(selection != 0) {
            switch (selection) {
                case '1':
                    this.createMeal();
                    break;
                case '2':
                    this.viewMeal();
                    break;
                case '3':
                    this.deleteMeal();
                    break;
                case '4':
                    this.displayMeals();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }


        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new meal
        2) view meal
        3) deleted meal
        4) display all meals
        `);
        }

        showMealMenuOptions(mealInfo) {
            return prompt (`
            0) back
            1) create customer
            2) delete customer
            ------------------
            $(mealInfo)
            `);
        }

        displayMeals() {
            let mealString = '';
            for (let i = 0; i < this.meals.length; i++) {
                mealString += i + ') ' + this.meals[i].name + '\n';
            }
            alert(mealString);
        }

        createMeal() {
            let food = prompt('Enter food for new meal');
            this.meals.push(new Meal(food));
        }

        viewMeal() {
            let index = prompt('Enter the index of the meal you wish to view:');
            if (index > -1 && index < this.meals.length) {
                this.selectedMeal = this.meal[index];
                let description = 'Meal Food: ' + this.selectedMeal.food + '\n'
                
                for (let i = 0; i < globalThis.selectedMeal.customers.length; i++) {
                    description += i + ') ' + this.selectedMeal.customers[i].food 
                    + ' - ' + this.selectedMeal.customers[i].category + '\n';
                }

                let selection =  this.showMealMenuOptions(description);
                switch(selection) {
                    case '1':
                        this.createCustomer();
                        break;
                    case '2':
                        this.deleteCustomer();
                }
            }
        }
    }

    let menu = new Menu();
    menu.start();