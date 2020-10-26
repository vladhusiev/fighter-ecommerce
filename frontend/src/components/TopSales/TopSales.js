import React, { useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from "react-redux";
import "./TopSales.css";
import { topProductList } from '../../actions/productActions';
import { Link } from "react-router-dom";

export default function TopSales(props) {
    const productList = useSelector((state) => state.topProductList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(topProductList())
        return () => {
        }
    }, [])
    return (
        <section className="goods" id="goods">
            <div className="container">
                <div className="goods_top">
                    <h2 className="title">
                        <span className="subtitle">топ продаж</span>
                        Купили на этой неделе
                    </h2>
                </div>
                <div className="goods_slider">
                    <Carousel itemsToShow={3}>
                    {
                        products.map((product) => (
                            <div className="goods_item" key={product._id}>
                                <div className="goods_item_upper">
                                    <img src={ product.image[0] } alt={ product.name } />
                                </div>
                                { product.oldPrice !== 0 && (
                                    <div className="goods_item_discount">
                                        <i className="fas fa-percent"></i>
                                    </div>
                                )}
                                <div className="goods_item_btm">
                                    <Link to={'/product/' + product._id}>
                                        <span className="goods_item_name">{ product.name }</span>
                                    </Link>
                                    <p className="goods_item_desc">
                                        { product.description }
                                    </p>
                                    
                                        { product.oldPrice > 0 ? (
                                            <span className="goods_item_price">
                                                <span className="new_price">{ product.price } грн</span>
                                                <span className="old_price">{ product.oldPrice } грн</span>
                                            </span>
                                        ) : (
                                            <span className="goods_item_price">
                                                <span className="new_price">{ product.price } грн</span>
                                            </span>
                                        ) }
                                </div>
                            </div>
                        ))
                    }
                    </Carousel>
                </div>
                <span className="main_btn goods_btn">
                    <Link to="/catalog">
                            Смотреть все товары
                    </Link>
                </span>
            </div>
        </section>
    );
}
