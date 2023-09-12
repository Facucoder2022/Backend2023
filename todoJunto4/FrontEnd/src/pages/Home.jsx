import React from 'react'
import { Hero } from '../components/Hero'
import { CategoryCard } from '../components/CategoryCard'
import { ProductsCarousel } from '../components/ProductsCarousel'

export const Home = () => {
  return (
    <div>
      <Hero />
      <div className='container mx-auto flex-col md:flex-row flex justify-between items-center gap-8 mt-10'>
        <CategoryCard
          image="https://m.media-amazon.com/images/I/71yr0KKSxBL._AC_UX569_.jpg"
          text="Jerseys"
          link="/products/Jersey" />
        <CategoryCard 
          image="https://m.media-amazon.com/images/I/81qw3nGVhWL._AC_UX535_.jpg"
          text="Shoes"
          link="/products/Shoes" />
        <CategoryCard
          image="https://m.media-amazon.com/images/I/91W3lpHLJhL._AC_SX679_.jpg"
          text="Merchandise"
          link="/products/Merchandise" />
      </div>
      <div className='container mx-auto mt-10'>
        <h2 className='text-4xl font-bold text-myDarkColor'>Some of our most expensive products</h2> 
        <div>
          <ProductsCarousel />
        </div>
      </div> 
    </div>
  )
}