var rank = "%marriagemaster_ismarried%"

function checkRank(){
	if(rank === "false"){
		return "&4✘";
	}else{
		return "&a✔";
	}
}

checkRank();