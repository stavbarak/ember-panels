import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        saveChanges(account){
            this.saveChanges(account);
        }
    },

    saveChanges(account){
        account.save();
        this.transitionToRoute('accounts');
    }    
});
