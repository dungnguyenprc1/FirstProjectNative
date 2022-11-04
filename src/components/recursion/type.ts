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

function generateList() {}

export const food = {
  noodle: [
    {
      id: 1,
      content: 'Content of Noodle',
      data: [{id: 1, name: 'Nguyen Van A', comment: 'Bad ', rate: 1}],
      child: [{id:1, content:'Another Comment', data:[{id: 1, name: 'Nguyen Van B', comment: 'Normal', rate: 5}]}]
    },
  ],
   banhmi: [
    {
      id: 1,
      content: 'Content of Banh My',
      data: [{id: 1, name: 'Nguyen Van A', comment: 'Good ', rate: 10}],
      child: [{id:1, content:'Another Comment', data:[{id: 1, name: 'Nguyen Van B', comment: 'Normal', rate: 5}]}]
    },
  ],
};





export const DATA = {
  id: 1,
  title: 'List Example',
  data: [{id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 1}],
  content: 'Recursion ',
  child: [
    {
      id: 1,
      title: '1. List Item 1',
      content: 'Giai thich y nghia title 1',
      data: [{id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3}],

      child: [
        {
          id: 1,
          title: 'i. List Item 1.1',
          content: 'Giai thich y nghia title 1.1',
          data: [
            {id: 1, name: 'Nguyen Van A', comment: 'Normal Services', rate: 5},
          ],
          child: [
            {
              id: 1,
              title: 'ii.1 Nested Item 1.1.1',
              content: 'Giai thich y nghia title 1.1.1',
              data: [
                {
                  id: 1,
                  name: 'Nguyen Van A',
                  comment: 'Good Services',
                  rate: 7,
                },
              ],

              child: [
                {
                  id: 1,
                  title: 'iii.1 Nested Item 1.1.1.1',
                  content: 'Giai thich y nghia title',
                  data: [
                    {
                      id: 1,
                      name: 'Nguyen Van A',
                      comment: 'Good Services',
                      rate: 7,
                    },
                  ],
                },
                {
                  id: 2,
                  title: 'iii.2 Nested Item 2.1.1.1',
                  content: 'Giai thich y nghia title 2.1.1.1',
                  data: [
                    {
                      id: 1,
                      name: 'Nguyen Van A',
                      comment: 'Good Services',
                      rate: 7,
                    },
                  ],

                  child: [
                    {
                      id: 1,
                      title: 'iiii.2 Nested Item 2.1.1.1.1',
                      content: 'Giai thich y nghia title',
                      data: [
                        {
                          id: 1,
                          name: 'Nguyen Van A',
                          comment: 'Good Services',
                          rate: 7,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              title: 'ii.2 Nested Item 2.2.2',
              content: 'Content Nested Item 2.2.2',
              data: [
                {
                  id: 1,
                  name: 'Nguyen Van A',
                  comment: 'Good Services',
                  rate: 7,
                },
              ],
              child: [
                {
                  id: 1,
                  title: 'iii.1 Nested Item 2.2.2.1',
                  content: 'Giai thich y nghia title',
                  data: [
                    {
                      id: 1,
                      name: 'Nguyen Van A',
                      comment: 'Good Services',
                      rate: 7,
                    },
                  ],
                },
                {
                  id: 2,
                  title: 'iii.2 Nested Item 2.2.2.2',
                  content: 'Giai thich y nghia title',
                  data: [
                    {
                      id: 1,
                      name: 'Nguyen Van A',
                      comment: 'Good Services',
                      rate: 7,
                    },
                  ],
                },
              ],
            },
            {
              id: 3,
              title: 'ii.3 Nested Item 3.3.3',
              content: 'Giai thich y nghia title',
              data: [
                {
                  id: 1,
                  name: 'Nguyen Van A',
                  comment: 'Good Services',
                  rate: 7,
                },
              ],
            },
            {
              id: 4,
              title: 'ii.4 Nested Item 4.4.4',
              content: 'Giai thich y nghia title',
              data: [
                {
                  id: 1,
                  name: 'Nguyen Van A',
                  comment: 'Good Services',
                  rate: 7,
                },
              ],

              child: [
                {
                  id: 1,
                  title: 'Nested Item 4.4.4.4',
                  content: 'Giai thich y nghia title',
                  data: [
                    {
                      id: 1,
                      name: 'Nguyen Van A',
                      comment: 'Good Services',
                      rate: 7,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'List Item 2',
      content: 'Recursion',
      data: [{id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 2}],

      child: [
        {
          id: 1,
          title: 'i.2 Item Nested 2',
          content: 'Giai thich y nghia title',
          data: [
            {id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3},
          ],

          child: [
            {
              id: 1,
              title: 'List Item 1.1',
              content: 'Giai thich y nghia title',
              data: [
                {id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3},
              ],

              child: [
                {
                  id: 1,
                  title: 'Nested Item 1.1.1',
                  content: 'Giai thich y nghia title',
                  data: [
                    {
                      id: 1,
                      name: 'Nguyen Van A',
                      comment: 'Bad Services',
                      rate: 3,
                    },
                  ],

                  child: [
                    {
                      id: 1,
                      title: 'Nested Item 1.1.1.1',
                      data: [
                        {
                          id: 1,
                          name: 'Nguyen Van A',
                          comment: 'Bad Services',
                          rate: 3,
                        },
                      ],
                    },
                    {
                      id: 2,
                      title: 'Nested Item 2.1.1.1',
                      content: 'know you',
                      data: [
                        {
                          id: 1,
                          name: 'Nguyen Van A',
                          comment: 'Bad Services',
                          rate: 3,
                        },
                      ],
                      child: [
                        {
                          id: 1,
                          title: 'Nested Item 2.1.1.1.1',
                          content: 'Giai thich everything',
                          data: [
                            {
                              id: 1,
                              name: 'Nguyen Van A',
                              comment: 'Bad Services',
                              rate: 3,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  title: 'Nested Item 2.2.2',
                  content: 'Giai thich y nghia title',
                  data: [
                    {
                      id: 1,
                      name: 'Nguyen Van A',
                      comment: 'Bad Services',
                      rate: 3,
                    },
                  ],

                  child: [
                    {
                      id: 1,
                      title: 'Nested Item 2.2.2.1',
                      data: [
                        {
                          id: 1,
                          name: 'Nguyen Van A',
                          comment: 'Bad Services',
                          rate: 3,
                        },
                      ],
                    },
                    {
                      id: 2,
                      title: 'Nested Item 2.2.2.2',
                      data: [
                        {
                          id: 1,
                          name: 'Nguyen Van A',
                          comment: 'Bad Services',
                          rate: 3,
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  title: 'Nested Item 3.3.3',
                  content: 'Giai thich y nghia title',
                  data: [
                    {
                      id: 1,
                      name: 'Nguyen Van A',
                      comment: 'Bad Services',
                      rate: 3,
                    },
                  ],
                },
                {
                  id: 4,
                  title: 'Nested Item 4.4.4',
                  content: 'Giai thich y nghia title',
                  data: [
                    {
                      id: 1,
                      name: 'Nguyen Van A',
                      comment: 'Bad Services',
                      rate: 3,
                    },
                  ],

                  child: [
                    {
                      id: 1,
                      title: 'Nested Item 4.4.4.4',
                      content: 'Giai thich y nghia title',
                      data: [
                        {
                          id: 1,
                          name: 'Nguyen Van A',
                          comment: 'Bad Services',
                          rate: 3,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
