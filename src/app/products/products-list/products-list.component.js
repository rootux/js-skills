class ProductsListCtrl {
  constructor() {
    'ngInject';
  }
}

let ProductsList= {
  controller: ProductsListCtrl,
  templateUrl: 'products/products-list/products-list.html',
  bindings: {
    products: '<'
  }
};

export default ProductsList;
