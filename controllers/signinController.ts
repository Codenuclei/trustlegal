import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { z } from "zod";
import { UserLogin } from "@/types/UserLogin";

export const Signin = async ( body: string) => {
    if (!body) {
        return NextResponse.json(
          { message: "Invalid request body" },
          { status: 400 }
        );
      }
      try {
        const result = UserLogin.safeParse(body);
        if (!result.success) {
          return NextResponse.json(
            result.error.errors.map((error) => ({ message : error.message })),
            { status: 400 }
          );
        }
        const { email, Password } = result.data;
        if (!email || !Password) {
          return NextResponse.json(
            { message: "Missing required fields" },
            { status: 400 }
          );
        }
        let response;
        try {
          response = await prisma.user.findUnique({
            where: {
              email,
            },
          });
          if (!response) {
            return NextResponse.json(
              { message: "Email not Found" },
              { status: 404 }
            );
          }
        } catch (error) {
          if (error instanceof PrismaClientKnownRequestError) {
           console.log(error)  
           console.log("I m here") 
           return NextResponse.json(
              { message: "Invalid credentials" },
              { status: 400 }
            );
          }
          return NextResponse.json({ message: "Server Error" }, { status: 500 });
        }
        if (response.password === Password) {
          return NextResponse.json(
            { response },
            { status: 200 }
          );
        } else {
          return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 400 }
          );
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          return NextResponse.json(
            { message: "Validation failed", issues: error.issues },
            { status: 400 }
          );
        } else {
          return NextResponse.json(
            { message: "Unexpected error occurred", error },
            { status: 500 }
          );
        }
      }
}