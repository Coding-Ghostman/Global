import React from "react";

const Content = ({listProducts}) => {
    return(
        <div>
            <div class = "Product_header">
                <h3>Product Table</h3>
            </div>
            <div>
            <table class = "Product_table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Supplier</th>
                    <th>Price</th>
                </tr>
                {listProducts.map((items) => 
                <tr key = {items.id}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.desription}</td>
                    <td>{items.category}</td>
                    <td>{items.supplier}</td>
                    <td>{items.price}</td>
                </tr>)}
            </table>
            </div>
        </div>
    );
}

export default Content;