import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import PortfolioIsoTop from "@/components/Portfolio/PortfolioIsoTop"

export const metadata = {
  title: 'Portfolio - Digital Marketing & Web dev Agency',
  description: 'All digital marketing services & web development.',
}

const Portfolio = () => {
  return (
    <>
    <Breadcrumbs name={"Portfolio"}/>
    <PortfolioIsoTop/>
    </>
  )
}

export default Portfolio