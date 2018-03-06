export default (state = [], action) => {
    switch (action.type) {
        case 'GET_SUBCATEGORY_SUCCESS':
            console.log(action)
            return {
                ...state,
                getSuccess: action.getSubCategory.data,
                error: null
            }
        case 'GET_SUBCATEGORY_REJECTED':

            return {
                ...state,
                getRejected: action.getSubCategory.data,
                error: null
            }
        default:
            return state;
    }
};

