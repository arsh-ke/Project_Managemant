class ApiError extends Error {
    constructor (
        statusCode,
        meassge="somthing want wrong",
        error =[],
        stack=""
     
    ){
    super(meassge);
        this.statusCode = statusCode;
        this.meassge = meassge;
        this.data="null";
        this.success = false;
        this.error = error
    
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }  
}  
export default ApiError;
