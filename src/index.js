import { root } from './schema';
import * as client from './client';

export const init = () => {
  return root.set({ Questions: {}, answers:{} });
  //root.set({ answers:{} });
  //return root;
}

export const QuestionCollection = {
  async one({ args }) {
    // ? how's this URL gonna end up?
    ///2.2/questions/{ids}?order=desc&sort=activity&site=stackoverflow
    //${args.id}
    ///2.2/questions/${args.id}?order=desc&sort=activity&site=stackoverflow
    const result = await client.get(`/questions/${args.id}?order=desc&sort=activity&site=stackoverflow`);
    return result.items[0];
  },
  async items() {
    // ? how's this URL gonna end up?
    const result = await client.get(`/questions?order=desc&sort=activity&site=stackoverflow`);
    return result.items;

  },
}

export const AnswerCollection = {
  async one({ args }) {
    const result = await client.get(`/answers/${args.id}?order=desc&sort=activity&site=stackoverflow`);
    return result;
  },
  async items() {
    // ? how's this URL gonna end up?
    return client.get(`/answers?order=desc&sort=activity&site=stackoverflow`);
  }
}

export const Answer = {
  async self({ source }) {
    return root.answers.one({ id: source.id });
  },
  user_id({ source }) {
    return source['user_id'];
  },
  user_type({ source }) {
    return source['user_type'];
  },
  accept_rate({ source }) {
    return source['accept_rate'];
  },
  profile_image({ source }) {
    return source['profile_image'];
  },
  display_name({ source }) {
    return source['display_name'];
  },
  is_accepted({ source }) {
    return source['is_accepted'];
  },
  last_activity_date({ source }) {
    return source['last_activity_date'];
  },
  creation_date({ source }) {
    return source['creation_date'];
  },
  answer_id({ source }) {
    return source['answer_id'];
  },
  question_id({ source }) {
    return source['question_id'];
  }
}