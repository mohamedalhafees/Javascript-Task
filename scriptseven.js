// JAVASCRIPT API TASKS

// TASK 1 - FakeStore API Basics

console.log("========== TASK 1 ==========");

let apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
    .then(function(response) {

        return response.json();

    })
    .then(function(products) {

        console.log("All Products:");

        products.forEach(function(product) {

            console.log("Title:", product.title);
            console.log("Price:", "$" + product.price);
            console.log("Category:", product.category);
            console.log("--------------------");

        });

        let productDetails = products.map(function(product) {

            return {
                title: product.title,
                price: product.price
            };

        });

        console.log("Title and Price Array:");
        console.log(productDetails);


        let expensiveProducts = products.filter(function(product) {

            return product.price > 100;

        });

        console.log("Products Above $100:");
        console.log(expensiveProducts);


        let electronicsProduct = products.find(function(product) {

            return product.category === "electronics";

        });

        console.log("First Electronics Product:");
        console.log(electronicsProduct);


        let totalPrice = products.reduce(function(total, product) {

            return total + product.price;

        }, 0);

        console.log("Total Price:", "$" + totalPrice.toFixed(2));

        let sortedProducts = products.sort(function(a, b) {

            return b.price - a.price;

        });

        console.log("Highest Price to Lowest Price:");

        sortedProducts.forEach(function(product) {

            console.log(product.title + " - $" + product.price);

        });

    })
    .catch(function(error) {

        console.log("API Error:", error);

    })
    .finally(function() {

        console.log("Task 1 completed.");

    });
    console.log("========== TASK 1 END ==========");
    //
// TASK 2 - PRODUCT CATEGORY DASHBOARD

console.log("========== TASK 2 ==========");


function showDashboard(products) {

    let totalProducts = products.length;

    let electronics = products.filter(function(product) {

        return product.category === "electronics";

    });


    let jewelery = products.filter(function(product) {

        return product.category === "jewelery";

    });

    let mensClothing = products.filter(function(product) {

        return product.category === "men's clothing";

    });

    let womensClothing = products.filter(function(product) {

        return product.category === "women's clothing";

    });

    let sortedProducts = products.sort(function(a, b) {

        return b.price - a.price;

    });

    let highestPrice = sortedProducts[0].price;

    let lowestPrice = sortedProducts[sortedProducts.length - 1].price;

    let totalPrice = products.reduce(function(total, product) {

        return total + product.price;

    }, 0);

    let averagePrice = totalPrice / products.length;


    console.log("");
    console.log("===== PRODUCT DASHBOARD =====");

    console.log("");

    console.log("Total Products:", totalProducts);

    console.log("");

    console.log("Electronics:", electronics.length);
    console.log("Jewelery:", jewelery.length);
    console.log("Men's Clothing:", mensClothing.length);
    console.log("Women's Clothing:", womensClothing.length);

    console.log("");

    console.log("Highest Price:", "$" + highestPrice.toFixed(2));
    console.log("Lowest Price:", "$" + lowestPrice.toFixed(2));
    console.log("Average Price:", "$" + averagePrice.toFixed(2));

}


fetch(apiLink)
    .then(function(response) {

        return response.json();

    })
    .then(function(products) {

        showDashboard(products);

    })
    .catch(function(error) {

        console.log("Task 2 Error:", error);

    });
    console.log("========== TASK 2 END ==========");

// TASK 3 - USER & POST API

console.log("========== TASK 3 ==========");


let userApi = "https://jsonplaceholder.typicode.com/users";

let postApi = "https://jsonplaceholder.typicode.com/posts";

// Fetch Users

fetch(userApi)
    .then(function(response) {

        return response.json();

    })
    .then(function(users) {

        console.log("All User Names:");

        users.forEach(function(user) {

            console.log(user.name);

        });


        console.log("");
        console.log("User Name + Email:");

        users.forEach(function(user) {

            console.log(user.name + " - " + user.email);

        });

        let userFive = users.find(function(user) {

            return user.id === 5;

        });

        console.log("");
        console.log("User with ID 5:");
        console.log(userFive);


        let cityName = "South Christy";

        let cityUsers = users.filter(function(user) {

            return user.address.city === cityName;

        });

        console.log("");
        console.log("Users from " + cityName + ":");
        console.log(cityUsers);


    })
    .catch(function(error) {

        console.log("User API Error:", error);

    });


fetch(postApi)
    .then(function(response) {

        return response.json();

    })
    .then(function(posts) {

        let userOnePosts = posts.filter(function(post) {

            return post.userId === 1;

        });


        console.log("");
        console.log("Posts written by User ID 1:");

        userOnePosts.forEach(function(post) {

            console.log(post.title);

        });

        console.log("");

        console.log(
            "User ID 1 Post Count:",
            userOnePosts.length
        );

        let longTitlePost = posts.find(function(post) {

            return post.title.length > 50;

        });


        console.log("");

        console.log(
            "First Post with Title More Than 50 Characters:"
        );

        console.log(longTitlePost);

    })
    .catch(function(error) {

        console.log("Post API Error:", error);

    });
    console.log("========== TASK 3 END ==========");

// TASK 4 - API + SEARCH


console.log("========== TASK 4 ==========");


