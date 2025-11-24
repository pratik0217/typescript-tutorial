class TopicsTypescript {
    topic = "Access Modifier in TS";
    nextTopic = "Inheritance in Typescript";
    lionSound = "Roar";
    getNextTopic() {
        return this.nextTopic;
    }
}
class AnimalSound extends TopicsTypescript {
    getSound() {
        console.log(`Sound of Lion is ${this.lionSound}`);
    }
}
let currentTopic = new TopicsTypescript();
console.log(currentTopic.topic);
console.log(currentTopic.getNextTopic());
let sound = new AnimalSound();
sound.getSound();
export {};
