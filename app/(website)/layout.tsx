import React from "react";
import { LanguageProvider } from "../context/LanguageContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LanguageProvider>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </LanguageProvider>
    );
}
