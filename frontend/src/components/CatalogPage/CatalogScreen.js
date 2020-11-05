import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../../actions/productActions';
import './CatalogScreen.css'
import Sidebar from '../Sidebar/Sidebar'
import Pagination from './Pagination'
import Loading from '../Loading/Loading'
import SkeletonScreen from './SkeletonScreen'
import { LazyLoadImage } from '@tjoskar/react-lazyload-img'
import defaultImage from '../../images/default.jpg'

export default function CatalogScreen(props) {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id : '';
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts(category));

        return () => {
        //
        };
    }, [category]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listProducts(category, searchKeyword, sortOrder));
    };
    const sortHandler = (e) => {
        setSortOrder(e.target.value);
        dispatch(listProducts(category, searchKeyword, sortOrder));
    };

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <>
            <section className="catalog">
                
                <div className="container">
                    <div className="catalog_top">
                        <h2 className="catalog_title">
                            Каталог
                            <span className="catalog_title_sub">
                                Каталог
                            </span>
                        </h2>
                        <ul className="catalog_tools">
                            <li className="catalog_search">
                                <form onSubmit={submitHandler}>
                                    <input
                                        name="searchKeyword"
                                        onChange={(e) => setSearchKeyword(e.target.value)}
                                        placeholder="Введите название или бренд товара"
                                    />
                                    <button type="submit"><i class="fas fa-search"></i></button>
                                </form>
                            </li>
                            <li className="catalog_sort">
                                Сортировать по: {' '}
                                <select name="sortOrder" onChange={sortHandler}>
                                <option value="">Самые новые</option>
                                <option value="lowest">Самые дорогие</option>
                                <option value="highest">Самые дешевые</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className="catalog_body">
                        <div className="catalog_filter">
                            <Sidebar />
                        </div>
                        <div className="catalog_right">
                            {loading ? (
                                <SkeletonScreen />
                            ) : (
                            <div className="catalog_products">
                                <div className="catalog_list">
                                    {currentProducts.map((product) => (
                                    <Link to={'/product/' + product._id}>
                                        <div className="product" key={product._id}>
                                            <div className="product_top">
                                                    {/* <img
                                                    className="product_image"
                                                    src={product.image[0]}
                                                    alt="product"
                                                    /> */}
                                                    <LazyLoadImage height="180px" defaultImage={defaultImage} image={product.image[0]} />
                                            </div>
                                            <div className="product_btm">
                                                <div className="product_name">
                                                    <Link to={'/product/' + product._id}>{product.name}</Link>
                                                </div>
                                                <div className="product_brand">{product.brand}</div>
                                                    { product.oldPrice > 0 ? (
                                                    <div className="product_price">
                                                        <div class="product_price_new">
                                                            {product.price} грн
                                                        </div>
                                                        <div class="product_price_old">
                                                            {product.oldPrice} грн
                                                        </div>
                                                    </div>
                                                    ) : (
                                                        <div className="product_price">
                                                            <div class="product_price_new">
                                                                {product.price} грн
                                                            </div>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </Link>
                                    ))}
                                </div>
                                <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} currentPage={currentPage} />
                            </div>
                            )}
                        </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
