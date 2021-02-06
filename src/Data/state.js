let renderTree = ()=> {};

let state = {
profile: {
    postData: [
        { id: 1, title: "What are you doing?", countLike: 23 },
        { id: 2, title: "Call me!!!", countLike: 17 },
        { id: 3, title: "This is my first message!", countLike: 8 },
      ],
},
dialogs: {
    dialogData: [
        { id: 1, name: "Sasha", imgUrl: "https://specials-images.forbesimg.com/imageserve/5e3ac70bf50e1a000723ee2b/0x800.jpg?cropX1=0&cropX2=1280&cropY1=0&cropY2=1688" },
        { id: 2, name: "Lena", imgUrl: "https://i.insider.com/5c8045a4d2ce7802a110ce7b?width=1100&format=jpeg&auto=webp" },
        { id: 3, name: "Robert", imgUrl: "https://i.ytimg.com/vi/mAX9qzX_LQU/maxresdefault.jpg" },
        { id: 4, name: "Freya", imgUrl: "https://i.insider.com/5ebbfc9ffc593d729d60df73?width=1136&format=jpeg" },
        { id: 5, name: "Stephan", imgUrl: "https://4.bp.blogspot.com/-4nOrx8dHHyc/Wqv4G73PY_I/AAAAAAAB5B4/RxOn-hTiukE5KoQTlfQDmjO77IrsO8UQwCLcBGAs/s1600/funny-animals-308-01.jpg"},
],
    messageData: [
        { id: 1, message: "Hi! How are you?", imgUrl: "https://specials-images.forbesimg.com/imageserve/5e3ac70bf50e1a000723ee2b/0x800.jpg?cropX1=0&cropX2=1280&cropY1=0&cropY2=1688" },
        { id: 2, message: "It was a nice summer!", imgUrl: "https://i.ytimg.com/vi/mAX9qzX_LQU/maxresdefault.jpg"  },
        { id: 3, message: "We wish you a Marry Cristmass!!!", imgUrl: "https://4.bp.blogspot.com/-4nOrx8dHHyc/Wqv4G73PY_I/AAAAAAAB5B4/RxOn-hTiukE5KoQTlfQDmjO77IrsO8UQwCLcBGAs/s1600/funny-animals-308-01.jpg" },
        { id: 4, message: "How was it?", imgUrl: "https://i.insider.com/5ebbfc9ffc593d729d60df73?width=1136&format=jpeg" },
        { id: 5, message: "I have got dog!", imgUrl: "https://4.bp.blogspot.com/-4nOrx8dHHyc/Wqv4G73PY_I/AAAAAAAB5B4/RxOn-hTiukE5KoQTlfQDmjO77IrsO8UQwCLcBGAs/s1600/funny-animals-308-01.jpg" },
        { id: 6, message: "Hi! How are you?", imgUrl: "https://i.ytimg.com/vi/mAX9qzX_LQU/maxresdefault.jpg"  },
        { id: 7, message: "Let's go!", imgUrl: "https://i.insider.com/5ebbfc9ffc593d729d60df73?width=1136&format=jpeg" },
        { id: 8, message: "Let's talk!!!", imgUrl: "https://i.ytimg.com/vi/mAX9qzX_LQU/maxresdefault.jpg" },
        { id: 9, message: "Where are you from?", imgUrl: "https://i.ytimg.com/vi/mAX9qzX_LQU/maxresdefault.jpg"  },
        { id: 10, message: "I have got cat!", imgUrl: "https://i.insider.com/5ebbfc9ffc593d729d60df73?width=1136&format=jpeg" },
      ],
    newPostText: "",
},
nav:{
sideBar: {
  friendOnLineData: [
      { id: 1, name: "Sasha", imgUrl: "https://specials-images.forbesimg.com/imageserve/5e3ac70bf50e1a000723ee2b/0x800.jpg?cropX1=0&cropX2=1280&cropY1=0&cropY2=1688" },
      { id: 2, name: "Lena", imgUrl: "https://i.insider.com/5c8045a4d2ce7802a110ce7b?width=1100&format=jpeg&auto=webp" },
      { id: 3, name: "Robert", imgUrl: "https://i.ytimg.com/vi/mAX9qzX_LQU/maxresdefault.jpg" }
  ],
},
},
}

export const addNewPost = () => {
  let newPost = {
    id: 11, message: state.dialogs.newPostText, imgUrl: "https://i.insider.com/5ebbfc9ffc593d729d60df73?width=1136&format=jpeg"
  }
  state.dialogs.messageData.push(newPost);
  state.dialogs.newPostText = "";
  renderTree(state);  
}

export const updateNewPostText = (newText) => {
  state.dialogs.newPostText = newText;
  renderTree(state);  
}

export const subscribe = (observer) => {
  renderTree = observer;
}

export default state;
