import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    '/', 
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
  ],
};
