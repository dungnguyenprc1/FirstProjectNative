export interface SimplecontentType {
  id?: number;
  name?: string;
  comment?: string;
  rate?: number;
}

export type ItemType = {
  id?: number;
  data?: SimplecontentType[];
  title?: string;
  content?: string;
  child?: ItemType[];
};

export const food = {
  noodle: [
    {
      id: 1,
      title: 'noodle',
      content: 'Content of Noodle',
      data: [{id: 1, name: 'Nguyen Van A', comment: 'Bad ', rate: 1}],
      child: [
        {
          id: 1,
          content: 'Another Comment 1',
          data: [{id: 1, name: 'Nguyen Van B', comment: 'Normal', rate: 5}],
          child: [
            {
              id: 1,
              content: 'Another Comment 2 ',
              data: [
                {
                  id: 1,
                  name: 'Nguyen Van C',
                  comment: 'Normal',
                  rate: 9,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          content: 'ABC Comment 3 ',
          data: [{id: 1, name: 'Nguyen Van D', comment: 'Normal', rate: 5}],
          child: [
            {
              id: 1,
              content: 'Another Comment 4',
              data: [
                {
                  id: 1,
                  name: 'Nguyen Van E',
                  comment: 'Normal',
                  rate: 10,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  banhmi: [
    {
      id: 2,
      title: 'banhmi',
      content: 'Content of Banh My',
      data: [{id: 1, name: 'Nguyen Van A', comment: 'Good ', rate: 10}],
      child: [
        {
          id: 1,
          content: 'Another Comment',
          data: [{id: 1, name: 'Nguyen Van B', comment: 'Normal', rate: 5}],
        },
      ],
    },
  ],

  hutieu: [
    {
      id: 3,
      title: 'hutieu',
      content: 'Content of Banh Trai',
      data: [{id: 1, name: 'Nguyen Van A', comment: 'Good ', rate: 10}],
      child: [
        {
          id: 1,
          content: 'Another Comment',
          data: [{id: 1, name: 'Nguyen Van B', comment: 'Normal', rate: 5}],
        },
      ],
    },
  ],
};
