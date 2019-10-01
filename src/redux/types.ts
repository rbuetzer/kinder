type TFunction = (...args: any) => any;

export type TActionType<
  TActions extends { [key: string]: TFunction }
> = ReturnType<TActions[keyof TActions]>;
