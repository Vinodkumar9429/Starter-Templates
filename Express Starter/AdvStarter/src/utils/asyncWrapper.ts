export const asyncWrapper = <T extends (req : any, res:any, next?:any) => Promise<any> >(fn:T) => {
    return (req : Parameters<T>[0], res:Parameters<T>[1], next:Parameters<T>[2])=>{
        Promise.resolve(fn(req, res, next)).catch(err => next(err));
    }
}