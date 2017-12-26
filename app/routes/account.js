import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    var p = params;
    return this.store.findRecord('account', p.account_id);
  }
});
