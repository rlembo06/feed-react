import { all, takeLatest, call, put } from "@redux-saga/core/effects";
import GenericActions from "./actions.generic.store";
import { camelToSnake } from '../../helpers/stringConverters.helper';

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

     getAll = function* (moduleName, api) {
        console.log('GENERIC getAll');
        const actions = new GenericActions(moduleName);
        const response = yield call(api.users.getAll);
        if(response) {
            yield put(actions.SET_LIST(response));
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
