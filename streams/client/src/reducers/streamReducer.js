import _ from 'lodash'

export const streamReducer = (state = {}, action) => {
    switch(action.type){
        case 'CREATE_STREAM':
            return {...state, [action.payload.id] : action.payload}
        case 'GET_STREAM_BY_ID':
            return {...state, [action.payload.id] : action.payload}
        case 'GET_ALL_STREAMS':
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case 'EDIT_STREAM_BY_ID':
            return {...state, [action.payload.id] : action.payload}
        case 'DELETE_STREAM_BY_ID':
            return _.omit(state, action.payload)
        default:
            return state
    }
}