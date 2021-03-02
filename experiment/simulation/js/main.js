//Your JavaScript goes in here
var message_flag=0;
var messages = ["  Click on the beaker to Pour Water.  ", 
    "  Click on the FeCl3 powder to take a spoon of salt.  ", 
    "  Click on the spoon to add salt to water.  ", 
    "  Click on the Glass Rod to stir the FeCl3 solution.  ", 
    "  Click on the Conical flask containing Water to place it on the Magnetic stirrer/heater.  ", 
    "  Click on the Magnetic bead to drop it into the Flask.  ", 
    "  Click on the Heater knob to switch on the Heater.  ", 
    "  Click on the Stirrer knob to switch on the Magnetic Stirrer.  ", 
    "  Wait till Water starts boiling...  ", 
    "  Click on the Heater knob to switch off the Heater.  ", 
    "  Click on the Pipette to take 10ml of conc. FeCl3 solution.  ", 
    "  Click on the Pipette again to take 10ml of conc. FeCl3 solution.  ", 
    "  Click on the Pipette to add the FeCl3 to the hot water in conical flask.  ",
    "  Click on the Pipette again to add the FeCl3 drop by drop into the conical flask.  ", 
    "  Fe(OH)3 colloid is obtained...  "]
var message = messages[0];
document.getElementById("message").innerHTML = message;
var knob_heater_flag = 0;
var pipette_flag = 0;

function pour( content ){
    var image = document.getElementById("top-beaker");
    image.style.pointerEvents = 'none';
    var a1 = anime.timeline({
        targets:"#top-beaker",
        duration: 800,
        easing: 'linear'
    });
    a1.add({
        translateX: '8vw',
        translateY: '5vw'
    }).add({
        delay: '800',
        rotateZ: '-90'
    }).add({
        update: function(anim) {
            message = messages[1];
            document.getElementById("message").innerHTML = message;
        }
    }).add({
        delay: '500',
        opacity: '0',
    });

    var a2 = anime.timeline({
        targets:"#water",
        duration: 800,
        easing: 'linear'
    });
    a2.add({
        translateX: '8vw',
        translateY: '5vw'
    }).add({
        delay: '800',
        rotateZ: '-90',
        opacity: '0',
    });

    var a3 = anime.timeline({
        targets:"#water-main-beaker",
        duration: 800,
        easing: 'linear',
    }).add({
        delay: '1800',
        opacity: '0.4',
    });
    
    var a4 = anime.timeline({
        targets:"#salt",
        duration: 500,
    }).add({
        delay: '2500',
        opacity: '1',
    });

    var a5 = anime.timeline({
        targets:"#flask",
        duration: 400,
        easing: 'linear',
    }).add({
        opacity: 0.4,
    });
}

function movesalt() {
    var a1 = anime.timeline({
        targets:"#fecl3-spoon",
        duration: 1000,
    }).add({
        opacity: '1',
    }).add({
        update: function(anim) {
            message = messages[2];
            document.getElementById("message").innerHTML = message;
        }
    });
}

function addsalt(){
    var a1 = anime.timeline({
        targets:"#fecl3-spoon",
        duration: 500,
        easing: 'linear'
    });
    a1.add({
        translateX: '-2.5vw',
        translateY: '5vw',
    }).add({
        rotateZ: '-20',
    }).add({
        opacity: '0'
    });

    var a2 = anime.timeline({
        targets:"#water-main-beaker",
        duration: 0, 
        easing: 'linear',
    }).add({
        backgroundColor: '#add8e6',
        opacity: 0.4,
    });

    var a3 = anime.timeline({
        targets:"#water-main-beaker",
        duration: 1000, 
        easing: 'linear',
    }).add({
        delay: '1000',
        backgroundColor: '#FF7F00',
    }).add({
        update: function(anim) {
            message = messages[3];
            document.getElementById("message").innerHTML = message;
        }
    });

    var a4 = anime.timeline({
        duration: 1000, 
        targets:"#rod",
        duration: 0, 
    }).add({
        delay: '500',
        opacity: 1,
    });
}

function stir() {
    var a1 = anime.timeline({
        targets: '#rod',
        duration: 1000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: 4
    }).add({
        opacity: '0.6',
        rotate: [10, -10],
    });
    var t2 = anime.timeline({
        targets:"#water-main-beaker",
        duration: 4000, 
        easing: 'linear',
    }).add({
        delay: '500',
        opacity: '0.6'
    }).add({
        update: function(anim) {
            message = messages[4];
            document.getElementById("message").innerHTML = message;
        }
    }); 
    var t4 = anime.timeline({
        targets:'#salt',
        duration: 500, 
        easing: 'linear',
    }).add({
        opacity: '0'
    });
    var t4 = anime.timeline({
        targets:'#fecl3',
        duration: 3000, 
        easing: 'linear',
    }).add({
        opacity: '0'
    });
    var t5 = anime.timeline({
        targets:'#conicalflask',
        duration: 1000, 
        easing: 'linear',
    }).add({
        delay: '4000',
        opacity: '0.6'
    });
}

