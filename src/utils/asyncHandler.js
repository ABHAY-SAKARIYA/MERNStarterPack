
// Creating an async handler higher order function using async await
const asyncHandler = (requestHandler) => async (req, res, next) => {
    try {
        return await requestHandler(req, res, next);
    } catch (error) {
        return res.status(error.code || 500 ).json({
            type: "ERROR",
            msg: error.message
        })
    }
}


// Creating an async handler higher order function using promise
/*

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => {next(err)})
    }
}

*/


export { asyncHandler }