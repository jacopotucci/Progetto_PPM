import { getUser} from "./scripts/fetchUtils.js";

$(async () => {

    var check_tie = sessionStorage.getItem("tie");

    if(check_tie=="false"){
        var winner_id = sessionStorage.getItem("id");
        const user = await getUser(winner_id);
        document.getElementById("testo-player0").innerHTML = "Player "+user.name+" you won!";
        var operaN = sessionStorage.getItem("operaN");
        for (let i = 0; i < operaN.length; i++) {
            var entryname = document.createElement("li");
            entryname.className = "list-group-item";
            entryname.appendChild(document.createTextNode(operaN[i].user));
            listname.appendChild(entryname);
        }
    }
     
    
  });