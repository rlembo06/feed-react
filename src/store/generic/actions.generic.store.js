import { createAction } from '@reduxjs/toolkit';
import genericEvents from './events.generic.store';

/**
 * - Dispatch: Dispatch these actions from components or from workflow.
 * - New action: Before to create a action, create a type and bind both with "createAction" in constructor of this class.
 */
export default class GenericActions {
    constructor(moduleName) {
        this._GET_BY_ID = createAction(genericEvents(moduleName).GET_BY_ID);
        this._GET_ALL = createAction(genericEvents(moduleName).GET_ALL);
        this._SET_LIST = createAction(genericEvents(moduleName).SET_LIST);
        this._ADD = createAction(genericEvents(moduleName).ADD);
        this._REMOVE = createAction(genericEvents(moduleName).REMOVE);
        this._CLEAR = createAction(genericEvents(moduleName).CLEAR);
    }

    get GET_BY_ID() {
        return this._GET_BY_ID;
    }

    set GET_BY_ID(value) {
        this._GET_BY_ID = value;
    }

    get GET_ALL() {
        return this._GET_ALL;
    }

    set GET_ALL(value) {
        this._GET_ALL = value;
    }

    get SET_LIST() {
        return this._SET_LIST;
    }

    set SET_LIST(value) {
        this._SET_LIST = value;
    }

    get ADD() {
        return this._ADD;
    }

    set ADD(value) {
        this._ADD = value;
    }

    get REMOVE() {
        return this._REMOVE;
    }

    set REMOVE(value) {
        this._REMOVE = value;
    }

    get CLEAR() {
        return this._CLEAR;
    }

    set CLEAR(value) {
        this._CLEAR = value;
    }
}
