import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { AuthOptions } from "@/lib/auth";
import prisma from "@/lib/db";

// GET endpoint to fetch all blogs
export async function GET() {
    try {
        const blogs = await prisma.blog.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                user: {
                    select: {
                        name: true,
                    }
                }
            }
        });

        return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}

// POST endpoint to create a new blog (requires admin)
export async function POST(req: NextRequest) {
    try {
        // Check authentication status and role
        const session = await getServerSession(AuthOptions);
        
        // Check if user is authenticated and is an admin
        if (!session || !session.user || session.user.role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        // Parse request body
        const { title, content, category, excerpt, slug, image, feature } = await req.json();
        
        // Validation
        if (!title || !content || !category || !slug) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }
        
        // Create blog post
        const blog = await prisma.blog.create({
            data: {
                title,
                content,
                category,
                excerpt: excerpt || "",
                slug,
                href: `/blog/${slug}`,
                image: image || "",
                feature: feature || false,
                user: { connect: { id: session.user.id } }
            }
        });
        
        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        console.error("Error creating blog:", error);
        return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
    }
}