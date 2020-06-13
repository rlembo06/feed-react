export const camelToSnake = camelCase =>
    camelCase.replace(/[\w]([A-Z])/g, (m) => m[0] + "_" + m[1]).toLowerCase();

export const snakeToCamel = snakeCase =>
    snakeCase.replace(/(_\w)/g, (m) => m[1].toUpperCase());
