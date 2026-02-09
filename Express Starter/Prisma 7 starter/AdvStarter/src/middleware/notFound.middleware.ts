import { RequestHandler } from "express";

export const notFound : RequestHandler = (req, res) => {
    return res.status(404).json({success:false, message:"not found"});
}