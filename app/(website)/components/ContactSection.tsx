"use client";

import { Button } from "../../components/ui/Button";
import { motion } from "framer-motion";

export function ContactSection() {
    return (
        <section className="py-[120px] max-w-[800px] mx-auto px-6">
            <motion.div 
                className="bg-white rounded-2xl p-10 md:p-14 shadow-2xl border border-custom-accent transform hover:-translate-y-1 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-heading font-bold text-custom-primary mb-4">
                        Work With Us
                    </h2>
                    <p className="text-custom-charcoal/80 font-body">
                        Ready to collaborate? Send us a message or reach out at <a href="mailto:contact@barwaaqoagri.com" className="text-custom-olive font-semibold hover:underline">contact@barwaaqoagri.com</a>
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-custom-charcoal font-body" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-xl border border-custom-accent bg-custom-light-bg/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-custom-olive transition-all font-body"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-custom-charcoal font-body" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-xl border border-custom-accent bg-custom-light-bg/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-custom-olive transition-all font-body"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-custom-charcoal font-body" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl border border-custom-accent bg-custom-light-bg/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-custom-olive transition-all font-body resize-none"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>
                    <Button variant="primary" className="w-full py-4 text-lg">
                        Send Message
                    </Button>
                </form>
            </motion.div>
        </section>
    );
}
