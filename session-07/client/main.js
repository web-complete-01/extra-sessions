console.log('main.js running....');

const apiUrl = 'http://localhost:3000';


/**
 * LIST PRODUCTS
 */
document.querySelector('#get-products').addEventListener('click', function(){
    console.log('fetch products!');
    const productsUl = document.querySelector('#product-list');

    // empty the previous product list items
    productsUl.innerHTML = '';

    // fetch the products
    fetch(`${apiUrl}/products`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const newLi = document.createElement('li');
                newLi.dataset.productId = data[i].id;
                newLi.textContent = `${data[i].name} | ${data[i].price} | `;
                productsUl.append(newLi);

                const editBtn = document.createElement('button');
                editBtn.textContent = 'edit';
                newLi.append(editBtn);

                editBtn.addEventListener('click', function(){
                    document.querySelector('#edit-product-id').value = data[i].id;
                    document.querySelector('#edit-product-name').value = data[i].name;
                    document.querySelector('#edit-product-price').value = data[i].price;
                });

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'delete';
                newLi.append(deleteBtn);
                deleteBtn.addEventListener('click', function(){
                    deleteProduct(data[i].id)
                });
            }
        });
});

/**
 * ADD PRODUCT
 */
document.querySelector('#add-product').addEventListener('click', function(){
    console.log('add product!');

    const productName = document.querySelector('#product-name').value;
    const productPrice = document.querySelector('#product-price').value;

    const options = {
        method: "POST",
        body: JSON.stringify({name: productName, price: productPrice})
    }; 
    fetch(`${apiUrl}/products`, options)
        .then(response => response.json())
        .then(data => console.log(data));
});


/**
 * EDIT PRODUCT
 */
document.querySelector('#edit-product').addEventListener('click', function(){
    console.log('update product!');

    const productId = document.querySelector('#edit-product-id').value;
    const productName = document.querySelector('#edit-product-name').value;
    const productPrice = document.querySelector('#edit-product-price').value;

    const options = {
        method: "PUT",
        body: JSON.stringify({name: productName, price: productPrice})
    }; 
    fetch(`${apiUrl}/products/${productId}`, options)
        .then(response => response.json())
        .then(data => console.log(data))
});


/**
 * DELETE PRODUCT
 */
function deleteProduct(productId){
    const options = {
        method: "DELETE"
    }; 
    fetch(`${apiUrl}/products/${productId}`, options)
        .then(response => response.json())
        .then(data => console.log(data))
}

