


function load(time){
    var crta = document.getElementById('crta');
    for (var i=0; i<101; i++) {
    (function (i) {
        setTimeout(function () {
            crta.style = "width:" + i + "%; background-color: tomato; margin: 0;";
        }, time*i);
    })(i);
    };
}




function birthday(){
    
    load(185);

    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("G4", "4n", 1);//
    synth.triggerAttackRelease("G4", "4n", 1.6);//
    synth.triggerAttackRelease("A4", "4n", 2.3);//
    synth.triggerAttackRelease("G4", "4n", 3);//
    synth.triggerAttackRelease("C5", "4n", 3.5);//
    synth.triggerAttackRelease("B4", "4n", 4);//

    synth.triggerAttackRelease("G4", "4n", 6);//
    synth.triggerAttackRelease("G4", "4n", 6.6);//
    synth.triggerAttackRelease("A4", "4n", 7.3);//
    synth.triggerAttackRelease("G4", "4n", 8);//
    synth.triggerAttackRelease("D5", "4n", 8.5);//
    synth.triggerAttackRelease("C5", "4n", 9);//

    synth.triggerAttackRelease("G4", "4n", 11);//
    synth.triggerAttackRelease("G4", "4n", 11.5);//
    synth.triggerAttackRelease("G5", "4n", 12);//
    synth.triggerAttackRelease("E5", "4n", 12.5);//
    synth.triggerAttackRelease("C5", "4n", 13);//
    synth.triggerAttackRelease("C5", "4n", 13.5);//
    synth.triggerAttackRelease("B4", "4n", 14);//
    synth.triggerAttackRelease("A4", "4n", 14.5);//
    synth.triggerAttackRelease("F5", "4n", 15);//15
    synth.triggerAttackRelease("F5", "4n", 15.6);//15.6
    synth.triggerAttackRelease("E5", "4n", 16.2);//16.2
    synth.triggerAttackRelease("C5", "4n", 17);//17
    synth.triggerAttackRelease("D5", "4n", 17.8);//17.8
    synth.triggerAttackRelease("C5", "4n", 18.5);//18.5

}

function megalovania(){

    load(105);

    var synth = new Tone.Synth().toMaster();
    
    synth.triggerAttackRelease("D4", "4n", 1);//0,2
    synth.triggerAttackRelease("D4", "4n", 1.15);//0,2
    synth.triggerAttackRelease("D5", "4n", 1.3);//0,2
    synth.triggerAttackRelease("A4", "4n", 1.6);//0,2
    synth.triggerAttackRelease("A4", "4n", 1.8);//0,4
    synth.triggerAttackRelease("G4", "4n", 2);//0,4
    synth.triggerAttackRelease("F4", "4n", 2.2);//0,4
    synth.triggerAttackRelease("F4", "4n", 2.35);//0,4
    synth.triggerAttackRelease("D4", "4n", 2.5);//0,2
    synth.triggerAttackRelease("F4", "4n", 2.65);//0,2
    synth.triggerAttackRelease("G4", "4n", 2.8);//0,2

    synth.triggerAttackRelease("C4", "4n", 3.3);
    synth.triggerAttackRelease("C4", "4n", 3.45);
    synth.triggerAttackRelease("D5", "4n", 3.6);
    synth.triggerAttackRelease("A4", "4n", 3.9);
    synth.triggerAttackRelease("A4", "4n", 4.1);
    synth.triggerAttackRelease("G4", "4n", 4.3);
    synth.triggerAttackRelease("F4", "4n", 4.5);
    synth.triggerAttackRelease("F4", "4n", 4.65);
    synth.triggerAttackRelease("D4", "4n", 4.8);
    synth.triggerAttackRelease("F4", "4n", 4.95);
    synth.triggerAttackRelease("G4", "4n", 5.1);

    synth.triggerAttackRelease("B3", "4n", 5.6);
    synth.triggerAttackRelease("B3", "4n", 5.75);
    synth.triggerAttackRelease("D5", "4n", 5.9);
    synth.triggerAttackRelease("A4", "4n", 6.2);
    synth.triggerAttackRelease("A4", "4n", 6.4);
    synth.triggerAttackRelease("G4", "4n", 6.6);
    synth.triggerAttackRelease("F4", "4n", 6.8);
    synth.triggerAttackRelease("F4", "4n", 6.95);
    synth.triggerAttackRelease("D4", "4n", 7.1);
    synth.triggerAttackRelease("F4", "4n", 7.25);
    synth.triggerAttackRelease("G4", "4n", 7.4);
    
    synth.triggerAttackRelease("B3", "4n", 7.9);
    synth.triggerAttackRelease("B3", "4n", 8.05);
    synth.triggerAttackRelease("D5", "4n", 8.2);
    synth.triggerAttackRelease("A4", "4n", 8.5);
    synth.triggerAttackRelease("A4", "4n", 8.7);
    synth.triggerAttackRelease("G4", "4n", 8.9);
    synth.triggerAttackRelease("F4", "4n", 9.1);
    synth.triggerAttackRelease("F4", "4n", 9.25);
    synth.triggerAttackRelease("D4", "4n", 9.4);
    synth.triggerAttackRelease("F4", "4n", 9.55);
    synth.triggerAttackRelease("G4", "4n", 9.7);


}
