import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { name, email, company, message } = await req.json();
        
        // Create contact form entry using Prisma
        const contactForm = await prisma.contactForm.create({
            data: {
                name,
                email,
                company_name: company,
                message
            },
            
        });
        
        console.log("Contact form submitted:", contactForm);
        return NextResponse.json({ message: "Message received!", success: true });
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return NextResponse.json(
            { message: "Failed to submit form", success: false },
            { status: 500 }
        );
    }
}