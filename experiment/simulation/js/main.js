/* You CSS goes in here */

/*.container {
    height: 60px;
    width: 180px;
    position: relative;
}*/

.title {
    text-align: center;
    font-size: 2.5vw;
}

.message {
    text-align: center;
    background-color: yellow;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.8vw;
}

#bench {
    z-index: -10vw;
    position: absolute;
    align-self: center; 
    object-fit: cover;
    top: 21vw;
    width: 78vw;
    left: 10vw;
}

#water {
    opacity: 0.5;
    position: absolute;
    top: 17.6vw;
    height: 4vw;
    width: 4vw; 
    left: 33.2vw; 
    background-color: #add8e6;
    border-radius: 0 0 1vw 1vw;
}

#top-beaker {
    position: absolute;
    object-fit: cover;
    opacity: 0.4;
    top: 16vw;
    left: 32vw;
    height: 6vw; 
}

#salt {
    position: absolute;
    object-fit: cover; 
    top: 12vw;
    left: 32vw; 
    height: 4vw;
    opacity: 0;
}

#fecl3-spoon {
    position: absolute;
    object-fit: cover;
    left:42vw;
    top: 18vw; 
    height: 3vw;
    opacity: 0;
}

#pipette {
    z-index: 1vw;
    position: absolute;
    object-fit: cover;
    top: 11vw;
    left: 48vw; 
    height: 13vw;
    opacity: 0;
}

#water-flask {
    height: 0px;
    width: 3vw;
    opacity: 0;
    border-bottom: 2.9vw solid red;
    border-left: 0.75vw solid transparent;
    border-right: 0.8vw solid transparent;
    border-radius: 0% 0% 30% 30%;
    position: absolute;
    left: 67.5vw;
    top: 14.8vw;
}

#bead {
    opacity: 0;
    position: absolute;
    width: 1.18vw;
    height: 0.4vw;
    border-radius: 1vw;
    object-fit: cover;
    left: 68.4vw;
    top: 12vw;
    background-color: black;
    transform-origin: 50% 50%;
}

#conicalflask {
    position: absolute;
    object-fit: cover;
    left: 67vw; 
    top: 12vw; 
    height: 6vw; 
    opacity: 0;
}

#final-drop {
    opacity: 0;
    position: absolute;
    width: 0.4vw;
    height: 0.5vw;
    border-radius: 50% 50% 50% 50%;
    object-fit: cover;
    left: 68.8vw;
    top: 14.6vw;
    background-color: #FF8C00;
    transform-origin: 50% 50%;
}

#flask {
    z-index: 1vw; 
    position: absolute;
    object-fit: cover;
    opacity: 0.4;
    height: 6vw; 
    top: 26.6vw; 
    left: 36vw ;
    opacity: 0;
}

#water-main-beaker {
    z-index: 1vw;
    background-color: #add8e6; 
    opacity: 0; 
    position: absolute; 
    height: 4vw; 
    width: 4vw; 
    top:28.2vw; 
    left: 37.2vw; 
    border-radius: 0 0 1vw 1vw;
}
#knob-heat {
    z-index: 2vw;
    background-color: black;
    opacity:1; 
    position:absolute;
    top: 23.2vw;
    left: 79.4vw;
    width: 1.8vw;
    height: 1.8vw;
    border-radius: 50% 50%;
}

#knob-stir {
    z-index: 2vw; 
    background-color: black; 
    opacity:1; 
    position:absolute; 
    top: 23.2vw; 
    left: 64.8vw; 
    width: 1.8vw; 
    height: 1.8vw; 
    border-radius: 50% 50%;
}

#rod {
    opacity: 0;
    position: absolute;
    width: 0.2vw;
    height: 6vw;
    border-radius: 0.1vw;
    transform-origin: 50%  50%;
    top: 26vw;
    left: 39vw;
    transform: rotate(20);
    background-color: silver;
}
.reset-btn {
    position: absolute; 
    top: 52vw; 
    height: 2.2vw; 
    width: auto; 
    font-size: 1.2vw;
}

.bottom-space {
    background-color: white; 
    position: absolute; 
    height: 1vw; 
    top: 58vw; 
    width: 90vw;
}



