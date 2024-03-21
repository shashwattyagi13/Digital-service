import { PageWrapper } from "@/app/page-wrapper"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Feature from "@/components/Home/Feature/Feature"
import Test from "@/components/Testimonials/Test"
import Powerful from "@/components/WebDevelopment/Powerful"
import WeDev from "@/components/WebDevelopment/WeDev"
import { WebEngaging } from "@/components/WebDevelopment/WebEngaging"
import WebHero from "@/components/WebDevelopment/WebHero"
import WebStats from "@/components/WebDevelopment/WebStats"
import WebWhyUs from "@/components/WebDevelopment/WebWhyUs"

export const metadata = {
  title: 'Web Development - Digital Marketing Agency / Expert at SEO, SMO',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
}
const WebDevelopment = () => {
  const content = [{
    heading: "Put Quality Content",
    description: "Did you know that consumers want to learn about your business or products through content rather than traditional advertising? It is not easy to get people to spend money on something they have never heard of before."
  },{
    heading: "Needs Informative Website Development",
    description: "A website is the essence and the personality of the company, and unlike humans, this personality can change and can very profitably affect people around the world."
  },{
    heading: "Needs Digital Marketing",
    description: "Digital marketing is one of the best techniques for product and business promotion. We use the above-mentioned ways to promote your product to help you succeed in converting your audience into sales. This is free when you choose us for website development."
  }]

  const sections =[
    {
      section: <WebHero/>
    },
    {
      section: <WeDev/>
    },
    {
      section: <ContactForm heading={`We will <span class="highlight">contact you!</span>`} color={"bg-white"}/>
    },
    {
      section: <WebWhyUs/>
    },
    {
      section: <ContactForm heading={`Get in Touch: Just a few Mins <span class="highlight">conversation</span>`} color={"bg-white"}/>
    },
    {
      section: <Powerful/>
    },
    {
      section: <Feature content={content} mainHeading={`A Good Website Means More Business Leads, More <span class="highlight">Customers</span>`}/>
    },
    {
      section: <WebEngaging/>
    },
    {
      section: <WebStats/>
    },
    {
      section: <Test/>
    },
    {
      section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
    },
    {
      section: <ContactAddress/>
    }
  ]
  return (
    <>
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

export default WebDevelopment