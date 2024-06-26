// app/routes/auth/google.tsx
import { redirect, type ActionFunctionArgs } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export const loader = () => redirect("/login");

export const action = async ({ request }: ActionFunctionArgs) => {
	return authenticator.authenticate("google", request);
};
