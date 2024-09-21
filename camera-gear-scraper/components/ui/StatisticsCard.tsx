import { Card, CardContent } from "@/components/ui/card"

interface StatisticsCardProps {
  totalItems: number
  uniqueProducts: number
}

export default function StatisticsCard({ totalItems, uniqueProducts }: StatisticsCardProps) {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-500">Total Items</p>
            <p className="text-2xl font-bold">{totalItems}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-500">Unique Products</p>
            <p className="text-2xl font-bold">{uniqueProducts}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-500">Last Scrape</p>
            <p className="text-2xl font-bold">2 hours ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}