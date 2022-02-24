function addtotable()
{
    var PLAYER_ID=prompt("Enter player id");
    var PLAYER_NO=prompt("Enter player no");
    var PLAYER_NAME=prompt("Enter player name");
    var SPECIALISATION=prompt("Enter specialisation");
    var JOIN_DATE=prompt("Enter join date");
    var CONTRACT_EXPIRY_DATE=prompt("Enter contract expiry date");
    var ADDRESS=prompt("Enter address");
   
   
    var url="http://127.0.0.1:5700"+"/add/"+PLAYER_ID+"/"+PLAYER_NO+"/"+PLAYER_NAME+"/"+SPECIALISATION+"/"+JOIN_DATE+"/"+CONTRACT_EXPIRY_DATE+"/"+ADDRESS;
    //alert(url);
    var open=window.open(url,"_blank");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}
}


function deletefrom()
{
    var PLAYER_ID=prompt("Enter player id");
    var url="http://127.0.0.1:5700"+"/delete/"+PLAYER_ID;
    var open=window.open(url,"_blank");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}

}


function edit()
{
    var PLAYER_ID=prompt("Enter player id");
    var SPECIALISATION=prompt("Enter player specialisation");
    var url="http://127.0.0.1:5700"+"/update/"+PLAYER_ID+"/"+SPECIALISATION;
    var open=window.open(url,"_blank");
    alert("function called");
    if(open){console.log("window.open is success");}
    else if(!open){console.log("window.open failed");}
}