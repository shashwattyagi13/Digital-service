"use client"

import React, {useEffect} from "react";
// import { Collapse, initTWE } from "tw-elements";

const Faqs = () => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Ensure code runs only on the client-side
  //     initTWE({ Collapse });
  //   }
  // }, []);
  
  return (
    <>
      <div className="mb:py-24 py-12">
        <h1 className="mb:text-5xl text-2xl font-bold text-center"> FAQs</h1>
        <div id="accordionFlushExample">
          <div class="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
            <h2 class="mb-0" id="flush-headingOne">
              <button
                class="font-bold mb:text-5xl text-xl group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                type="button"
                data-twe-collapse-init
                data-twe-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Ques 1. How can a digital marketing agency help my business
                grow?
                <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="!visible border-0"
              data-twe-collapse-item
              data-twe-collapse-show
              aria-labelledby="flush-headingOne"
              data-twe-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                A digital marketing agency can help your business grow by
                implementing targeted strategies to increase online visibility,
                attract more website traffic, generate leads, and ultimately,
                convert leads into customers. Through services such as search
                engine optimization (SEO), social media marketing, content
                creation, and paid advertising, a digital marketing agency can
                optimize your online presence and drive meaningful results for
                your business.
              </div>
            </div>
          </div>
          <div class="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
            <h2 class="mb-0" id="flush-headingTwo">
              <button
                class="font-bold mb:text-5xl text-xl group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                type="button"
                data-twe-collapse-init
                data-twe-collapse-collapsed
                data-twe-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Ques2. What sets your digital marketing agency apart from
                others?
                <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="!visible hidden border-0"
              data-twe-collapse-item
              aria-labelledby="flush-headingTwo"
              data-twe-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                Our digital marketing agency stands out from the competition due
                to our unique blend of creativity, data-driven insights, and
                client-centric approach. We prioritize understanding your
                business goals and target audience to tailor customized
                solutions that deliver measurable results. With a team of
                experienced professionals and a commitment to excellence, we
                strive to exceed your expectations and help your business thrive
                in the digital landscape.
              </div>
            </div>
          </div>
          <div class="rounded-none border border-b-0 border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
            <h2 class="mb-0" id="flush-headingThree">
              <button
                class="font-bold mb:text-5xl text-xl group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                type="button"
                data-twe-collapse-init
                data-twe-collapse-collapsed
                data-twe-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Ques3. How do I know if my business needs the services of a
                digital marketing agency?
                <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="flush-headingThree"
              data-twe-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                If you're looking to increase your online presence, reach a
                wider audience, and drive growth for your business, partnering
                with a digital marketing agency can be highly beneficial.
                Whether you're a small startup or an established enterprise, our
                expertise in digital marketing strategies can help you stay
                competitive in today's digital marketplace. Contact us today to
                discuss your business goals and explore how we can help you
                achieve success through digital marketing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
