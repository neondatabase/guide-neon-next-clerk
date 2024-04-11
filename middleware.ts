import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that should be accessible without signing in can be defined as
  // strings in this array, e.g, your home page, or a sign in page.
  publicRoutes: [],
});

export const config = {
  // Protects all routes - https://clerk.com/docs/references/nextjs/auth-middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};
