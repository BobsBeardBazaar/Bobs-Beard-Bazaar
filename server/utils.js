
// Helper function, creates a new Error instance
export const createError = (status, message) => {
    const err = new Error();
    err.message = message;
    err.status = status;
    return err;
}

