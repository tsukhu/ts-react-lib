import React from 'react';
import './product-list.css';

export interface ProductProps {
  title: string;
  description: string;
  price: string;
  img: string;
}

export interface ProductListProps {
  products: ProductProps[];
}

/**
 * Product List Update
 * @param param0
 */
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="container py-5">
      <div className="row text-center text-white mb-5">
        <div className="col-lg-7 mx-auto">
          <h1 className="display-4">Product List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <ul className="list-group shadow">
            {!products && <p className="h6 text-center">No Products !!</p>}
            {products &&
              products.map(
                ({ title, description, price, img }: ProductProps) => {
                  return (
                    <li className="list-group-item" key={title}>
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h5 className="mt-0 font-weight-bold mb-2">
                            {title}
                          </h5>
                          <p className="font-italic text-muted mb-0 small">
                            {description}
                          </p>
                          <div className="d-flex align-items-center justify-content-between mt-1">
                            <h6 className="font-weight-bold my-2">{price}</h6>
                            <ul className="list-inline small">
                              <li className="list-inline-item m-0">
                                <i className="fa fa-star text-success"></i>
                              </li>
                              <li className="list-inline-item m-0">
                                <i className="fa fa-star text-success"></i>
                              </li>
                              <li className="list-inline-item m-0">
                                <i className="fa fa-star text-success"></i>
                              </li>
                              <li className="list-inline-item m-0">
                                <i className="fa fa-star text-success"></i>
                              </li>
                              <li className="list-inline-item m-0">
                                <i className="fa fa-star text-success"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <img
                          src={img}
                          alt={title}
                          width="200"
                          className={`ml-lg-5 order-1 order-lg-2 productList_img`}
                        />
                      </div>
                    </li>
                  );
                }
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
