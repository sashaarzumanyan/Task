const initialState={
    courses:[
        {
            lesson: 'Illustration',
            time: 134,
            lessonCount: 24,
            img: 'https://cdn.mos.cms.futurecdn.net/ZcD9zyBoBHt6ATTFmZHr5B.jpg',
            rank: "Popular"
        },
        {
            lesson: 'Illustration',
            time: 134,
            lessonCount: 24,
            img: 'https://cdn.mos.cms.futurecdn.net/ZcD9zyBoBHt6ATTFmZHr5B.jpg',
            rank: "Popular"
        },
        {
            lesson: 'Graphic design',
            time: 236,
            lessonCount: 30,
            img: 'https://www.creatopy.com/blog/wp-content/uploads/2019/08/graphicDesignTips2.png',
            rank: "Favorite"
        },
        {
            lesson: 'C++',
            time: 455,
            lessonCount: 90,
            img: 'https://www.simplilearn.com/ice9/webinar_thum_image/CPP_Tutorial.jpg',
            rank: "New"

        }
    ],
    rating: "Popular"
}
export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_STATE":
            return state
        case "SET_RATING":
            return {
                ...state,
               rating: action.payload
            }
        default:
            return state
            
    }
} 