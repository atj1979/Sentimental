var StoryMenuItemView = Backbone.View.extend({

  tagName: 'div',
  className: "sand-box",

  template: _.template(
  	'<a><li><%= searchTerm %></li></a>'
	),

  events: {
    'click': function(val) {
    	console.log(val);
    }
  },
  initialize:function (){
  	var that = this;
  	this.keywords = new Keywords();
    this.keywords.url = '/keywords';
    this.keywords.fetch().then(function (){
    	that.render();
    });
  },

  render: function(){
  	var that = this
  	this.$els = this.keywords.models.reduce(function(previousVal, currentVal){
      return previousVal + that.template({ searchTerm : currentVal.attributes.word });
  	}, "");
    this.$els = "<ul>" + this.$els + "</ul>";
  	return this.$el.html(this.$els);
  }

});