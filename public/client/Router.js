var AppRouter = Backbone.Router.extend({
  routes: {
  	"home":"home",
    "sandbox": "sandbox",
    "stories/:story" : "stories",
    "aboutUs/" : "aboutUs",
    "*path" : "redirectHome"
  },


});


// Initiate the router
var app_router = new AppRouter();

app_router.on('route:sandbox', function (something){
  this.view = new SandboxView();
  console.log('route:sandbox', something);
  this.view.render();

})

app_router.on('route:stories', function(story) {
  console.log('route:stories', story);


});

// app_router.on('route:#aboutUs', function() {
//   app_router.navigate('aboutUs', {trigger:true});
//   // alert("aboutUs");
// });

// app_router.on('route:#home', function() {
//   app_router.navigate('#home', {trigger:true});
//   // alert("home");
// });
// app_router.on('route:redirectHome', function() {
// 	// window.location.replace=("http://sentimentalnews.herokuapp.com");
//   // app_router.navigate('#home', {trigger:true});
//   // alert("home");
// });


// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();