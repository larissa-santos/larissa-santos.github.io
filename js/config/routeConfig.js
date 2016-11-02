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

	$routeProvider.when("/artigo-poster", {
		templateUrl: "view/poster.html"
	});

	$routeProvider.when("/artigo-oral", {
		templateUrl: "view/oral.html"
	});

	$routeProvider.when("/evento", {
		templateUrl: "view/evento.html"
	});

	$routeProvider.when("/organizacao", {
		templateUrl: "view/organizacao.html"
	});
	
	$routeProvider.when("/contato", {
		templateUrl: "view/contato.html"
	});

	$routeProvider.when("/campeonato", {
		templateUrl: "view/campeonato.html"
	});

	$routeProvider.when("/maratona", {
		templateUrl: "view/maratona.html"
	});

	$routeProvider.when("/comite", {
		templateUrl: "view/comite.html"
	});

	$routeProvider.when("/inscricoes", {
		templateUrl: "view/inscricoes.html"
	});
	
	$routeProvider.when("/palestrantes", {
		templateUrl: "view/palestrantes.html"
	});

	$routeProvider.when("/Workshop", {
		templateUrl: "view/workshopKids.html"
	});

	// rota default
	$routeProvider.otherwise({ redirectTo: "/"});
});