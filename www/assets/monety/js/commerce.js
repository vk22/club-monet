var productData = {
    "price" : "[[*price]]",
    "name" : "[[*pagetitle]]"
}
window.dataLayer = window.dataLayer || [];

// просмотр товара
dataLayer.push({
    "ecommerce": {
        "detail": {
            "products": [
                {
                    "name" : productData.name,
                    "price": productData.price.replace(/\s+/g, '')
                }
            ]
        }
    }
});

// добавление товара в Корзину
miniShop2.Callbacks.Cart.add.response.success = function() {

    dataLayer.push({
        "ecommerce": {
            "add": {
                "products": [
                    {
                        "name": productData.name,
                        "price": productData.price.replace(/\s+/g, '')
    
                    }
                ]
            }
        }
    });

}