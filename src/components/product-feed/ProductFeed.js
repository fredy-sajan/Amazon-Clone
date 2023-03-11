import Product from "./Product";

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-20  md:-mt-52 lg:-mt-64 xl:-mt-64 mx-auto">
            {products
                .slice(0, 4)
                .map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        category={category}
                        image={image}
                        price={price}
                    />
                ))}

            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />

            <div className="md:col-span-2">
                {products
                    .slice(4, 5)
                    .map(({ id, title, price, description, category, image }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            category={category}
                            image={image}
                            price={price}
                        />
                    ))}
            </div>

            {products
                .slice(5, 13)
                .map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        category={category}
                        image={image}
                        price={price}
                    />
                ))
            }


            <div className="md:col-span-2">
                {products
                    .slice(14, 15)
                    .map(({ id, title, price, description, category, image }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            category={category}
                            image={image}
                            price={price}
                        />
                    ))}
            </div>

            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />

            {products
                .slice(15, 19)
                .map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        category={category}
                        image={image}
                        price={price}
                    />
                ))
            }

            <div className="md:col-span-2">
                {products
                    .slice(19, 20)
                    .map(({ id, title, price, description, category, image }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            category={category}
                            image={image}
                            price={price}
                        />
                    ))}
            </div>

            {products
                .slice(10, 12)
                .map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        category={category}
                        image={image}
                        price={price}
                    />
                ))
            }

        </div>

    )
}

export default ProductFeed;