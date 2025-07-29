import { useEffect, useState } from 'react'

export interface Config {
  branding: { clientName: string }
  apiBase: string
  productTypes: any[]
}

export function useConfig() {
  const [config, setConfig] = useState<Config | null>(null)

  useEffect(() => {
    fetch('/config/default.json')
      .then((res) => res.json())
      .then(setConfig)
  }, [])

  return config
}
