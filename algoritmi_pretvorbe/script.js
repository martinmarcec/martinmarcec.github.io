var num = document.getElementsByClassName('broj');
var base = document.getElementsByClassName('baza');

function horner(){
    
    var check=false;
    var broj = num[0].value;
    var baza = base[0].value;
    var temp;
    var rjesenje;

    for(var i=0;i<broj.length-1;i++){
        if(parseInt(broj[i])>=baza || conhex(broj[i])>=baza){
            alert("Taj broj se ne koristi u tom brojevnom sustavu");
            check=false;
        }
        else{
            check=true;
        }
    }


    if(check==true){
        for(var i=0;i<broj.length-1;i++){
            if(i==0){                   
                if(parseInt(broj[i+1])<10){
                    temp = baza*parseInt(broj[i])+parseInt(broj[i+1]); 
                }
                else{
                    temp = baza*conhex(broj[i])+conhex(broj[i+1]);
                }  
            }
            else{
                if(parseInt(broj[i+1])<10){
                    temp = baza*temp+parseInt(broj[i+1]);
                }
                else{
                    temp = baza*temp+conhex(broj[i+1]);
                }                  
            }
        }
        rjesenje=temp;

        document.getElementById('rjesenje').innerHTML = rjesenje;
        document.getElementById('rjesenje').style.color = "black";
    }
    else{
        document.getElementById('rjesenje').innerHTML = "Rjesenje";
        document.getElementById('rjesenje').style.color = "#777777";
    }

}



function euklid(){

    document.getElementById('rjesenje2').innerHTML = "";
    
    var broj = num[1].value;
    var baza = base[1].value;
    var temp=1;
    var rjesenje;
    var string = "";
    var brojac=-1;
    var hex = ["A", "B", "C", "D", "E", "F"];
    var check = false;


    for(var i=0;i<broj.length-1;i++){
        if(conhex(broj[i])>=baza){
            alert("Taj broj se ne koristi u tom brojevnom sustavu");
        }
        else{
            check=true;
        }
    }

    if(check==true){
        for(var i=0;i<100;i++){
            if(temp==0){
                break;
            }
            if(i==0){
                temp=Math.floor(broj/baza);
                rjesenje = broj % baza;
            }
            else if(i==1){
                temp=Math.floor(broj/baza);
                rjesenje = temp % baza;
            }
            else{
                temp=Math.floor(temp/baza);
                rjesenje = temp % baza;
            }
            if(rjesenje>9){
                for(var j=10;j<=16;j++){
                    brojac++;
                    if(rjesenje==j){
                        rjesenje = hex[brojac];
                    }
                }
                brojac=-1;
            }
        
            string += rjesenje;
        }
        check=false;
        
        string = string.slice(0,string.length-1);
        string = string.split("");
        string = string.reverse();
        string = string.join("");


        document.getElementById('rjesenje2').innerHTML = string; 
        document.getElementById('rjesenje2').style.color = "black";
    }
    else{
        document.getElementById('rjesenje2').innerHTML = "Rjesenje";
        document.getElementById('rjesenje2').style.color = "#777777";
    }

}



function conhex(a){
    if(a=='A'){
        return 10;
    }
    if(a=='B'){
        return 11;
    }
    if(a=='C'){
        return 12;
    }
    if(a=='D'){
        return 13;
    }
    if(a=='E'){
        return 14;
    }
    if(a=='F'){
        return 15;
    }
}