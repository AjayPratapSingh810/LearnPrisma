"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//   const res = await prisma.user.create({
//     data:{
//         username,
//         password,
//         firstName,
//         lastName,
//     }
//   });
//   console.log("response -> ",res);
// }
// insertUser("ajay123","password@123","ajay","pratap");
// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }
// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//   const res = await prisma.user.update({
//     where: { username },
//     data: {
//       firstName,
//       lastName
//     }
//   });
//   console.log(res);
// }
// updateUser("ajay123", {
//     firstName: "ajay pratap",
//     lastName: "singh"
// })
// async function getUser(username: string) {
//     const user = await prisma.user.findFirst({
//       where: {
//           username: username
//       }
//     })
//     console.log(user);
//   }
//   getUser("ajay123");
// async function createTodo(userId: number, title: string, description: string) {
//     const todo = await prisma.todo.create({
//       data: {
//         title,
//         description,
//         userId
//       },
//     });
//     console.log(todo);
//   }
//   createTodo(1, "go to gym", "go to gym and do 10 pushups");
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
            where: {
                userId: userId,
            },
            select: {
                user: true,
                title: true,
                description: true
            }
        });
        console.log(todos);
    });
}
getTodosAndUserDetails(1);
