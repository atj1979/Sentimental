var SandboxSubBarView = Backbone.View.extend({
  
  tagname: 'div',

  initialize: function() {
    this.storyMenuItemView = new StoryMenuItemView();
    this.headerView = new HeaderView();
    this.render();
  },

  render: function(){
    var that = this;
    return this.$el.html([
      that.storyMenuItemView.$el,
      that.headerView.$el
    ]);
  }
});