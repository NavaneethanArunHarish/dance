
export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_SCHEDULER_SUCCESS':
            return {
                ...state,
                loading: true,
                createSuccess: action.createScheduler.data,
                error: null
            }
        case 'CREATE_SCHEDULER_REJECTED':

            return {
                ...state,
                loading: true,
                createRejected: action.createScheduler,
                error: null
            }
        case 'UPDATE_SCHEDULER_SUCCESS':
            return {
                ...state,
                loading: true,
                updateSuccess: action.updateScheduler.data,
                error: null
            }
        case 'UPDATE_SCHEDULER_REJECTED':

            return {
                ...state,
                loading: true,
                updateRejected: action.updateScheduler.data,
                error: null
            }
        case 'RECEIVE_ALL_SCHEDULER':

            return {
                ...state,
                loading: true,
                getSchedulerSuccess: action.payload.data,
                error: null
            }
        case 'RECEIVE_ALL_CATEGORY':

            return {
                ...state,
                loading: true,
                getCategorySuccess: action.payload.data,
                error: null
            }
        case 'RECEIVE_USERBY_ID':

            return {
                ...state,
                loading: true,
                getUserByIdSuccess: action.payload.data,
                error: null
            }
        case 'CREATE_SCHEDULE_DETAILS_SUCCESS':
            return {
                ...state,
                loading: true,
                createScheduleDetailSuccess: action.createScheduleDetails.data,
                error: null
            }
        case 'CREATE_SCHEDULE_DETAILS_REJECTED':

            return {
                ...state,
                loading: true,
                createScheduleDetailRejected: action.createScheduleDetails.data,
                error: null
            }
        case 'GET_SCHEDULE_DETAILS_BY_ID_SUCCESS':

            return {
                ...state,
                loading: true,
                findScheduleDetails: action.getScheduleDetails,
                error: null
            }

        case 'GET_SCHEDULE_DETAILS_BY_ID_REJECT':

            return {
                ...state,
                loading: true,
                findScheduleDetails: action.getScheduleDetails,
                error: null
            }

        case 'CREATE_ATTENDANCE_SUCCESS':

            return {
                ...state,
                loading: true,
                addAttendance: action.createAttendance.data,
                error: null
            }

        case 'CREATE_ATTENDANCE_REJECT':

            return {
                ...state,
                loading: true,
                addAttendance: action.createAttendance.data,
                error: null
            }

        case 'GET_SCHEDULES_BY_DATE_SUCCESS':

            return {
                ...state,
                loading: true,
                findScheduleByDate: action.getScheduleByDate.data,
                error: null
            }

        case 'GET_SCHEDULES_BY_DATE_REJECTED':

            return {
                ...state,
                loading: true,
                findScheduleByDate: action.getScheduleByDate.data,
                error: null
            }

        case 'RECEIVE_ALL_ATTENDANCE':

            return {
                ...state,
                loading: true,
                getAllAttendance: action.payload.data,
                error: null
            }

        case 'RECEIVE_SCHEDULE_BY_EVENT_ID':

            return {
                ...state,
                loading: true,
                getListScheduleDetail: action.payload.data,
                error: null
            }
        case 'RECEIVE_SCHEDULE_BY_CATEGORYALL_ID':

            return {
                ...state,
                loading: true,
                getListScheduleDetail: action.payload.data,
                error: null
            }
        case 'DELETE_SCHEDULE_SUCCESS':

            return {
                ...state,
                loading: true,
                deleteScheduleSuccess: action.deleteSchedule.data,
                error: null
            }

        case 'DELETE_SCHEDULE_REJECTED':

            return {
                ...state,
                loading: true,
                deleteScheduleReject: action.deleteSchedule.data,
                error: null
            }
        case "GET_SCHEDULE_DETAILS_SUCCESS":

            return {
                ...state,
                loading: true,
                getListScheduleDetail: action.getScheduleDetails.data,
                error: null
            }
        case "GET_SCHEDULE_DETAILS_REJECT":

            return {
                ...state,
                loading: true,
                getListScheduleDetailRejected: action.getScheduleDetails.error,
                error: null
            }

        default:
            return state;
    }


};