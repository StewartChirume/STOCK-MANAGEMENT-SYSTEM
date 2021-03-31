import React from "react";
import {Table} from "react-bootstrap";
import "../assets/css/Add-Product-Form.css";
import "../assets/css/Stylesheet.css";





class AddStock extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
        // This is the beginning of where the form data entered by a User is stored
        addProduct = (event) => {
        event.preventDefault();
        const formData = event.target;

        //Below is a logic for new products entered by User
        const newProduct = {
            product_type: formData.product_type.value,
            product_name: formData.product_name.value,
            product_price: formData.product_price.value,
            product_quantity: formData.product_quantity.value
        }

        //This method is responsible for adding products in the array
        this.state.products.push(newProduct);
        this.setState({
            products: this.state.products 
        });

        //Below is a logic for Products Type dropdown list
        const productTypeOptions = {
            product_type1: formData.product_type1,
            product_type2: formData.product_type2,
            product_type3: formData.product_type3
        }

    }
        //This is the end of where the form data entered by a User is stored

    
    render() {
        return (
        <div className="mainDiv4AddStock">
        <section className="add-product-form">
            <form onSubmit={this.addProduct}>

                <div className="form-group">
                    <h2 className="text-center">Add Product</h2>
                </div>

                <div className="form-group">
                    <label>Product Type</label>
                    <br/>
                    <select name="product_type" onChange={this.productTypeOptions}>
                        <option name="product_type1">PRODUCT1</option>
                        <option name="product_type2">PRODUCT2</option>
                        <option name="product_type3">PRODUCT3</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Product Name</label>
                    <input className="form-control" type="text/number" name="product_name" placeholder="E.g. PlayStation 5" required/>
                </div>


                    <label>Product Price (ZAR)</label>
                <div className="form-group" id="id4productPrice">
                        <input className="form-control" type="number" min="1" max="500000.00" step="any" name="product_price" placeholder="E.g. 11.999.99"required/>
                </div>

                <div className="form-group">
                    <label>Product Quantity</label>
                    <input className="form-control" type="number" min="1" max="1000" step="1" name="product_quantity" required/>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Add Product</button>
                </div>
            </form>
        </section>
        <br/>

        <Table className="dataTable" striped bordered hover size="sm" variant="dark" responsive>
        <thead>
            <tr>
            <th>#</th>
            <th>Product Type</th>
            <th>Product Name</th>
            <th>Product Price in Rands</th>
            <th>Product Quantity</th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.products.map((item, index) => {
                    return(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.product_type}</td>
                        <td>{item.product_name}</td>
                        <td>{item.product_price}</td>
                        <td>{item.product_quantity}</td>
                    </tr>
                    );
                })
            }
        </tbody>
        </Table>
        </div>

        )
    }
}

export default AddStock; 