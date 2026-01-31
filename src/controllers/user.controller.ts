import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "../config/http.config";
import { getCurrentUserService } from "../services/user.service";
import  UserModel  from "../models/user.model";

export const getCurrentUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;

    const { user } = await getCurrentUserService(userId);

    return res.status(HTTPSTATUS.OK).json({
      message: "User fetch successfully",
      user,
    });
  }
);

// const users = [
//   {
//     _id: "696cf9ae99483888405eaf55",
//     name: "Alice Johnson",
//     email: "alice.j@example.com",
//     role: "admin",
//     status: "active",
//     createdAt: "2024-01-15T10:30:00Z"
//   },
//   {
//     _id: "696cf9ae99483888405eaf56",
//     name: "Bob Smith",
//     email: "bob.smith@provider.net",
//     role: "user",
//     status: "pending",
//     createdAt: "2024-02-10T14:20:00Z"
//   },
//   {
//     _id: "696cf9ae99483888405eaf57",
//     name: "Charlie Davis",
//     email: "charlie.d89@webmail.com",
//     role: "user",
//     status: "active",
//     createdAt: "2024-03-05T09:15:00Z"
//   }
// ];

// export const getAllUserController = asyncHandler(
//   async(req: Request, res: Response) => {
//   // const users = await UserModel.find().select('name email');

//     const employees = users.filter(e => e.status === "active").map(e => ({
//       id: e._id,
//       name: e.name,
//       email: e.email,
//       role: e.role,
//       status: e.status
//     }));

//     if(employees.length == 0)
//       return res.status(HTTPSTATUS.NOT_FOUND).json({
//         message: "Users not found"
//       })

//     return res.status(HTTPSTATUS.OK).json({
//       message: "Users Fetched successfully",
//       employees
//     })
//   }
// )


export const getAllUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const users = await UserModel.find();

    return res.status(HTTPSTATUS.OK).json({
      message: "Users fetched successfully",
      users,
    });
  }
);

