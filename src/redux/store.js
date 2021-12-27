import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: "persist-key",
  storage
};

const persistedReducer = persistReducer(persistConfig, productsReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === "development" && window.devToolsExtension
      ? window.devToolsExtension()
      : (f) => f
  )
);

export const persistor = persistStore(store);
