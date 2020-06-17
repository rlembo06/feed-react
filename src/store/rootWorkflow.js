import { spawn, all } from 'redux-saga/effects';

import { GenericWorkflow } from 'store/generic';

export default function* (apis) {
    const activitiesWorkflows = new GenericWorkflow('feeds').runWorkflow;

    yield all([
        spawn(activitiesWorkflows(apis)),
    ])
}
