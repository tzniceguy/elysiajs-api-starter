import { openapi } from "@elysiajs/openapi"
import { type Context, Elysia } from "elysia"
import { auth } from "../auth"

const betterAuth = (context: Context) => {
	const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"]

	if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
		return auth.handler(context.request)
	} else {
		context.error(405)
	}
}
const app = new Elysia()
	.use(openapi())
	.all("/api/auth/*", betterAuth)
	.listen(3000)
console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
