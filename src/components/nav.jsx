import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
 
class Nav extends React.Component{
    render(){
        return <div>
            <Link to="/">
                <h1>
                    Главная
                </h1>
            </Link> 
            <Link to="/products">
                <h1>
                    Товары
                </h1>
            </Link>
            <Link to="/recall">
                <h1>
                    Рейтинг
                </h1>
            </Link>
            <Link to="/react-table">
                <h1>
                    ReactTable
                </h1>
            </Link>
            <Link to="/flex">
                <h1>
                    Flex
                </h1>
            </Link>
            <Link to="/svg">
                <h1>
                    SvgTest
                </h1>
            </Link>
        </div>
    }
}

export default Nav;