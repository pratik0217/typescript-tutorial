class TopicsTypescript {
    public topic:string = "Access Modifier in TS";
    private nextTopic:string = "Inheritance in Typescript"
    protected lionSound:string = "Roar";

    getNextTopic() {
        return this.nextTopic;
    }
}

class AnimalSound extends TopicsTypescript {
    getSound() {
        console.log(`Sound of Lion is ${this.lionSound}`);
    }
}

let currentTopic = new TopicsTypescript()

console.log(currentTopic.topic);
console.log(currentTopic.getNextTopic());

let sound = new AnimalSound();

sound.getSound();