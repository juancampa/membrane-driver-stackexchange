//computed = computedField; it resolves the value calling a function in the index.js
//field; resokves the value from the source (the value of the father)
const { environment, schema } = program;

schema.type('Root')
  .field('questions', 'QuestionCollection')
  .field('answers', 'AnswerCollection')
  .field('threads', 'ThreadCollection')

schema.type('Answers')
  .field('link', 'String')
  .field('score', 'Int')  
  .computed('self', 'Answers*') 
  .computed('userID', 'Int')
  .computed('userType', 'String')
  .computed('acceptRate', 'Int')
  .computed('profileImage', 'String')
  .computed('displayName', 'String')
  .computed('isAccepted', 'Boolean')
  .computed('lastActivityDate', 'Int')
  .computed('creationDate', 'Int')
  .computed('answerID', 'Int')
  .computed('questionID', 'Int')
  

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

schema.type('ThreadPage')
  .computed('items', '[ThreadPageItem]')
  .computed('next', 'ThreadPage*')

