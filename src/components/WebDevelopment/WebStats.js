"use client"
import { CheckBadgeIcon, CodeBracketIcon, PresentationChartLineIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import CountUp from "react-countup"
import Stats from "../Home/Stats/Stats";

const WebStats = () => {
    const stats = [
        { id: 1, name: 'Beautiful Website Developed', value: <CountUp start={0} end={378} duration={2}/>,icon: CodeBracketIcon },
        { id: 2, name: 'Happy customers', value: <CountUp start={0} end={378} duration={2}/>,icon: UserGroupIcon },
        { id: 3, name: 'Meeting Done', value: <CountUp start={0} end={3587} duration={2}/>,icon: CheckBadgeIcon },
        { id: 4, name: 'Website Ranking on Google', value: <CountUp start={0} end={689} duration={2}/>,icon: PresentationChartLineIcon },
      ]
  return (
    <>
    <Stats stats={stats} heading={"Excellent Web Development Services PLUS Free Digital Marketing @7,999 Only!"} para={"You can get a beautiful website within 4 days"}/>
    </>
  )
}

export default WebStats