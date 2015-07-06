var SandboxView = Backbone.View.extend({
  



  initialize: function(params){
    // this.storyMenuItemView = new StoryMenuItemView();
    // this.topNavView = new TopNavView();
    // this.chartView = new ChartView({model: this.model.get('chart')});
    // this.footerView = new FooterView();
  },

  render: function(){
    if (!this.subBarView){
      this.sandboxSubBarView = new SandboxSubBarView();
    }

    if (!this.keywordView){
      this.keywordView = new NewKeywordView();
    }

    $(this.el).html([
      this.sandboxSubBarView.$el,
      // this.chartView.$el,
      // this.keywordView.$el
    ]);
    $('.subbar').empty().append(this.$el);
    $('.chart').empty();
    return this;
  }

});