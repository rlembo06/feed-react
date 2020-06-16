import { all, takeLatest, call, put, select } from "@redux-saga/core/effects";
import { GenericActions } from 'store/generic';
import { camelToSnake } from 'helpers/stringConverters.helper';

/**
 * Class for create generators.
 * - New workflow: Before, create an action (ActionsGenericStore ?) and its type as a generator trigger.
 */
export default class WorkflowGenericStore {
    constructor(moduleName) {
        this.moduleName = moduleName;
    }

    /**
     * For detected and collect all generators.
     */
     getGenerators = () => {
        let generators = [];
        for (const [key, value] of Object.entries(this)) {
            if (Object.getPrototypeOf(value) === Object.getPrototypeOf(function*() {})) {
                generators.push({ gen: key, fn: value });
            }
        }
        return generators;
     };

    getAll = function* (moduleName, api, { payload: query }) {
        const actions = new GenericActions(moduleName);
        const response = yield call(api[moduleName].getAll, query);
        if(response && response.data && response.data.results && response.data.metaData) {
            const { results: data, metaData } = response.data;
            yield put(actions.SET_LIST({
                data,
                metaData,
            }));
        }
    };

    addInList = function* (moduleName, api, { payload: query }) {
        const actions = new GenericActions(moduleName);
        const response = yield call(api[moduleName].getAll, query);
        if(response && response.data && response.data.results && response.data.metaData) {
            const { results: newData, metaData } = response.data;
            const data = yield select(state => state[moduleName].list.data);
            const list = data.concat(newData);
            console.log('addInList / list: ', list)
            yield put(actions.SET_LIST({
                data: list,
                metaData,
            }));
        }
    };

    /**
     * For run all generators bound by its action and its type, in rootWorkflow file.
     * @param api
     */
     runWorkflow = api => {
        const { moduleName, getGenerators } = this;
        const generators = getGenerators();

        return function* () {
            const triggers = generators.map(({gen, fn}) => {
                const workflowSnakeCaseName = camelToSnake(gen).toUpperCase();

                return takeLatest(`@${moduleName}/${workflowSnakeCaseName}`, fn, moduleName, api);
            });
            yield all(triggers)
        };
     }
}
