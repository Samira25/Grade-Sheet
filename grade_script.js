function show(){
	document.getElementById('name').innerHTML = document.getElementById('name_of_student').value;
	document.getElementById('id').innerHTML = document.getElementById('id_of_student').value;
	document.getElementById('dept').innerHTML = document.getElementById('dept_of_student').value;

	var math = document.getElementById('math').value;
	var eng = document.getElementById('eng').value;
	var ban = document.getElementById('ban').value;
	var phy = document.getElementById('phy').value;
	var chem = document.getElementById('chem').value;
	var bio = document.getElementById('bio').value;

	document.getElementById('m').innerHTML = math;
	document.getElementById('e').innerHTML = eng;
	document.getElementById('b').innerHTML = ban;
	document.getElementById('p').innerHTML = phy;
	document.getElementById('c').innerHTML = chem;
	document.getElementById('by').innerHTML = bio;
}
function get_total(){
	var math = document.getElementById('math').value;
	var eng = document.getElementById('eng').value;
	var ban = document.getElementById('ban').value;
	var phy = document.getElementById('phy').value;
	var chem = document.getElementById('chem').value;
	var bio = document.getElementById('bio').value;
	var result = Number(math) + Number(eng) + Number(ban) + Number(phy) + Number(chem) + Number(bio);
	
	if(result < 150){
		text = "<br>" + "Sorry.. You failed";
	}else if(result > 150 && result < 300){
		text = "<br>" + "You get the passing number";
	}else if(result > 300 && result < 400){
		text = "<br>" + "Good! You get A-";
	}else if(result > 400 && result < 500){
		text = "<br>" + "Very Good!! You get A";
	}else if(result > 500){
		text = "<br>" + "Congratulations!!! You get A+";
	}

	document.getElementById('total').innerHTML = result + text;
}