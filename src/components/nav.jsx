import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
 
class Nav extends React.Component{
    render(){
        return <div>
                <Link to="/">Главная</Link> 
                <Link to="/products">Товары</Link>
              </div>;
    }
}
module.exports = Nav;