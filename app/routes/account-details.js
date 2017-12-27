import Route from '@ember/routing/route';

export default Route.extend({
    model(params){

        // var account = this.store.createRecord('account', {
        // _id: params.account_id
        // });

        // account.save();

        return this.store.findRecord('account', params.account_id);
    }    
});
