"use client"
import Stats from './Stats'
import CountUp from "react-countup";
import { CheckBadgeIcon, CodeBracketIcon, CursorArrowRippleIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";

const HomeStats = () => {
    const stats = [
        { id: 1, name: 'Web Development', value: <CountUp start={0} end={8580} duration={2}/>,icon: CodeBracketIcon },
        { id: 2, name: 'Digital Marketing for a Brand', value: <CountUp start={0} end={2000} duration={2}/>,icon: CheckBadgeIcon },
        { id: 3, name: 'PPC campaign maintained', value: <CountUp start={0} end={6588} duration={2}/>,icon: CursorArrowRippleIcon },
        { id: 4, name: 'SEO Optimized Website', value: <CountUp start={0} end={2100} duration={2}/>,icon: PresentationChartLineIcon },
      ]
  return (
    <>
    <Stats stats={stats} heading={"Digital Marketing & Web Dev Solutions!"} para={"Our Digital Services provides both Digital Marketing and Web Development strategies, designed to maximise online visibility and engagement for businesses."}/>
    </>
  )
}

export default HomeStats