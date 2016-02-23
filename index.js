/**
 * Created by Janne on 23.2.2016.
 */
"use strict";
import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { queryReducer } from "./app/reducers/reducer";
import thunkMiddleware from "redux-thunk";
import { QueryContainer } from "./app/components/query.js";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const Main = () => {
    return (
        <div>
            <QueryContainer />
        </div>
    )
};
/*
const Main = React.createClass({
    render : () => {
        return (
            <div>
                <p>Hello react!</p>
            </div>
        )
    }
});*/

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(queryReducer)}>
        <Main />
    </Provider>,
    document.getElementById("example")
);