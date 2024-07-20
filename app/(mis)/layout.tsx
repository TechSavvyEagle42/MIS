import React from "react"

interface MisLayoutProps {
    children: React.ReactNode
}

export default async function MisLayout({children,}: MisLayoutProps) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
      </div>
    )
}