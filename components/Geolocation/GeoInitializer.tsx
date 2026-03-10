// components/GeoInitializer.tsx
'use client'

import { useEffect } from 'react'

export default function GeoInitializer() {
  useEffect(() => {
    // Skip if cookie already set
    if (document.cookie.includes('x-region=')) return

    const setCookie = (region: string) => {
      const expires = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toUTCString()
      document.cookie = `x-region=${region}; expires=${expires}; path=/; SameSite=Lax${
        location.protocol === 'https:' ? '; Secure' : ''
      }`
    }

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const continent = (data.continent_code || '').trim().toUpperCase()

        if (['NA', 'SA'].includes(continent)) {
          setCookie('america')
        } else if (continent) {
          // Send real continent code for non-Americas
          setCookie(continent)
        } else {
          // Rare case: continent missing → fallback to timezone
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
          setCookie(tz.startsWith('America/') ? 'america' : 'other')
        }
      })
      .catch(() => {
        // Fetch completely failed → use browser timezone only
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
        const isAmerica = tz.startsWith('America/')
        setCookie(isAmerica ? 'america' : 'other')
      })
  }, [])

  return null
}