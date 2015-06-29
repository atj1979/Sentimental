var SandboxView = Backbone.View.extend({
  initialize: function(params){
    console.log('sandboxview was here');
    // this.topNavView = new TopNavView();
    // this.chartView = new ChartView({model: this.model.get('chart')});
    // this.footerView = new FooterView();
  },

  render: function(){
    if (!this.subBarView){
      this.subBarView = new SubBarView();
    }

    if (!this.keywordView){
      this.keywordView = new NewKeywordView();
    }

    $(this.el).html([
      this.subBarView.$el,
      // this.chartView.$el,
      this.keywordView.$el
    ]);
    console.log('sandbox render called');
    $('.subbar').empty().append(this.$el);
    return this;
  }

});