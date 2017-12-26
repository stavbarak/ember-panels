import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    //trying to figure out this code and why does it try to get /accounts/3 instead of /account/3
    console.log(params);
    console.log(this.store.findRecord);
    console.log(this.store.findRecord('account', params.account_id));
    //return this.store.findRecord('account', params.account_id);
  }
});
