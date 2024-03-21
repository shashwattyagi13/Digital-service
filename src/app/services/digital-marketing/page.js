import { PageWrapper } from '@/app/page-wrapper'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Cta from '@/components/CTA/Cta'
import ContactForm from '@/components/ContactPage/ContactForm'
import DigitalMarketing from '@/components/DigitalMarketing/DigitalMarketing'
import FeaturedService from '@/components/DigitalMarketing/FeaturedService'
import Influencer from '@/components/DigitalMarketing/Influencer'
import Marketing from '@/components/DigitalMarketing/Marketing'

export const metadata = {
  title: 'Digital Marketing - Digital Marketing Agency / Expert at SEO, SMO',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
}
const sections = [
  {
    section: <DigitalMarketing/>
  },
  {
    section: <Influencer/>
  },
  {
    section: <FeaturedService/>
  },
  {
    section: <Marketing/>
  },
  {
    section: <Cta heading={"Digital Marketing SMO & SEO Solution!"} para={"Our digital marketing solutions encompass both SMO (Social Media Optimization) and SEO (Search Engine Optimization) strategies, designed to maximize online visibility and engagement for businesses."}/>
  },
  {
    section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
  }
]
const DigitalM = () => {
  return (
    <>
    <Breadcrumbs name={"Digital Marketing"}/>
    {
      sections.map((i,k) => {
        return (
          <PageWrapper key={k}>
          {i.section}
          </PageWrapper>
        )
      })
    }
    </>
  )
}

export default DigitalM