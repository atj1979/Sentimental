var Keywords = Backbone.Collection.extend({ 
	model : KeywordModel,
	url:'/keywords',

	initialize : function (){
		var keywords = new Keywords();
		keywords.fetch();
		console.log("keywords here!!!", keywords);
	}




});