angular.module('LeukemiaApp').controller('dashboardCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
	

	$http.get('https://newsapi.org/v2/everything?q=leukemia&apiKey=ebf14d6bd3fa47de80a02a36eb1d05b9').then(function(data) {
    //Retireve data from response.
	$scope.news=data.data.articles;
	});

	// Carousel.setOptions({
 //    arrows: true,
 //    autoplay: false,
 //    autoplaySpeed: 3000,
 //    cssEase: 'ease',
 //    dots: false,
 
 //    easing: 'linear',
 //    fade: false,
 //    infinite: true,
 //    initialSlide: 0,
 
 //    slidesToShow: 1,
 //    slidesToScroll: 1,
 //    speed: 500,
 //  });

$scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];

	$scope.addMedicineReminder = function() {
		alert('hi');
	}

	$scope.clickedLink = '';
	$scope.showContent = function(linkVal) {
		return $scope.clickedLink == linkVal;
	}

	$scope.addMedicineReminder = function() {
		var startDate = new Date(2018,6,19,10,16,0,0,0),
		endDate = new Date(2018,6,19,10,17,0,0,0),
		title = "Take Medicine Alemtuzumn",
		notes = "Take one tablet";
		var success = function(message) {
			alert("successfully added to your calendar");
		}
		var error = function(message) {
			alert("error adding it your calendar");
		}
		window.plugins.calendar.createEvent(title,location,notes,startDate, endDate, success, error);
	}

	$scope.onDonationTap = function() {
		document.getElementById('submitClick').click();
	}

	$scope.logout = function() {
		$location.url("/");
	}


    $scope.toggle = function () {
      $scope.state = !$scope.state;
    };
}]);