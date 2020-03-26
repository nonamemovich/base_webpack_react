import React from 'react';
import productsData from '../test/productsData.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link, BrowserRouter, NavLink}  from 'react-router-dom';

class ProductsList extends React.Component {
    render() {
    	console.log("ProductsList");
        return <div>
            <h2>Список товаров</h2>
            <ul>
                {
                    productsData.items.map((el, key)=>{
                        return <li key={key}>
                            <NavLink to={`/products/${key}/?cost=${el.cost}`}> {el.name}</NavLink>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

class Product extends React.Component {
    render() {
    	console.log("Product ");
        const id = this.props.match.params.id;
        let phone = productsData.items[id];
        const searchParams = new URLSearchParams(this.props.location.search);

        return <div>
            <h2>{phone.name}</h2>
            <h4>{phone.descritpion}</h4>
            <h4>{phone.cost} бачинских</h4>
            <h5> match = {JSON.stringify(this.props.match)}</h5>
            <h5> location = {JSON.stringify(this.props.location)}</h5>
            <h5> searchParams = {JSON.stringify(searchParams)}</h5>
        </div>
    }
}

class Products extends React.Component {
    render() {
    	console.log("Products ");
        return <div>
            <Switch>
                <Route exact path="/products" component={ProductsList}/>
                <Route path="/products/:id" component={Product}/>
            </Switch>
        </div>
    }
}

export default Products;