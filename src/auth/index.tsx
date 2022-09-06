import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useEffect,
  useReducer,
} from "react";
import * as SecureStore from "expo-secure-store";

// STATE
export interface AuthState {
  userToken: null | string;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// ACTIONS
export interface RestoreToken {
  type: "RESTORE_TOKEN";
  payload: {
    token: string;
  };
}

export interface SignIn {
  type: "SIGN_IN";
  payload: {
    token: string;
  };
}

export interface SignOut {
  type: "SIGN_OUT";
}

export const authReducer = (
  prevState: AuthState,
  action: RestoreToken | SignIn | SignOut
) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.payload.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isAuthenticated: true,
        userToken: action.payload.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isAuthenticated: false,
        userToken: null,
      };
  }
};

export const defaultAuthState: AuthState = {
  isLoading: true,
  isAuthenticated: false,
  userToken: null,
};

export const useAuthReducer = (authDefaults?: AuthState) => {
  return useReducer(authReducer, { ...defaultAuthState, ...authDefaults });
};

interface Context extends AuthState {
  signIn: (data: any) => void;
  signOut: (data: any) => void;
  signUp: (data: any) => void;
}

const AuthContext = createContext<Context>({
  ...defaultAuthState,
  signIn: () => {
    // no op for now
  },
  signOut: () => {
    // no op for now
  },
  signUp: () => {
    // no op for now
  },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useAuthReducer();

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      dispatch({
        type: "RESTORE_TOKEN",
        payload: {
          token: userToken,
        },
      });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data: { username: string; password: string }) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", payload: { token: "dummy-auth-token" } });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", payload: { token: "dummy-auth-token" } });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ ...authContext, ...authState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
