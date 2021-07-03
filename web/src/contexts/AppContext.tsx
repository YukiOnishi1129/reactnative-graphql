/**
 *  AppContexts
 *
 * @package contexts
 * @copyright Yuki Onishi
 */
import React from "react";

// State --------------
export type AppStateType = {
  isLogin: boolean;
  userId: number | undefined;
  token: string | undefined;
};

const initState: Readonly<AppStateType> = {
  isLogin: false,
  userId: undefined,
  token: undefined,
};

// Actions --------------
const ActionType = {
  LOGIN: "APP_LOGIN",
  LOGOUT: "APP_LOGOUT",
} as const;

export const login = (
  userId: number,
  token: string
): {
  type: "APP_LOGIN";
  payload: {
    userId: number;
    token: string;
  };
} => ({
  type: ActionType.LOGIN,
  payload: {
    userId,
    token,
  },
});

export const logout = (): {
  type: "APP_LOGOUT";
} => ({
  type: ActionType.LOGOUT,
});

type AppActionType = ReturnType<typeof login> | ReturnType<typeof logout>;

// Reducer --------------
const AppReducer = (state: AppStateType, action: AppActionType) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        isLogin: true,
        userId: action.payload.userId,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        isLogin: false,
        userId: undefined,
      };
    default:
      throw new Error("Invalid Action Type.");
  }
};

// Context --------------
type AppDispatchType = React.Dispatch<AppActionType>;
const AppStateContext = React.createContext(initState as AppStateType);
const AppDispatchContext = React.createContext<AppDispatchType>(() => {
  throw new TypeError("Context not provided.");
});

// ContextProviderType --------------
type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(AppReducer, initState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};

export const useAppState = (): AppStateType =>
  React.useContext(AppStateContext);
export const useAppDispatch = (): AppDispatchType =>
  React.useContext(AppDispatchContext);
