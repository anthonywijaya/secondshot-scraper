import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'
import { ChevronUp, ChevronDown, Plus, Edit2, X, RefreshCw } from 'lucide-react'
import ProductTable from './ProductTable'

// ... (add necessary interfaces)

interface ProductGroupProps {
  groupName: string
  group: {
    searchTerms: string[]
    items: any[] // Replace 'any' with a more specific type if possible
  }
  expandedGroups: { [key: string]: boolean }
  sortOption: string
  onToggleGroupExpansion: (groupName: string) => void
  onAddSearchTerm: (groupName: string) => void
  onEditSearchTerm: (groupName: string, index: number, newValue: string) => void
  onRemoveSearchTerm: (groupName: string, index: number) => void
  onManualScrape: (groupName: string) => void
  onSortChange: (value: string) => void
  onUntrackItem: (groupName: string, itemId: number, seller: string) => void
}

export default function ProductGroup({
  groupName,
  group,
  expandedGroups,
  sortOption,
  onToggleGroupExpansion,
  onAddSearchTerm,
  onEditSearchTerm,
  onRemoveSearchTerm,
  onManualScrape,
  onSortChange,
  onUntrackItem
}: ProductGroupProps) {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex flex-col items-start space-y-4">
            {/* ... (Group header content) */}
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={() => onManualScrape(groupName)} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Scrape Now
            </Button>
            <Select value={sortOption} onValueChange={onSortChange}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="recommended">Recommended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <ProductTable
          items={group.items}
          sortOption={sortOption}
          onUntrackItem={(itemId, seller) => onUntrackItem(groupName, itemId, seller)}
          onManualScrape={() => onManualScrape(groupName)}
        />
      </CardContent>
    </Card>
  )
}