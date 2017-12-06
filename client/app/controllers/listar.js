import Ember from 'ember';

export default Ember.Controller.extend({
	facturas: Ember.computed(function(){
		return this.get('store').findAll('factura');
	}),
	actions:{
		nuevaFactura(){
			this.transitionToRoute('crear');
		}
	}
});
