const db = require('../../models');
const models = require('../../models');
const fs = require('fs');
const jwt = require("jsonwebtoken");
const {
    decode
} = require('punycode');
const secretObj = process.env.JWT_SECRET
// future coonect
// customers table
function verify_token(req, res) {

}

exports.get_customers = (req, res) => {
    models.customers.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        })

    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });;

}

exports.post_customers = (req, res) => {

    models.customers.update({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        birthdate: req.body.birthdate,},
        {
            where: {
                sns_id: req.body.sns_id,
                join_platform: req.body.join_platform
        }
    }).then((result) => {
        res.json({
            message: 'success',
            result
        });

    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });;


}
exports.get_customers_edit = (req, res) => {
    models.customers.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });;
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });;
}

// carts table
exports.get_carts = (_, res) => {
    models.carts.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });; // 이곳으로 productList보내기
}

exports.post_carts = (req, res) => {

    console.log('body =' + req.body);
    models.carts.count().then(amount => {
        models.carts.create(req.body).then(() => {
            console.log('body =' + req.body);
            res.json({
                message: 'success',
                result: amount + 1
            });
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });


}
exports.get_carts_edit = (req, res) => {
    models.carts.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// cart_list table
exports.get_cart_lists = (_, res) => {
    models.cart_lists.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

exports.post_cart_lists = (req, res) => {

    console.log('body =' + req.body);
    models.cart_lists.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}
exports.get_cart_lists_edit = (req, res) => {
    models.cart_lists.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// cart_items table
exports.get_cart_items = (_, res) => {
    models.cart_items.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

exports.post_cart_items = (req, res) => {

    console.log('body =' + req.body);
    models.cart_items.count().then(amount => {
        models.cart_items.create(req.body).then(() => {
            console.log('body =' + req.body);
            res.json({
                message: 'success',
                result: amount + 1
            });
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });;
}
exports.get_cart_items_edit = (req, res) => {
    models.cart_items.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

exports.get_cart_items_cartid_productid = (req, res) => {
    models.cart_items.findOne({
        where: {
            cart_id: req.params.cart_id,
            product_id: req.params.product_id
        }
    }).then((cart_item) => {
        res.json({
            message: 'success',
            result: cart_item.cart_item_id
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

exports.get_cart_items_cartid = (req, res) => {
    models.cart_items.findAll({
        where: {
            cart_id: req.params.cart_id
        }
    }).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// purchases table
exports.get_purchases = (_, res) => {
    models.purchases.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

exports.post_purchases = (req, res) => {

    console.log('body =' + req.body);
    models.purchases.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json({
            message: 'success',
            result: req.body.cart_id
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });;
}
exports.get_purchases_edit = (req, res) => {
    models.purchases.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// customer_id로 purchase list가져오기
exports.get_purchases_customer = (req, res) => {
    models.purchases.findAll({
        where: {
            customer_id: req.params.customer_id
        }
    }).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

// products table
exports.get_products = (_, res) => {
    models.products.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

exports.post_products = (req, res) => {

    console.log('body =' + req.body);
    models.products.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}
exports.get_products_edit = (req, res) => {
    models.products.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// notification_infos table
exports.get_notification_infos = (_, res) => {
    models.notification_infos.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

exports.post_notification_infos = (req, res) => {

    console.log('body =' + req.body);
    models.notification_infos.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}
exports.get_notification_infos_edit = (req, res) => {
    models.notification_infos.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// hashtag_lists table
exports.get_hashtag_lists = (_, res) => {
    models.hashtag_lists.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

exports.post_hashtag_lists = (req, res) => {

    console.log('body =' + req.body);
    models.hashtag_lists.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}
exports.get_hashtag_lists_edit = (req, res) => {
    models.hashtag_lists.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// hashtags table
exports.get_hashtags = (_, res) => {
    models.hashtags.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

exports.post_hashtags = (req, res) => {

    console.log('body =' + req.body);
    models.hashtags.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}
exports.get_hashtags_edit = (req, res) => {
    models.hashtags.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// product_orders table
exports.get_product_orders = (_, res) => {
    models.product_orders.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }) // 이곳으로 productList보내기
}

exports.post_product_orders = (req, res) => {

    console.log('body =' + req.body);
    models.product_orders.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}
exports.get_product_orders_edit = (req, res) => {
    models.product_orders.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// providers table
exports.get_providers = (_, res) => {
    models.providers.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

exports.post_providers = (req, res) => {

    console.log('body =' + req.body);
    models.providers.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}
exports.get_providers_edit = (req, res) => {
    models.providers.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// provider_handles table
exports.get_provider_handles = (_, res) => {
    models.provider_handles.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

exports.post_provider_handles = (req, res) => {

    console.log('body =' + req.body);
    models.provider_handles.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}
exports.get_provider_handles_edit = (req, res) => {
    models.provider_handles.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
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
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// customer_logs table
exports.get_customer_logs = (_, res) => {
    models.customer_logs.findAll({}).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    }); // 이곳으로 productList보내기
}

exports.post_customer_logs = (req, res) => {

    console.log('body =' + req.body);
    models.customer_logs.create(req.body).then(() => {
        console.log('body =' + req.body);
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}
exports.get_customer_logs_edit = (req, res) => {
    models.customer_logs.findByPk(req.params.id).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

exports.post_customer_logs_edit = (req, res) => {
    models.customer_logs.update({
        //data
        lat: req.body.lat,
        lng: req.body.lng,
        address: req.body.address,
        logincnt: req.body.logincnt,
        loginos: req.body.loginos,
        appversion: req.body.appversion,
        logindate: req.body.logindate,
        customer_id: req.body.customer_id,
    }, {
        //condition
        where: {
            customer_id: req.params.id
        }
    }).then(() => {
        res.json({
            message: 'success',
            result: req.body
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// sns_id 

exports.get_customers_sns_edit = (req, res) => {
    models.customers.findOne({
        where: {
            sns_id: req.params.id
        }
    }).then((result) => {
        res.json({
            message: 'success',
            result
        });
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });
}

// cart_items table
exports.get_img = (req, res) => {

    fs.readFile("controllers/admin/onion.jpeg", function (err, data) {
        res.writeHead(200, {
            "Context-Type": "image/jpg"
        });
        res.end(data); //클라이언트에게 응답을 전송한다

    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
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

exports.get_admin_products = (_, res) => {
    models.products.findAll({

    }).then((products) => {
        res.render('admin/products.html', {
            products: products
        })
    }) // 이곳으로 productList보내기
}

exports.get_admin_products_write = (_, res) => {
    res.render('admin/write.html');
}

exports.post_admin_products_write = (req, res) => {
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
    }).then(() => {
        res.redirect('/admin/admin_products');
    });
}

exports.get_admin_products_detail = (req, res) => {
    models.products.findByPk(req.params.id).then((product) => {
        //res.send(product);
        res.render('admin/detail.html', {
            product: product
        });
    });
};

exports.get_admin_products_delete = (req, res) => {
    console.log('delete function')
    models.products.destroy({
        where: {
            product_id: req.params.id
        }
    }).then(() => {
        res.redirect('/admin/admin_products')
    })
}

exports.get_admin_products_edit = (req, res) => {
    models.products.findByPk(req.params.id).then((product) => {
        res.render('admin/write.html', {
            product
        })
    })
}

exports.post_admin_products_edit = (req, res) => {

    models.products.update({
        //data
        category: req.body.category,
        name: req.body.name,
        provider_id: req.body.provider_id,
        retail_price: req.body.retail_price,
        location: req.body.location,
        description: req.body.description,
        img_path: req.body.img_path
    }, {
        //condition
        where: {
            product_id: req.params.id
        }
    }).then(() => {
        res.redirect('/admin/admin_products/detail/' + req.params.id);
    })
}


//customers
exports.get_admin_customers = (_, res) => {
    models.customers.findAll({

    }).then((customers) => {
        res.render('admin/customers.html', {
            customers: customers
        })
    }) // 이곳으로 productList보내기
}

exports.get_admin_customers_write = (_, res) => {
    res.render('admin/customers_write.html');
}

exports.post_admin_customers_write = (req, res) => {
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
    }).then(() => {
        res.redirect('/admin/admin_customers');
    });
}

exports.get_admin_customers_detail = (req, res) => {
    models.customers.findByPk(req.params.id).then((customers) => {
        //res.send(product);
        res.render('admin/customers_detail.html', {
            customers: customers
        });
    });
};

exports.get_admin_customers_delete = (req, res) => {
    console.log('delete function')
    models.customers.destroy({
        where: {
            customer_id: req.params.id
        }
    }).then(() => {
        res.redirect('/admin/admin_customers')
    })
}

exports.get_admin_customers_edit = (req, res) => {
    models.customers.findByPk(req.params.id).then((customers) => {
        res.render('admin/customers_write.html', {
            customers
        })
    })
}

exports.post_admin_customers_edit = (req, res) => {

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
    }, {
        //condition
        where: {
            customer_id: req.params.id
        }
    }).then(() => {
        res.redirect('/admin/admin_customers/detail/' + req.params.id);
    })
}

//login

exports.post_login = (req, res) => {
    console.log('post get login')
    console.log('post get login')
    console.log('post get login')
    var token = jwt.sign({
        sns_id: req.body.sns_id
    },
    secretObj, {
        expiresIn: '1000d'
    })

    models.customers.findOne({
        where: {
            sns_id: req.body.sns_id,
            join_platform: req.body.join_platform
        }
    }).then((result) => {
        res.cookie('customer_t', token);
        if (result) {
            console.log('sns_id is duplicated')
            res.json({
                message: 'success',
                existed: 'y',
                token: token,
                result
            });
        } else {
            models.customers.create(req.body).then(() => {
                res.json({
                    message: 'success',
                    existed: 'n',
                    token: token,
                    result: req.body
                });
            });
        }
    }).catch(err => {

        console.error(err);
        res.json({
            message: 'fail'
        })
    });

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