import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (form) => {
          return dispatch => {
            axios({
              method: 'get',
              url: BaseUrl.RestUrl+"category/getall_category",
             
              headers: {
                'Content-Type': "application/json"
              }

            })
              .then(response => {
                var data = response
                console.log("response fetching thae data -- > ", data);
                dispatch({
                  type: "GET_CATEGORY_SUCCESS",
                  getCategory: data
       
                });
              }).catch(error => {
                console.log("got error while updating---> ", error);
                dispatch({ type: "GET_CATEGORY_REJECTED" , getCategory: error });
              });
          }

        
}
