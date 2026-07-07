"use server"
import prisma from "@repo/db";
import bcrypt from "bcryptjs";

interface RegisterUser {
    name: string,
    email: string,
    phone: string,
    password: string
}

export async function registerUser(userDetails : RegisterUser){
    const {name , email, phone , password} = userDetails;

    if(!name || !email || !phone || !password){
        return { error : "All fields are required"}
    }

    if(password.length < 6){
        return {error : "Password must be at least 8 character"}
    }

    const existingUser = await prisma.user.findFirst({
        where: { OR: [{ email }, { number: phone }] },
    });

    if(existingUser){
        const conflictField = existingUser.email === email ? "email" : "phone number";
        return { error: `An account with this ${conflictField} already exists` };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: { name, email, number: phone, password: hashedPassword },
    });

    return { success: true };
}