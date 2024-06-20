var rank = "%worldguard_region_name%"

function checkRank(){
     
        if(rank === "redstone"){
            return "&dShop Redstone";

        }else if(rank === "builder"){
            return "&dShop Builder";

        }else if(rank === "food"){
            return "&dShop Food";

        }else if(rank === "minerals"){
            return "&dShop Minerals";

        }else if(rank === "spawn"){ 
            return "&dSpawn";

        }else{
        return "&cNone";
  }
}

checkRank();