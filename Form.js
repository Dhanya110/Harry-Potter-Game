class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this. title = createElement('h1')
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
     
    }
    display(){
     this.title.style("color","white"); 
    this.title.html(" The Dark Lord Returns");
     this.title.position(450,20);
    

    this.input.position(550, 550);
    this.button.position(600, 600);
   

    this.button.mousePressed(()=>{
      gameState=1;
        this.input.hide();
        this.button.hide();
       // player.name = this.input.value();
       // playerCount+=1;
        
       //this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2-70, displayHeight/4);
      });

      
    }
}