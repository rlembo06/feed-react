/**
 * In order to convert string from camel case to snake case
 * @param camelCase String to be converted
 * @returns {string} String converted in snake case
 */
export const camelToSnake = camelCase =>
    camelCase.replace(/[\w]([A-Z])/g, (m) => m[0] + "_" + m[1]).toLowerCase();

/**
 * In order to convert string from snake case to camel case
 * @param snakeCase String to be converted
 * @returns {*|void|string} String converted in camel case
 */
export const snakeToCamel = snakeCase =>
    snakeCase.replace(/(_\w)/g, (m) => m[1].toUpperCase());
