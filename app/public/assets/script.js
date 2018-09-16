$(document).ready(function() {

	var questions = [
			'I am very sociable and prefer large groups of people',
			'I enjoy outdoor activities over staying inside',
			'I am a neat freak',
			'I tend to keep my opinions to myself',
			'Social gatherings stress me out',
			'I prefer dogs over cats',
			'I always follow the rules',
			'I feel obligated to tell people when I think they are wrong',
			'If I found $100 I would try my best to return it to its rightful owner',
			'My friends are closer to me than my family',
			'Religion is very important to me',
			'I prefer pop music over rock and roll',
			'Video games are an important part of my life',
			'I never back down from confrontation',
			'I love to talk about sports'
	];
	
	var options = [
		'Strongly Disagree',
		'Somewhat Disagree',
		'Do Not Agree or Disagree',
		'Somewhat Agree',
		'Strongly Agree'
	];
		
	function populateSurveyForm() {
		
		questions.forEach(function(question, i) {
			var oddNumber = false;
			if(questions.length % 2 != 0) {
				oddNumber = true;
			}
			var div = $('<div>');
			if(oddNumber && i == questions.length - 1) {
				div.addClass('question-container last-question');
			} else {
				div.addClass('question-container');
			}
			var label = $('<label>');
			label.attr({
				'for': 'q' + (i+1)
			});
// 			label.text(i+1 + ': ' + question);
			label.text(question);
			var select = $('<select>');
			select.attr({
				'id': 'q' + (i+1)
			});
			options.forEach(function(optionText, j) {
				var option = $('<option>');
				option.val(parseInt(j)+1);
				option.text(optionText);
				if(j == 2) {
					option.attr('selected', 'selected')
				}
				select.append(option);
			});
			div.append(label, select);
			$('#survey').append(div);
		});
		
		var submit = $('<button>');
		submit.attr({
			'type': 'submit',
			'id': 'submit'
		});
		submit.text('Find a Friend!');
		
		$('#survey').append(submit);
		
	}
	
/*
	$('.modal').modal({
		dismissible: false,
		opacity: 0.8,
		inDuration: 250,
		outDuration: 200,
		startingTop: '5%',
		endingTop: '10%'
	});
*/
	
	$(document).on('click', '#submit', function(event) {
		event.preventDefault();
		
		var name = $('#name').val().trim();
		var email = $('#email').val().trim().toLowerCase();
		var photo = $('#photo').val().trim();
		var errors = [];
		
		if(name == '') {
			errors.push('Name cannot be blank');
		}
		if(email == '') {
			errors.push('Email cannot be blank');
		} else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
			errors.push('Email address is not a valid format');
		}
		if(photo == '') {
			errors.push('Must include a link to a photo');
		} else if(!/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(photo)) {
			errors.push('Photo link must be a valid URL format');
		}
		
		if(errors.length == 0) {
			var friend = {
				name: name,
				email: email,
				photo: photo,
				scores: []
			}
			questions.forEach(function(question, k) {
				friend.scores.push(parseInt($('#q' + (k+1)).val()));
			});
	// 			console.log(friend);
			alert(friend.scores);
			
			var currentURL = window.location.origin;
			
			$.post(currentURL + '/api/friends', friend, function(data) {
				alert('Your match is ' + data.name + '!\n' + data.percentage + ' %');
				$('#friend_name').text(data.name + ' (' + data.percentage + ' %)');
				$('#friend_photo').attr('src', data.photo);
				$('#h1').text('MATCH FOUND');
// 				$('#modal').modal('open');
// 				$('#modal').modal('toggle');
/*
				var url = window.location.origin
				$.ajax()
*/
				errors = [];
				$('#errors-display').empty();
				$('.survey').addClass('js-hidden');
				$('#match-display').removeClass('js-hidden');
			});
	// 			return false;
		} else {
			var err = $('#errors-display');
			var ul = $('<ul>');
			err.empty();
			err.append('Please fix the following errors:');
			errors.forEach(function(error) {
				var li = $('<li>');
				li.text(error);
				ul.append(li);
			});
			err.append(ul);
// 			document.body.scrollTop = document.documentElement.scrollTop = 0;
/* 			$('body').scrollTop(0); */
// 			browser.executeScript("window.scrollTo(0, 0);");
/*
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
*/
			console.log(errors);
/*
			$("html, body").animate({
			 	scrollTop: 0
			}, 600);
*/
		}
	});
	
	populateSurveyForm();
		
});