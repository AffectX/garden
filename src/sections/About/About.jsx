import './About.scss'
import Section from '@/layouts/Section'
import { Image } from 'minista'

export default () => {
  return (
    <Section
      title="Райский сад Сибири Каталог"
      titleId="about-title"

    >
      <p>About section content</p>
      <Image src="/src/assets/images/cat.jpg" />
    </Section>
  )
}
