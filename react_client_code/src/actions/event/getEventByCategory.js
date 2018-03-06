import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (form,callback) => {
        return dispatch => {
            axios({
              method: 'post',
              url: BaseUrl.RestUrl+"event/findeventByCategoryId",
              data: form,
              headers: {
                'Content-Type': "application/json"
              }

            })
              .then(response => {
                var data = response;
                callback(data);
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "GET_EVENT_BY_CATEGORY_SUCCESS",
                  findEventByCategory: data
                });
              }).catch(error => {
                callback(error)
                console.log("got error while updating---> ", JSON.stringify(error.response.data));
                dispatch({ type: "GET_EVENT_BY_CATEGORY_REJECT" , findEventByCategory: error.response.data });
              });
          }

        
}


