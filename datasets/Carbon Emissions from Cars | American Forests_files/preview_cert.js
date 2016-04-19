function displayCertificate() {
From = document.form1.cert_from.value;
To = document.form1.cert_to.value;
//Occasion = document.forms[0].occasion.value;
Occasion = document.form1.occasion.options[document.form1.occasion.selectedIndex].text;
//replace space with %20
Occasion = Occasion.replace(/\s+/g, "%20");
To = To.replace(/&/g, "and");
From = From.replace(/&/g, "and");
Occasion_other = document.form1.occasion_other.value;
Occasion_other = Occasion_other.replace(/\s+/g, "%20");
Tx_amount = getCheckedValue(document.form1.tx_amount);
if (!Tx_amount || Tx_amount == 'X') {
	Tx_amount = document.form1.tx_amount_other.value;
}
URL = "/planttrees/fulfill_preview.php?from_name=";
URL += From;
URL += "&to_name=";
URL += To;
URL += "&occasion=";
URL += Occasion;
URL += "&occasion_other=";
URL += Occasion_other;
URL += "&tx_amount=";
URL += Tx_amount;
window.open(URL,'','toolbar=no,menubar=no,location=no,width=700,height=800');
}

function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}

