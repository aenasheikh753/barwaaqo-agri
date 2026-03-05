"use client";

import { motion } from "framer-motion";

export function ContactInfoSection() {
    const contactInfo = [
        {
            title: "Head Office",
            location: "Mogadishu, Somalia",
            address: "Villa Somalia Road, KM4\nMogadishu, Somalia",
            phone: "+252 1 123 456",
            email: "info@barwaaqoagri.com"
        },
        {
            title: "Regional Office",
            location: "Nairobi, Kenya",
            address: "Westlands Business Park\nNairobi, Kenya",
            phone: "+254 20 123 4567",
            email: "kenya@barwaaqoagri.com"
        },
        {
            title: "Field Operations",
            location: "Baidoa, Somalia",
            address: "Agricultural Development Zone\nBaidoa, Somalia",
            phone: "+252 2 123 456",
            email: "field@barwaaqoagri.com"
        }
    ];

    return (
        <section className="py-[120px] bg-custom-primary text-custom-light-bg">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-custom-sand mb-6">
                        Contact Information
                    </h2>
                    <div className="w-24 h-1 bg-custom-olive rounded mx-auto mb-6"></div>
                    <p className="text-lg text-custom-light-bg/90 font-body max-w-2xl mx-auto">
                        Reach out to our offices across East Africa for agricultural solutions and partnership opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactInfo.map((info, i) => (
                        <motion.div 
                            key={i}
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-custom-light-bg/20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-heading font-bold text-custom-sand mb-2">
                                {info.title}
                            </h3>
                            <p className="text-custom-olive font-medium mb-4">{info.location}</p>
                            
                            <div className="space-y-3 text-custom-light-bg/90">
                                <div className="flex items-start space-x-3">
                                    <span className="text-custom-sand mt-1">📍</span>
                                    <p className="font-body whitespace-pre-line">{info.address}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-custom-sand">📞</span>
                                    <p className="font-body">{info.phone}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-custom-sand">✉️</span>
                                    <a href={`mailto:${info.email}`} className="font-body hover:text-custom-sand transition-colors">
                                        {info.email}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}