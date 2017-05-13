export function error(message, errors = []) {
    return {
        message,
        errors,
    };
}
