export const removeNullProperties = <T>(input: T | T[]): T | T[] => {
    if (Array.isArray(input)) {
        // If the input is an array, apply the function to each object in the array
        return input.map(obj => removeNullProperties(obj)) as T[];
    } else if (typeof input === 'object' && input !== null) {
        // If the input is an object, apply the existing logic to remove null properties
        const result: Partial<T> = {};

        for (const key in input) {
            if (input[key] !== null) {
                result[key] = input[key];
            }
        }

        return result as T;
    } else {
        // For non-object or non-array inputs, return them as they are
        return input;
    }
};
