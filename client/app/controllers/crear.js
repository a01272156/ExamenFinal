import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';

export default Ember.Controller.extend(SweetAlertMixin,{
	numConceptos: Ember.computed(function(){
		let model = this.get('model');
		return this.store.query('concepto', {
        orderBy: 'factura',
        equalTo: model.id,
      })
	}),
	total: Ember.computed(function(){
		let model = this.get('model');
		let conceptos = this.store.query('concepto', {
        orderBy: 'factura',
        equalTo: model.id,
      })
		let val = 0;
		conceptos.then(()=>{
			conceptos.forEach((item)=>{
				val+=(item.data.cantidad * item.data.precio)-item.data.descuento;
			})
			console.log('valor',val);
			this.set('total',val); 
		})

	}),
	subtotal: Ember.computed(function(){
		let model = this.get('model');
		let conceptos = this.store.query('concepto', {
        orderBy: 'factura',
        equalTo: model.id,
      })
		let val = 0;
		conceptos.then(()=>{
			conceptos.forEach((item)=>{
				val+=item.data.cantidad * item.data.precio;
			})
			console.log('valor',val);
			this.set('subtotal',val); 
			return val;
		})
	}),
	actions:{
		nuevoConcepto(){
			let concepto = this.get('store').createRecord('concepto',{});
			let model = this.get('model');
			concepto.set('factura',model);
			this.set('concepto',concepto);
			concepto.save();
			// console.log(model);
			// console.log(concepto);
		},

		save(){
		let model = this.get('model');
		let conceptos = this.store.query('concepto', {
        orderBy: 'factura',
        equalTo: model.id,
      })
		let val = 0;
		conceptos.then(()=>{
			conceptos.forEach((item)=>{
				val+=(item.data.cantidad * item.data.precio)-item.data.descuento;
			})
			console.log('valor',val);
			this.set('total',val); 
			let factura = this.get('model');
			this.set('factura',factura);
			let total = this.get('total');
			this.set('factura.formaPago',total);
			factura.save().then(()=>{
				let sweetAlert = this.get('sweetAlert');
      				sweetAlert({
      				title: 'Se Guardo',
      				text: 'Se Guardo la Factura',
  					type: "success",
					});
			})
		})
		}
	}
});
