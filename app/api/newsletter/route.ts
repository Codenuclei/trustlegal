import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        const existingSubscription = await prisma.newsletter.findUnique({
            where: { email },
        });

        if (existingSubscription) {
            return NextResponse.json({ message: 'Email already subscribed' }, { status: 200 });
        }

        const newSubscription = await prisma.newsletter.create({
            data: {
                email,
                user: {
                    connect: {
                        id: 'cm7zlj90b0000uqyg6ggelsbr' // Replace with actual user ID or use another approach
                    }
                }
            },
        });

        return NextResponse.json({ message: 'Subscribed successfully', data: newSubscription }, { status: 201 });
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json({ error: 'Failed to subscribe to newsletter' }, { status: 500 });
    }
}