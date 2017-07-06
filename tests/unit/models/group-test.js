import { moduleForModel, test } from 'ember-qunit';

moduleForModel('group', 'Unit | Model | group', {
    // Specify the other units that are required for this test.
    needs: [
        'model:collection',
        'model:user',
        'model:item',
    ],
});

test('it exists', function(assert) {
    const model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
});
