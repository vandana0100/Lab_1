// TODO: install @clerk/clerk-sdk-node and set up real auth middleware
// This will check if requests come from authenticated front-end users

export const requireAuth = (req: any, res: any, next: any) => {
  // TODO: verify Clerk token from request
  console.log('TODO: check if user is authenticated');
  next();
};
