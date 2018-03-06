import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (id) => {
          return dispatch => {
            axios({
              method: 'delete',
              url: BaseUrl.RestUrl+"asset/delete_asset/"+id,
             
              headers: {
                'Content-Type': "application/json"
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "DELETE_ASSETS_SUCCESS",
                  deleteAsserts: data
       
                });
              }).catch(error => {
                console.log("got error while updating---> ", error);
                dispatch({ type: "DELETE_ASSETS_REJECTED" , deleteAsserts: error});
              });
          }

        
}


