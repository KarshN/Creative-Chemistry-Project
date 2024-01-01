var elems=["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Ni", "Co", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra","Ac","Th","Pa","U","Np","Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"]
var el_nms=["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Nickel", "Cobalt", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine","Radon", "Francium","Radium", "Actinium","Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"]
var at_mass=[1.008, 4.002602, 6.94, 9.0122, 10.81, 12.011, 14.007, 15.999, 18.998403163, 20.1797, 
  22.98976928, 24.305, 26.9815385, 28.085, 30.973761998, 32.06, 35.45, 39.948, 39.0983, 
  40.078, 44.955908, 47.867, 50.942, 51.9961, 54.938044, 55.845, 58.933194, 58.6934, 
  63.546, 65.38, 69.723, 72.630, 74.921595, 78.971, 79.904, 83.798, 85.4678, 87.62, 
  88.90584, 91.224, 92.90637, 95.95, 98, 101.07, 102.90550, 106.42, 107.8682, 
  112.414, 114.818, 118.710, 121.760, 127.60, 126.90447, 131.293, 132.90545196, 
  137.327, 138.90547, 140.116, 140.90766, 144.242, 145, 150.36, 151.964, 157.25, 
  158.92535, 162.500, 164.93033, 167.259, 168.93422, 173.04, 174.9668, 178.49, 
  180.94788, 183.84, 186.207, 190.23, 192.217, 195.084, 196.966569, 200.592, 
  204.38, 207.2, 208.98040, 208.98242, 209.98713, 222, 223, 226, 227, 232.0377, 
  231.03588, 238.02891, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 262, 
  267, 270, 271, 270, 277, 276, 281, 282, 285, 284, 289, 288, 293, 294, 294]
var state=0;
//state=2;
var quiz_steps=[12,13,14,19,20,22,23,25];
var diagram_boxes=[134, 330,134,293,160,287,175,287,190,287,134,275,160,263,175,263,190,263,134,254,215,250,230,250,245,250,260,250,275,250,160,245,175,245,190,245,134,235,215,232,230,232,245,232,260,232,275,232,160,222,175,222,190,222,134,216,298,214,313,214,328,214,343,214,358,214,371,214,386,214,215,210,230,210,245,210,260,210,275,210,160,202,175,202,190,202,134,195,298,189,313,189,328,189,343,189,358,189,371,189,386,189,215,185,230,185,245,185,260,185,275,185,160,180,175,180,190,180]
var yChange=0;
var energy_levels=["1s","2s","2p","2p","2p","3s", "3p", "3p", "3p", "4s", "3d", "3d","3d","3d","3d", "4p", "4p", "4p","5s","4d","4d","4d","4d","4d","5p","5p","5p","6s","4f","4f","4f","4f","4f","4f","4f","5d","5d","5d","5d","5d","6p","6p","6p","7s","5f","5f","5f","5f","5f","5f","5f","6d","6d","6d","6d","6d","7p","7p","7p"]
var answer = [];
var answerCorrect=false;
var clickSound;
var playerPos=1;
var playerX=20;
var playerY=135;
var animation_step=0;
//animation_step=21;
var animation_frame=0;
var player;
var wallImg;
var coinImg;
var soldierImg;
var screenImgs=[];
var electronImgs=[];
var invImg;
var graphic;
var actionSteps=[4,5,7];
var instructions=["Welcome to the Battle of the Periodic Table,", "You are trying to take down the evil Emperor Electronus at the top of the Noble Gas Tower.","Your journey starts in the Alkali(ne) City in Metal Land.","Start by pressing the 'e' key to search your area.","Nice! Now, click on the 'Equip' button to"+ " ".repeat(4)+"equip the flashlight.", "Note that squares turn green after they are  searched.", "Using the WASD keys, try moving around a bit. Your goal is to find the Particle Army Base."];
var actionMet=true;
var gameFrame=0;
var selection=[];
var inst_step=1;
let scroll=0
if(inst_step==4){
  actionMet=false;
}
var sight_power=50;
//sqrt of 20000 for flashlight
var instFrame=0;
var currentBoundaries=[21,39];
var boundaryReasons=["until you break that wall."];
var currBr=0;
var keyWasPressed=true;
var collect_items=[];
var searchedSqs=[];
var inventory=[];
var doors_entered=[];
if (localStorage.getItem("ch") == undefined) {
  localStorage.setItem("ch", 1);
}
var collectSound;
var itemFound = false;
let itemX=30;
let itemY=20;
function preload() {
  player = loadImage("ch" + localStorage.getItem("ch") + ".png")
  wallImg=loadImage("wall.png");
  coinImg=loadImage("coin.png")
  soldierImg=loadImage("soulja.png");
  graphic=loadImage("thing.png")
  invImg=loadImage("backpack.png");
  electronImgs.push(loadImage("electron_symbol1.png"))
  electronImgs.push(loadImage("electron_symbol2.png"))
  for(let e=1;e<20;e++){
    screenImgs.push(loadImage("screen"+e+".png"));
  }
  collectSound=loadSound("collect.flac");
  clickSound=loadSound("click_button.wav");
  clickSound.setVolume(0.2)
  collectSound.setVolume(0.5)
}
function setup() {
  createCanvas(1000, 650);
  
}

function draw() {
  background("black");
  function mouseBetween(x1,y1,x2,y2){
    //x1, y1 is top left corner
    if(mouseX>=x1&&mouseX<=x2&&mouseY>=y1&&mouseY<=y2){
      return true
  }else{
      return false
  }
  }
  function item(name, desc, upgprice,lvl,count,type){
    this.name=name;
    this.desc=desc;
    this.upgprice = upgprice;
    this.lvl=lvl;
    this.type=type;
    //supply, tool, or door
    this.count=count;
    //if(this.type=="tool"){
      this.equipped=false;
    //}
    this.upgrade=function(amount){
      this.lvl+=amount;
    }
    this.equip=function(equipped){
      if(this.isType("tool")){
        this.equipped=equipped;
      }
    }
    this.use=function(){
      if(this.name=="Flashlight"){
        sight_power=sqrt(2*(this.lvl)*50*(this.lvl)*50)
      }
      //for items like armor or weapons, increases player's stats
    }
    this.enter=function(){
      if(this.name=="Army Base"){
        playerX=20;
        playerY=135;
        animation_step=0;
        //animation_step=22;
        state=2;
        textFont('Arial')
      }
    }
    this.isType=function(type){
      for(let i =0;i<type.length;i++){
        if(type[i]!==this.type[i]){
          return false
        }
      }
      return true;
    }
  }
  function findTypeInventory(type,notName){
    for(let i=0;i<inventory.length;i++){
      if(inventory[i].type==type && inventory[i].name!==notName){
        return i;
      }
    }
    return false;
  }
  function setUpItems(){
    for(let c=0;c<118;c++){
      collect_items.push("");
    }
    collect_items[0]=new item("Flashlight","Allows the player to see more squares around themself",1000,1,1,"tool_sight");
    collect_items[3]=new item("Coins","Can be used to purchase certain items",0,1,500,"supply_coins");
    collect_items[19]=new item("Army Base","Base of the famed Particle Army",0,1,1,"door_army");
    collect_items[54]=new item("Cannon","Cool gizmo that can be used to shoot stuff (like that wall over there)",0,1,1,"cannon");
  }
  function findActionMet(step){
    if(step==5){
      
      if(inventory.length>0){
      if(inventory[0].equipped==true){
        actionMet=true;
      }
      }
    }else if(step==7){
      
    }
  }
  function contains(list,item){
    for(let i =0;i<list.length;i++){
      if(list[i]==item){
        return true
      }
    }
    return false
  }
  function drawPTable() {
    textFont('Arial');
    textStyle(NORMAL);
    for (var i = 1; i < 119; i++) {
      if(contains(searchedSqs,i)){
        fill("green");
      }else{
      fill("white")
      }
      rect(getBoxPos(getGridPos(i), 18)[0], getBoxPos(getGridPos(i), 18)[1], 50, 50);
      fill("black")
      textSize(10);
      text(getElement(getGridPos(i)), getBoxPos(getGridPos(i), 18)[0] + 20, getBoxPos(getGridPos(i),18)[1]+10);
      textSize(20);
      text(elems[i-1], getBoxPos(getGridPos(i), 18)[0] + 15, getBoxPos(getGridPos(i),18)[1]+27);
      if(el_nms[i-1].length>11){
        textSize(7)
      }
      else if(el_nms[i-1].length>8){
        textSize(8)
      }else{
      textSize(10);
      }
      text(el_nms[i-1], getBoxPos(getGridPos(i), 18)[0] + 5, getBoxPos(getGridPos(i),18)[1]+38);
      textSize(8)
      text(round(at_mass[i-1]*10000)/10000, getBoxPos(getGridPos(i), 18)[0] + 15, getBoxPos(getGridPos(i),18)[1]+48);
      image(wallImg, getBoxPos(getGridPos(21),18)[0],getBoxPos(getGridPos(21),18)[1])
      if(dist(getGridPos(playerPos),getGridPos(i))>sight_power){
        fill("black")
      }else{
        fill(0,0,0,(dist(getGridPos(playerPos),getGridPos(i))/sight_power)*255)

      }
      rect(getBoxPos(getGridPos(i), 18)[0], getBoxPos(getGridPos(i), 18)[1], 50, 50);
      if(dist(getGridPos(playerPos),getGridPos(39))>sight_power){
        
        rect(getBoxPos(getGridPos(39), 18)[0], getBoxPos(getGridPos(39), 18)[1], 50, 50);
      }
      if(dist(getGridPos(playerPos),getGridPos(21))>sight_power){
        
        rect(getBoxPos(getGridPos(21), 18)[0], getBoxPos(getGridPos(21), 18)[1], 50, 50);
      }
      
      
    }
  }
  function getBoxPos(number, width) {
    return [(((number - 1) % width) + 1) * 50, (Math.ceil(number / width)) * 50]
  }
  function getGridPos(atomN) {
    var totalAdd = 0;
    if (atomN > 1) {
      totalAdd += 16
    }
    if (atomN > 4) {
      totalAdd += 10
    }
    if (atomN > 12) {
      totalAdd += 10
    }
    if(atomN>56 &&atomN<72){
      totalAdd+=55
    }else if(atomN>71 && atomN<89){
      totalAdd-=14;
    }
    if(atomN>88 && atomN<104){
      totalAdd+=41;
    }else if(atomN>103){
      totalAdd-=28;
    }
    return atomN + totalAdd
  }
  function getElement(atomN){
    var totalSub = 0;
    if (atomN > getGridPos(1)) {
      totalSub += 16
    }
    if (atomN > getGridPos(4)) {
      totalSub += 10
    }
    if (atomN > getGridPos(12)) {
      totalSub+= 10
    }
    if(atomN>=getGridPos(57) && atomN<=getGridPos(71)){
      totalSub+=55
    }else if(atomN>=getGridPos(72) && atomN<=getGridPos(88)){
      totalSub-=14;
    }
    if(atomN>=getGridPos(89) && atomN<=getGridPos(103)){
      totalSub+=41;
    }else if(atomN>getGridPos(88) &&atomN<=getGridPos(118)){
      totalSub-=28;
    }
    return atomN -totalSub
  }
  function dist(gPos1,gPos2){
    var yChange=abs(getBoxPos(gPos1,18)[1]-getBoxPos(gPos2,18)[1])
    var xChange=abs(getBoxPos(gPos1,18)[0]-getBoxPos(gPos2,18)[0])
    return sqrt((xChange*xChange)+(yChange*yChange))
  }
  function clip(text,letter_num,start){
    var l_num=letter_num
    if(letter_num>text.length){
      l_num=text.length
    }
    var t =[];
    var s = ""
    for(let i =0;i<text.length;i++){
      t.push(text[i])
    }
    for(let j=0;j<l_num;j++){
      if(j>=start){
      s=s+t[j]
      }
    }
    return s;
    
  }
  function displayItem(item,x,y,inventoryIn){
    fill("white")
    rect(x,y,300,90)
    //165,90
    fill("black")
    textSize(15)
    text(item.name,x+85,y+15);
    if(!inventoryIn){
    line(x+275,y+5,x+285,y+15);
    line(x+275,y+15,x+285,y+5);
    }else{
      if(item.upgprice>0){
        if(findItemInventory("Coins")!==false){
          if(findItemInventory("Coins").count>=item.upgprice){
            fill("green")
            if(mouseX>x+245 && mouseX<x+300 && mouseY>y+5 && mouseY<y+15&& mouseIsPressed){
              inventory[findItemInventory("Coins")].count-=item.upgprice;
              item.lvl+=1;
            }
          }else{
            fill("red")
          }
        }else{
          fill("red")
        }
        rect(x+245,y,55,15);
        fill("black")
        textSize(12)
        text("Upgrade",x+248,y+13)
      }
    }
    line(x,y+20,x+300,y+20);
    textSize(13)
    if(item.desc.length>37){
      text(clip(item.desc,37,0),x+5,y+40)
      text(clip(item.desc,item.desc.length,37),x+5,y+55)
    }else{
      text(item.desc,x+5,y+40)
    }
    line(x,y+65,x+300,y+65);
    textSize(15)
    text("Count: "+item.count,x+5,y+85);
    text("Level: "+item.lvl,x+115,y+85);
    if(item.isType("tool") && inst_step>4){
      fill("grey")
      rect(x+230,y+70,70,20)
      fill("black")
      if(item.equipped==false){
      text("Equip",x+245,y+85);
      }else{
        text("Unequip",x+235,y+85);
      }
      if(mouseX>=x+230 && mouseX<=x+300&&mouseY>=y+70&&mouseY<=y+90 && mouseIsPressed){
        if(findTypeInventory(item.type,item.name)===false){
    if(item.equipped==false){
    inventory[findItemInventory(item.name)].equip(true);
    }else{
      inventory[findItemInventory(item.name)].equip(false);
    }
        if(inst_step>4 && !inventoryIn){
          clickSound.play()
          itemFound=false;
        }
     }else{
          fill("white")
          rect(x,y,300,90)
          fill("black")
          textSize(12)
          text("You must unequip your "+inventory[findTypeInventory(item.type,item.name)].name,x+5,y+45);
          text(" to equip this item",x+35,y+60)
        }
    }
    if(mouseX>=x+230 && mouseX<=x+300&&mouseY>=y+70&&mouseY<=y+90 && findTypeInventory(item.type,item.name)!==false){
      fill("white")
      rect(x,y,300,90)
      fill("black")
      textSize(12)
      text("You must unequip your "+inventory[findTypeInventory(item.type,item.name)].name,x+5,y+45);
      text(" to equip this item",x+35,y+60)
    }

    }
    if(item.isType("cannon") && inst_step>6){
      fill("grey")
      rect(x+230,y+70,70,20)
      fill("black")
      if(item.equipped==false){
      text("Use",x+245,y+85);
      }else{
        text("Used",x+240,y+85);
      }
      if(mouseX>=x+230 && mouseX<=x+300&&mouseY>=y+70&&mouseY<=y+90 && mouseIsPressed){
        if(findItemInventory("Soldiers")===true){
        if(inventory[findItemInventory("Soldiers")].count>=500){
          
          if(item.equipped==false){
    inventory[findItemInventory(item.name)].equip(true);
    }
        if(inst_step>4 && !inventoryIn){
          clickSound.play()
          itemFound=false;
        }
        }else{
          fill("white")
          rect(x,y,300,90)
          fill("black")
          textSize(12)
          text("You must have at least 500 soldiers",x+5,y+45);
          text("to man this cannon",x+35,y+60);
        }
     }else{
          fill("white")
          rect(x,y,300,90)
          fill("black")
          textSize(12)
          text("You must have at least 500 soldiers",x+5,y+45);
          text("to man this cannon",x+35,y+60);
        }
    }
    if(mouseX>=x+230 && mouseX<=x+300&&mouseY>=y+70&&mouseY<=y+90 && findItemInventory("Soldiers")===true){
      if(inventory[findItemInventory("Soldiers")].count<500){
        fill("white")
        rect(x,y,300,90)
        fill("black")
        textSize(12)
        text("You must have at least 500 soldiers",x+5,y+45);
        text("to man this cannon",x+35,y+60);
      }
    }else if(mouseX>=x+230 && mouseX<=x+300&&mouseY>=y+70&&mouseY<=y+90){
      fill("white")
      rect(x,y,300,90)
      fill("black")
      textSize(12)
      text("You must have at least 500 soldiers",x+5,y+45);
      text("to man this cannon",x+35,y+60);
    }

    }
    if(item.isType("door")){
      fill("grey")
      rect(x+230,y+70,70,20)
      fill("black")
      text("Enter",x+245,y+85);
      if(mouseX>=x+230 && mouseX<=x+300&&mouseY>=y+70&&mouseY<=y+90 && mouseIsPressed){
        item.equipped=true;
        item.enter();
     }
    }
    if(mouseX>=x+230 && mouseX<=x+300&&mouseY>=y+70&&mouseY<=y+90 && findTypeInventory(item.type,item.name)!==false){
      fill("white")
      rect(x,y,300,90)
      fill("black")
      textSize(12)
      text("You must unequip your "+inventory[findTypeInventory(item.type,item.name)].name,x+5,y+45);
      text(" to equip this item",x+35,y+60);
    }
    if(mouseX>=440 && mouseX<=450&&mouseY>=90&&mouseY<=100 && mouseIsPressed && inst_step>5 && !inventoryIn){
      clickSound.play()
      itemFound=false;
    }
  }
  function say(text_thing){
    fill(0,0,0,0)
    beginShape();
    vertex(540, 80);
    vertex(500, 50);
    vertex(250, 50);
    vertex(250, 100);
    vertex(500, 100);
    endShape(CLOSE);
    fill("black")
    textSize(12)
    //textStyle(BOLD)
    text(clip(text_thing,40,0),255,65)
    if(text_thing.length>40){
      text(clip(text_thing,80,40),255,80)
    }
    if(text_thing.length>80){
       text(clip(text_thing,text_thing.length,80),255,95)
    }
  }
  function searchSquare(sq){
    alert("Searching...")
    var frame_thing=0;
    while(frame_thing<200000){
      frame_thing+=1;
      fill("black")
      rect(0,0,15,15)
    }
    if(collect_items[sq-1]!=="" ){
      alert("Item found!")
      collectSound.play()
      itemFound=true;
      fill("white")
      rect(165,25,110,130);
      if(findItemInventory(collect_items[sq-1].name)===false){
        if(!collect_items[sq-1].isType("door")&&!collect_items[sq-1].isType("cannon")){
      inventory.push(collect_items[sq-1]);
        }else if(collect_items[sq-1].isType("door") && !contains(doors_entered,sq)){
          doors_entered.push(sq)
        }
      }else if(!contains(searchedSqs,sq)){
        searchedSqs.push(sq)
          inventory[findItemInventory(collect_items[sq-1].name)].count+=collect_items[sq-1].count;
      }
      searchedSqs.push(sq)
      
    }else{
      alert("Oops! Looks like there's nothing here.")
      
      searchedSqs.push(sq)
    }
    
  }
  function useItems(){
    for(let e =0;e<inventory.length;e++){
      if(inventory[e].count==0){
        inventory.splice(e,1);
      }
    }
    for(let i =0;i<inventory.length;i++){
      if(inventory[i].isType("tool") && inventory[i].equipped==true){
        inventory[i].use()
      }
    }
  }
  function findItemInventory(name){
    for(let i=0;i<inventory.length;i++){
      if(inventory[i].name==name){
        return i
      }
    }
    return false;
  }
  function checkInBoundaries(position){
    return (!contains(currentBoundaries,position))
  }
  function drawDiagramBoxes(yChange){
    for(var i=1;i<(diagram_boxes.length/2)+1;i++){
      fill(0,0,0,0)
      rect(diagram_boxes[i*2-2],diagram_boxes[i*2-1]+yChange,13,15);
      if(contains(quiz_steps,animation_step)){
      stroke(0,0,0,50)
      }else{
        stroke(0,0,0,120)
      }
      textSize(11)
      text(energy_levels[i-1],diagram_boxes[i*2-2],diagram_boxes[i*2-1]+10+yChange)
      stroke("black");
    }
  }
  function checkInDiagramBoxes(x,y,yChange){
    for(var i=1;i<(diagram_boxes.length/2)+1;i++){
      if(x>=diagram_boxes[i*2-2] && x<=diagram_boxes[i*2-2]+13 && y-yChange>=diagram_boxes[i*2-1] && y-yChange<=diagram_boxes[i*2-1]+15){
        return i-1
      }
    }
    return false
  }
  function drawElectrons(list){
    for(var i =0;i<list.length;i++){
      if(list[i]!==""){
        if(i%2==0){
        
        image(electronImgs[list[i]],diagram_boxes[i]+1,diagram_boxes[i+1]+yChange,6,14)
        }else{
          image(electronImgs[list[i]],diagram_boxes[i-1]+6.5,diagram_boxes[i]+yChange,6,14)
        }
      }
    }
  }
  if(gameFrame==0){
    setUpItems();
  }
 if(state==0){
   drawPTable();
   image(player, getBoxPos(getGridPos(playerPos),18)[0]-30, getBoxPos(getGridPos(playerPos),18)[1]-25);
   fill("white");
   rect(300,25,400,50)
   fill("black")
   textFont('Courier New', 13);
   //textStyle(BOLD);
   if( round(instFrame/2)>45 && instructions[inst_step-1].length>45){
     fill("white");
     rect(300,15,400,60)
     fill("black")
     text(clip(instructions[inst_step-1],45,0),305,30);
     text(clip(instructions[inst_step-1],round(instFrame/2),45),305,50)

   }else{
   text(clip(instructions[inst_step-1],round(instFrame/2),0),305,50);
   }
   if(round(instFrame/2)-10>instructions[inst_step-1].length ){
     var size=0;
     fill("orange");
     triangle(680.4+size, 55+size, 688.2, 70, 696-size, 55+size);
     if(mouseIsPressed&&mouseX>680.4+size && mouseX<696-size && mouseY>55+size && mouseY<70 ){
       if(actionMet){
       clickSound.play()
       actionMet=true;
       inst_step+=1;
       instFrame=0;
       if(contains(actionSteps,inst_step)){
         actionMet=false;
       }
       }else{
         fill("white");
         rect(300,15,400,60)
         fill("black")
         text("Action required",305,30);
         fill("orange");
         triangle(680.4+size, 55+size, 688.2, 70, 696-size, 55+size);
       }
     }
     if(actionMet===false&&mouseX>680.4+size && mouseX<696-size && mouseY>55+size && mouseY<70 ){
       fill("white");
       rect(300,15,400,60)
       fill("black")
       text("Action required",305,30);
       fill("orange");
       triangle(680.4+size, 55+size, 688.2, 70, 696-size, 55+size);
     }
   }
   if(keyIsPressed && key == "w"){
     if(!keyWasPressed && inst_step>6){
       if(getGridPos(getElement(getGridPos(playerPos)-18))==getGridPos(playerPos)-18 && getGridPos(playerPos)-18>0){
         itemFound=false;
       if(checkInBoundaries(getElement(getGridPos(playerPos)-18))){
         console.log("validated")
         playerPos=getElement(getGridPos(playerPos)-18);
       }else{
         alert("You can't move there "+boundaryReasons[currBr]);
       }
         keyWasPressed=true;
       }
     }
   }else if(keyIsPressed && key == "a"){
     if(!keyWasPressed && inst_step>6){
       if(getGridPos(getElement(getGridPos(playerPos)-1))==getGridPos(playerPos)-1 && getGridPos(playerPos)%18!==1){
         itemFound=false;
         if(checkInBoundaries(getElement(getGridPos(playerPos)-1))){
           console.log("validated")
           playerPos=getElement(getGridPos(playerPos)-1);
         }else{
           alert("You can't move there "+boundaryReasons[currBr]);
         }
         keyWasPressed=true;
       }
     }
   }else if(keyIsPressed && key == "s"){
     if(!keyWasPressed && inst_step>6){
       if(getGridPos(getElement(getGridPos(playerPos)+18))==getGridPos(playerPos)+18 && getGridPos(playerPos)+18<=getGridPos(118)){
         itemFound=false;
         if(checkInBoundaries(getElement(getGridPos(playerPos)+18))){
           console.log("validated")
           playerPos=getElement(getGridPos(playerPos)+18);
         }else{
           alert("You can't move there "+boundaryReasons[currBr]);
         }
         keyWasPressed=true;
       }
     }
   }else if(keyIsPressed && key == "d"){
     if(!keyWasPressed && inst_step>6){
       if(getGridPos(getElement(getGridPos(playerPos)+1))==getGridPos(playerPos)+1 && getGridPos(playerPos)%18!==0){
         itemFound=false;
         if(checkInBoundaries(getElement(getGridPos(playerPos)+1))){
           console.log("validated")
           playerPos=getElement(getGridPos(playerPos)+1);
         }else{
           alert("You can't move there "+boundaryReasons[currBr]);
         }
         keyWasPressed=true;
       }
     }
   }else if(keyIsPressed && key == "e"){
     if(!keyWasPressed && inst_step>3){
       searchSquare(playerPos)
       keyWasPressed=true;
       if(inst_step==4){
         actionMet=true;
       }
     }
   }else if(keyIsPressed && key == " "){
     if(!keyWasPressed){
       if(actionMet && round(instFrame/2)-10>instructions[inst_step-1].length){
       clickSound.play()
       actionMet=true;
       inst_step+=1;
       instFrame=0;
       if(contains(actionSteps,inst_step)){
         actionMet=false;
       }
       }
     }
   }else{
     keyWasPressed=false;
   }
   if(itemFound==true){
     displayItem(collect_items[playerPos-1],165,90,false)

     if(mouseX>=440 && mouseX<=450&&mouseY>=90&&mouseY<=100 && mouseIsPressed && inst_step>5){
       clickSound.play()
       itemFound=false;
     }
   }
   fill("gray")
   rect(5,5,15,15)
   image(coinImg,6.5,6.5,12,12)
   fill("white")
   textSize(15)
   if(findItemInventory("Coins","")!==false){
     text(inventory[findItemInventory("Coins","")].count,20,17)
   }else{
      text("0",20,17)
   }
   fill("gray")
    rect(5,25,15,15)
    image(soldierImg,5,25,15,15)
    fill("white")
    textSize(15)
    if(findItemInventory("Soldiers","")!==false){
      text(inventory[findItemInventory("Soldiers","")].count,20,37)
    }else{
       text("0",20,37)
    }
   fill("blue")
   rect(70,5,30,30)
   image(invImg,65,5,40,30)
   if(mouseX>=70 && mouseX<=100 && mouseY>=5 && mouseY<=35 && mouseIsPressed){
     state=1;
     scroll=0;
   }
   useItems()
   findActionMet(inst_step);
   instFrame+=1;
   gameFrame+=1;
 }else
   if(state==1){
   itemX=30;
   itemY=20;
   fill("white")
   rect(0,0,30,20)
   textSize(20)
   text("Inventory",350,25)
   fill("black")
   textSize(12)
   text("Back",0,15)
   if(mouseX>=0 && mouseX<=30 && mouseY>=0 && mouseY<=20 && mouseIsPressed){
     state=0;
   }
   for(let g=0;g<inventory.length;g++){
     displayItem(inventory[g],itemX-scroll,itemY,true);
     itemY+=100;
     if(itemY>650){
       itemY=20;
       itemX+=310;
     }
   }
   if(inventory.length ==0){
     fill("white")
     textSize(30)
     text("You haven't collected anything yet",200,200)
     
   }
   if(keyIsPressed&& key=="d"){
     scroll+=5
   }else if(keyIsPressed && key=="a"){
     scroll-=5
   }
 }else 
     if(state==2){
   fill("white")
   stroke("black")
   if(animation_step<7){
   image(graphic,50,50,600,300)
   }
   if(animation_step==0){
     image(player,playerX,playerY)
     fill("black")
     textSize(20)
     text("Press space to start",55,110)
     if(keyIsPressed && key==" "){
       animation_step=1;
     }
   
   }else 
     if(animation_step==1){
    if(playerX <390){
      playerX+=0.75
    }
    if(!(playerX>160 && playerX<365)){
      image(player,playerX,playerY)
    }
     if(round(playerX/5)>72){
       say("Hey! Who are you??");
       if(round(playerX/5)==78){
        textStyle(NORMAL)
       text('"Merely a humble traveler"(space)',255,115);
         text('"Some rando you do not know"(enter)',255,130);
         if(keyIsPressed && (keyCode=="13" ||key==" ")){
           animation_step+=1
           animation_frame=0;
         }
       }
     }else{
       say(clip("...so we need to ambush the rebels right at the time when they won't expect it",round(playerX/5),0));
     }
   }else 
       if(animation_step==2){
     image(player,playerX,playerY)
     say(clip("Whoever you are, you shouldn't be disturbing me!",round(animation_frame),0));
     animation_frame+=0.5;
     if(animation_frame>75){
       text('"Sorry, I just needed help with something"(space)',235,115);
       if(keyIsPressed && (key==" ")){
          animation_step+=1
          animation_frame=0;
        }
     }
   }else 
         if(animation_step==3){
     image(player,playerX,playerY)
      say(clip("What? With taking down some random emperor?",round(animation_frame),0));
      animation_frame+=1/3;
     if(animation_frame>55){
        text('"Yeah! I need to beat Emperor Electronus."(space)',235,115);
        if(keyIsPressed && (key==" ")){
           animation_step+=1
           animation_frame=0;
         }
      }
   }else 
           if(animation_step==4){
      image(player,playerX,playerY)
       say(clip("Really? Then that is a cause worth fighting for. What do you need?",round(animation_frame),0));
       animation_frame+=1/3;
      if(animation_frame>85){
         text('"An army to help with the fight"(space)',255,115);
        text('"Whatever you think will help me win"(enter)',255,130);
         if(keyIsPressed && (key==" "||keyCode==13)){
            animation_step+=1
            animation_frame=0;
          }
       }
    }else 
             if(animation_step==5){
     image(player,playerX,playerY)
      say(clip("Yes. An army will do. But first you must undergo the special battle training.",round(animation_frame),0));
      animation_frame+=1/3;
     if(animation_frame>95){
        text('"Alright bet"(space)',255,115);
       text('"...okay, I guess"(enter)',255,130);
        if(keyIsPressed && (key==" "||keyCode==13)){
           animation_step+=1
           animation_frame=0;
         }
      }
   }else 
               if(animation_step==6){
      text(clip("Press space to start the battle training",round(animation_frame),0),175,130);
     animation_frame+=0.5;
     if(keyIsPressed && key==" "){
       animation_step=7
       animation_frame=0
       for(var i=0;i<answer.length;i++){
          answer[i]=""
        }
     }
   }
               else{
     //image(player,playerX,playerY)
     //animation_frame=0;
     image(screenImgs[animation_step-7],50,50);
     fill("white")
    if(animation_step<21){
      ellipse(450,200,50,50)
      }else{
        ellipse(715,250,50,50)
      }
     ellipse(25,200,40,40)
     fill("black")
     textSize(15)
      if(animation_step<21){
     text("NEXT",430,205)
      }else{
        text("NEXT",695,255)
      }
     textSize(13)
      text("BACK",7,205)
     if(mouseBetween(5,180,45,220)&&mouseIsPressed&&animation_frame==0){
       if(animation_step>=8){
       animation_step-=1
       animation_frame=1
         for(var i=0;i<answer.length;i++){
            answer[i]=""
          }
         answerCorrect=false;
       }
     }else if(((mouseBetween(425,175,475,225)&& animation_step<21)||(mouseBetween(690,215,740,265)&& animation_step>20))&&mouseIsPressed&&animation_frame==0){
       if(!contains(quiz_steps,animation_step)){
          animation_step+=1;
          animation_frame+=1
         for(var i=0;i<answer.length;i++){
            answer[i]=""
          }
         answerCorrect=false;
       }else if(answerCorrect===true){
         animation_step+=1;
           animation_frame+=1
         for(var i=0;i<answer.length;i++){
            answer[i]=""
          }
         selection=[];
          answerCorrect=false;
       }
       if(animation_step==19){
         answerCorrect=true;
         for(let z=0;z<answer.length;z++){
           if((z%2===0&&z<12&& answer[z]==1)||(z%2==1&&z<12&& answer[z]===0)||(z>11&&answer[z]==="")){
              if(answerCorrect){
                answerCorrect=true
                console.log(z)
              }
           }else{
             answerCorrect=false
             
           }
         }
       }else if(animation_step==20){
         answerCorrect=true;
          for(let z=0;z<answer.length;z++){
            if((z%2===0&&z<33&& answer[z]==1)||(z%2==1&&z<33&& answer[z]===0)||(z==33&&answer[z]==="")||(z==34&&answer[z]==1)||(z>34&& answer[z]==="")){
               if(answerCorrect){
                 answerCorrect=true
                 console.log(z)
               }
            }else{
              answerCorrect=false

            }
          }
       }
     }else if(mouseBetween(270,340,305,375)&&mouseIsPressed && animation_step<15){
       if(answerCorrect===true){
         alert("Answers are correct");
         animation_step+=1;
          animation_frame+=1;
         for(var i=0;i<answer.length;i++){
           answer[i]=""
         }
           
         answerCorrect=false;
       }
     }else if(animation_frame>=50){
       animation_frame=0;
     }
     if(animation_step==16||animation_step==17||animation_step>=19){
       if(animation_step==19){
         yChange=-40
         drawDiagramBoxes(-40)
       }else if(animation_step==20){
         yChange=-17
          drawDiagramBoxes(-17)
       }else if(animation_step==21){
          yChange=-40
           drawDiagramBoxes(-40)
        }else if(animation_step>21){
         yChange=0
        }else{
         yChange=0
       drawDiagramBoxes(0)
         if(animation_step==18){
           answers=[]
           for(let e=0;e<118;e++){
             answers.push("");
           }
         }
       }
     }
     if(animation_step==12){
       if(mouseBetween(125,200,325,270) && mouseIsPressed&&answer.length==0 && answerCorrect===false){
         if(answer.length==0){
         answer.push(prompt("What is the name of the area in which electrons reside"))
         }
         if(answer[0]=="orbital" ||answer[0]=="orbitals"||answer[0]=="Orbital"){
           alert("Nice")
           answerCorrect=true;
         }else{
           alert("Nope");
         }
       }else{
         if(answerCorrect!==true && answer.length>0){
           answer.push("");
           if(answer.length>100){
             answer=[];
           }
         }
       }
       if(mouseBetween(315,345,405,375) && mouseIsPressed &&animation_step<15){
         animation_step=8;
         animation_frame=0;
         answerCorrect=false;
         for(var i=0;i<answer.length;i++){
            answer[i]=""
          }
       }
     }else
       if(animation_step==13){
       textSize(10)
       if(mouseBetween(115,165,150,190)){
         fill("white")
         stroke("yellow")
         ellipse(132.5,177.5,40,30)
         stroke("black")
         fill("black")
         text("[key]",130,180)
         if(keyIsPressed && answer[0]!=="s"){
           answer[0]=key;
        
         }
         
       }else if(mouseBetween(115,210,150,240)){
         fill("white")
          stroke("yellow")
          ellipse(132.5,225,40,30)
          stroke("black")
         fill("black")
         text("[key]",130,227.5)
          if(keyIsPressed && answer[1]!=="p"){
            answer[1]=key;
          }
       }else if(mouseBetween(115,255,150,280)){
          fill("white")
           stroke("yellow")
           ellipse(132.5,267.5,40,30)
           stroke("black")
         fill("black")
         text("[key]",130,270)
           if(keyIsPressed && answer[2]!=="d"){
             answer[2]=key;
             
           }
        }else if(mouseBetween(115,305,150,335)){
         fill("white")
          stroke("yellow")
          ellipse(132.5,320,40,30)
          stroke("black")
         fill("black")
         text("[key]",130,327.5)
          if(keyIsPressed && answer[3]!=="d"){
            answer[3]=key;
            
          }
       }
       textSize(13)
       if(answer[0]!==""&&answer[0]!==undefined){
          if(answer[0]!=="s"){
            fill("red")
          }else{
            fill("black")
          }
         text(answer[0],130,180)
        }
       if(answer[1]!==""&&answer[1]!==undefined){
           if(answer[1]!=="p"){
             fill("red")
           }else{
             fill("black")
           }
          text(answer[1],130,227.5)
         }
       if(answer[2]!==""&&answer[2]!==undefined){
              if(answer[2]!=="d"){
                fill("red")
              }else{
                fill("black")
              }
             text(answer[2],130,270)
            }
       if(answer[3]!==""&&answer[3]!==undefined){
         if(answer[3]!=="f"){
           fill("red")
         }else{
           fill("black")
         }
        text(answer[3],130,322.5)
       }
       if(answer[0]=="s"&&answer[1]=="p"&&answer[2]=="d"&&answer[3]=="f"){
         answerCorrect=true;
       }
       if(mouseBetween(315,345,405,375) && mouseIsPressed &&animation_step<15){
          animation_step=10;
          animation_frame=0;
          answerCorrect=false;
        }
       
     }else 
       if(animation_step==14){
       if(answer[4]>0){
         answer[4]+=1;
         if(answer[4]>100){
           answer[4]=0
         }
       }
       if(answer[4]=="" ||answer.length<5){
         answer[4]=0;
       }
       if(answer[5]==""||answer.length<6){
          answer[5]=0;
        }
       if(answer[5]>0){
          answer[5]+=1;
          if(answer[5]>100){
            answer[5]=0
          }
        }
       textSize(10)
       if(mouseBetween(115,165,150,190)){
          fill("white")
          stroke("yellow")
          ellipse(132.5,177.5,40,30)
          stroke("black")
         fill("black")
         text("[key]",130,180)
          if(keyIsPressed && answer[0]!=="2"){
            answer[0]=key;

          }

        }else if(mouseBetween(115,210,150,240)){
          fill("white")
           stroke("yellow")
           ellipse(132.5,225,40,30)
           stroke("black")
         fill("black")
         text("[key]",130,227.5)
           if(keyIsPressed && answer[1]!=="6"){
             answer[1]=key;
           }
        }else if(mouseBetween(115,255,150,280)){
           fill("white")
            stroke("yellow")
            ellipse(132.5,267.5,40,30)
            stroke("black")
         fill("black")
         text("[mouse]",125,270)
         if((mouseIsPressed|| keyIsPressed) && answer[4]==0){
         answer[2]=prompt("How many electrons can the d orbital hold?");
           answer[4]=1
           if(answer[2]!=="10"){
             alert("Nope")
           }else{
             alert("Nice")
           }
         }
         }else if(mouseBetween(115,305,150,335)){
          fill("white")
           stroke("yellow")
           ellipse(132.5,320,40,30)
           stroke("black")
         fill("black")
         text("[mouse]",125,322.5)
        if((mouseIsPressed|| keyIsPressed) && answer[5]==0){
        answer[3]=prompt("How many electrons can the f orbital hold?");
          answer[5]=1
          if(answer[3]!=="14"){
            alert("Nope")
          }else{
            alert("Nice")
          }
        }
        }
        textSize(13)
        if(answer[0]!==""&&answer[0]!==undefined){
           if(answer[0]!=="2"){
             fill("red")
           }else{
             fill("black")
           }
          text(answer[0],130,180)
         }
        if(answer[1]!==""&&answer[1]!==undefined){
            if(answer[1]!=="6"){
              fill("red")
            }else{
              fill("black")
            }
           text(answer[1],130,227.5)
          }
        if(answer[2]!==""&&answer[2]!==undefined){
               if(answer[2]!=="10"){
                 fill("red")
               }else{
                 fill("black")
               }
              text(answer[2],130,270)
             }
        if(answer[3]!==""&&answer[3]!==undefined){
          if(answer[3]!=="14"){
            fill("red")
          }else{
            fill("black")
          }
         text(answer[3],130,322.5)
        }
        if(answer[0]=="2"&&answer[1]=="6"&&answer[2]=="10"&&answer[3]=="14"){
          answerCorrect=true;
        }
        if(mouseBetween(315,345,405,375) && mouseIsPressed &&animation_step<15){
           animation_step=11;
           animation_frame=0;
           answerCorrect=false;
         }
     }else if(animation_step==19 || animation_step==20){
         if(answer.length!==118){
           answer=[];
           for(let a=0;a<118;a++){
             answer.push("");
           }
         }
         image(electronImgs[0],150,350)
         image(electronImgs[1],125,350)
         if(animation_step==19){
         fill(0,0,0,150)
         textSize(11)
         text("Drag into boxes",75,345)
         text("Tap boxes to remove",162,370)
         textSize(13)
         text("Put" +" ".repeat(6)+" before",275,375)
         image(electronImgs[1],303,360)
         image(electronImgs[0],365,360)
         }
         if(selection.length>0 && selection.length===3 && selection[0]>-1){
            image(electronImgs[selection[0]],selection[1],selection[2],6,12)
         }
  
         if(mouseIsPressed){
         if(mouseX>=145 && mouseX<=160 && mouseY>=345 && mouseY<=375 ){
           //if(selection==[]){
           //console.log("up!")
           selection=[0,mouseX,mouseY]
           //}else
         }
         else if(mouseX>=120 && mouseX<=142 && mouseY>=345 && mouseY<=375){
           selection=[1,mouseX,mouseY]
         }
         if(selection.length>0&&selection[0]>-1){
             selection[0]=selection[0]
             selection[1]=mouseX
             selection[2]=mouseY
             if(selection.length==3 && selection[0]>-1){
                 image(electronImgs[selection[0]],selection[1],selection[2],6,12)
              }
             console.log(selection)
           }else{
             if(checkInDiagramBoxes(mouseX,mouseY,yChange)!==false){
               answer[checkInDiagramBoxes(mouseX,mouseY,yChange)*2+1]=""
               answer[checkInDiagramBoxes(mouseX,mouseY,yChange)*2]=""
             }
           }
         }else
         {
           if(!selection==[]){
             //console.log("updown")
              if(checkInDiagramBoxes(selection[1],selection[2],yChange)!==false){
                //console.log("up!")
                console.log(checkInDiagramBoxes(selection[1],selection[2],yChange))
                if(answer[checkInDiagramBoxes(selection[1],selection[2],yChange)*2]!==""){
                  answer[checkInDiagramBoxes(selection[1],selection[2],yChange)*2+1]=selection[0]
                }else{
                  answer[checkInDiagramBoxes(selection[1],selection[2],yChange)*2]=selection[0]
                }
              }
             //console.log(answer[0])
             selection=[];
              }
           selection=[];
             
         }
        drawElectrons(answer)
     }
           
     if(animation_frame>=1){
       animation_frame+=1
     }
   }
   
 }
  
  //console.log(playerPos)
  //console.log(checkInBoundaries(playerPos))
  //console.log(getElement(getGridPos(3)))
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
  }
}
