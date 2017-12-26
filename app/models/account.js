import DS from 'ember-data';

export default DS.Model.extend({
    _id: DS.attr(),
    reseller: DS.attr(),
    status: DS.attr(),
    email: DS.attr(),
    telephone: DS.attr(),
    faxNumber: DS.attr(),
    creationDate: DS.attr()
});
