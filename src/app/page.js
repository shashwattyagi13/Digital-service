import Hero from "@/components/Home/Hero/Hero";
import Feature from "@/components/Home/Feature/Feature";
import WeAre from "@/components/Home/WeAre/WeAre";
import WeMake from "@/components/Home/WeMake/WeMake";
import Prefer from "@/components/Home/Prefer/Prefer";
import { PageWrapper } from "./page-wrapper";
import HomeStats from "@/components/Home/Stats/HomeStats";
import Test from "@/components/Testimonials/Test";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import WeCan from "@/components/Home/WeCan/WeCan";
import ContactForm from "@/components/ContactPage/ContactForm";
import SliderOne from "@/components/Home/SliderOne/SliderOne";
import SliderTwo from "@/components/Home/SliderTwo/SliderTwo";
import Faqs from "@/components/Home/FAQs/Faqs";
import dynamic from "next/dynamic";

// const DynamicComponent = dynamic(() => import("../components/Home/FAQs/Faqs"), {
//   ssr: false,
// });

export default function Home() {
  const content = [
    {
      heading: "Web Optimization",
      description:
      "Web optimization involves fine-tuning a website to enhance its performance, user experience, and visibility on search engines. Through strategic techniques businesses can maximize their online presence and drive more traffic to their site.",
    },
    {
      heading: "Digital Marketing",
      description:
        "Digital marketing is one of the best techniques used for product and business promotion. We use the above-mentioned ways to promote your product to help you succeed in converting your audience into sales.",
    },
    {
      heading: "Website Development",
      description:
        "A website is the essence and the personality of the company and unlike humans this personality can change and can very profitably effect the people around the world.",
    },
  ];

  const homeSections = [
  {
   page: <SliderOne/>,
  },
  {
    page: <SliderTwo/>,
   },
    {
      page: (
        <Feature
          content={content}
          mainHeading={`We Help You Increase Sales and Revenue By Improving the strategies of Digital Services <span class="highlight">Your Brand</span>`}
        />
      ),
    },
    {
      page: <WeAre />,
    },
    {
      page: <WeCan />,
    },
    {
      page: <WeMake />,
    },
    {
      page: <HomeStats />,
    },
    {
      page: <Prefer />,
    },
    {
      page: <CaseStudy />,
    },
    {
      page: <Test />,
    },
    {
      page: (
        <ContactForm
          heading={`Get in <span class="highlight">Touch</span>`}
          color={"bg-white"}
        />
      ),
    },
    {
      page: <Faqs />
    }
  ];
  return (
    <>
      {/* <DynamicComponent /> */}
      <Hero />
      {homeSections.map((i, k) => {
        return <PageWrapper key={k}>{i.page}</PageWrapper>;
      })}
    </>
  );
}
