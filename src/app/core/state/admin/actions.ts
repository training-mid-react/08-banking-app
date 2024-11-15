export const adminActions = {
  SOME_ACTION: 'SOME_ACTION',
  REGISTER_USER: 'REGISTER_USER',
};

export const someFunction = () => ({
  type: adminActions.SOME_ACTION,
  payload: { val: "value" },
});