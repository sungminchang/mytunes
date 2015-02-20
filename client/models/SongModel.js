// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    'artist': '',
    'title': ''
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection

    var currentCount = this.get('count');
    currentCount++;
    this.set({'count': currentCount});
    this.trigger('play', this);
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  ended: function(){
    this.trigger('ended', this);
  }

});
