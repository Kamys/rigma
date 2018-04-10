export interface IKeyValue {
    key: number;
    value: string;
}

/**
 * If callback failed return default.
 */
export const doOrDefault = function <P>(callback: () => P, defaultValue: P) {
    try {
        return callback();
    } catch (error) {
        console.log(`Failed get props return default value. defaultValue = ${defaultValue}`);
        return defaultValue;
    }
};

/**
 * If callback failed throw error. For required props.
 */
export const doOrError = function <P>(callback: () => P) {
    try {
        return callback();
    } catch (error) {
        console.log(`Failed get required props.`);
        throw {error};
    }
};

/**
 * Parse all Entities in Views. If parse failed skip entity.
 */
export const parseAll = function <E, V>(callback: (entity: E) => V, entities: E[]) {
    return entities.reduce((result, entity) => {
        try {
            result.push(callback(entity));
        } catch (error) {
            console.log(`Failed parse entity`, error);
        }
        return result;
    }, [] as any);
};

/**
 * Parse Entity in View. If parse failed throw error.
 */
export const parse = function <E, V>(callback: (entity: E) => V, entity: E): V {
    try {
        return callback(entity);
    } catch (error) {
        console.log(`Failed parse entity`, error);
        throw {error};
    }
};
