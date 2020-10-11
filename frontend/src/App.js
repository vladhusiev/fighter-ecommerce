import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import { useSelector } from "react-redux";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";
import Header from "./components/Header/Header";
import Slider from "./components/BannerSlider/BannerSlider";
import TopSales from "./components/TopSales/TopSales";

function App() {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <BrowserRouter>
            <Header />
            {/* <header className="header">
                    <div className="header-links">
                        <a href="cart.html">Cart</a>
                        {userInfo ? (
                            <Link to="/profile">{userInfo.name}</Link>
                        ) : (
                            <Link to="/signin">Sign In</Link>
                        )}
                        {userInfo && userInfo.isAdmin && (
                            <div className="dropdown">
                                <a href="#">Admin</a>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/orders">Orders</Link>
                                        <Link to="/products">Products</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </header> */}
            <main className="main">
                <div className="content">
                    <Route path="/orders" component={OrdersScreen} />
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/order/:id" component={OrderScreen} />
                    <Route path="/products" component={ProductsScreen} />
                    <Route path="/shipping" component={ShippingScreen} />
                    <Route path="/payment" component={PaymentScreen} />
                    <Route path="/placeorder" component={PlaceOrderScreen} />
                    <Route path="/signin" component={SigninScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/category/:id" component={HomeScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />
                </div>
                <Slider />
                <TopSales />
            </main>
        </BrowserRouter>
    );
}

export default App;
