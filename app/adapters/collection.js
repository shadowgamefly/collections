import Ember from 'ember';
import DS from 'ember-data';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
    session: Ember.inject.service(),
    host: 'http://localhost:8000',
    namespace: 'api',
    ajax(url, method, hash) {
        hash.crossOrigin = true;
        hash.xhrFields = { withCredentials: true };
        hash.headers = hash.headers || {};
        hash.headers['X-CSRFTOKEN'] = this.get('session.data.authenticated.csrfToken');
        return this._super(url, method, hash);
    },
    buildURL() {
        const base = this._super(...arguments);
        return `${base}/`;
    },
});
