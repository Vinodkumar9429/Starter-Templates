import 'express';

declare global {
    namespace Express {
        interface Request {
            User?:{
                id:number,
                name:string,
                age:number
            }
        }
    }
}

export {};