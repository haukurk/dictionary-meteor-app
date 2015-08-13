/*

Seeding example:

Meteor.startup(function (Sentences) {
  if (Sentences.collection.find().count() === 0) {

    var sentences = [
      {'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.'},
      {'name': 'All dubstep all the time',
        'description': 'Get it on!'},
      {'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'}
    ];

    for (var i = 0; i < sentences.length; i++)
      Sentences.collection.insert(sentences[i]);

  }

});
*/
