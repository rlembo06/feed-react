import { expect } from 'chai';
import { GenericModelState, GenericReducers, GenericModule, GenericActions } from "store/generic/index";

describe('GenericActions', () => {
    const moduleName = 'feeds';

    const moduleGen = new GenericModule(moduleName, new GenericModelState(), new GenericReducers(moduleName));
    const actions = new GenericActions(moduleName);

    const initialState = {
        selected: {
            metaData: null,
            data: null,
            isFetching: false,
        },
        list: {
            metaData: null,
            data: [],
            isFetching: false,
        },
    };

    describe('ADD', () => {
        it('return in store one item in data list empty', () => {
            const payload = { _id: '1', name: 'test' };
            const stateExpected = {
                ...initialState,
                list: {
                    ...initialState.list,
                    data: [{ _id: '1', name: 'test' }]
                }
            };

            const state = moduleGen.reducers.getReducers(initialState, actions.ADD(payload))[actions.ADD]();

            expect(state).to.eql(stateExpected);
        });

        it('return in store one item in data list not empty', () => {
            const payload = { _id: '2', name: 'stuff' };
            const initialStateUpdated = {
                ...initialState,
                list: {
                    ...initialState.list,
                    data: [{ _id: '1', name: 'test' }]
                }
            };
            const stateExpected = {
                ...initialState,
                list: {
                    ...initialState.list,
                    data: [{ _id: '1', name: 'test' }, { _id: '2', name: 'stuff' }]
                }
            };

            const state = moduleGen.reducers.getReducers(initialStateUpdated, actions.ADD(payload))[actions.ADD]();

            expect(state).to.eql(stateExpected);
        });

    });

    describe('REMOVE', () => {
        it('return in store one item in removed in data list', () => {
            const payload = { _id: '3', name: 'thing' };
            const initialStateUpdated = {
                ...initialState,
                list: {
                    ...initialState.list,
                    data: [{ _id: '1', name: 'test' }, { _id: '2', name: 'stuff' }, { _id: '3', name: 'thing' }]
                }
            };
            const stateExpected = {
                ...initialState,
                list: {
                    ...initialState.list,
                    data: [{ _id: '1', name: 'test' }, { _id: '2', name: 'stuff' }]
                }
            };

            const state = moduleGen.reducers.getReducers(initialStateUpdated, actions.REMOVE(payload))[actions.REMOVE]();

            expect(state).to.eql(stateExpected);
        });
    });

    describe('CLEAR', () => {
        it('return in store a data list clead', () => {
            const initialStateUpdated = {
                ...initialState,
                list: {
                    ...initialState.list,
                    data: [{ _id: '1', name: 'test' }, { _id: '2', name: 'stuff' }, { _id: '3', name: 'thing' }]
                }
            };
            const stateExpected = {
                ...initialState,
                list: {
                    ...initialState.list,
                    data: []
                }
            };

            const state = moduleGen.reducers.getReducers(initialStateUpdated, actions.CLEAR())[actions.CLEAR]();

            expect(state).to.eql(stateExpected);
        });
    });

    describe('GET_ALL', () => {
        it('return in store a isFetching TRUE', () => {
            const initialStateUpdated = {
                ...initialState,
                list: {
                    ...initialState.list,
                    isFetching: false
                }
            };
            const stateExpected = {
                ...initialState,
                list: {
                    ...initialState.list,
                    isFetching: true
                }
            };

            const state = moduleGen.reducers.getReducers(initialStateUpdated, actions.GET_ALL())[actions.GET_ALL]();

            expect(state).to.eql(stateExpected);
        });
    });

    describe('SET_LIST', () => {
        it('return in store a dataList updated with data added', () => {
            const payload = {
                data: [{ _id: '1', name: 'test' }, { _id: '2', name: 'stuff' }, { _id: '3', name: 'thing' }],
                metaData: {
                    skip: 0,
                    limit: 30,
                    total: 2000,
                }
            };

            const stateExpected = {
                ...initialState,
                list: {
                    ...initialState.list,
                    data: payload.data,
                    metaData: payload.metaData,
                    isFetching: false,
                }
            };

            const state = moduleGen.reducers.getReducers(initialState, actions.SET_LIST(payload))[actions.SET_LIST]();

            expect(state).to.eql(stateExpected);
        });
    });

});
