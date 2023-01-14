import React, {useState} from 'react';

    const Product=({saveProduct})=>{
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    const [supplier,setSupplier]=useState('')
    const [price,setPrice]=useState()

    const addProduct=(e)=>{
        e.preventDefault()
        saveProduct(name, description, category, supplier, price)
    }
    return(
        <div class = "form_div">
            <form onSubmit={addProduct}>
                <label>Name</label><br/>
                <input value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <label>Description</label><br/>
                <input value={description} onChange={(e)=>setDescription(e.target.value)}/><br/>
                <label>Category</label><br/>
                <input value={category} onChange={(e)=>setCategory(e.target.value)}/><br/>
                <label>Supplier</label><br/>
                <input value={supplier} onChange={(e)=>setSupplier(e.target.value)}/><br/>
                <label>Price</label><br/>
                <input value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>
                <input type="submit" value="Add Product"/>                
            </form>
        </div>
    )
}

export default Product