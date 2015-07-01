var SandboxSubBarView = Backbone.View.extend({
  
  tagName: 'div class="row subbar"',

  initialize: function() {
    this.storyMenuItemView = new StoryMenuItemView();
    this.headerView = new HeaderView();
    this.render();
  },

  render: function(){
    return this.$el.html([
      this.storyMenuItemView.$el,
      this.headerView.$el
    ]);
  }
});