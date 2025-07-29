'use client'
import { useState } from 'react'

const categories = [
  { id: 'metered', label: 'Metered' },
  { id: 'recurring', label: 'Recurring' },
  { id: 'oneTime', label: 'One-Time Charge' },
]

export default function Settings() {
  const [enabled, setEnabled] = useState<string[]>([])

  const toggle = (id: string) => {
    setEnabled((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const save = () => {
    // TODO: save config to API
    console.log('Save config', enabled)
  }

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">Settings</h1>
      <ul className="space-y-2">
        {categories.map((c) => (
          <li key={c.id}>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={enabled.includes(c.id)}
                onChange={() => toggle(c.id)}
              />
              <span>{c.label}</span>
            </label>
          </li>
        ))}
      </ul>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white" onClick={save}>
        Save
      </button>
    </main>
  )
}
