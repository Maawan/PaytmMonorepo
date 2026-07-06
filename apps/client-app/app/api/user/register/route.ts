import prisma from "@repo/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, password } = body;

    if (!name || !email || !phone || !password) {
      return NextResponse.json(
        { error: "All fields (name, email, phone, password) are required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { number: phone }] },
    });

    if (existingUser) {
      const conflictField = existingUser.email === email ? "email" : "phone number";
      return NextResponse.json(
        { error: `An account with this ${conflictField} already exists` },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, number: phone, password: hashedPassword },
    });

    const { password: _password, ...safeUser } = user;

    return NextResponse.json(
      { message: "User created successfully", user: safeUser },
      { status: 201 }
    );
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json(
      { error: "Something went wrong while creating the user" },
      { status: 500 }
    );
  }
}