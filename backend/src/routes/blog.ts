import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const bookRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();

// bookRouter.use(async (c, next) => {
//     const jwt = c.req.header("Authorization");
// 	if (!jwt) {
// 		c.status(401);
// 		return c.json({ error: "unauthorized" });
// 	}
// 	// const token = jwt.split(' ')[1];
// 	const payload = await verify(jwt, c.env.JWT_SECRET);
// 	if (payload) {
// 		c.status(200);
// 		c.set("userId", payload.id);
// 	    await next()
// 		// return c.json({ error: "unauthorized" });
// 	}
// 	else{
// 		c.status(403);
// 		return c.json({
// 			message:"you are not login"
// 		})
// 	}
// 	//  @ts-ignore
	

// });
bookRouter.use(async (c, next) => {
    const jwt = c.req.header("Authorization");
    if (!jwt) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }

    // Uncomment if using Bearer token
    // const token = jwt.split(' ')[1];

    try {
        const payload = await verify(jwt, c.env.JWT_SECRET);
        if (payload) {
			// @ts-ignore
            c.set("userId", payload.id);
            return next(); // Proceed to the next middleware
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
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	prisma.post.update({
		where: {
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

bookRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
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