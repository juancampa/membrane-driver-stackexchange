import { root } from './schema';
import * as client from './client';

export const init = () => {
  return root.set({ Questions: {}, Answers:{} });
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
    console.log('RESULT', result);
    return result.items[0];
  },
  async items() {
    // ? how's this URL gonna end up?
    const result = client.get(`/answers?order=desc&sort=activity&site=stackoverflow`);
    return result.items;
  }
}

export const Answers = {
  async self({ source }) {
    return root.answers.one({ id: source.id });
  },
  userID({ source }) {
    return source['user_id'];
  },
  userType({ source }) {
    return source['user_type'];
  },
  acceptRate({ source }) {
    return source['accept_rate'];
  },
  profileImage({ source }) {
    return source['profile_image'];
  },
  displayName({ source }) {
    return source['display_name'];
  },
  isAccepted({ source }) {
    return source['is_accepted'];
  },
  lastActivityDate({ source }) {
    return source['last_activity_date'];
  },
  creationDate({ source }) {
    return source['creation_date'];
  },
  answerID({ source }) {
    return source['answer_id'];
  },
  questionID({ source }) {
    return source['question_id'];
  }
}


export let ThreadPage = {
  next({ self, source }) {
    if (source.nextPageToken === undefined) {
      return null;
    }
    const args = self.match(root.threads.page());
    return root.threads.page({ ...args, pageToken: source.nextPageToken })
  },

  items({ source }) {
    return source.threads;
  }
};
