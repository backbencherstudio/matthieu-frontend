
import LayoutProvider from '@/components/Shared/LayoutProvider'
import React from 'react'

export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <LayoutProvider>
        {children}
    </LayoutProvider>
  )
}
