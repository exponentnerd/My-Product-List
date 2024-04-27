import  { useState } from 'react'; // Ensure React and useState are imported

import { Pagination, Card } from 'react-bootstrap'; // Import other necessary components

import products from '../data/product';

import './ProductList.css';


const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-center mb-4">Product List</h1>
      {currentProducts.map((product) => (
        <Card key={product.id} className="mb-3">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Pagination className="d-flex justify-content-center">
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        <Pagination.Item active={currentPage === 1} onClick={() => handlePageChange(1)}>
          1
        </Pagination.Item>
        <Pagination.Item active={currentPage === 2} onClick={() => handlePageChange(2)}>
          2
        </Pagination.Item>
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / productsPerPage)} />
      </Pagination>
    </div>
  );
};

export default ProductList;
