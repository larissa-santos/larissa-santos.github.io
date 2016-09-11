angular.module("enacomp").config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "view/home.html"
	});

	$routeProvider.when("/programacao", {
		templateUrl: "view/programacao.html"
	});

	$routeProvider.when("/trabalhos", {
		templateUrl: "view/trabalhos.html"
	});

	$routeProvider.when("/evento", {
		templateUrl: "view/evento.html"
	});

	// $routeProvider.when("/organizacao", {
	// 	templateUrl: "view/organizacao.html"
	// });

	// $routeProvider.when("/comite", {
	// 	templateUrl: "view/comite.html"
	// });

	// $routeProvider.when("/inscricoes", {
	// 	templateUrl: "view/inscricoes.html"
	// });
	
	// rota default
	$routeProvider.otherwise({ redirectTo: "/"});
});