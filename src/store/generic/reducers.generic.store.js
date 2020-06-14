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
     getReducers() {
        const { actions } = this;
        return ({
            [actions.ADD.type]: (state, action) => ({
                ...state,
                list: [...state.list, action.payload]
            }),

            [actions.REMOVE.type]: (state, action) => {
                const list = {...state.list};
                return {
                    ...state,
                    list: list.splice(action.payload, 1)
                }
            },

            [actions.CLEAR.type]: (state) => ({
                ...state,
                list: []
            }),

            [actions.GET_ALL.type]: state => ({
                ...state,
                list: {
                    ...state.list,
                    isFetching: true,
                }
            }),

            [actions.SET_LIST.type]: (state, action) => ({
                ...state,
                list: {
                    ...state.list,
                    data: action.payload.data || [],
                    metaData: action.payload.metaData || null,
                    isFetching: false,
                }
            }),
        })
    }
}
