import { createSlice } from '@reduxjs/toolkit';

interface UserComment {
  id: number;
  name: string;
  surname: string;
  job: string;
  comment: string;
  avatar: string;
}

interface UserQuestion {
  id: number;
  question: string;
  answer: string;
}

interface ServiceType {
  id: number;
  title: string;
  description: string;
}

interface UsersState {
  usersComments: Array<UserComment>;
  usersQuestions: Array<UserQuestion>;
  services: Array<ServiceType>;
}

export const initialState: UsersState = {
  usersComments: [
    {
      id: 1,
      name: 'Name',
      surname: 'Surname',
      job: 'Job',
      comment: 'Some text awdwadwdawd awdawdadad awdwadawd awdawdawd lorem',
      avatar:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      id: 2,
      name: 'Name',
      surname: 'Surname',
      job: 'Job',
      comment: 'Some text awdwadwdawd awdawdadad awdwadawd awdawdawd lorem',
      avatar: 'https://www.statxo.com/wp-content/uploads/2018/06/pexels-photo-555790.png',
    },
    {
      id: 3,
      name: 'Name',
      surname: 'Surname',
      job: 'Job',
      comment: 'Some text awdwadwdawd awdawdadad awdwadawd awdawdawd lorem',
      avatar:
        'https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg=',
    },
    {
      id: 4,
      name: 'Name',
      surname: 'Surname',
      job: 'Job',
      comment: 'Some text awdwadwdawd awdawdadad awdwadawd awdawdawd lorem',
      avatar: 'https://img.freepik.com/free-photo/man-saying-ok_1149-1714.jpg?size=626&ext=jpg',
    },
    {
      id: 5,
      name: 'Name',
      surname: 'Surname',
      job: 'Job',
      comment: 'Some text awdwadwdawd awdawdadad awdwadawd awdawdawd lorem',
      avatar: 'https://www.itweek.ru/etc/kyocera-svistunov-1.jpg',
    },
  ],
  usersQuestions: [
    {
      id: 1,
      question: 'When is outsorcing a good option?',
      answer:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi error facere ad quo inventore accusantium magnam aliquam ab qui! Exercitationem fuga corporis placeat praesentium tempore, necessitatibus amet consequuntur ipsa.',
    },
    {
      id: 2,
      question: 'How long does it take to start a project?',
      answer:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi error facere ad quo inventore accusantium magnam aliquam ab qui! Exercitationem fuga corporis placeat praesentium tempore, necessitatibus amet consequuntur ipsa.',
    },
    {
      id: 3,
      question: 'How does communication progress look like?',
      answer:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi error facere ad quo inventore accusantium magnam aliquam ab qui! Exercitationem fuga corporis placeat praesentium tempore, necessitatibus amet consequuntur ipsa.',
    },
    {
      id: 4,
      question: 'How do you make sure my intellectual property status secure?',
      answer:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi error facere ad quo inventore accusantium magnam aliquam ab qui! Exercitationem fuga corporis placeat praesentium tempore, necessitatibus amet consequuntur ipsa.',
    },
    {
      id: 5,
      question: 'Can i add your specialists to my existing team?',
      answer:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi error facere ad quo inventore accusantium magnam aliquam ab qui! Exercitationem fuga corporis placeat praesentium tempore, necessitatibus amet consequuntur ipsa.',
    },
  ],
  services: [
    { id: 1, title: 'Full dedication', description: 'Text text text text' },
    { id: 2, title: 'Quick start', description: 'Text text text text' },
    { id: 3, title: 'Simple scalability', description: 'Text text text text' },
    { id: 4, title: 'Hassle free administration', description: 'Text text text text' },
  ],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
});

export default mainSlice.reducer;
