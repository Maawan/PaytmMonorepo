import prisma from "@repo/db";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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