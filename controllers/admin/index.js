const {
    Router
} = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

function testMiddleWare(req, res, next) {
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleWare2(req, res, next) {
    console.log('두번째 미들웨어');
    next();
}

router.get('/', testMiddleWare, testMiddleWare2, (req, res) => {
    res.send('admin app');
});

// future connect 
router.get('/customers', ctrl.get_customers);
router.post('/customers', ctrl.post_customers);
router.get('/customers/:id', ctrl.get_customers_edit);
router.post('/customers/:id', ctrl.post_customers_edit);

router.get('/carts', ctrl.get_carts);
router.post('/carts', ctrl.post_carts);
router.get('/carts/:id', ctrl.get_carts_edit);
router.post('/carts/:id', ctrl.post_carts_edit);

router.get('/cart_lists', ctrl.get_cart_lists);
router.post('/cart_lists', ctrl.post_cart_lists);
router.get('/cart_lists/:id', ctrl.get_cart_lists_edit);
router.post('/cart_lists/:id', ctrl.post_cart_lists_edit);

router.get('/cart_items', ctrl.get_cart_items);
router.post('/cart_items', ctrl.post_cart_items);
router.get('/cart_items/:id', ctrl.get_cart_items_edit);
router.post('/cart_items/:id', ctrl.post_cart_items_edit);

// cart_id, product_id로 cart_item_id return
router.get('/cart_items/:cart_id/:product_id', ctrl.get_cart_items_cartid_productid);
router.get('/cart_items_cart/:cart_id', ctrl.get_cart_items_cartid);

router.get('/purchases', ctrl.get_purchases);
router.post('/purchases', ctrl.post_purchases);
router.get('/purchases/:id', ctrl.get_purchases_edit);
router.post('/purchases/:id', ctrl.post_purchases_edit);
//customer id 로 구매내역 가져오기
router.get('/purchases/customer/:customer_id', ctrl.get_purchases_customer);


router.get('/products', ctrl.get_products);
router.post('/products', ctrl.post_products);
router.get('/products/:id', ctrl.get_products_edit);
router.post('/products/:id', ctrl.post_products_edit);

router.get('/notification_infos', ctrl.get_notification_infos);
router.post('/notification_infos', ctrl.post_notification_infos);
router.get('/notification_infos/:id', ctrl.get_notification_infos_edit);
router.post('/notification_infos/:id', ctrl.post_notification_infos_edit);

router.get('/hashtag_lists', ctrl.get_hashtag_lists);
router.post('/hashtag_lists', ctrl.post_hashtag_lists);
router.get('/hashtag_lists/:id', ctrl.get_hashtag_lists_edit);
router.post('/hashtag_lists/:id', ctrl.post_hashtag_lists_edit);

router.get('/hashtags', ctrl.get_hashtags);
router.post('/hashtags', ctrl.post_hashtags);
router.get('/hashtags/:id', ctrl.get_hashtags_edit);
router.post('/hashtags/:id', ctrl.post_hashtags_edit);

router.get('/product_orders', ctrl.get_product_orders);
router.post('/product_orders', ctrl.post_product_orders);
router.get('/product_orders/:id', ctrl.get_product_orders_edit);
router.post('/product_orders/:id', ctrl.post_product_orders_edit);

router.get('/providers', ctrl.get_providers);
router.post('/providers', ctrl.post_providers);
router.get('/providers/:id', ctrl.get_providers_edit);
router.post('/providers/:id', ctrl.post_providers_edit);

router.get('/provider_handles', ctrl.get_provider_handles);
router.post('/provider_handles', ctrl.post_provider_handles);
router.get('/provider_handles/:id', ctrl.get_provider_handles_edit);
router.post('/provider_handles/:id', ctrl.post_provider_handles_edit);

//sns_id 구현
router.get('/customers/sns_id/:id', ctrl.get_customers_sns_edit);

//image 전송
router.get('/img', ctrl.get_img);


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
