const db = require('../../models');
const models = require('../../models');
const fs = require('fs');

// future coonect
// customers table
exports.get_customers = (_, res) => {
    models.customers.findAll({}).then((customerList) => {
        res.json(customerList);
    }) // 이곳으로 productList보내기
}

exports.post_customers = (req, res) => {

    models.customers.findOne({
        where: {
            sns_id: req.body.sns_id
        }
    }).then((customer) => {
        if (customer) {

            res.json('sns_id is duplicated');
        } else {
            models.customers.create(req.body).then(() => {
                res.json(req.body);
            });
        }

    })


}
exports.get_customers_edit = (req, res) => {
    models.customers.findByPk(req.params.id).then((customer) => {
        res.json(customer);
    })
}

exports.post_customers_edit = (req, res) => {
    models.customers.update({
        //data
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        birthdate: req.body.birthdate,
        phone: req.body.phone,
        sns_id: req.body.sns_id,
        post_code: req.body.post_code,
        address: req.body.address,
        detailed_address: req.body.detailed_address,
        createdate: req.body.createdate
    }, {
        //condition
        where: {
            customer_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// carts table
exports.get_carts = (_, res) => {
    models.carts.findAll({}).then((cartList) => {
        res.json(cartList);
    }) // 이곳으로 productList보내기
}

exports.post_carts = (req, res) => {

    console.log('body =' + req.body);
    models.carts.count().then(amount => {
        models.carts.create(req.body).then(() => {
            console.log('body =' + req.body);
            res.json(amount + 1);
        });
    });


}
exports.get_carts_edit = (req, res) => {
    models.carts.findByPk(req.params.id).then((cart) => {
        res.json(cart);
    })
}

exports.post_carts_edit = (req, res) => {
    models.carts.update({
        //data
        customer_id: req.body.customer_id,
        amount_price: req.body.amount_price,
        cart_status: req.body.cart_status,
    }, {
        //condition
        where: {
            cart_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// cart_list table
exports.get_cart_lists = (_, res) => {
    models.cart_lists.findAll({}).then((cart_listList) => {
        res.json(cart_listList);
    }) // 이곳으로 productList보내기
}

exports.post_cart_lists = (req, res) => {

    console.log('body =' + req.body);
    models.cart_lists.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json(req.body);
    });
}
exports.get_cart_lists_edit = (req, res) => {
    models.cart_lists.findByPk(req.params.id).then((cart_list) => {
        res.json(cart_list);
    })
}

exports.post_cart_lists_edit = (req, res) => {
    models.cart_lists.update({
        //data
        cart_id: req.body.cart_id,
        cart_item_id: req.body.cart_item_id,
    }, {
        //condition
        where: {
            cart_list_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// cart_items table
exports.get_cart_items = (_, res) => {
    models.cart_items.findAll({}).then((cart_itemList) => {
        res.json(cart_itemList);
    }) // 이곳으로 productList보내기
}

exports.post_cart_items = (req, res) => {

    console.log('body =' + req.body);
    models.cart_items.count().then(amount => {
        models.cart_items.create(req.body).then(() => {
            console.log('body =' + req.body);
            res.json(amount + 1);
        });
    });
}
exports.get_cart_items_edit = (req, res) => {
    models.cart_items.findByPk(req.params.id).then((cart_item) => {
        res.json(cart_item);
    })
}

exports.post_cart_items_edit = (req, res) => {
    models.cart_items.update({
        //data
        product_id: req.body.product_id,
        quantity: req.body.quantity,
        total_price: req.body.total_price,
    }, {
        //condition
        where: {
            cart_item_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

exports.get_cart_items_cartid_productid = (req, res) => {
    models.cart_items.findOne({
        where: {
            cart_id: req.params.cart_id,
            product_id: req.params.product_id
        }
    }).then((cart_item) => {
        res.json(cart_item.cart_item_id);
    })
}

exports.get_cart_items_cartid = (req, res) => {
    models.cart_items.findAll({
        where: {
            cart_id: req.params.cart_id
        }
    }).then((cart_itemList) => {
        res.json(cart_itemList);
    })
}

// purchases table
exports.get_purchases = (_, res) => {
    models.purchases.findAll({}).then((purchaseList) => {
        res.json(purchaseList);
    }) // 이곳으로 productList보내기
}

exports.post_purchases = (req, res) => {

    console.log('body =' + req.body);
    models.purchases.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json(req.body.cart_id);
    });
}
exports.get_purchases_edit = (req, res) => {
    models.purchases.findByPk(req.params.id).then((purchase) => {
        res.json(purchase);
    })
}

exports.post_purchases_edit = (req, res) => {
    models.purchases.update({
        //data
        cart_id: req.body.cart_id,
        customer_id: req.body.customer_id,
        delivery_address: req.body.delivery_address,
        delivery_option: req.body.delivery_option,
        purchase_status: req.body.purchase_status,
        order_timestamp: req.body.order_timestamp,
        delivery_timestamp: req.body.delivery_timestamp,
    }, {
        //condition
        where: {
            purchase_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// customer_id로 purchase list가져오기
exports.get_purchases_customer = (req, res) => {
    models.purchases.findAll({
        where: {
            customer_id: req.params.customer_id
        }
    }).then((purchaseList) => {
        res.json(purchaseList);
    }) // 이곳으로 productList보내기
}

// products table
exports.get_products = (_, res) => {
    models.products.findAll({}).then((productList) => {
        res.json(productList);
    }) // 이곳으로 productList보내기
}

exports.post_products = (req, res) => {

    console.log('body =' + req.body);
    models.products.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json(req.body);
    });
}
exports.get_products_edit = (req, res) => {
    models.products.findByPk(req.params.id).then((product) => {
        res.json(product);
    })
}

exports.post_products_edit = (req, res) => {
    models.products.update({
        //data
        category: req.body.category,
        name: req.body.name,
        provider_id: req.body.provider_id,
        retail_price: req.body.retail_price,
        location: req.body.location,
        description: req.body.description,
        img_path: req.body.img_path,
    }, {
        //condition
        where: {
            product_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// notification_infos table
exports.get_notification_infos = (_, res) => {
    models.notification_infos.findAll({}).then((notification_infoList) => {
        res.json(notification_infoList);
    }) // 이곳으로 productList보내기
}

exports.post_notification_infos = (req, res) => {

    console.log('body =' + req.body);
    models.notification_infos.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json(req.body);
    });
}
exports.get_notification_infos_edit = (req, res) => {
    models.notification_infos.findByPk(req.params.id).then((notification_info) => {
        res.json(notification_info);
    })
}

exports.post_notification_infos_edit = (req, res) => {
    models.notification_infos.update({
        //data
        product_id: req.body.product_id,
        attr1: req.body.attr1,
        attr2: req.body.attr2,
    }, {
        //condition
        where: {
            notification_info_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// hashtag_lists table
exports.get_hashtag_lists = (_, res) => {
    models.hashtag_lists.findAll({}).then((hashtag_listList) => {
        res.json(hashtag_listList);
    }) // 이곳으로 productList보내기
}

exports.post_hashtag_lists = (req, res) => {

    console.log('body =' + req.body);
    models.hashtag_lists.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json(req.body);
    });
}
exports.get_hashtag_lists_edit = (req, res) => {
    models.hashtag_lists.findByPk(req.params.id).then((hashtag_list) => {
        res.json(hashtag_list);
    })
}

exports.post_hashtag_lists_edit = (req, res) => {
    models.hashtag_lists.update({
        //data
        product_id: req.body.product_id,
        hashtag_id: req.body.hashtag_id,
    }, {
        //condition
        where: {
            hashtag_list_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// hashtags table
exports.get_hashtags = (_, res) => {
    models.hashtags.findAll({}).then((hashtagList) => {
        res.json(hashtagList);
    }) // 이곳으로 productList보내기
}

exports.post_hashtags = (req, res) => {

    console.log('body =' + req.body);
    models.hashtags.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json(req.body);
    });
}
exports.get_hashtags_edit = (req, res) => {
    models.hashtags.findByPk(req.params.id).then((hashtag) => {
        res.json(hashtag);
    })
}

exports.post_hashtags_edit = (req, res) => {
    models.hashtags.update({
        //data
        hashtag: req.body.hashtag,
    }, {
        //condition
        where: {
            hashtag_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// product_orders table
exports.get_product_orders = (_, res) => {
    models.product_orders.findAll({}).then((product_orderList) => {
        res.json(product_orderList);
    }) // 이곳으로 productList보내기
}

exports.post_product_orders = (req, res) => {

    console.log('body =' + req.body);
    models.product_orders.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json(req.body);
    });
}
exports.get_product_orders_edit = (req, res) => {
    models.product_orders.findByPk(req.params.id).then((product_order) => {
        res.json(product_order);
    })
}

exports.post_product_orders_edit = (req, res) => {
    models.product_orders.update({
        //data
        provider_id: req.body.provider_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity,
        amount_price: req.body.amount_price,
        order_timestamp: req.body.order_timestamp,
        stock_timestamp: req.body.stock_timestamp,
    }, {
        //condition
        where: {
            product_order_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// providers table
exports.get_providers = (_, res) => {
    models.providers.findAll({}).then((providerList) => {
        res.json(providerList);
    }) // 이곳으로 productList보내기
}

exports.post_providers = (req, res) => {

    console.log('body =' + req.body);
    models.providers.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json(req.body);
    });
}
exports.get_providers_edit = (req, res) => {
    models.providers.findByPk(req.params.id).then((provider) => {
        res.json(provider);
    })
}

exports.post_providers_edit = (req, res) => {
    models.providers.update({
        //data
        phone: req.body.phone,
        address: req.body.address,
    }, {
        //condition
        where: {
            provider_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// provider_handles table
exports.get_provider_handles = (_, res) => {
    models.provider_handles.findAll({}).then((provider_handleList) => {
        res.json(provider_handleList);
    }) // 이곳으로 productList보내기
}

exports.post_provider_handles = (req, res) => {

    console.log('body =' + req.body);
    models.provider_handles.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json(req.body);
    });
}
exports.get_provider_handles_edit = (req, res) => {
    models.provider_handles.findByPk(req.params.id).then((provider_handle) => {
        res.json(provider_handle);
    })
}

exports.post_provider_handles_edit = (req, res) => {
    models.provider_handles.update({
        //data
        provider_id: req.body.provider_id,
        product_id: req.body.product_id,
        prov_price: req.body.prov_price,
    }, {
        //condition
        where: {
            provider_handle_id: req.params.id
        }
    }).then(() => {
        res.json(req.body);
    })
}

// sns_id 

exports.get_customers_sns_edit = (req, res) => {
    models.customers.findOne({
        where: {
            sns_id: req.params.id
        }
    }).then((customer) => {
        res.json(customer);
    })
}

// cart_items table
exports.get_img = (req, res) => {

    fs.readFile("controllers/admin/onion.jpeg", function (err, data) {
        res.writeHead(200, {
            "Context-Type": "image/jpg"
        });
        res.end(data); //클라이언트에게 응답을 전송한다

    });
}

// get streming
exports.get_streaming = (req, res) => {
    //res.sendFile("controllers/aadmin/streaming/testStreaming/streaming.html")
    res.render("admin/streaming.html");
}

/*
ADMIN PAGE
*/

exports.get_admin_products = ( _ , res) => {
    models.products.findAll({

    }).then((products)=>{
        res.render('admin/products.html', {products: products})
    }) // 이곳으로 productList보내기
}

exports.get_admin_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_admin_products_write = ( req , res ) => {
    console.log(req.body);
    // insert하는 두가지 방법
    models.products.create({
        category: req.body.category,
        name: req.body.name,
        provider_id: req.body.provider_id,
        retail_price: req.body.retail_price,
        location: req.body.location,
        description: req.body.description,
        img_path: req.body.img_path
    }).then( () => {
        res.redirect('/admin/admin_products');
    });    
} 

exports.get_admin_products_detail = ( req, res ) => {
    models.products.findByPk(req.params.id).then( (product) => {
        //res.send(product);
        res.render('admin/detail.html', { product: product });  
    });
};

exports.get_admin_products_delete = (req, res) => {
    console.log('delete function')
    models.products.destroy({
        where:{
            product_id: req.params.id
        }
    }).then(()=>{
        res.redirect('/admin/admin_products')
    })
}

exports.get_admin_products_edit = (req, res) => {
    models.products.findByPk(req.params.id).then((product)=>{
        res.render('admin/write.html', {product})
    })
}

exports.post_admin_products_edit = (req, res) =>{
    
    models.products.update({
        //data
        category: req.body.category,
        name: req.body.name,
        provider_id: req.body.provider_id,
        retail_price: req.body.retail_price,
        location: req.body.location,
        description: req.body.description,
        img_path: req.body.img_path
    },{
        //condition
        where: {product_id: req.params.id}
    }).then(()=>{
        res.redirect('/admin/admin_products/detail/'+req.params.id);
    })
}


//customers
exports.get_admin_customers = ( _ , res) => {
    models.customers.findAll({

    }).then((customers)=>{
        res.render('admin/customers.html', {customers: customers})
    }) // 이곳으로 productList보내기
}

exports.get_admin_customers_write = ( _ , res) => {
    res.render( 'admin/customers_write.html');
}

exports.post_admin_customers_write = ( req , res ) => {
    console.log(req.body);
    // insert하는 두가지 방법
    models.customers.create({
        
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        birthdate: req.body.birthdate,
        phone: req.body.phone,
        address: req.body.address,
        createdate: req.body.createdate,
        sns_id: req.body.sns_id,
        post_code: req.body.post_code,
        detailed_address: req.body.detailed_address
    }).then( () => {
        res.redirect('/admin/admin_customers');
    });    
} 

exports.get_admin_customers_detail = ( req, res ) => {
    models.customers.findByPk(req.params.id).then( (customers) => {
        //res.send(product);
        res.render('admin/customers_detail.html', { customers: customers });  
    });
};

exports.get_admin_customers_delete = (req, res) => {
    console.log('delete function')
    models.customers.destroy({
        where:{
            customer_id: req.params.id
        }
    }).then(()=>{
        res.redirect('/admin/admin_customers')
    })
}

exports.get_admin_customers_edit = (req, res) => {
    models.customers.findByPk(req.params.id).then((customers)=>{
        res.render('admin/customers_write.html', {customers})
    })
}

exports.post_admin_customers_edit = (req, res) =>{
    
    models.customers.update({
        //data
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        birthdate: req.body.birthdate,
        phone: req.body.phone,
        address: req.body.address,
        createdate: req.body.createdate,
        sns_id: req.body.sns_id,
        post_code: req.body.post_code,
        detailed_address: req.body.detailed_address
    },{
        //condition
        where: {customer_id: req.params.id}
    }).then(()=>{
        res.redirect('/admin/admin_customers/detail/'+req.params.id);
    })
}



// old
/*
exports.get_products = ( _ , res) => {
    models.Products.findAll({

    }).then((producs)=>{
        res.render('admin/products.html', {producs: producs})
    }) // 이곳으로 productList보내기
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    //res.send(req.body);
    // insert하는 두가지 방법
    models.Products.create({
        name : req.body.name,
        price : req.body.price ,
        description : req.body.description
    }).then( () => {
        
    });
    models.Products.create(req.body).then( () => {
        
    });
    res.redirect('/admin/products');
    
} 

exports.get_products_detail = ( req, res ) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        //res.send(product);
        res.render('admin/detail.html', { product: product });  
    });
};

exports.get_products_edit = (req, res) => {
    models.Products.findByPk(req.params.id).then((product)=>{
        res.render('admin/write.html', {product})
    })
}

exports.post_products_edit = (req, res) =>{
    models.Products.update({
        //data
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    },{
        //condition
        where: {id: req.params.id}
    }).then(()=>{
        res.redirect('/admin/products/detail/'+req.params.id);
    })
}

exports.get_products_delete = (req, res) => {
    models.Products.destroy({
        where:{
            id: req.params.id
        }
    }).then(()=>{
        res.redirect('/admin/products')
    })
}

*/