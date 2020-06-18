/**
 * Types bound with their actions, according to their module.
 * @param moduleName
 */
const GenericEvents = moduleName => ({
    GET_ALL: `@${moduleName}/GET_ALL`,
    GET_BY_ID: `@${moduleName}/GET_BY_ID`,
    SET_LIST: `@${moduleName}/SET_LIST`,
    ADD: `@${moduleName}/ADD`,
    REMOVE: `@${moduleName}/REMOVE`,
    CLEAR: `@${moduleName}/CLEAR`,
    ADD_IN_LIST: `@${moduleName}/ADD_IN_LIST`,
});

export default GenericEvents;
