import Hero from '@/sections/Hero'
import Popular from "@/sections/Popular";
import Delivery from "@/sections/Delivery";
import Questions from "@/sections/Questions";
import Banner from "@/sections/Banner";
import Reviews from "@/sections/Reviews";


export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero/>
      <Popular/>
      <Delivery/>
      <Questions/>
      <Banner type="question" />
      <Reviews />
      <Banner type="review"/>
    </>
  )
}
