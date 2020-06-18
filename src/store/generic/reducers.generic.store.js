import { GenericActions } from 'store/generic';

/**
 * Mutations for set state in store, run by actions
 * - New mutation: Before, create an action (ActionsGenericStore ?) and its type.
 */
export default class GenericReducers {
    constructor(moduleName) {
        this.actions = new GenericActions(moduleName);
        this._moduleName = moduleName;
    }

    /**
     * For run all mutations, called in index of module (ModuleGenericStore), in runReducer function.
     */
    getReducers(inputState, inputAction) {
        const { actions } = this;
        return ({
            [actions.ADD.type]: (initialState, initialAction) => {
                const state = inputState || initialState;
                const action = inputAction || initialAction;
                return {
                    ...state,
                    list: {
                        ...state.list,
                        data: state.list.data && state.list.data.length > 0
                            ? [...state.list.data, action.payload]
                            : [action.payload]
                    }
                }
            },

            [actions.REMOVE.type]: (initialState, initialAction) => {
                const state = inputState || initialState;
                const action = inputAction || initialAction;
                const dataList = [...state.list.data];
                return {
                    ...state,
                    list: {
                        ...state.list,
                        data: dataList.filter(item => item._id !== (action.payload._id || action.payload))
                    }
                }
            },

            [actions.CLEAR.type]: initialState => {
                const state = inputState || initialState;
                return {
                    ...state,
                    list: {
                        metaData: null,
                        data: [],
                        isFetching: false,
                    }
                }
            },

            [actions.GET_ALL.type]: initialState => {
                const state = inputState || initialState;
                return {
                    ...state,
                    list: {
                        ...state.list,
                        isFetching: true,
                    }
                }
            },

            [actions.SET_LIST.type]: (initialState, initialAction) => {
                const state = inputState || initialState;
                const action = inputAction || initialAction;
                return {
                    ...state,
                    list: {
                        ...state.list,
                        data: action.payload.data || [],
                        metaData: action.payload.metaData || null,
                        isFetching: false,
                    }
                }
            },
        })
    }
}
