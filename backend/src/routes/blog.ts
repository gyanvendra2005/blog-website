import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify, decode } from "hono/jwt";

export const bookRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();

bookRouter.use(async (c, next) => {
    const jwt = c.req.header("Authorization");
    if (!jwt) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }

    try {
        const payload = await verify(jwt, c.env.JWT_SECRET);
        if (payload) {
			// @ts-ignore
            c.set("userId", payload.id);
            return next();
        } else {
            c.status(403);
            return c.json({ message: "you are not logged in" });
        }
    } catch (error) {
        console.error("Token verification failed:", error);
        c.status(403);
        return c.json({ message: "you are not logged in" });
    }
});


bookRouter.post('/', async (c) => {
	const userId = c.get("userId");
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId
		}
	});
	return c.json({
		id: post.id
	});
})

bookRouter.put('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	prisma.post.update({
		where:{
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
});

bookRouter.get('get/:id', async (c) => {
	const id = c.req.param('id');
	const payload = await verify(id, c.env.JWT_SECRET);
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id
		}
	});

	return c.json(post);
})

bookRouter.get('/bulk', async (c)=>{
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

bookRouter.get('/myblog/:id', async (c) => {
    const id = c.req.param('id');
    let prisma;

    try {
        // Decode the JWT token
        const { header, payload } = decode(id);
        
        console.log('Decoded Header:', header);
        console.log('Decoded Payload:', payload);

        // Check if payload has the expected structure
        if (!payload || !payload.id) {
            return c.status(401)
        }

        prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        const posts = await prisma.post.findMany({
            where: {
                authorId: payload.id, // assuming payload contains authorId
            },
            select: {
                content: true,
                title: true,
                author: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return c.json({ posts });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return c.status(500)
    } 
});


bookRouter.get('/saved', async (c)=>{
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const posts = await prisma.post.findMany({
		where:{
          bookmark:true
		},
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


