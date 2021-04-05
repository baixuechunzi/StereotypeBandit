+++++++++++++++++++environment set up+++++++++++++++++++
===================consent form page====================


Qualtrics.SurveyEngine.addOnload(function () {
    /*Place your JavaScript here to run when the page loads*/
	
	
	/* access ids*/
	var cur_id = parseInt("${e://Field/quotas}")+2;

    /* access choices */
    var choices;
    var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRUM0i4lV2ZTPi3jVU9Igjg5QQMt4zsgANhtQFivc9Gv9fTy35G1vTBC1aE7X3oiKQIQHPLJ7GGcRdn/pub?gid=0&single=true&range=B"+cur_id+":AO"+cur_id+"&output=csv";
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            // document.getElementById("display").innerHTML = xmlhttp.responseText;
            choices = xmlhttp.responseText;

            Qualtrics.SurveyEngine.setEmbeddedData('choices', choices);
            //alert(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
	
	
	 /* access rewards */
    var rewards;
    var url2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRUM0i4lV2ZTPi3jVU9Igjg5QQMt4zsgANhtQFivc9Gv9fTy35G1vTBC1aE7X3oiKQIQHPLJ7GGcRdn/pub?gid=0&single=true&range=AP"+cur_id+":CC"+cur_id+"&output=csv";
    xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function () {
        if (xmlhttp2.readyState == 4) {
            // document.getElementById("display").innerHTML = xmlhttp.responseText;
            rewards = xmlhttp2.responseText;

            Qualtrics.SurveyEngine.setEmbeddedData('rewards', rewards);
            //alert(xmlhttp.responseText);
        }
    };
    xmlhttp2.open("GET", url2, true);
    xmlhttp2.send(null);

});


Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/


});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});




+++++++++++++++++++reward and choice yoke+++++++++++++++++++
===================Round $$ out of 40 page====================

Qualtrics.SurveyEngine.addOnload(function() {
	
	/*read var from piped*/
	var choices = "${e://Field/choices}";
	var choices_delim = choices.split(",");
	
	
	/*index*/
	var cur_loop = parseInt("${lm://CurrentLoopNumber}");
	var global_index = cur_loop - 1
	var choices_value = choices_delim[global_index];
	
	
	/* set default choice from yoked PPs*/
	this.setChoiceValue(choices_value,true);
	
	/* disable edit, read only*/
	jQuery("#"+this.questionId+" input[type=radio]:not(:checked)").prop("disabled", true);
	
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});




+++++++++++++++++++display choice and reward+++++++++++++++++++
===================You earned $$ page====================

Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
		
	/*read var from piped*/
	var rewards = "${e://Field/rewards}";
	var rewards_delim = rewards.split(",");
	
	
	/*index*/
	var cur_loop = parseInt("${lm://CurrentLoopNumber}");
	var global_index = cur_loop - 1
	var score = rewards_delim[global_index];
	
	
	/*display rewards*/
	document.getElementById('rewards').innerHTML = score;
	

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});





+++++++++++++++++++infrastructure on Qualtrics+++++++++++++++++++
===================Survey Flow=================

set embedded data: rewards, choices, quotas = ${qo://QO_T5NhPpsJrUbhW8l/QuotaCount}