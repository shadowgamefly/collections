import { moduleForModel, test } from 'ember-qunit';

moduleForModel('collection', 'Unit | Model | collection', {
    // Specify the other units that are required for this test.
    needs: [
        'model:user',
        'model:group',
        'model:item',
    ],
});

test('it exists', function(assert) {
    const model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
});
