import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Head from "./Head"
import SEO from "./Seo"

export default function Layout({ children, title }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <SEO title={title} />
      <Header className="flex-grow" />
      <Head title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
