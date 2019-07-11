const users = [
  {
    id: "1",
    name: 'Andrew',
    email: "andrew@exemple.com",
    age: 27
  },
  {
    id: '2',
    name: 'Boba',
    email: 'boba@exemple.com',
    age: 102
  },
  {
    id: '3',
    name: 'Johna',
    email: 'bibou@exemple.com',
  }
];

const posts = [
  {
    id: '1',
    title: 'How to be happy',
    body: "zen is the awnser",
    published: true,
    author: '1'
  },
  {
    id: '2',
    title: 'How to be limbo',
    body: "Bli bla blou",
    published: true,
    author: '1'
  },
  {
    id: '3',
    title: 'How to be wise',
    body: "Think about stuff, but not to much, tolerance is key to be happy",
    published: false,
    author: '2'
  }
];

const comments = [
  {
    id: "1",
    text: "So cool",
    author: '2',
    post: '1'
  },
  {
    id: "2",
    text: "What the hell?",
    author: '3',
    post: '1'
  },
  {
    id: "3",
    text: "Damn",
    author: '2',
    post: '1'
  },
  {
    id: "4",
    text: "I heard one time that if you actually think about what you will eventually be in the..",
    author: '2',
    post: '2'
  }
];

const db = {
  users,
  posts,
  comments
};

export { db as default };
