import '@/styles/globals.css';
import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "DNTEL Data Table",
    description: "Take-home assignment for DNTEL",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className="min-h-screen">{children}</body>
        </html>
    );
}