function dropflask(){
    var a1 = anime.timeline({
        targets:'#conicalflask',
        duration: 1000, 
        easing: 'linear',
    }).add({
        translateY: '3.6vw',
    });

    var a1 = anime.timeline({
        targets:'#water-flask',
        duration: 800, 
        easing: 'linear',
    }).add({
        translateY: '3.6vw',
    });

    var a2 = anime.timeline({
        targets:'#bead',
        duration: 1000, 
        easing: 'linear',
    }).add({
        delay: '1000',
        opacity: 1
    }).add({
        update: function(anim) {
            message = messages[5];
            document.getElementById("message").innerHTML = message;
        }
    });
}

function dropbead(){
    var a1 = anime.timeline({
        targets:'#bead',
        duration: 1200, 
        easing: 'linear',
    }).add({
        translateY: '7.6vw',
    }).add({
        update: function(anim) {
            message = messages[6];
            document.getElementById("message").innerHTML = message;
        }
    });
}

function stir_bead(){
    var a1 = anime.timeline({
        targets: "#bead", 
        duration: 1000,
        easing : 'linear',
        loop: true,
        direction: 'alternate',
    });

    a1.add({
        width : '0.4vw',
        rotateY: '10',
        translateX: '0.4vw'
    });

    var a2 = anime.timeline({
        targets: "#water-flask", 
        duration: 3000,
        easing : 'linear',
    }).add({
        update: function(anim) {
            message = messages[8];
            document.getElementById("message").innerHTML = message;
        }
    }).add({
        delay: '3000',
        update: function(anim) {
            message = messages[9];
            document.getElementById("message").innerHTML = message;
        }
    });

}


function heating() {
    knob_heater_flag += 1;
    if(knob_heater_flag == 2) {
        var a2 = anime.timeline({
            targets: "#pipette", 
            duration: 500,
            easing : 'linear',
        }).add({
            delay: '500',
            opacity: 0.9,
        }).add({
            update: function(anim) {
                message = messages[10];
                document.getElementById("message").innerHTML = message;
            }
        });
    }
    else if(knob_heater_flag != 2)
    {
        var a1 = anime.timeline({
            targets: '.message',
            duration: 1000,
            easing: 'linear'
        }).add({
            update: function(anim) {
                message = messages[7];
                document.getElementById("message").innerHTML = message;
            }
        });
    }
}

function drop_pipette_to_beaker() {

    console.log('pipette flag= ');
    console.log(pipette_flag);
    if(pipette_flag == 0)
    {
        var a1 = anime.timeline({
            targets: "#pipette", 
            duration: 1000,
            easing : 'linear',
        }).add({
            translateY: '6vw',
            translateX: '-14vw',
        }).add({
            update: function(anim) {
                message = messages[11];
                document.getElementById("message").innerHTML = message;
            }
        });

        // var a2 = anime.timeline({
        //     targets: "#water-main-beaker", 
        //     duration: 2000,
        //     easing : 'easeInOutQuad',
        // }).add({
        //     delay: '1000',
        //     opacity: 0,
        // });
        pipette_flag = 2;
    }
}

function pipette_fill() {
    console.log('pipette flag= ');
    console.log(pipette_flag);
    if (pipette_flag == 2)
    {
        console.log('taking out water');
        var a2 = anime.timeline({
            targets: "#water-main-beaker", 
            duration: 2000,
            easing : 'easeInOutQuad',
        }).add({
            delay: '1000',
            opacity: 0,
        }).add({
            update: function(anim) {
                message = messages[12];
                document.getElementById("message").innerHTML = message;
            }
        });
        pipette_flag = 3;
    }
}

function pipette_move_to_flask() {
    if(pipette_flag == 3)
    {
        var a1 = anime.timeline({
            targets: "#pipette", 
            duration: 1000,
            easing : 'linear',
        }).add({
            height: '8vw',
            translateX: '17.7vw',
            translateY: '-4vw',
            // opacity: 1
        }).add({
            update: function(anim) {
                message = messages[13];
                document.getElementById("message").innerHTML = message;
            }
        });

        var a2 = anime.timeline({
            targets: "#final-drop", 
            duration: 200,
            easing : 'linear',
        }).add({
            delay: '1000',
            opacity: 1,
        });
        pipette_flag = 4;
    }
}

function make_sol() {
    if(pipette_flag==4)
    {
        var a1 = anime.timeline({
            targets: "#final-drop", 
            duration: 800,
            easing : 'linear',
        }).add({
            // height: '8vw',
            // translateX: '17.8vw',
            translateY: '6vw',
            opacity: 0
        });

        var a2 = anime.timeline({
            targets: "#water-flask", 
            duration: 2000,
            easing : 'linear',
        }).add({
            delay: '1000',
            opacity: 0.8,
        }).add({
            update: function(anim) {
                message = messages[14];
                document.getElementById("message").innerHTML = message;
            }
        });
        pipette_flag = 5;
    }
}