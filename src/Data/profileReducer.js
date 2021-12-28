const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    postData: [
        { id: 1, title: "What are you doing?", countLike: 23 },
        { id: 2, title: "Call me!!!", countLike: 17 },
        { id: 3, title: "This is my first message!", countLike: 8 },
      ],
      newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_POST:
            let newPost = {
                id: 4, title: state.newPostText, countLike: 23,
            };
            state.postData.push(newPost);
            state.newPostText = ""; 
            return state;
        case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return state;
        default:
            return state;
}
}

export const AddNewPostActionCreator = () => ({ type: ADD_NEW_POST, });
export const UpdateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;