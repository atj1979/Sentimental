var NewKeywordView = Backbone.View.extend({
	
  tagName: "div",

  className: "navbar-default",

  events: {
    'click #kwque':'QueKeyWord'
  },

  QueKeyWord: function (event){

  	var queryURL ="";
  	var keyword = _.escape(document.getElementById('newKeyWord').value);
  	var startDate = _.escape(document.getElementById('startDate').value);
  	var endDate = _.escape(document.getElementById('endDate').value);
  	
  	function validKeyWord (){
  		return keyword !== "Search Term" && keyword !== "";
  	}


    //build the query
  	if (validKeyWord()){
  		queryURL += "keyword="+keyword.toLowerCase();
  	}

  	if (startDate != "Start Date" && validKeyWord()){
  		queryURL += "&startDate="+startDate;
  	}

  	if (endDate != "End Date" && validKeyWord()) {
  		queryURL += "&endDate="+endDate;
  	}

    //prepend with ? query 
  	if (queryURL.length > 0){
  		queryURL ="?"+queryURL;
  	}
  	
  	//build query on url
  	$.ajax({
	 	url: "/newsapi" + queryURL,
	  	type: "GET"
		})
	  .done(function( data ) {
	    console.log("successful post", data);
    return data;
	  });
  },

  initialize: function() {

    this.render();
  },

  render: function() {

  	return this.$el.html(
      '<input id="newKeyWord" type="text" value="Search Term"></input>'+
      '<input id="startDate" class="dates" type="text" value="Start Date"></input>'+
      '<input id="endDate" class="dates" type="text" value="End Date"></input>'+
      '<input list="sources">'+
        '<datalist id=sources>'+
          '<option value="New York Times">'+
          '<option value="The Guardian">'+
        '</datalist>'+
      '</input>'+
      '<input id="kwque" type="submit" value="Queue Keyword"></input>'
    ).find('.dates')
      .datepicker({
        dateFormat: "yymmdd",
        changeMonth: true,
        changeYear: true
      }
    ).end();
  }

});


