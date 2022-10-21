

class Balloon{
    constructor (size, color)
    {
        this.size = size;
        this.color = color;
    }

    BlownUp () 
    {
        console.log(`This ballon blew up at size: ${this.size}`);
    }

}

class HotAirBallon extends Balloon
{
    constructor (people, size, color)
    {
        super(size,color);
        this.people = people;
    }
}


function test () 
{

}
const balloonOne = new Balloon("small", "red");
const balloonTwo = new Balloon("medium", "red");
const hotAirBallon = new HotAirBallon("people", "large", "blue");
hotAirBallon.BlownUp();