import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';

export default (id) => {
          return dispatch => {
            axios({
              method: 'delete',
              url: BaseUrl.RestUrl+"schedule/delete_schedule/"+id,
             
              headers: {
                'Content-Type': "application/json"
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "DELETE_SCHEDULE_SUCCESS",
                  deleteSchedule: data
       
                });
              }).catch(error => {
                console.log("got error while updating---> ", error);
                dispatch({ type: "DELETE_SCHEDULE_REJECTED" , deleteSchedule: error});
              });
          }

        
}


