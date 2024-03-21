import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import WebOptimization from "@/components/WebOptimization/WebOptimization"

export const metadata = {
  title: 'Website Optimization - Digital Marketing Agency / Expert at SEO, SMO',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
}
const WebsiteOptimization = () => {
  return (
    <>
    <Breadcrumbs name={"Web Optimization"}/>
    <PageWrapper>
     <WebOptimization/>
     </PageWrapper>

     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default WebsiteOptimization