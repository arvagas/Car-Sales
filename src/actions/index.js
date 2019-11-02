export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

// Fn no longer called since using Redux hooks
export const addFeature = item => {
    return {
        type: ADD_FEATURE,
        payload: item
    }
}

// Fn no longer called since using Redux hooks
export const removeFeature = item => {
    return {
        type: REMOVE_FEATURE,
        payload: item
    }
}
