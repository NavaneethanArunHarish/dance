export default (state = [], action) => {
    
      switch (action.type) {
        case 'CREATE_ASSETS_SUCCESS':
          return {
            ...state,
            createSuccess: action.createAssets.data,
            error: null
          }
        case 'CREATE_ASSETS_REJECTED':
    
        return {
            ...state,
            createRejected: action.createAssets,
            error: null
          }
        case 'RECEIVE_ALL_ASSETS':
          
        return {
            ...state,
            getAssetSuccess: action.payload.data,
            error: null
          }

        case 'DELETE_ASSETS_SUCCESS':
          
        return {
            ...state,
            deleteAssetSuccess: action.deleteAsserts.data,
            error: null
          }
        
        case 'DELETE_ASSETS_REJECTED':
          
        return {
            ...state,
            deleteAssetReject: action.deleteAsserts.data,
            error: null
          }

        default:
          return state;
      }
    };