import ProductItem from "./ProductItem";


export default function ProductList({products}) {
    /* 
    ПОЧЕМУ используем key в ProductItem?
    При рендеринге списков, например, карточек товара, для каждого элемента списка необходимо добавить уникальный ключ идентификатор.
    Это поможет оптимизировать рендеринг списков. При именении состояния ключи помогают алгоритмам сравнения нового виртуального DOM со 
    старым, в частности определить какой элемент обновился и вместо обновления всего списка обновить только изменившийся элемент. 
    Тем самым улучшив производительность страницы.
    */
    return (
        <ul className="product-container">
            {products.length ? 
                products.map(product => (
                <ProductItem 
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                />
            )) : 
            <p>Products not found</p>
            }
        </ul>
    )
}