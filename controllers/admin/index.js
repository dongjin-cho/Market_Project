const {
    Router
} = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');
const jwt = require("jsonwebtoken");
const secretObj = process.env.JWT_SECRET

// function verify_token(req, res, next) {
//     const token = req.cookies.customer_t;
    
//     if (!token) {
//         return res.json({
//             message: 'fail'
//         })
//     }

//     jwt.verify(token, secretObj, (err, decoded) => {
   
//         if (!decoded) {
//             return res.json({
//                 message: 'fail',
//                 err: err
//             })
//         }
//     })
//     next();
// }
function verify_token(req, res, next) {
    const token = req.headers.customer_t;
    
    if (!token) {
        return res.json({
            message: 'fail'
        })
    }

    jwt.verify(token, secretObj, (err, decoded) => {
   
        if (!decoded) {
            return res.json({
                message: 'fail',
                err: err
            })
        }
    })
    next();
}
function testMiddleWare2(req, res, next) {
    console.log('두번째 미들웨어');
    next();
}

router.get('/', verify_token, testMiddleWare2, (req, res) => {
    res.send('admin app');
});

// future connect 
router.get('/customers', ctrl.get_customers);
router.post('/customers', verify_token,ctrl.post_customers);
router.get('/customers/:id',  verify_token, ctrl.get_customers_edit);
router.post('/customers/:id', verify_token, ctrl.post_customers_edit);

router.get('/carts', verify_token, ctrl.get_carts);
router.post('/carts', verify_token, ctrl.post_carts);
router.get('/carts/:id', verify_token, ctrl.get_carts_edit);
router.post('/carts/:id', verify_token, ctrl.post_carts_edit);

// cart_id fetch기능
router.post('/carts_recent', verify_token, ctrl.post_recent_carts);
router.get('/carts_recent/:id', verify_token, ctrl.get_one_carts);
router.post('/carts_recent_items', verify_token, ctrl.post_recent_carts_items);

router.get('/cart_lists', verify_token, ctrl.get_cart_lists);
router.post('/cart_lists', verify_token, ctrl.post_cart_lists);
router.get('/cart_lists/:id', verify_token, ctrl.get_cart_lists_edit);
router.post('/cart_lists/:id', verify_token, ctrl.post_cart_lists_edit);

router.get('/cart_items', verify_token, ctrl.get_cart_items);
router.post('/cart_items', verify_token, ctrl.post_cart_items);
router.get('/cart_items/:id', verify_token, ctrl.get_cart_items_edit);
router.post('/cart_items/:id', verify_token, ctrl.post_cart_items_edit);

// cart_id, product_id로 cart_item_id return
router.get('/cart_items/:cart_id/:product_id', verify_token, ctrl.get_cart_items_cartid_productid);
router.get('/cart_items_cart/:cart_id', verify_token, ctrl.get_cart_items_cartid);

router.get('/purchases', verify_token, ctrl.get_purchases);
router.post('/purchases', verify_token, ctrl.post_purchases);
router.get('/purchases/:id', verify_token, ctrl.get_purchases_edit);
router.post('/purchases/:id', verify_token, ctrl.post_purchases_edit);

//customer id 로 구매내역 가져오기
router.get('/purchases/customer/:customer_id', verify_token, ctrl.get_purchases_customer);


router.get('/products', verify_token, ctrl.get_products);
router.post('/products', verify_token, ctrl.post_products);
router.get('/products/:id', verify_token, ctrl.get_products_edit);
router.post('/products/:id', verify_token, ctrl.post_products_edit);

router.get('/notification_infos', verify_token, ctrl.get_notification_infos);
router.post('/notification_infos', verify_token, ctrl.post_notification_infos);
router.get('/notification_infos/:id', verify_token, ctrl.get_notification_infos_edit);
router.post('/notification_infos/:id', verify_token, ctrl.post_notification_infos_edit);

router.get('/hashtag_lists', verify_token, ctrl.get_hashtag_lists);
router.post('/hashtag_lists', verify_token, ctrl.post_hashtag_lists);
router.get('/hashtag_lists/:id', verify_token, ctrl.get_hashtag_lists_edit);
router.post('/hashtag_lists/:id', verify_token, ctrl.post_hashtag_lists_edit);

router.get('/hashtags', verify_token, ctrl.get_hashtags);
router.post('/hashtags', verify_token, ctrl.post_hashtags);
router.get('/hashtags/:id', verify_token, ctrl.get_hashtags_edit);
router.post('/hashtags/:id', verify_token, ctrl.post_hashtags_edit);

router.get('/product_orders', verify_token, ctrl.get_product_orders);
router.post('/product_orders', verify_token, ctrl.post_product_orders);
router.get('/product_orders/:id', verify_token, ctrl.get_product_orders_edit);
router.post('/product_orders/:id', verify_token, ctrl.post_product_orders_edit);

