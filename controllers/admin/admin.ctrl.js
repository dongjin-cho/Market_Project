const db = require('../../models');
const models = require('../../models');

exports.get_products = ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );
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

exports.get_customers = ( _ , res) => {
    models.customers.findAll({
    }).then((customerList)=>{
        //console.log(customerList)
        //res.send(customerList)
        
        //HTML Return
        //res.render('admin/customers.html', {customers: customerList})

        //JSON Return
        res.json(customerList);
    }) // 이곳으로 productList보내기
}

exports.post_customers = ( req , res ) => {
    
    console.log('body =' + req.body);
    models.customers.create(req.body).then( () => {
        console.log('body =' +req.body);
        res.json(req.body);
    });   
} 
exports.get_customers_edit = (req, res) => {
    models.customers.findByPk(req.params.id).then((customer)=>{
        res.json(customer);
    })
}

exports.post_customers_edit = (req, res) =>{
    models.customers.update({
        //data
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        birthdate: req.body.birthdate,
        phone: req.body.phone,
        address: req.body.address,
        createdate: req.body.createdate
    },{
        //condition
        where: {customer_id: req.params.id}
    }).then(()=>{
        res.json(req.body);
    })
}

exports.get_products = ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );
    models.products.findAll({

    }).then((products)=>{
        res.render('admin/products.html', {products: products})
    }) // 이곳으로 productList보내기
}

exports.get_orders = ( _ , res) => {
    models.orders.findAll({
    }).then((orderList)=>{
        //console.log(orderList)
        res.render('admin/order.html', {orders: orderList})
    }) // 이곳으로 productList보내기
}

exports.get_orders_detail = ( req, res ) => {
    models.order_details.findAll({
        where: { order_id : req.params.id}
    }).then( (order_details) => {
        //res.send(product);
        res.render('admin/order_detail.html', { order_details: order_details });  
    });
};