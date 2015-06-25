var AppRouter = Backbone.Router.extend({
    routes: {
    	"home":"home",
    	"" : "home",
      "sandbox/:keyword": "sandbox",
      "stories/:story" : "storyView",
      "aboutUs/": "aboutUs",
      "*path" : "redirectHome"
    }
});


// Initiate the router
var app_router = new AppRouter;

app_router.on('route:sandbox', function(keyword) {
	app_router.navigate('sandbox', {trigger:true});
  alert(keyword);
});
app_router.on('route:stories', function(story) {
  app_router.navigate('storyView', {trigger:true});  
  alert(story);
});

app_router.on('route:aboutUs', function() {
  app_router.navigate('aboutUs', {trigger:true});
  alert("aboutUs");
});

app_router.on('route:home', function() {
  app_router.navigate('home', {trigger:true});
  // alert("home");
});
app_router.on('route:redirectHome', function() {
	window.location.replace=("http://sentimentalnews.herokuapp.com");
  app_router.navigate('home', {trigger:true});
  alert("home");
});


// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start({pushState:true});