import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";
import Header from "./components/Header/Header";
import DeliveryInfoScreen from "./components/DeliveryInfoPage/DeliveryInfoScreen";
import ContactsScreen from "./components/ContactsPage/ContactsScreen";
import CatalogScreen from './components/CatalogPage/CatalogScreen';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <div className="content">
                    <Route path="/orders" component={OrdersScreen} />
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/order/:id" component={OrderScreen} />
                    <Route path="/products" component={ProductsScreen} />
                    <Route path="/shipping" component={ShippingScreen} />
                    <Route path="/payment" component={PaymentScreen} />
                    <Route path="/delivery" component={DeliveryScreen} />
                    <Route path="/placeorder" component={PlaceOrderScreen} />
                    <Route path="/signin" component={SigninScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/category/:id" component={CatalogScreen} />
                    <Route path="/catalog" exact={true} component={CatalogScreen} />
                    <Route path="/deliveryinfo" component={DeliveryInfoScreen} />
                    <Route path="/contacts" component={ContactsScreen} />
                    <Route path="/home" component={HomeScreen} />
                </div>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
