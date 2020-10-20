import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  saveProduct,
  listProducts,
  deleteProduct,
} from '../actions/productActions';

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [vendorCode, setVendorCode] = useState('');
  const [clothesType, setClothesType] = useState('');
  const [uploading, setUploading] = useState(false);
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const [sizesArr, setSizesArr] = useState(
    {
      shoes: {
        size36: 0,
        size37: 0,
        size38: 0,
        size39: 0,
        size40: 0,
        size41: 0,
        size42: 0,
        size43: 0,
        size44: 0,
        size45: 0,
      },
      clothes: {
        XS: 0,
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
        XXL: 0
      },
      gloves: {
        oz12: 0,
        oz14: 0,
        oz16: 0,
        oz18: 0
      }
    }
  );

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setOldPrice(product.oldPrice);
    setDescription(product.description);
    setImage(product.image);
    setBrand(product.brand);
    setCategory(product.category);
    setCountInStock(product.countInStock);
    setVendorCode(product.vendorCode);
    // setSizesArr(product.sizesArr);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        name,
        price,
        oldPrice,
        image,
        brand,
        category,
        countInStock,
        description,
        vendorCode,
        sizes: sizesArr,
      })
    );
  };
  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  };

  const bodyFormData = new FormData();
  const imagesArr = [];
  const uploadFileHandler = (e) => {
    const file = e.target.files
    for (let i = 0; i < file.length; i++) {
      bodyFormData.append('image', file[i]);
    }
    console.log(bodyFormData)
    axios
      .post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        Object.values(response.data).map((item, index) => {
          imagesArr.push(Object.values(item)[6]);
        })
        setImage(imagesArr);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
    }

 

  return (
    <div className="content content-margined">
      <div className="product-header">
        <h3>Products</h3>
        <button className="button primary" onClick={() => openModal({})}>
          Create Product
        </button>
      </div>
      {modalVisible && (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Create Product</h2>
              </li>
              <li>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{errorSave}</div>}
              </li>

              <li>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="oldPrice">Old Price</label>
                <input
                  type="text"
                  name="oldPrice"
                  value={oldPrice}
                  id="oldPrice"
                  onChange={(e) => setOldPrice(e.target.value)}
                ></input>
              </li>
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <label className="mb-0 mr-1" htmlFor="clothes">Clothes</label>
                    <input type="radio" name="typeClothes" value="clothes" id="clothes" onChange={(e) => setClothesType(e.target.value)} />
                  </div>
                  <div className="d-flex align-items-center">
                    <label className="mb-0 mr-1" htmlFor="shoes">Shoes</label>
                    <input type="radio" name="typeClothes" value="shoes" id="shoes" onChange={(e) => setClothesType(e.target.value)} />
                  </div>
                  <div className="d-flex align-items-center">
                    <label className="mb-0 mr-1" htmlFor="gloves">Gloves</label>
                    <input type="radio" name="typeClothes" value="gloves" id="gloves" onChange={(e) => setClothesType(e.target.value)} />
                  </div>
                </div>
              </li>
              <li>
                  {(() => {
                    if (clothesType === "clothes") {
                      return (
                        <ul> 
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              XS
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.clothes)[0]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         clothes: {
                                            ...sizesArr.clothes,
                                            XS: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              S
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.clothes)[1]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         clothes: {
                                            ...sizesArr.clothes,
                                            S: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              M
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.clothes)[2]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         clothes: {
                                            ...sizesArr.clothes,
                                            M: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              L
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.clothes)[3]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         clothes: {
                                            ...sizesArr.clothes,
                                            L: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              XL
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.clothes)[4]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         clothes: {
                                            ...sizesArr.clothes,
                                            XL: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              XXL
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.clothes)[5]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         clothes: {
                                            ...sizesArr.clothes,
                                            XXL: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                        </ul>
                      )
                    } else if (clothesType === "shoes") {
                      return (
                        <ul>
                        <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              36
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.shoes)[0]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         shoes: {
                                            ...sizesArr.shoes,
                                            size36: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              37
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.shoes)[1]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         shoes: {
                                            ...sizesArr.shoes,
                                            size37: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              38
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.shoes)[2]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         shoes: {
                                            ...sizesArr.shoes,
                                            size38: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              39
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.shoes)[3]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         shoes: {
                                            ...sizesArr.shoes,
                                            size39: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              40
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.shoes)[4]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         shoes: {
                                            ...sizesArr.shoes,
                                            size40: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              41
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.shoes)[5]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         shoes: {
                                            ...sizesArr.shoes,
                                            size41: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              42
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.shoes)[6]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         shoes: {
                                            ...sizesArr.shoes,
                                            size42: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              43
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.shoes)[7]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         shoes: {
                                            ...sizesArr.shoes,
                                            size43: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              44
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.shoes)[8]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         shoes: {
                                            ...sizesArr.shoes,
                                            size44: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              45
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.shoes)[9]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         shoes: {
                                            ...sizesArr.shoes,
                                            size45: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                      </ul>
                      )
                    } else if (clothesType === "gloves") {
                      return (
                        <ul>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              12 OZ
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.clothes)[0]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         clothes: {
                                            ...sizesArr.clothes,
                                            oz12: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              14 OZ
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.clothes)[1]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         clothes: {
                                            ...sizesArr.clothes,
                                            oz14: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              16 OZ
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.clothes)[2]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         clothes: {
                                            ...sizesArr.clothes,
                                            oz16: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                          <li className="d-flex flex-row justify-content-between align-items-center">
                            <span>
                              18 OZ
                            </span>
                            <span>
                              <input  type="text" 
                                      value={Object.values(sizesArr.clothes)[3]} 
                                      onChange={(e) => setSizesArr({...sizesArr,
                                         clothes: {
                                            ...sizesArr.clothes,
                                            oz18: parseInt(e.target.value)
                                          }}
                                      )} />
                            </span>
                          </li>
                        </ul>
                      )
                    }
                  }
                  )()}
              </li>
              <li>
                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)}/>
                <input type="file" multiple onChange={uploadFileHandler} />
                {uploading && <div>Uploading...</div>}
              </li>
              <li>
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={brand}
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="countInStock">CountInStock</label>
                <input
                  type="text"
                  name="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  name="category"
                  value={category}
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="vendorCode">Vendor Code</label>
                <input
                  type="text"
                  name="vendorCode"
                  value={vendorCode}
                  id="vendorCode"
                  onChange={(e) => setVendorCode(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </li>
              <li>
                <button type="submit" className="button primary">
                  {id ? 'Update' : 'Create'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                  Back
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}

      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button className="button" onClick={() => openModal(product)}>
                    Edit
                  </button>{' '}
                  <button
                    className="button"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductsScreen;
