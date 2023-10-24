export const getErrorMessage = (error: unknown) => {
    let requestError;
    if (typeof error === 'string') {
        requestError = error.toUpperCase();
    } else if (error instanceof Error) {
        requestError = error.message;
    }
    return requestError;
};
