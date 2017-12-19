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
  },
}