router.get('/providers', verify_token, ctrl.get_providers);
router.post('/providers', verify_token, ctrl.post_providers);
router.get('/providers/:id', verify_token, ctrl.get_providers_edit);
router.post('/providers/:id', verify_token, ctrl.post_providers_edit);

router.get('/provider_handles', verify_token, ctrl.get_provider_handles);
router.post('/provider_handles', verify_token, ctrl.post_provider_handles);
router.get('/provider_handles/:id', verify_token, ctrl.get_provider_handles_edit);
router.post('/provider_handles/:id', verify_token, ctrl.post_provider_handles_edit);

router.get('/customer_logs', verify_token, ctrl.get_customer_logs);
router.post('/customer_logs', verify_token, ctrl.post_customer_logs);
router.get('/customer_logs/:id', verify_token, ctrl.get_customer_logs_edit);
router.post('/customer_logs/:id', verify_token, ctrl.post_customer_logs_edit);

router.get('/reviews', verify_token, ctrl.get_reviews);
router.post('/reviews', verify_token, ctrl.post_reviews);
router.get('/reviews/:id', verify_token, ctrl.get_reviews_edit);
router.post('/reviews/:id', verify_token, ctrl.post_reviews_edit);
router.get('/product_reviews/:id', verify_token, ctrl.get_product_review);

router.get('/coupons', verify_token, ctrl.get_coupons);
router.post('/coupons', verify_token, ctrl.post_coupons);
router.get('/coupons/:id', verify_token, ctrl.get_coupons_edit);
router.post('/coupons/:id', verify_token, ctrl.post_coupons_edit);
router.get('/coupon_customer/:id', verify_token, ctrl.get_coupon_customer);

router.get('/inventories', verify_token, ctrl.get_inventories);
router.post('/inventories', verify_token, ctrl.post_inventories);
router.get('/inventories/:id', verify_token, ctrl.get_inventories_edit);
router.post('/inventories/:id', verify_token, ctrl.post_inventories_edit);
router.get('/inventories_product/:id', verify_token, ctrl.get_inventories_product);

//sns_id 구현
router.get('/customers/sns_id/:id', verify_token, ctrl.get_customers_sns_edit);

//image 전송
router.get('/img', ctrl.get_img);

router.get('/img_thumbs/:filename', ctrl.get_img_thumbs);
router.get('/img_detailpage_upload/:filename', ctrl.get_img_detailpage_upload);
router.get('/img_product/:filename', ctrl.get_img_product);

// address map

router.get("/kaka/:lat/:long", ctrl.get_address_map);

// streaming url
router.get('/streaming', ctrl.get_streaming);

// admin apge
//products
router.get('/admin_products', ctrl.get_admin_products);
router.get('/admin_products_write', ctrl.get_admin_products_write);
router.post('/admin_products_write', ctrl.post_admin_products_write);
router.get('/admin_products/detail/:id', ctrl.get_admin_products_detail );
router.get('/admin_products/edit/:id', ctrl.get_admin_products_edit );
router.post('/admin_products/edit/:id', ctrl.post_admin_products_edit );
router.get('/admin_products/delete/:id', ctrl.get_admin_products_delete );

//customers
router.get('/admin_customers', ctrl.get_admin_customers);
router.get('/admin_customers_write', ctrl.get_admin_customers_write);
router.post('/admin_customers_write', ctrl.post_admin_customers_write);
router.get('/admin_customers/detail/:id', ctrl.get_admin_customers_detail );
router.get('/admin_customers/edit/:id', ctrl.get_admin_customers_edit );
router.post('/admin_customers/edit/:id', ctrl.post_admin_customers_edit );
router.get('/admin_customers/delete/:id', ctrl.get_admin_customers_delete );

//inventories

router.get('/admin_inventories', ctrl.get_admin_inventories);
router.get('/admin_inventories_write', ctrl.get_admin_inventories_write);
router.post('/admin_inventories_write', ctrl.post_admin_inventories_write);
router.get('/admin_inventories/detail/:id', ctrl.get_admin_inventories_detail );
router.get('/admin_inventories/edit/:id', ctrl.get_admin_inventories_edit );
router.post('/admin_inventories/edit/:id', ctrl.post_admin_inventories_edit );
router.get('/admin_inventories/delete/:id', ctrl.get_admin_inventories_delete );

// login구현

router.post('/login', ctrl.post_login);

// loading
module.exports = router;
console.log('Routing success');


//router.get('/products', ctrl.get_products );
/*
router.get('/products/write', ctrl.get_products_write );

router.post('/products/write', ctrl.post_products_write );

router.get('/products/detail/:id', ctrl.get_products_detail );

router.get('/products/edit/:id', ctrl.get_products_edit );

router.post('/products/edit/:id', ctrl.post_products_edit );

router.get('/products/delete/:id', ctrl.get_products_delete );
*/
