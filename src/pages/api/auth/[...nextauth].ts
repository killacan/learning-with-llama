import NextAuth from "next-auth";
import { authOptions } from "~/server/auth";

export default NextAuth({...authOptions,
    secret: process.env.TOKEN_SECRET, 
    // pages: {
    //     signIn: '/signin'
    // }
    });

// providers: [
//     CredentialsProvider({
//         name: "Credentials",
//         credentials: {
//             username: { label: "Username", type: "text", placeholder: "jsmith" },
//             password: { label: "Password", type: "password" },
//         },
//         async authorize (credentials, req) {
//             const res = await fetch
//         }
//     })
// ]

