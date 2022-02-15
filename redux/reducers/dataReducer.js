import { defaultConfig } from "next/dist/server/config-shared"
import { SET_SCREAMS, LOADING_DATA, POST_SCREAM } from "../types"

const initialState = {
    screams: [],
    scream: {},
    loading: false
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_SCREAMS:
            return {
                ...state,
                screams: actions.payload,
                loading: false
            }
        case POST_SCREAM:
            return {
                ...state,
                screams: [
                    action.payload,
                    ...state.screams
                ]
            }
        default:
            return { initialState }
    }
}