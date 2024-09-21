import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, RefreshCw, Settings } from 'lucide-react'

interface HeaderProps {
  onManualScrape: (group: string) => void
  scrapeFrequency: string
  onScrapeFrequencyChange: (value: string) => void
  autoScrape: boolean
  setAutoScrape: (value: boolean) => void
}

export default function Header({
  onManualScrape,
  scrapeFrequency,
  onScrapeFrequencyChange,
  autoScrape,
  setAutoScrape
}: HeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold mb-4">Camera Gear Marketplace Analyzer</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div className="flex flex-wrap items-center gap-4">
          <Button onClick={() => onManualScrape("all")} className="bg-blue-600 hover:bg-blue-700 text-white">
            Scrape All
          </Button>
          <Select value={scrapeFrequency} onValueChange={onScrapeFrequencyChange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hourly">Hourly</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <Switch
              id="auto-scrape"
              checked={autoScrape}
              onCheckedChange={setAutoScrape}
            />
            <Label htmlFor="auto-scrape">Auto Scrape</Label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button onClick={() => onManualScrape("all")}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh All Data
          </Button>
        </div>
      </div>
    </header>
  )
}