import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import persistStore from "redux-persist/es/persistStore";

import rootReducer from "./root-reducer";

const middelwares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middelwares));

const persistor = persistStore(store);

export {store, persistor}