import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
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
}

getTodosAndUserDetails(1);