var AppRouter = Backbone.Router.extend({
  routes: {
  	"home":"home",
    "sandbox": "sandbox",
    "stories" : "stories",
    "aboutUs" : "aboutUs",
    "*path" : "redirectHome"
  },
  showView: function(view){
    console.log(this.$el);
  },

  sandbox: function (keyword){
    var sandbox = new SandboxView();
    sandbox.render();
    console.log('route:sandbox', keyword);
  },

  stories: function (story){
    var stories = new AppView();
    console.log('route:stories', story);
  },

  aboutUs: function (something){
    console.log('route:aboutUs', something);
  },

  home:function (something){
    console.log('route:home', something);
  }


});


// Initiate the router
var app_router = new AppRouter();

// Start Backbone history - a necessary step for bookmarkable URL's
Backbone.history.start();