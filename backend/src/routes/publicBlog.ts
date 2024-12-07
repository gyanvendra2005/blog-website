import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";


export const bulkRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();


bulkRouter.get('/bulk', async (c)=>{
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const posts = await prisma.post.findMany({
		select:{
			content:true,
			title:true,
			author:{
				select:{
					name:true
				}
			}
		}
	});
	return c.json({
		posts
	});
})