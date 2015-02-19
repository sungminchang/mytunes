var CurrentSongView = Backbone.View.extend({

  tagName: 'header',

  template: _.template('<h1>Only Aaliyah</h1><h3><%= artist %> <%= title %></h3>'),

  initialize: function() {
    this.render();
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

