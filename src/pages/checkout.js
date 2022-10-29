import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems } from '../slices/basketSlice'

function Checkout() {
    const items = useSelector(selectItems)

    return (
        <div className='bg-gray-100'>
            <Head>
                <title>Checkout | Amazon Clone</title>
            </Head>

            <Header />

            <main className='lg:flex max-w-screen-2xl mx-auto'>
                <div className='flex-grow m-5 shadow-sm'>
                    <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" />

                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>
                            {items.length === 0 ? 'Your Amazon Basket is empty' : 'Your Shopping Basket'}
                        </h1>

                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                category={item.category}
                                image={item.image}
                                rating={item.rating}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>

                <div>

                </div>
            </main>
        </div>
    )
}

export default Checkout