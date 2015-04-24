import Ember from 'ember';

export default Ember.Service.extend({

  // Setup the service with some data the first time it loads
  // this setup function will run the first time the service is created
  // note the Ember.on and how it observes the init event
  // you could also do ajax request inside this setup method
  // if you needed to fetch data from remote source.
  setup: Ember.on('init', function() {
    var rainbow = Ember.A([
      'red', 
      'orange', 
      'yellow', 
      'green', 
      'blue', 
      'indigo', 
      'violet']);
    
    var solarSystem = Ember.A([
      'Mercury', 
      'Venus', 
      'Earth', 
      'Mars', 
      'Jupiter', 
      'Saturn', 
      'Uranus', 
      'Neptune']); // sorry Pluto maybe new horizons will change our minds
    
    this.set('colors', rainbow);
    this.set('planets', solarSystem);
    this._super(); // call _super() so rest of ember has chance to init correctly
  }),  
  
  // These are just plain old properties of our service. They start off null.
  // An Ember Service is just an Ember.Object with a few extra features
  // No need to use ember data explicitly if you don't want to create model
  colors: null,
  planets: null
  
});
