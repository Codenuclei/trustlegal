import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Example: Create a new todo item
        const todo = await prisma.todo.create({
            data: {
                title: body.title,
                content: body.content || "",
                userId: body.userId,
            },
        });

        return NextResponse.json(todo, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create todo" },
            { status: 500 }
        );
    }
}