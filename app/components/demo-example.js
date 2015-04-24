import Ember from 'ember';

export default Ember.Component.extend({

  // inject the service into our component
  genericData: Ember.inject.service('generic-data'),
  
  // this would also work if the variable name and service name are the same
  // genericData: Ember.inject.service(),
  
  myColor: null,
  myPlanet: 'Pluto',
  
  actions: {
    addColor: function(color){
      var colors = this.get('genericData').get('colors');
      colors.pushObject(color);
    },

    addPlanet: function(planet){
      var planets = this.get('genericData').get('planets');
      planets.pushObject(planet);
    }
  }
});
