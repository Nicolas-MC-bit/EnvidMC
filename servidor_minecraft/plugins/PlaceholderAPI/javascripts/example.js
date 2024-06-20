var rank = "%vault_rank%"

function checkRank(){

    switch(rank){

        case "default":
            return "&c¡Buy Now!"

        case "owner":
            return "&f㊗";    

        case "admin":
            return "&f⭕";

        case "mod":
            return "&f⬛";

        case "helper":
            return "&f⤴";

        case "builder":
            return "&f➿";    
            
        case "youtuber":
            return "&f➰";

        default:
            return "&cNone";    
    }
}

checkRank();