import React, { Component } from 'react';

const productContext = React.createContext();

export default class productProvider extends Component {
    render() {
        return (
            <productContext.Provider>

            </productContext.Provider>
        )
    }
}

