// lib/auth.ts

import prisma from "@repo/db";
import bcrypt from "bcryptjs";
// import type { User } from "@repo/db";
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
        const user = await prisma.user.findFirst({
          where : {
            email : credentials?.email
          }
        })
        if(!user){
          throw new Error("Wrong credentails")
        }
        const isPasswordCorrect = await bcrypt.compare(credentials?.password || "" , user?.password || "");

        if(!isPasswordCorrect){
          throw new Error("Wrong credentails")
        }
        const response = {
          id : String(user?.id),
          name : user?.name,
          email : user?.email,
          phone : user?.number
        }
        return response;
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