class Fish{
    constructor(name, color){
        this.name = name
        this.color = color
    }
    info(){
        return `I'm ${this.name} and I'm ${this.color}.`
    }
    swim(){
        return `I can swim but you can not haha`
    }
    speak(){
        return `I speak with no words`
    }
    favorete(){
        return `My name is ${this.name} and I like ${this.color}.`
    }
}

class BlueRing extends Fish{
    constructor(name, color, charector){
        super(name, color)
        this.charector = charector
    }
    gentalman(){
        return super.favorete() + `I have a ${this.charector} personality. `
    }
}

class QueenAgelFish extends Fish{
    constructor(name, color, age){
        super(name, color)
        this.age = age
    }
    info(){
        return `Hi, ` + super.info() + `I'm ${this.age}.`
    }
}

class Carfish extends Fish{
    constructor(name, color, delisous){
        super(name, color)
        this.delisous = delisous
    } 
    info(){
        return super.info() + `I am a ${this.delisous} fish.`
    }
}

const Myfish = new Carfish("lulu", "pink", "Yummy")
console.log(Myfish.info())