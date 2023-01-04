
  let state = {
    profilePage:{
        posts: [{id: 1, message:'hi , how are u?' , likes: 34},
        {id: 2, message:'it is my first post' ,likes:15}],
        
    },
    dialogsPage:{
        messages: [{id: 1,message: 'HI , how r u?'} , 
        {id: 2,message: 'Heyy , great!And u?'} ,
        {id: 3,message: 'As usual)'}],
        dialogs:[{id: 1,name: 'Vera'} , 
    {id: 2,name: 'Vadim'} ,
    {id: 3,name: 'Nika'},
    {id: 4,name: 'Stepa'},
    {id: 5,name: 'Ivan'},{id: 6,name: 'Andrey'}]},
      friends:[{name: 'Alex'},
      {name: 'Mary'},
      {name: 'Julia'}]
  }
  export default state;