function searchProducts() {

    let category = prompt("Enter product category:");

    let maximumPrice = prompt("Enter maximum price:");

    maximumPrice = Number(maximumPrice);


    fetch(apiLink)
        .then(function(response) {

            return response.json();

        })
        .then(function(products) {


            let result = products.filter(function(product) {

                return (
                    product.category === category &&
                    product.price <= maximumPrice
                );

            });


            console.log("");
            console.log("===== SEARCH RESULT =====");


            if (result.length === 0) {

                console.log("No products found.");

            }
            else {

                result.forEach(function(product) {

                    console.log("");
                    console.log("Product:", product.title);
                    console.log("Price:", "$" + product.price);
                    console.log("Category:", product.category);

                });

            }

        })
        .catch(function(error) {

            console.log("Search Error:", error);

        });

}
console.log("========== TASK 4 END ==========");

// TASK 5 - API SHOPPING CART

console.log("========== TASK 5 ==========");


function shoppingCart() {

    fetch(apiLink)
        .then(function(response) {

            return response.json();

        })
        .then(function(products) {


            console.log("");
            console.log("===== AVAILABLE PRODUCTS =====");


            products.forEach(function(product) {

                console.log(
                    "ID:",
                    product.id,
                    "|",
                    product.title,
                    "|",
                    "$" + product.price
                );

            });


            let selectedIds = prompt(
                "Enter product IDs separated by comma. Example: 1,3,5"
            );


            let idArray = selectedIds.split(",");


            let cart = [];


            idArray.forEach(function(id) {

                let productId = Number(id.trim());


                let selectedProduct = products.find(function(product) {

                    return product.id === productId;

                });


                if (selectedProduct) {

                    cart.push(selectedProduct);

                }

            });


            console.log("");
            console.log("===== CART =====");


            cart.forEach(function(product, index) {

                console.log("");

                console.log(
                    "Product " + (index + 1) + ":",
                    product.title
                );

                console.log(
                    "Price:",
                    "$" + product.price
                );

            });


        

            let total = cart.reduce(function(sum, product) {

                return sum + product.price;

            }, 0);


            let discount = 0;


            if (total > 200) {

                discount = 20;

            }
            else if (total > 100) {

                discount = 10;

            }


            let discountAmount = total * discount / 100;


            let finalAmount = total - discountAmount;


            console.log("");
            console.log("Total:", "$" + total.toFixed(2));

            console.log(
                "Discount:",
                discount + "%"
            );

            console.log(
                "Final Amount:",
                "$" + finalAmount.toFixed(2)
            );

        })
        .catch(function(error) {

            console.log("Cart Error:", error);

        });

}
console.log("========== TASK 5 END ==========");

// TASK 6 - FAKESTORE PRODUCT REPORT

console.log("========== TASK 6 ==========");


function productReport(products) {


    console.log("");
    console.log("========== PRODUCT REPORT ==========");

    console.log("");


    console.log(
        "Total Products:",
        products.length
    );


    let productNames = products.map(function(product) {

        return product.title;

    });


    console.log("");
    console.log("Product Names:");


    productNames.forEach(function(name) {

        console.log("- " + name);

    });


    // Products Above $100

    let productsAbove100 = products.filter(function(product) {

        return product.price > 100;

    });


    console.log("");
    console.log("Products Above $100:");


    productsAbove100.forEach(function(product) {

        console.log(
            product.title + " - $" + product.price
        );

    });


    let electronicsProduct = products.find(function(product) {

        return product.category === "electronics";

    });


    console.log("");
    console.log("Electronics Product:");

    console.log(electronicsProduct);

    let totalValue = products.reduce(function(total, product) {

        return total + product.price;

    }, 0);


    console.log("");

    console.log(
        "Total Product Value:",
        "$" + totalValue.toFixed(2)
    );


    let anyProductAbove500 = products.some(function(product) {

        return product.price > 500;

    });


    console.log("");

    console.log(
        "Any Product Above $500:",
        anyProductAbove500
    );

    let allProductsAbove1 = products.every(function(product) {

        return product.price > 1;

    });


    console.log(
        "All Products Above $1:",
        allProductsAbove1
    );



    let sortedProducts = products.sort(function(a, b) {

        return b.price - a.price;

    });


    console.log("");
    console.log("Highest → Lowest:");


    sortedProducts.forEach(function(product) {

        console.log(
            product.title + " - $" + product.price
        );

    });

}


fetch(apiLink)
    .then(function(response) {

        return response.json();

    })
    .then(function(products) {

        productReport(products);

    })
    .catch(function(error) {

        console.log("Product Report Error:", error);

    })
    .finally(function() {

        console.log("");
        console.log("Task 6 completed.");

    });

    console.log("========== TASK 6 END ==========");

// TASK 7 - PRODUCT NAME SEARCH

console.log("========== TASK 7 ==========");


function productNameSearch() {


    let searchName = prompt(
        "Enter product name:"
    );


    fetch(apiLink)
        .then(function(response) {

            return response.json();

        })
        .then(function(products) {


            let searchResult = products.filter(function(product) {

                return product.title
                    .toLowerCase()
                    .includes(searchName.toLowerCase());

            });


            console.log("");
            console.log("===== PRODUCT NAME SEARCH =====");


            if (searchResult.length === 0) {

                console.log("No product found.");

            }
            else {

                searchResult.forEach(function(product) {

                    console.log("");
                    console.log("Product:", product.title);
                    console.log("Price:", "$" + product.price);
                    console.log("Category:", product.category);

                });

            }

        })
        .catch(function(error) {

            console.log("Search Error:", error);

        })
        .finally(function() {

            console.log("");
            console.log("Task 7 completed.");

        });

}
console.log("========== TASK 7 END ==========");


