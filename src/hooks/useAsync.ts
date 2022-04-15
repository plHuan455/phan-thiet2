/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */

import {
  useReducer, useMemo, useRef, useCallback, Reducer,
} from 'react';

import useDidMount from './useDidMount';

import { CancelablePromise } from 'helpers/promise';

const ACTION_TYPES = {
  START: 'START',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  TIMEOUT: 'TIMEOUT',
  RESET: 'RESET',
} as const;

type STATUS = 'READY' | 'PENDING';

interface AsyncActionState<P, E> {
  status: STATUS;
  data: P | null;
  error: E | null;
}

type AsyncAction<P, E> =
  | {
      readonly type: 'START' | 'RESET';
    }
  | {
      readonly type: 'SUCCESS' | 'ERROR' | 'TIMEOUT';
      readonly payload: P | E;
    };

const asyncActionReducer = <P, E>(
  state: AsyncActionState<P, E>,
  action: AsyncAction<P, E>,
): AsyncActionState<P, E> => {
  switch (action.type) {
    case 'START': {
      return {
        ...state,
        status: 'PENDING',
      };
    }
    case 'SUCCESS': {
      return {
        ...state,
        status: 'READY',
        data: action.payload as P,
        error: null,
      };
    }
    case 'ERROR': {
      return {
        ...state,
        status: 'READY',
        data: null,
        error: action.payload as E,
      };
    }
    case 'RESET': {
      return {
        status: 'READY',
        data: null,
        error: null,
      };
    }
    default:
      return state;
  }
};

export const useAsync = <P, A extends unknown[], E = unknown>(
  asyncFunction: (...args: A) => Promise<P>,
  options: {
    callOnFirst?: boolean;
    callOnFirstArgs?: Parameters<typeof asyncFunction>;
    excludePending?: boolean;
    onSuccess?: (res: P) => void;
    onFailed?: (error: E) => void;
  } = {
    callOnFirst: false,
  },
) => {
  const mountedRef = useRef(true);
  const lastCancelableAsyncTask = useRef<CancelablePromise | null>(null);
  const [state, dispatcher] = useReducer<
    Reducer<AsyncActionState<P, E>, AsyncAction<P, E>>
  >(asyncActionReducer, {
    status: 'READY',
    data: null,
    error: null,
  });

  const exportState = useMemo(
    () => ({
      ...state,
      loading: state.status === 'PENDING',
      ready: state.status === 'READY',
    }),
    [state],
  );

  const execute = useCallback(
    (...args: Parameters<typeof asyncFunction>) => {
      if (state.status !== 'PENDING' && !options.excludePending) {
        dispatcher({
          type: ACTION_TYPES.START,
        });
      }

      if (lastCancelableAsyncTask.current) {
        lastCancelableAsyncTask.current.cancel();
      }

      const cancelableAsyncTask = new CancelablePromise();
      lastCancelableAsyncTask.current = cancelableAsyncTask;

      return cancelableAsyncTask.wrap<P>(
        asyncFunction(...args)
          .then((res: P) => {
            if (!mountedRef.current) {
              cancelableAsyncTask.cancel();
              return null;
            }

            if (cancelableAsyncTask.complete) return null;

            if (typeof options.onSuccess === 'function') {
              options.onSuccess(res);
            }

            dispatcher({
              type: ACTION_TYPES.SUCCESS,
              payload: res,
            });

            return res;
          })
          .catch((error) => {
            if (!mountedRef.current) return null;

            if (CancelablePromise.isCancelError(error)) return error;

            if (typeof options.onFailed === 'function') {
              options.onFailed(error);
            }

            return dispatcher({
              type: ACTION_TYPES.ERROR,
              payload: error,
            });
          })
          .finally(() => {
            lastCancelableAsyncTask.current = null;
          }),
      );
    },
    [asyncFunction, options, state.status],
  );

  const cancel = useCallback(() => {
    if (lastCancelableAsyncTask.current) {
      lastCancelableAsyncTask.current.cancel();
    }
  }, []);

  const reset = useCallback(() => {
    dispatcher({
      type: ACTION_TYPES.RESET,
    });
  }, []);

  useDidMount(() => {
    if (options.callOnFirst) {
      execute(...((options.callOnFirstArgs || []) as A));
    }

    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  });

  return useMemo(() => [execute, exportState, reset, cancel] as const, [
    exportState,
    execute,
    reset,
    cancel,
  ]);
};
