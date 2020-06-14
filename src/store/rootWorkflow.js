import { spawn, all } from 'redux-saga/effects';

import { GenericWorkflow } from 'store/generic';

export default function* (apis) {
    const usersWorkflows = new GenericWorkflow('users').runWorkflow;
    const activitiesWorkflows = new GenericWorkflow('activities').runWorkflow;

    yield all([
        spawn(usersWorkflows(apis)),
        spawn(activitiesWorkflows(apis)),
    ])
}
