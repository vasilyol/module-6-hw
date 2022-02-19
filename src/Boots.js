function Boots({itemsForSale}) {

    const view = itemsForSale.slice(0, 4);

    return (
        <div className="products">
            {view.map(item => {
                const {id, name, price, image} = item;
                return (
                    <div className="product-card" key={id}>
                        <img src={image} width="263px" height="200px" alt="item"/>
                        <div className="product-info">
                            <p className="product-name">{name}</p>
                            <p className="price-text">Price: ${price}</p>
                            <button className="btn-buy">Buy now</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );

}

export default Boots;