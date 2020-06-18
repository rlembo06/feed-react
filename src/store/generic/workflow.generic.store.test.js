import { expect } from 'chai';
import { call, select, put } from 'redux-saga/effects';
import { mockResponse } from 'api/modules/mocks.module.api';
import WorkflowGenericStore from './workflow.generic.store';
import GenericActions from './actions.generic.store';

describe('WorkflowGenericStore', () => {

    const mockState = {
        feeds: {
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
        }
    };

    const moduleName = 'feeds';

    const API = {
        feeds: {
            getAll: () => ({
                data: {
                    data: mockResponse
                }
            }),
        },
    };

    const workflow = new WorkflowGenericStore(moduleName);
    const actions = new GenericActions(moduleName);

    describe('getAll()', () => {
        it('all yield should work correctly', () => {
            const payload = { skip: 10 };
            const gen = workflow.getAll(moduleName, API, { payload });

            expect(gen.next().value).to.eql(call(API.feeds.getAll, payload));
            expect(gen.next({ data: mockResponse }).value.type).to.eql(put(actions.SET_LIST).type);
        });
    });

    describe('addInList()', () => {
        it('all yield should work correctly', () => {
            const payload = { skip: 10 };
            const gen = workflow.addInList(moduleName, API, { payload });

            expect(gen.next().value).to.eql(call(API.feeds.getAll, payload));
            expect(gen.next({ data: mockResponse }).value.type).to.eql(select(() => mockState[moduleName].list.data).type);
            expect(gen.next(mockResponse.results).value.type).to.eql(put(actions.SET_LIST).type);
        });
    });

});
