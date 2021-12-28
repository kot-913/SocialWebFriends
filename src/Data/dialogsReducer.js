const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messageData.push({ id: 6, message: body, imgUrl: "https://specials-images.forbesimg.com/imageserve/5e3ac70bf50e1a000723ee2b/0x800.jpg?cropX1=0&cropX2=1280&cropY1=0&cropY2=1688" })
                return state;
        default:
            return state;
}
}

export const SendMessageCreater = () => ({ type: SEND_MESSAGE, });
export const UpdateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;
