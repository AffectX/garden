
import Catalog from "@/sections/Catalog";
import Banner from "@/sections/Banner";

export const metadata = {
  title: 'Catalog',
}

export default () => {
  return (
    <>
      <Catalog />
      <Banner type="review" />
    </>
  )
}
