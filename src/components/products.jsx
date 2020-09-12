import React from "react";
import Pagination from "./common/page-pagination";
import Product from "./common/product";
import Navbar from "./navbar";
import "./../style/products.css";
import styled from "styled-components";

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4em;
`;

class Products extends React.Component {
  render() {
    const {
      productsData,
      filtered,
      onPageChange,
      images,
      pageSize,
      currentPage,
      onCategorySelect,
    } = this.props;

    return (
      <section className="products-container">
        <div className="listgrp-nav-container">
          <Navbar images={images} onCategorySelect={onCategorySelect} />
        </div>
        <ProductsWrapper>
          <p className="styled-p">{filtered.length} items</p>
          <Product
            productsData={productsData}
            productsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
          <Pagination
            productsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </ProductsWrapper>
      </section>
    );
  }
}

export default Products;
