import Head from "next/head";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import ProductFeed from "../components/product-feed/ProductFeed";

export default function Home({ products }) {
    return (
        <div>
            <Head>
                <title>Amazon Clone</title>
            </Head>

            {/* Header  */}
            <Header />

            <main className="max-w-screen-2xl mx-auto">
                {/* Banner */}
                <Banner />

                {/* Product feed */}
                <ProductFeed products={products}/>
            </main>

        </div>
    );
}

export async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    );

    return { props: {
        products,
    } }
}
