var form = document.getElementById("form");
var nameInput = document.getElementById("nameInput");
var description = document.getElementById("descInput");
var category = document.getElementById("categories");

var clickAdd = document.getElementById("addBtn");

var table = document.getElementById("table");


form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form submitted");
    console.log(nameInput.value);
    console.log(description.value);
    console.log(category.value);

    addProduct();
}
);

var products = [];

let editIndex = -1;

function addProduct() {
    const tableObj = {
    name: nameInput.value,
    description: description.value,
    category: category.value
    };
    if(editIndex === -1){
        products.push(tableObj);
    }else{
        products[editIndex]=tableObj;
        editIndex = -1;
    }
    console.log(products);
    displayProduct();
};

function displayProduct() {
    var row  = 
    `<tr>
    <th>#</th><th>Name</th><th>Description</th><th>Category</th><th>Actions</th>
    </tr>`;

    products.forEach((product,index) => {
        row+=
    `<tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.category}</td>
        <td>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
        </td>
    </tr>`;
    });
    table.innerHTML = row;

    var editBtns = document.getElementsByClassName("editBtn");
    for(let i =0; i<editBtns.length; i++){
        editBtns[i].addEventListener("click", function(){
            editIndex = i;
            editProduct(i);
        });
    }
    

    var deleteBtns = document.getElementsByClassName("deleteBtn");
    
    for(let i =0; i<deleteBtns.length; i++){
        deleteBtns[i].addEventListener("click", function() {
        deleteProduct(i);
    });
    }

};
function editProduct(index){
        nameInput.value = products[index].name
        description.value = products[index].description;
        category.value = products[index].category;
}

function deleteProduct(index){
    products.splice(index,1);
    displayProduct();
}

