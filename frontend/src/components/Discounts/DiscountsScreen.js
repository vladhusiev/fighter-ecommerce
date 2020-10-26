import React, { useEffect } from 'react'
import './DiscountsScreen.css'
import { discountProductList } from '../../actions/productActions'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

export default function DiscountsScreen() {
    const productList = useSelector((state) => state.discountProductList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(discountProductList())
        return () => {
        }
    }, [])
    return (
        <section className="discounts" id="discounts">
            <div className="container">
                <h2 className="title">
                    <span className="subtitle">скидки</span>
                    Успей купить выгодно
                </h2>
                <div className="discounts_wrap">
                    <div className="discounts_left">
                        <img src="/images/discount.png" alt="discount image" />
                    </div>
                    <div className="discounts_right">
                        { products.map((product) => (
                            <div className="discounts_item" key={product._id}>
                                <div className="discounts_image">
                                    <Link to={'/product/' + product._id}>
                                        <img src={product.image[0]} alt={product.name} />
                                    </Link>
                                </div>
                                <div className="discounts_price">
                                <span className="new_price">{ product.price } грн</span>
                                <span className="old_price">{ product.oldPrice } грн</span>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
                <Link to='/catalog'>
                    <span className="main_btn discounts_btn">Смотреть все товары</span>
                </Link>
            </div>
        </section>
    )
}
