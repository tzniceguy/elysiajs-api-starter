import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "@/db/"

export const auth = betterAuth({
	basePath: "/auth",
	database: drizzleAdapter(db, {
		provider: "sqlite", // or "mysql", "sqlite"
	}),
	emailAndPassword: {
		enabled: true,
	},
	jwt: {
		enabled: true,
	},
	session: {
		cookieCache: {
			enabled: false,
		},
	},
})
