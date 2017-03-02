
// Helper function, creates a new Error instance
const createError = (status, message) => {
    const err = new Error();
    err.message = message;
    err.status = status;
    return err;
}

module.exports = { createError };

