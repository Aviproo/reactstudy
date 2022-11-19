import React from "react";
function Products() {
  const productdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className="product">
      {productdata.map((e) => (
        <div className="productbox"> This is the {e} product. </div>
      ))}
    </div>
  );
}
export default Products;
