"use client"
import ProductForm from '../components/ProductForm'
import { useConfig } from '../hooks/useConfig'

export default function Page() {
  const config = useConfig()

  if (!config) return <p>Loading...</p>

  return (
    <main className="p-8 space-y-4">
      {config.productTypes.map((p) => (
        <div key={p.id} className="border p-4 rounded">
          <h2 className="font-bold mb-2">{p.name}</h2>
          <p className="mb-2">{p.description}</p>
          <ProductForm />
        </div>
      ))}
    </main>
  )
}
