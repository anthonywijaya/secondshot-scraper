import dynamic from 'next/dynamic'

const Dashboard = dynamic(() => import('@/components/ui/Dashboard'), { ssr: false })

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <Dashboard />
    </main>
  )
}