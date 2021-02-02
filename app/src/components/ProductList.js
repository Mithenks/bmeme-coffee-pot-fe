import React from "react"

const ProductList = ({ products }) => {
  console.log("products", products)
  return (
    <>
      <h3>Product list</h3>
      <p>Product number: {products.children.length}</p>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {products.children.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ProductList
