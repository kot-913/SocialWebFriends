
const initialState = {
    sideBar: {
        friendOnLineData: [
            { id: 1, name: "Sasha", imgUrl: "https://specials-images.forbesimg.com/imageserve/5e3ac70bf50e1a000723ee2b/0x800.jpg?cropX1=0&cropX2=1280&cropY1=0&cropY2=1688" },
            { id: 2, name: "Lena", imgUrl: "https://i.insider.com/5c8045a4d2ce7802a110ce7b?width=1100&format=jpeg&auto=webp" },
            { id: 3, name: "Robert", imgUrl: "https://i.ytimg.com/vi/mAX9qzX_LQU/maxresdefault.jpg" }
        ],
      },
};

const navReducer = (state = initialState, action) => {
    return state;
}

export default navReducer;