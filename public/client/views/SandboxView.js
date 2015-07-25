var SandboxView = Backbone.View.extend({
  
  initialize: function(params){
    this.topNavView = new TopNavView();
    this.subBarView = new SubBarView();
    // this.chartView = new ChartView({model: this.model.get('chart')});
    this.footerView = new FooterView();
    this.keywordView = new NewKeywordView();
  },

  render: function(){
    console.log(this);
    this.close();
    return this.$el.html([
      this.topNavView.$el,
      this.subBarView.$el,
      // this.chartView.$el,
      this.footerView.$el,
      this.keywordView.$el
    ]);
  }

});