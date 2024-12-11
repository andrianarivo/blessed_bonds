export const hello = () => "Hello World!";

export const me = (_: any, __: any, context: { user: any }) => {
  return context.user;
};
