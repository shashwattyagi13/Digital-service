export default function CtaBox({Heading, Description}) {
    return (
      <div className="bg-slate-50 py-12 sm:py-24">
        <div className="app__container">
          <div className="relative isolate overflow-hidden bg-indigo-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-full text-center lg:mx-0 lg:flex-auto py-12 lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white text-center sm:text-4xl">
              {Heading}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300 text-center">{Description}</p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
                <a
                  href="#"
                  className="primary-btn shadow-lg"
                >
                  Connect With Us
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Know more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  