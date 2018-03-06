import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';


export default (row,passData) => {
        return dispatch => {
            axios({
                method: 'put',
                url: BaseUrl.RestUrl+'user/changeUserPrivilage',
                data:{
                    userid:row.original._id,
                    user_status:passData.user_status
                }
            }).then(response => {
                var data = response;
                console.log('action  data===',data)
                dispatch({
                  type: "USER_PRIVILAGE_SUCCESS",
                  userPrevilage: data
                });
              }).catch(error => {
                console.log('--------------',error)
                dispatch({ type: "USER_PRIVILAGE_REJECTED" , userPrevilage: error });
              });
          }

        
}