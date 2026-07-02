// lib/auth.ts

import prisma from "@repo/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        console.log(credentials);
        const users = await prisma.user.findFirst({
          where : {
            email : credentials?.email
          }
        })
        if(!users){
          await prisma.user.create({
            data : {
              name : "Sample Name",
              email : credentials?.email,
              password : credentials?.password || "",
              number : ""
            }
          })
        }
        
        return {
          id: "1",
          name: "Sample Uer",
          email: "user@user.com",
        };
      },
      
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};