import { root } from './schema';
import * as client from './client';

export const init = () => {
  root.set({ Questions: {}});
  root.set({ Answers:{} });
  return root;
  //return root.set({ questions: {} });
}

export const QuestionCollection = {
  async one({ args }) {
    // ? how's this URL gonna end up?
    ///2.2/questions/{ids}?order=desc&sort=activity&site=stackoverflow
    //${args.id}
    ///2.2/questions/${args.id}?order=desc&sort=activity&site=stackoverflow
    const result = await client.get(`/questions/${args.id}?order=desc&sort=activity&site=stackoverflow`);
    return result;
  },
  async items() {
    // ? how's this URL gonna end up?
    return client.get(`/questions?order=desc&sort=activity&site=stackoverflow`);
  },
}

export const AnswerCollection = {
  async one({ args }) {
    const result = await client.get(`/answers/${args.id}?order=desc&sort=activity&site=stackoverflow`);
    return result;//en el caso de coinmarketcap 
  },
  async items() {
    // ? how's this URL gonna end up?
    return client.get(`/answers?order=desc&sort=activity&site=stackoverflow`);
  },
}




