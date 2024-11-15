import { AxiosError } from 'axios';

export type TryCatchResult<T> = Promise<[T, undefined] | [undefined, Error]>;

export async function handleTryCatch<T>(
  promise: (() => Promise<T>) | Promise<T> | (() => T),
): TryCatchResult<T> {

  const currentPromise = typeof promise === 'function' ? promise() : promise;

  try {
    const result = await currentPromise;
    return [result, undefined];
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return [undefined, {
        ...error,
        message: error.response?.data?.message
      }];
    }
    return [undefined, error as Error];
  }
}