const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profile: {
        postData: [
            { id: 1, title: "What are you doing?", countLike: 23 },
            { id: 2, title: "Call me!!!", countLike: 17 },
            { id: 3, title: "This is my first message!", countLike: 8 },
          ],
          newPostText: "",
          
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
            { id: 2, message: "It was a nice summer!", imgUrl: "https://i.insider.com/5c8045a4d2ce7802a110ce7b?width=1100&format=jpeg&auto=webp"  },
            { id: 3, message: "We wish you a Marry Cristmass!!!", imgUrl: "https://i.ytimg.com/vi/mAX9qzX_LQU/maxresdefault.jpg" },
            { id: 4, message: "How was it?", imgUrl: "https://i.insider.com/5ebbfc9ffc593d729d60df73?width=1136&format=jpeg" },
            { id: 5, message: "I have got dog!", imgUrl: "https://4.bp.blogspot.com/-4nOrx8dHHyc/Wqv4G73PY_I/AAAAAAAB5B4/RxOn-hTiukE5KoQTlfQDmjO77IrsO8UQwCLcBGAs/s1600/funny-animals-308-01.jpg" },
          ],
        newMessageBody: "",
       
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
    },
  _callSubscriber(){},

    getState(){
      return this._state
    },
    subscribe(observer){
      this._callSubscriber = observer;
    },

dispatch(action){
if(action.type === ADD_NEW_POST){
  let newPost = {
    id: 4, title: this._state.profile.newPostText, countLike: 23,
  }
  this._state.profile.postData.push(newPost);
  this._state.profile.newPostText = "";
  this._callSubscriber(this._state);  
}
else if(action.type === UPDATE_NEW_POST_TEXT){
  this._state.profile.newPostText = action.newText;
  this._callSubscriber(this._state);
}
else if(action.type === UPDATE_NEW_MESSAGE_BODY){
  this._state.dialogs.newMessageBody = action.body;
  this._callSubscriber(this._state);
}
else if(action.type === SEND_MESSAGE){
  let body = this._state.dialogs.newMessageBody;
  this._state.dialogs.newMessageBody = "";
  this._state.dialogs.messageData.push({ id: 6, message: body, imgUrl: "https://specials-images.forbesimg.com/imageserve/5e3ac70bf50e1a000723ee2b/0x800.jpg?cropX1=0&cropX2=1280&cropY1=0&cropY2=1688" })
  this._callSubscriber(this._state);
}
},
}

export const AddNewPostActionCreater = () => ({ type: ADD_NEW_POST, });
export const UpdateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const SendMessageCreater = () => ({ type: SEND_MESSAGE, });
export const UpdateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });



export default store;
