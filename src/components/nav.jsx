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
              </div>;
    }
}
module.exports = Nav;