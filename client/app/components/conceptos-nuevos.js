import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
	importe: Ember.computed(function(){
		return 0;
	}),
	actions:{
		save(param1,param2,param3,param4,param5,){
			let val = (param2 * param4);
			this.set('importe',val);
			console.log(param1);
			// let concept = this.get('store').find('concepto',param1.id);
			// console.log(concept);
			param1.set('cantidad',param2);
			param1.set('descripcion',param3);
			param1.set('total',val);
			param1.set('precio',param4);
			param1.set('descuento',param5);
			param1.save();
		}
	}
});
