var friends = [
	{
		name: 'Christina',
		email: 'christina@survey.com',
		photo: 'https://images.pexels.com/photos/374809/pexels-photo-374809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			3, 2, 2, 1, 2, 5, 1, 5, 1, 3, 1, 3, 4, 5, 2
		]
	},
	{
		name: 'Cody',
		email: 'cody@survey.com',
		photo: 'https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			2, 2, 1, 5, 4, 5, 4, 2, 3, 4, 1, 1, 3, 1, 4
		]
	},
	{
		name: 'Ioden',
		email: 'ioden@survey.com',
		photo: 'https://images.pexels.com/photos/213117/pexels-photo-213117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			2, 3, 3, 3, 4, 2, 2, 3, 4, 4, 1, 1, 5, 2, 1
		]
	},
	{
		name: 'Mykel',
		email: 'mykel@survey.com',
		photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			3, 2, 3, 2, 4, 2, 4, 3, 4, 4, 1, 1, 5, 4, 1
		]
	},
	{
		name: 'Carly',
		email: 'carly@survey.com',
		photo: 'https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			1, 3, 2, 2, 3, 5, 4, 4, 3, 1, 1, 4, 3, 2, 2
		]
	},
	{
		name: 'Thomas',
		email: 'thomas@survey.com',
		photo: 'https://images.pexels.com/photos/373899/pexels-photo-373899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			2, 3, 3, 4, 4, 5, 4, 3, 2, 3, 1, 2, 3, 2, 3
		]
	},
	{
		name: 'Oscar',
		email: 'oscar@survey.com',
		photo: 'https://images.pexels.com/photos/263593/pexels-photo-263593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			3, 2, 3, 1, 3, 5, 1, 4, 2, 1, 3, 3, 1, 4, 1
		]
	},
	{
		name: 'Pam',
		email: 'pam@survey.com',
		photo: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			2, 3, 4, 2, 2, 5, 4, 2, 5, 1, 5, 2, 2, 3, 4
		]
	},
	{
		name: 'Dan',
		email: 'dan@survey.com',
		photo: 'https://images.pexels.com/photos/1091725/pexels-photo-1091725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			5, 5, 1, 4, 4, 5, 3, 3, 5, 3, 3, 1, 1, 3, 1
		]
	},
	{
		name: 'Jarell',
		email: 'jarell@survey.com',
		photo: 'https://images.pexels.com/photos/724887/pexels-photo-724887.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			1, 3, 1, 2, 1, 3, 4, 3, 2, 2, 1, 3, 3, 3, 1
		]
	},
	{
		name: 'Jacob',
		email: 'jacob@survey.com',
		photo: 'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			3, 2, 3, 3, 1, 1, 2, 1, 2, 3, 4, 3, 2, 2, 1
		]
	},
	{
		name: 'Ryan',
		email: 'ryan@survey.com',
		photo: 'https://images.pexels.com/photos/775279/pexels-photo-775279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			4, 5, 5, 4, 1, 5, 3, 4, 4, 5, 4, 1, 2, 4, 4
		]
	},
	{
		name: 'Alyssa',
		email: 'alyssa@survey.com',
		photo: 'https://images.pexels.com/photos/324030/pexels-photo-324030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			3, 1, 4, 1, 1, 2, 5, 5, 3, 1, 3, 4, 1, 5, 1
		]
	},
	{
		name: 'Mary',
		email: 'mary@esurvey.com',
		photo: 'https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			2, 2, 1, 3, 5, 2, 5, 4, 3, 1, 5, 5, 5, 2, 2
		]
	},
	{
		name: 'Lauren',
		email: 'lauren@survey.com',
		photo: 'https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			2, 4, 5, 1, 5, 4, 3, 5, 3, 4, 4, 3, 1, 5, 5
		]
	},
	{
		name: 'Daren',
		email: 'daren@survey.com',
		photo: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			4,5,4,4,2,4,2,3,4,2,4,5,1,4,4
		]
	},
	{
		name: 'Courtney',
		email: 'courtney@survey.com',
		photo: 'https://images.pexels.com/photos/952005/pexels-photo-952005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			2,5,4,4,4,1,3,1,5,1,2,4,1,3,1
		]
	},
	{
		name: 'Anthony',
		email: 'anthony@survey.com',
		photo: 'https://images.pexels.com/photos/1109637/pexels-photo-1109637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		scores: [
			2,4,4,5,4,2,5,1,5,1,5,2,4,1,3
		]
	}
];

/*
var match = {
	name: '',
	email: '',
	photo: '',
	scores: [
		
	],
	match: false
}
*/

//	colleen
//	https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260


module.exports = friends;