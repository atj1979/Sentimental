var db = require('../dbConfig.js');
var Article = require('./articleModel.js');

var Word = db.Model.extend({
  tableName: 'keywords',

  articles: function () {
    return this.belongsToMany(Article);
  },

  findAll: function (){
    this.fetchAll().then(function (data) {
      return data;
    });
  },

  initialize: function () {
    this.fetch().then(function (data) {
       if (data === null) {
        console.log('new!');
        this.save()
       }
    })
  }
  
});

module.exports = Word;