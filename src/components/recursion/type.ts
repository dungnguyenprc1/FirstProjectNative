export interface SimplecontentType {
  id?: number;
  name?: string;
  comment?: string;
  rate?: number;
}

export type ItemType = {
  id?: number;
  data?: SimplecontentType[];
  renderItem?: any;
  title?: string;
  content?: string;
  child?: ItemType[];
};

export const DATA = {
  id: 1,
  title: 'List Example',
  data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 1 }],
  content: 'Recursion ',
  child: [
    {
      id: 1,
      title: 'List Item 1',
      content: 'Giai thich y nghia title 1',
      data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }],

      child: [
        {
          id: 1,
          title: 'List Item 1.1',
          content: 'Giai thich y nghia title 1.1',
          data: [
            { id: 1, name: 'Nguyen Van A', comment: 'Normal Services', rate: 5 },
          ],
          child: [
            {
              id: 1,
              title: 'Nested Item 1.1.1',
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
                  title: 'Nested Item 1.1.1.1',
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
                  title: 'Nested Item 2.1.1.1',
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
                      title: 'Nested Item 2.1.1.1.1',
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
              title: 'Nested Item 2.2.2',
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
                  title: 'Nested Item 2.2.2.1',
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
                  title: 'Nested Item 2.2.2.2',
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
              title: 'Nested Item 3.3.3',
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
              title: 'Nested Item 4.4.4',
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
      data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 2 }],

      child: [
        {
          id: 1,
          title: 'Item Nested 12',
          content: 'Giai thich y nghia title',
          data: [
            { id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 },
          ],

          child: [
            {
              id: 1,
              title: 'List Item 1.1',
              content: 'Giai thich y nghia title',
              data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }],

              child: [
                {
                  id: 1,
                  title: 'Nested Item 1.1.1',
                  content: 'Giai thich y nghia title',
                  data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }],

                  child: [
                    { id: 1, title: 'Nested Item 1.1.1.1',data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }], },
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
                          data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }],

                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  title: 'Nested Item 2.2.2',
                  content: 'Giai thich y nghia title',
                  data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }],

                  child: [

                    {
                      id: 1, title: 'Nested Item 2.2.2.1',
                      data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }],

                    },
                    {
                      id: 2, title: 'Nested Item 2.2.2.2',
                      data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }],

                    },
                  ],
                },
                {
                  id: 3,
                  title: 'Nested Item 3.3.3',
                  content: 'Giai thich y nghia title',
                  data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }],

                },
                {
                  id: 4,
                  title: 'Nested Item 4.4.4',
                  content: 'Giai thich y nghia title',
                  data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }],

                  child: [
                    {
                      id: 1,
                      title: 'Nested Item 4.4.4.4',
                      content: 'Giai thich y nghia title',
                      data: [{ id: 1, name: 'Nguyen Van A', comment: 'Bad Services', rate: 3 }],

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
