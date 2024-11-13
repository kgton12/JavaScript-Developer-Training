const IHeroType = {
    WARRIOR: "Warrior",
    MAGE: "Mage",
    ARCHER: "Archer"
};

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    attack() {
        console.log(`${this.type} is attacking`);

        switch (this.type) {
            case IHeroType.WARRIOR:
                console.log("Warrior attacked with sword");
                break;
            case IHeroType.MAGE:
                console.log("Wizard attacked with magic");
                break;
            case IHeroType.ARCHER:
                console.log("Archer attacks with bow and closes");
                break;
        }
    }
}

const hero = new Hero("Guter", 30, IHeroType.WARRIOR);
hero.attack();