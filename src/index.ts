import { openapi } from "@elysiajs/openapi"
import { Elysia } from "elysia"
import { auth } from "./lib/auth"

const app = new Elysia().use(openapi()).mount(auth.handler).listen(8000)
console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
