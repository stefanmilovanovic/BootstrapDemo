function ProizvodiSlide()
{
	proizvodi = new Array(4);
	cene = new Array(4);
	
	proizvodi[0] = "<b>TURBO-GENERATORI</b> - Maksimalna efikasnost i sigurnost";
	cene[0] = "Vec od 99.999RSD";
	
	proizvodi[1] = "<b>CTR-MASINE</b> - Osetite preciznost izrade kao nikada do sad";
	cene[1] = "Vec od 149.999RSD";
	
	proizvodi[2] = "<b>TRANSMISERI</b> - Mehanicki prenos energije za sve vase potrebe";
	cene[2] = "Vec od 109.999RSD";
	
	proizvodi[3] = "<b>CUSTOM MASINE</b> - Izrada masina po vasoj meri i potrebi";
	cene[3] = "Vec od 239.999RSD";
	
	index = Math.floor(Math.random()*proizvodi.length);
	
	document.getElementById("proizvodponuda").innerHTML = proizvodi[index];
	document.getElementById("cenaponuda").innerHTML = cene[index];
}