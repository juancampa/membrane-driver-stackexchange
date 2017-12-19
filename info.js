const { environment, schema } = program;

program.name = 'stackoverflow';

schema.type('Root')
  .field('questions', 'QuestionCollection')
  .field('answers', 'AnswerCollection')

schema.type('Answers')
  .computed('self', 'Answers*') 
  .field('score', 'Int')
  .computed('user_id', 'Int')
  .computed('user_type', 'String')
  .computed('accept_rate', 'Int')
  .computed('profile_image', 'String')
  .computed('display_name', 'String')
  .computed('link', 'String')
  .computed('is_accepted', 'Boolean')
  .computed('score', 'Int')
  .computed('last_activity_date', 'Int')
  .computed('creation_date', 'Int')
  .computed('answer_id', 'Int')
  .computed('question_id', 'Int')


schema.type('AnswerCollection')
  .computed('one', 'Answers')
    .param('id', 'String')
  .computed('items', '[Answers]')


schema.type('Questions')
  .computed('self', 'Questions*') 
  .field('score', 'Int')
  .computed('tags', '[String]')

schema.type('QuestionCollection')
  .computed('one', 'Questions')
    .param('id', 'String')
  .computed('items', '[Questions]')

//computed = computedField; it resolves the value calling a function in the index.js
//field; resokves the value from the source (the value of the father)



