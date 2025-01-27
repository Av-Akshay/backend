const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// node:- asyncHandler function return a async function

// const asyncHandler = (fn)=>{
//     return async (req,res,next)=>{
//           try {
//           await fn(req,res,next)

//           } catch (error) {
//             res.status(error?.code ||500).json({
//                 success:false,
//                 message:error?.message
//             })
//           }
//     }
// };

export { asyncHandler };
