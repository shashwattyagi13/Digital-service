import image from "@/constant/Images/image"
import Image from "next/image"

export const WebEngaging = () => {
  return (
    <section className="engaging-business py-16 md:py-32 bg-slate-50">
    <div className="app__container">
        <div className="row">
            <div className="col-12">
                <div className="engaging-business-heading text-center pb-50">
                    <div className="section-title pb-6">
                        <h2 className="primary-heading">Get a website that Engage Business Decisions for Revenue <span className="highlight">Growth</span></h2>
                    </div>
                    <p className="app__text">For the process of dusting alone, trained professionals are required who hear about the specifications of your products, functions, and design and then create a relatable but still very creative promotion where your product shines, and displays at its best. We work in a professional manner, Our various team departments handle projects smoothly.</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 mt-8">
                <div className="engaging-content-wrapper relative">
                    <div className="engaging-content">
                        <div className="engaging-top">
                            <div className="engaging-card-one">
                                <div className="yellow-hover engaging-single-card flex items-center gap-4 common-single-card">
                                    <div className="common-card-icon w-[5rem] svg-yellow">
                                        <Image src={image.decisionMaking} alt="decisionMaking"/>
                                    </div>
                                    <div className="h4-card-content">
                                        <div className="card-title">
                                            <h3 className="font-medium">Developers Team</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="engaging-card-two">
                                <div className="purple-hover engaging-single-card flex items-center gap-4 common-single-card">
                                    <div className="common-card-icon w-[5rem] svg-purple">
                                        <Image src={image.setting} alt="Customer Support Team"/>
                                    </div>
                                    <div className="h4-card-content">
                                        <div className="card-title">
                                            <h3 className="font-medium">Customer Support Team</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="engaging-btm">
                            <div className="engaging-card-three">
                                <div className="paste-hover engaging-single-card flex items-center gap-4 common-single-card">
                                    <div className="common-card-icon w-[5rem] svg-paste">
                                        <Image src={image.analysis} alt="Quality Testing Team"/>
                                    </div>
                                    <div className="h4-card-content">
                                        <div className="card-title">
                                            <h3 className="font-medium">Quality Testing Team</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="engaging-card-four">
                                <div className="pink-hover engaging-single-card flex items-center gap-4 common-single-card">
                                    <div className="common-card-icon w-[5rem] svg-pink">
                                        <Image src={image.loupe} alt="Delivery Team"/>
                                    </div>
                                    <div className="h4-card-content">
                                        <div className="card-title">
                                            <h3 className="font-medium">Delivery Team</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="m-auto hidden lg:block">
                            <div className="engaging-circle-img">
                                <Image src={image.engaging} alt="Engaging"/>
                            </div>
                        </div>
                </div>
            </div>
    </div>
</section>
  )
}
