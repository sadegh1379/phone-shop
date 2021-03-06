import React, { Component } from 'react';
import {}

const productContext = React.createContext();

 class productProvider extends Component {
    render() {
        return (
            <productContext.Provider>
                    {
                        this.props.children
                    }
            </productContext.Provider>
        )
    }
}

const productConsumer = productContext.Consumer;

export { productProvider , productConsumer} ;

