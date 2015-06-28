var TopNavView = Backbone.View.extend({
  
  tagName: 'div #top-navigation',

  initialize: function() {
    this.render();
  },

  template: _.template(
  	'<nav class="navbar navbar-default navbar-fixed-top topNav">'+
  		'<div class="container">'+
	  		'<div class="navbar-header">'+
	  			'<a class="navbar-brand" href="#">SENTIMENTAL</a>'+
	  		'</div>'+
	  		'<p class="navbar-text navbar-right">' +
	  			'<a href="#sandbox" class="navbar-link">Sandbox</a>'+
	  			'</p>'+
	  		'<p class="navbar-text navbar-right">'+
	  			'<a href="#aboutUs" class="navbar-link">About Us</a>'+
				'</p>'+
				'<p class="navbar-text navbar-right">'+
					'<a href="#stories" class="navbar-link">Stories</a>'+
				'</p>'+
			'</div>'+
		'</nav>'
	),

  render: function(){
    return this.$el.html(this.template());
  }
})