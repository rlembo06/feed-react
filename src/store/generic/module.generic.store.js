import { createReducer } from '@reduxjs/toolkit';
import GenericModelState from "./state.generic.store";

/**
 * Generic Module class for keep structure data in store.
 */
export default class GenericModule {
    /**
     * @param moduleName: Name of module
     * @param state: State of module in store
     * @param reducers: Mutations for set state in store, run by actions
     */
    constructor(moduleName, state = new GenericModelState(), reducers) {
        this.moduleName = moduleName;
        this.state = state;
        this.reducers = reducers;
    }

    /**
     * For run the module in index of store.
     */
     getReducers() {
        return createReducer(this.state, this.reducers.getReducers());
     }
}
