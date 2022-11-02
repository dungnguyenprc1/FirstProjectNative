export interface SimplecontentType {
    // define whatever you want to display in UI at least 4 properties.
  }
  
  export type ItemType = {
    keyExtractor?:any;
    id?:number;
    data?: any;
    renderItem?:any;
    title?: string;
    content?: string,
    child?: ItemType[],
  }
  

  export const DATA: ItemType = {
    title:'List Example',
    child: [{
      id: 1,
      title:'List Item 1',
      child: [{
          id: 1,
          title:' Nested Item 1.1',
          child: [{
            id: 1,
            title:"Nested Item 1"
          },
          {
            id: 2,
            title:"Nested Item 2"

          },
          {
            id: 3,
            title:"Nested Item 3"
          },
          {
            id: 4,
            title:"Nested Item 4",
            child: [{
              id: 1,
              title:"Nested Item 1"
            }]
          }]
        }]
    },
    {
      id:2,  
      content: "List Item 2",
      child: [{
        id: 1,
        content:'Item Nested 12'
      }    ]
    }]
  }




