

// ==== generate random integers for SPAM protection ======
var randomNumber;
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  document.getElementById("randomInput").innerHTML = randomNumber;
  return randomNumber;
}
getRandom(100,800);

// ======== SEND MESSAGE =============

// ==== add GIF when waiting responce fron server =====
sendingProcces = document.getElementById('sending');

var errorCount;

var puhelin = document.getElementById("puhelin").value;
var puhContent = document.getElementById("puhelin");
var puhTip = document.getElementById("puh-tip");

var yritys = document.getElementById("yritys").value;
var yritysId = document.getElementById("yritys");
var yritysTip = document.getElementById("yritys-tip");

var nimiId = document.getElementById("nimi");
var nimiTip = document.getElementById("nimi-tip");

var sahkoposti = document.getElementById("sahkoposti").value;
var sahkopostiId = document.getElementById("sahkoposti");
var sahkopostiTip = document.getElementById("sahkoposti-tip");

var budjetId = document.getElementById("budjet");
var serviceId = document.getElementById("service");
var textareaId = document.getElementById("textarea");

var randomCheck = document.getElementById("randomCheck").value;
var randomCheckId = document.getElementById("randomCheck");

function send(){
	// reset errorCount
	errorCount = 0;

	 puhelin = document.getElementById("puhelin").value;
	 puhContent = document.getElementById("puhelin");
	 puhTip = document.getElementById("puh-tip");
	
	 yritys = document.getElementById("yritys").value;
	 yritysId = document.getElementById("yritys");
	 yritysTip = document.getElementById("yritys-tip");
	
	 nimi = document.getElementById("nimi").value;
	 nimiId = document.getElementById("nimi");
	 nimiTip = document.getElementById("nimi-tip");
	
	 sahkoposti = document.getElementById("sahkoposti").value;
	 sahkopostiId = document.getElementById("sahkoposti");
	 sahkopostiTip = document.getElementById("sahkoposti-tip");
	
	 service = document.getElementById("service").value;
	 serviceId = document.getElementById("service");
	 budjet = document.getElementById("budjet").value;
	 budjetId = document.getElementById("budjet");

	 textarea = document.getElementById("textarea").value;
	 textareaId = document.getElementById("textarea");

	 randomCheck = document.getElementById("randomCheck").value;
	 randomCheckId = document.getElementById("randomCheck");

	// check phone input
	checkPhoneInput(puhelin, puhContent, puhTip); 
	// check letters in input "yritys"
	checkLetterNumber(yritys, yritysId, yritysTip);
	// check letters in input "nimi"
	checkLetterNumber(nimi, nimiId, nimiTip);
	// check E-MAIL
	ValidateEmail(sahkoposti, sahkopostiId, sahkopostiTip);
	// checkTextarea
	checkTextarea(textarea,textareaId);

	// ==== check Random Number & User Input number ===
	if (randomNumber != randomCheck) { 
		sendButton = document.getElementById('sendButton');
		// sendButton.style.backgroundColor = "yellow";
		randomCheckId.style.color = "red";
		randomCheckId.style.border = "2px solid red";
		errorCount += 1;
	}
	// === check NO ERRORS in form ===
	if (errorCount == 0) {
		sendButton.style.backgroundColor = "#75223C";
		sendingProcces.style.height = '100%';
		sendingProcces.style.visibility = 'visible';
		randomCheckId.style.color = "black";
		randomCheckId.style.border = "0";
		textareaId.style.border = "0";

		// making report Message for sending email
		
		document.getElementById("report-yritys").innerHTML = yritys;
		document.getElementById("report-nimi").innerHTML = nimi;
		document.getElementById("report-sahkoposti").innerHTML = sahkoposti;
		document.getElementById("report-puhelin").innerHTML = puhelin;
		document.getElementById("report-palvelut").innerHTML = service;
		document.getElementById("report-budjetti").innerHTML = budjet;
		document.getElementById("report-viesti").innerHTML = textarea;

		// === after 1.5s turnOnModal. Imitation sending procces ===
		setTimeout(turnOnModal, 1000);	
	}
}
// =========== check input: NIMI, YRITYS =============
function checkLetterNumber(x,y,z) {
	// checkLetterNumber(nimi, nimiId, nimiTip)
	var letterNumber = /^[0-9a-zA-Z\s]+$/;
	if(x.match(letterNumber)) {
		// return true;
	} else {
		y.style.color = "red";
		z.style.color = "red";
		z.innerHTML = "Väärä. Vain numerot, kirjaimet ja välilyönti.";
		errorCount += 1;
	}
	// check empty
	if(x == '' || x == 0) {
		z.innerHTML = "Väärä. Tyhjä rivi.";
		z.style.color = "red";
		errorCount += 1;
	} 
	// ======== check minimum lenght og input ===========
	if (x.length > 0 && x.length < 3 ) {
		y.style.color = "red";
   	z.style.color = "red";
   	z.innerHTML = "Väärä. Liian lyhyt rivi.";
   	errorCount += 1;
	}	
}
// check EMAIL 
function ValidateEmail(posti, sahko, sahkoTip) {
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(!posti.match(mailformat)) {
		sahko.style.color = "red";
		sahkoTip.style.color ="red";
		sahkoTip.innerHTML = "Väärä osoite.";
		errorCount += 1;
	} else if (posti === '') {
		sahko.style.color = "red";
		sahkoTip.style.color ="red";
		sahkoTip.innerHTML = "Väärä. Tyhjä rivi.";	
		errorCount += 1;
	}
	 else if (posti.length < 6) {
		sahko.style.color = "red";
		sahkoTip.style.color ="red";
		sahkoTip.innerHTML = "Väärä. Liian lyhyt osoite.";	
		errorCount += 1;
	}
}
// ====== check input: PHONE ==========
function checkPhoneInput(ph, pc, pt) {
	var lengthPhoneInput = (ph.match(/[0-9]/g) || []).length;
	if (lengthPhoneInput > 9 && lengthPhoneInput < 14 ) {
		return true;
	} else {
		pc.style.color = "red";
   	pt.style.color = "red";
   	pt.innerHTML = "Väärä numero. Tarkista.";
   	errorCount += 1;
	}
   if(!ph.match(/^[0-9]+$/)) {
   	pc.style.color = "red";
   	pt.style.color = "red";
   	pt.innerHTML = "Väärä oli kirjoittanut. Vain NUMEROT.";
   	errorCount += 1;
   } 
   if (ph == '') {
   	pc.style.color = "red";
   	pt.style.color = "red";
   	pt.innerHTML = "Väärä. Tyhjä rivi.";
   	errorCount += 1;
   }
}
// =========== check TEXTAREA =============
function checkTextarea(x,y) {
	// ======== check minimum lenght of input ===========
	if (x.length < 3 ) {
		y.style.border = "2px solid red";
   	errorCount += 1;
	}	
}
// ========= change color in SELECT =============
function onChange1() {
  document.getElementById('service').style.color = "green"; 
}
function selectFocus1() {
	 document.getElementById('service').style.color = "black";	 
}
function onChange2() {
  document.getElementById('budjet').style.color = "green";
}
function onBlur(elem) {
	 document.getElementById(elem).style.color = "green";	 
}
function onclickSelect(elem) {
	braunColor = "rgb(115, 99, 103)";
	s = document.getElementById(elem);
	sColor = document.getElementById(elem).style.color;
	
	if (sColor == braunColor) {
		s.style.color = "green";
	}else {
	s.style.color = braunColor;
	}
}
// ============== Modal ===================
var modal = document.getElementById('modal');
var closeModal = document.getElementsByClassName("closeModal")[0];
function turnOnModal() {
   modal.style.display = "block";
}
// ======= close Modal by clickin on X ========
closeModal.onclick = function() {
   modal.style.display = "none";
   sending.style.height = '0';
	sending.style.visibility = 'hidden';
	// === reset all INPUTS ===
	var inputValueArray = [yritysId, nimiId, sahkopostiId, puhContent, serviceId, budjetId, textareaId, randomCheckId];
	inputValueArray.forEach(resetInput);
	function resetInput(value, index) {
		value.value = "";
	}
	// generate new random number
	getRandom(100,800);
}
// ==== change placeholder after clicked on input ====
puhContent.onclick = puhFocus;
function puhFocus() {
  	puhContent.style.color = "black";
  	puhTip.innerHTML = 'Puhelin';
  	puhTip.style.color = 'black';
  	document.getElementById("puhelin").value = '';
}
yritysId.onclick = yritysFocus;
function yritysFocus() {
  	yritysId.style.color = "black";
  	yritysTip.innerHTML = 'Yritys';
  	yritysTip.style.color = 'black';
  	document.getElementById("yritys").value = '';
}
nimiId.onclick = nimiFocus;
function nimiFocus() {
  	nimiId.style.color = "black";
  	nimiTip.innerHTML = 'Nimi';
  	nimiTip.style.color = 'black';
  	document.getElementById("nimi").value = '';
}
sahkopostiId.onclick = sahkopostiFocus;
function sahkopostiFocus() {
  	sahkopostiId.style.color = "black";
  	document.getElementById("sahkoposti").value = '';
  	sahkopostiTip.innerHTML = 'Sähköposti';
  	sahkopostiTip.style.color = 'black';
}
randomCheckId.onclick = randomCheckFocus;
function randomCheckFocus() {
  	randomCheckId.style.color = "black";
  	randomCheckId.style.border = "0";
  	document.getElementById("randomCheck").value = '';
}
textareaId.onclick = textareaFocus;
function textareaFocus() {
  	textareaId.style.border = "0";
}
// ===== change Text Color of inputs when in BLUR ====
function onBlur(x) {
	switch(x) {
  		case 1:
  		 	document.getElementById("yritys").style.color = "green";
  		  	break;
  		case 2:
  		 	document.getElementById("nimi").style.color = "green";
  		 	break;
  		case 3:
  		 	document.getElementById("sahkoposti").style.color = "green";
  		 	break;
  		case 4:
  		 	document.getElementById("puhelin").style.color = "green";
  		 	break;
  		default:
    }
}
// === when in FOCUS (was problem with TAB), change color and Text Content ====
function onFocus(x) {
	switch(x) {
  		case 1:
  		 	document.getElementById("yritys-tip").style.color = "black";
  		 	document.getElementById("yritys-tip").innerHTML = "Yritys";
  		 	document.getElementById("yritys").style.color = "black";
  		  	break;
  		case 2:
  		 	document.getElementById("nimi-tip").style.color = "black";
  		 	document.getElementById("nimi-tip").innerHTML = "Nimi";
  		 	document.getElementById("nimi").style.color = "black";
  		 	break;
  		 case 3:
  		 	document.getElementById("sahkoposti-tip").style.color = "black";
  		 	document.getElementById("sahkoposti-tip").innerHTML = "Sähköposti";
  		 	document.getElementById("sahkoposti").style.color = "black";
  		 	break;
  		case 4:
  		 	document.getElementById("puh-tip").style.color = "black";
  		 	document.getElementById("puh-tip").innerHTML = "Puhelin";
  		 	document.getElementById("puhelin").style.color = "black";
  		 	break;
  		default:
    }
}

// ==== show DIV "business" if chosen by radiobutton" ======
// Call listener function at run timef
// Attach listener function on state changes
var widthForRadio;

function checkRadioButton(){
	var radio=document.getElementsByName("businesss");
	if(radio[0].checked) {
 		document.getElementById("business").style.height = "0";
	} else {
		if (widthForRadio == 'wide'){
			document.getElementById("business").style.height = "86px";
		}else {
			document.getElementById("business").style.height = "180px";
		}
	}
}
checkRadioButton();
function widthChange(w) {
  if (w.matches) { // If media query matches
    widthForRadio = 'narrow';
  } else {
    widthForRadio = 'wide';
  }
  checkRadioButton();
}
var w = window.matchMedia("(max-width: 700px)")
widthChange(w) // Call listener function at run time
w.addListener(widthChange) // Attach listener function on state changes

// navigatio show mobail menu
function showMobailMenu() {
	document.getElementById('nav').style.left = '0';
	navLiActive.style.backgroundColor = "transparent";
}

