const color = (id, value) =>{
    console.clear();        
    let span = document.getElementById(id+"S");
    let body = document.getElementById("body");
    let bodyColor = getComputedStyle(body).backgroundColor;    
    let filter = /\d+/g;
    let colors = bodyColor.match(filter);
    console.log(colors);   
    span.innerHTML = value;    
    colorCheck(id, value, colors);    
}
const colorCheck = (id,value,colors) =>{
    if (id=="rangeR"){
        body.style.backgroundColor = `rgb(${value}, ${parseInt(colors[1])}, ${parseInt(colors[2])})`;
    } else if (id=="rangeG"){
        body.style.backgroundColor = `rgb(${parseInt(colors[0])}, ${value}, ${parseInt(colors[2])})`;
    }else if (id=="rangeB"){
        body.style.backgroundColor = `rgb(${parseInt(colors[0])}, ${parseInt(colors[1])}, ${value})`;
    }
}

const Dice = {
    "dice" : 6,
    "roll" : 0,
    "time" : 0,
    'ycards' : [0,0],
    'rcards' : [0,0],
    diceRoll(){       
        return Math.floor(Math.random()*this.dice + 1);
    },
    "keeper":["What a\nSave!\n(t)","GOAL!","Brillant\nSAVE\n(r)","GOAL!","Easy\nsave\n(t)","Tipped\naway\n(corner)"],
    "def":["OUT\nthrow in\n >M","Pass\n >M","Switch\n >D","Slow it \n down\n >D","Long \n pass \n >F","Chip\n pass\n >W"],
    "mid":["Back pass >D","Long range (Sh)","Flick >W","Challenge (Tackle)","Through ball >F","Pass >M"],
    "win":["Pass >F","Pass >M","Play it in (Cross)","Challenge (Tackle)","Looking for options >W","Offside (t)"],
    "for":["Nice touch >F","Shot on Goal (Sh)","Pass >M","Challenge (Tackle)","Inside the area (Tackle)","Pass >W"],
    "shoot":["Saved (t)","Wide (t)","Over the bar (t)","GOAL!","On target (G)"," Woodwork (Sh)"],
    "cross":["Header! (G)","Far post header (Sh)","Taken by keeper (t)","Played short >F","Near post (Sh)","Bycicle kick (Sh)"],
    "tackle":["Wrong footed (go on)","Pressure (t)","Yellow card (FK)","Good tackle (t)","Tackle evaded! (go on)","FOUL! (FK)"],
    "pk":["What a\nSave!\n(t)","GOAL!","Brillant\nSAVE\n(r)","GOAL!","GOAL!","GOAL!"],
    "start":["First team", "First team", "First team", "Second team", "Second team", "Second team",],
}

const randomDice = (id) =>{    
    Dice.roll = Dice.diceRoll();
    if (id=="keeperL"||id=="keeperR"){
        let result = Dice.keeper[Dice.roll-1];
        document.getElementById(id).innerHTML =result;
        console.log("Goalkeeper "+result);
    }else if(id=="defL"||id=="defR"){
        let result = Dice.def[Dice.roll-1];
        document.getElementById(id).innerHTML = result;
        console.log("Defender "+result);
    }else if(id=="midL"||id=="midR"){
        let result = Dice.mid[Dice.roll-1];
        document.getElementById(id).innerHTML = result;
        console.log("Midfielder "+result);
    }else if(id=="wingL"||id=="wingR"){
        let result = Dice.win[Dice.roll-1];
        document.getElementById(id).innerHTML = result;
        console.log("Winger "+result);
    }else if(id=="forL"||id=="forR"){
        let result = Dice.for[Dice.roll-1];
        document.getElementById(id).innerHTML = result;
        console.log("Forward "+result);
    }else if(id=="tackle"){
        let result = Dice.tackle[Dice.roll-1];
        document.getElementById(id).innerHTML = result;       
        console.log("Tackle "+result);
    }else if(id=="cross"){
        let result = Dice.cross[Dice.roll-1];
        document.getElementById(id).innerHTML = result;
        console.log("Cross "+result);
    }else if(id=="shot"){
        let result = Dice.shoot[Dice.roll-1];
        document.getElementById(id).innerHTML = result;
        console.log("Shot "+result);
    }else if(id=="pk"){
        let result = Dice.pk[Dice.roll-1];
        document.getElementById(id).innerHTML = result;
        console.log("Penalty "+result);
    }
    if (id=="startRoll"){
        let result = Dice.start[Dice.roll-1];
        document.getElementById(id).innerHTML = result;
    }else{
        Dice.time++;
    }
    console.log(Dice.time);
    if(Dice.time>0){
        document.getElementById("startRoll").style.display= "none";
    }
    document.getElementById("time").innerHTML = Dice.time;
    
}
const ycards = (id) =>{
    let card = document.getElementById(id);
    console.log(id);
    if (id[id.length-1]=="L"&&id=='ycardsL'){
        Dice.ycards[0]++;
        card.innerHTML = Dice.ycards[0];
    } else if (id[id.length-1]=="R"&&id=='ycardsR'){
        Dice.ycards[1]++;
        card.innerHTML = Dice.ycards[1];
    }
    if (Dice.ycards[0]%2==0&&Dice.ycards[0]!=0&&id[id.length-1]=="L"&&id=='ycardsL'){
        Dice.rcards[0]++;
        document.getElementById("rcardsL").innerHTML = Dice.rcards[0];
    }else if (Dice.ycards[1]%2==0&&Dice.ycards[1]!=0&&id[id.length-1]=="R"&&id=='ycardsR'){
        Dice.rcards[1]++;
        document.getElementById("rcardsR").innerHTML = Dice.rcards[1];
    }    
}
const visibleSlider =() =>{
    let a = document.getElementsByClassName('slider')
    a[0].classList.toggle("invis");
}