+++++++++++++++++++environment set up+++++++++++++++++++
===================consent form page====================

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

Qualtrics.SurveyEngine.addOnload(function () {
    /*Place your JavaScript here to run when the page loads*/
	var rand = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4];
	shuffle(rand)
	
	var choices_str = rand.join(",");
	Qualtrics.SurveyEngine.setEmbeddedData('choices', choices_str);
	

});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/
    var len = 40;

    var tufa = [];
    var tufa_win = 0.9;
    for (var i = 0; i < len * tufa_win; i++) {
        tufa.push(1);
    }
    for (var i = 0; i < len * (1 - tufa_win); i++) {
        tufa.push(0);
    }
    shuffle(tufa)

    var aima = [];
    var aima_win = 0.9;
    for (var i = 0; i < len * aima_win; i++) {
        aima.push(1);
    }
    for (var i = 0; i < len * (1 - aima_win); i++) {
        aima.push(0);
    }
    shuffle(aima)

    var reku = [];
    var reku_win = 0.9;
    for (var i = 0; i < len * reku_win; i++) {
        reku.push(1);
    }
    for (var i = 0; i < len * (1 - reku_win); i++) {
        reku.push(0);
    }
    shuffle(reku)

    var weki = [];
    var weki_win = 0.9;
    for (var i = 0; i < len * weki_win; i++) {
        weki.push(1);
    }
    for (var i = 0; i < len * (1 - weki_win); i++) {
        weki.push(0);
    }
    shuffle(weki)

    var rewards = [];

    rewards.push(tufa);
    rewards.push(aima);
    rewards.push(reku);
    rewards.push(weki);
	

    var rewards_array = [];
    for (var i = 0; i < 4; i++) {
        var tmp_str = rewards[i].join(",");
        rewards_array.push(tmp_str);
    }
    var rewards_str = rewards_array.join(",");

    Qualtrics.SurveyEngine.setEmbeddedData('rewards', rewards_str);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});





+++++++++++++++++++random show choices+++++++++++++++++++
===================Round $$ out of 40=================

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


+++++++++++++++++++reward display+++++++++++++++++++
===================Nice! You earned=================


Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
		
	
	
	/*read var from piped*/
	var rewards_emb = "${e://Field/rewards}";
	var rewards_delim = rewards_emb.split(",");
	
	var choice = "${q://QID964/ChoiceGroup/SelectedChoices}";
    var selected_idx;
    if (choice === 'Tufa') {
        selected_idx = 0;
    } else if (choice === 'Aima') {
        selected_idx = 1;
    } else if (choice === 'Reku') {
        selected_idx = 2;
    } else {
        selected_idx = 3;
    }

	
	/*index*/
	var cur_loop = parseInt("${lm://CurrentLoopNumber}");
	
	
    var global_idx = selected_idx * 40 + cur_loop - 1;
    var score = rewards_delim[global_idx];
	
	/*display rewards*/
	document.getElementById('rewards').innerHTML = score;

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});





+++++++++++++++++++infrastructure on Qualtrics+++++++++++++++++++
===================Survey Flow=================

set embedded data: rewards, choices