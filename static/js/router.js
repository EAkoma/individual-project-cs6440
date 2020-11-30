angular.module('router.module',[]).config(function ($routeProvider) {
	$routeProvider

		// We are going to define routes,
		// controllers and templates associated
		// with these routes.
		// You can change these but make sure
		// you know what you are doing
		//

		// main route
		//
		.when('/',
		{
			controller: 'loginController',
			templateUrl: 'static/views/loginView.html'
		})

		.when('/homeView',
		{
			controller: 'homeController',
			templateUrl: 'static/views/homeView.html'
		})
		.when('/sleepView',
			{
				controller: 'sleepController',
				templateUrl: 'static/views/sleepView.html'
			})
		.when('/displaySleepView',
			{
				controller: 'displaySleepController',
				templateUrl: 'static/views/displaySleepView.html'
			})
		.when('/riskView',
			{
				controller: 'riskController',
				templateUrl: 'static/views/riskView.html'
			})
		.when('/articlesView',
			{
				controller: 'articlesController',
				templateUrl: 'static/views/articlesView.html'
			})
		.when('/exerciseView',
			{
				controller: 'exerciseController',
				templateUrl: 'static/views/exerciseView.html'
			})
		.when('/displayExerciseView',
			{
				controller: 'displayExerciseController',
				templateUrl: 'static/views/displayExerciseView.html'
			})
		.when('/bloodpView',
			{
				controller: 'bloodpController',
				templateUrl: 'static/views/bloodpView.html'
			})
		.when('/displayBloodPView',
			{
				controller: 'displayBloodPController',
				templateUrl: 'static/views/displayBloodPView.html'
			})

		// if non of the above routes
		// are matched we are setting router
		// to redirect to the RootController
		.otherwise({ redirectTo: '/'});

})

.config(function ($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
