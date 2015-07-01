var StoryMenuItemView = Backbone.View.extend({

  tagName: 'ul class="col-md-3"',

  template: _.template(
  	'<a href=""><li><%= searchTerm %></li></a>'
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

  		if (previousVal){
        previousVal = previousVal + that.template({ searchTerm : currentVal.attributes.word });
      } else {
        console.log("previousVal", previousVal);
        previousVal = that.template({ searchTerm : currentVal.attributes.word });
      }
      return previousVal;
  	});
  	return this.$el.html(this.$els);
  }

});