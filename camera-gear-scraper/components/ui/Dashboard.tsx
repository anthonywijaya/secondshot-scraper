'use client'  // Add this line at the top of the file

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Bell, Search, RefreshCw, Settings, Plus, Star, ExternalLink, Trash2, X, Edit2, ChevronDown, ChevronUp, Check, ChevronsUpDown } from 'lucide-react'
import Image from 'next/image'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import AddProductModal from './AddProductModal'

// Simulated camera gear database
const cameraGearDatabase = [
  "Sony A7 III",
  "Sony A7R IV",
  "Sony A9 II",
  "Sony FE 24-70mm f/2.8 GM",
  "Sony FE 70-200mm f/2.8 GM OSS",
  "Canon EOS R5",
  "Canon EOS R6",
  "Canon RF 24-70mm f/2.8L IS USM",
  "Nikon Z6 II",
  "Nikon Z7 II",
  "Nikon Z 24-70mm f/2.8 S",
]

interface GroupedItems {
  [key: string]: {
    searchTerms: string[];
    items: {
      id: number;
      name: string;
      price: number;
      seller: string;
      sellerRating: number;
      sellerReviews: number;
      lastChecked: string;
      url: string;
      priceHistory: { date: string; price: number }[];
      image: string;
      description: string;
      isSold?: boolean;
    }[];
    confirmedPrices: {
      lowest: number;
      average: number;
      highest: number;
    };
  };
}

interface ExpandedGroups {
  [key: string]: boolean;
}

export default function Dashboard() {
  const [sortOption, setSortOption] = useState("price_asc")
  const [scrapeFrequency, setScrapeFrequency] = useState("daily")
  const [autoScrape, setAutoScrape] = useState(true)
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false)
  const [newProductName, setNewProductName] = useState("")
  const [newProductSearchTerms, setNewProductSearchTerms] = useState([""])
  const [editingTag, setEditingTag] = useState({ groupName: "", index: -1, value: "" })
  const [expandedGroups, setExpandedGroups] = useState<ExpandedGroups>({})
  const [open, setOpen] = useState(false)
  const [isAddGroupTermModalOpen, setIsAddGroupTermModalOpen] = useState(false)
  const [newGroupTerm, setNewGroupTerm] = useState("")
  const [currentGroup, setCurrentGroup] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(cameraGearDatabase)
  const [groupedItems, setGroupedItems] = useState<GroupedItems>({
    "Sony FE 24-70mm f/2.8 GM": {
      searchTerms: ["Sony 24-70", "FE 24-70 GM"],
      items: [
        { 
          id: 1, 
          name: "Sony 24-70mm f/2.8 G Master Lens", 
          price: 22000000, 
          seller: "CameraStore",
          sellerRating: 4.8,
          sellerReviews: 1500,
          lastChecked: "2023-06-15T10:30:00Z",
          url: "https://www.tokopedia.com/camerastore/sony-24-70mm-f2-8-g-master-lens",
          priceHistory: [
            { date: "2023-06-01", price: 22500000 },
            { date: "2023-06-08", price: 22250000 },
            { date: "2023-06-15", price: 22000000 },
          ],
          image: "/placeholder.svg",
          description: "Sony FE 24-70mm f/2.8 GM adalah lensa zoom standar profesional untuk kamera full-frame Sony E-mount.",
          isSold: false,
        },
        {
          id: 2,
          name: "Sony 24-70mm f/2.8 G Master Lens (Used)",
          price: 20000000,
          seller: "UsedCameraShop",
          sellerRating: 4.5,
          sellerReviews: 800,
          lastChecked: "2023-06-15T11:00:00Z",
          url: "https://www.tokopedia.com/usedcamerashop/sony-24-70mm-f2-8-g-master-lens-used",
          priceHistory: [
            { date: "2023-06-01", price: 21000000 },
            { date: "2023-06-08", price: 20500000 },
            { date: "2023-06-15", price: 20000000 },
          ],
          image: "/placeholder.svg",
          description: "Sony FE 24-70mm f/2.8 GM bekas dalam kondisi sangat baik.",
          isSold: true,
        },
      ],
      confirmedPrices: {
        lowest: 20000000,
        average: 21000000,
        highest: 22000000,
      },
    },
    "Sony A7 III": {
      searchTerms: ["Sony A7III", "A7 Mark 3"],
      items: [
        { 
          id: 3, 
          name: "Sony A7 III Mirrorless Camera", 
          price: 18000000, 
          seller: "ElectronicsHub",
          sellerRating: 4.9,
          sellerReviews: 2000,
          lastChecked: "2023-06-15T10:30:00Z",
          url: "https://www.tokopedia.com/electronicshub/sony-a7-iii-mirrorless-camera",
          priceHistory: [
            { date: "2023-06-01", price: 18500000 },
            { date: "2023-06-08", price: 18250000 },
            { date: "2023-06-15", price: 18000000 },
          ],
          image: "/placeholder.svg",
          description: "Sony A7 III adalah kamera mirrorless full-frame yang powerful dengan sensor 24.2MP dan kemampuan video 4K.",
          isSold: false,
        },
      ],
      confirmedPrices: {
        lowest: 17500000,
        average: 18250000,
        highest: 19000000,
      },
    }
  })

  const handleAddProduct = () => {
    setIsAddProductModalOpen(true)
  }

  const handleConfirmAddProduct = (productName: string, searchTerms: string[]) => {
    if (productName && searchTerms.length > 0) {
      setGroupedItems(prevItems => ({
        ...prevItems,
        [productName]: {
          searchTerms,
          items: [],
          confirmedPrices: {
            lowest: 0,
            average: 0,
            highest: 0
          }
        }
      }))
      setIsAddProductModalOpen(false)
    }
  }

  const handleAddSearchTerm = () => {
    setNewProductSearchTerms([...newProductSearchTerms, ""])
  }

  const handleSearchTermChange = (index: number, value: string) => {
    const updatedTerms = [...newProductSearchTerms]
    updatedTerms[index] = value
    setNewProductSearchTerms(updatedTerms)
  }

  const handleRemoveSearchTerm = (index: number) => {
    setNewProductSearchTerms(newProductSearchTerms.filter((_, i) => i !== index))
  }

  const handleAddSearchTermToGroup = (groupName: string) => {
    setCurrentGroup(groupName)
    setNewGroupTerm("")
    setIsAddGroupTermModalOpen(true)
  }

  const handleConfirmAddGroupTerm = () => {
    if (newGroupTerm && currentGroup) {
      setGroupedItems(prevItems => ({
        ...prevItems,
        [currentGroup]: {
          ...prevItems[currentGroup],
          searchTerms: [...prevItems[currentGroup].searchTerms, newGroupTerm]
        }
      }))
      setIsAddGroupTermModalOpen(false)
      setNewGroupTerm("")
      setCurrentGroup("")
    }
  }

  const handleManualScrape = (groupName: string) => {
    console.log(`Initiating manual scrape for ${groupName}`)
    // Implement scraping logic here
  }

  const handleScrapeFrequencyChange = (value: string) => {
    console.log("Scrape frequency changed to:", value)
    setScrapeFrequency(value)
  }

  const handleSortChange = (value: string) => {
    setSortOption(value)
  }

  const handleUntrackItem = (groupName: string, itemId: number, seller: string) => {
    console.log(`Untracking item ${itemId} from ${groupName} and blacklisting seller ${seller}`)
    setGroupedItems(prevItems => ({
      ...prevItems,
      [groupName]: {
        ...prevItems[groupName],
        items: prevItems[groupName].items.filter(item => item.id !== itemId)
      }
    }))
  }

  const handleRemoveGroupSearchTerm = (groupName: string, index: number) => {
    setGroupedItems(prevItems => ({
      ...prevItems,
      [groupName]: {
        ...prevItems[groupName],
        searchTerms: prevItems[groupName].searchTerms.filter((_, i) => i !== index)
      }
    }))
  }

  const handleEditGroupSearchTerm = (groupName: string, index: number, newValue: string) => {
    setGroupedItems(prevItems => ({
      ...prevItems,
      [groupName]: {
        ...prevItems[groupName],
        searchTerms: prevItems[groupName].searchTerms.map((term, i) => i === index ? newValue : term)
      }
    }))
    setEditingTag({ groupName: "", index: -1, value: "" })
  }

  const toggleGroupExpansion = (groupName: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }))
  }

  const sortItems = (items: any[]) => {
    if (!items || items.length === 0) return []
    return [...items].sort((a, b) => {
      switch (sortOption) {
        case "price_asc":
          return a.price - b.price
        case "price_desc":
          return b.price - a.price
        case "recommended":
          return (b.sellerRating * b.sellerReviews) - (a.sellerRating * a.sellerReviews)
        default:
          return 0
      }
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
  }

  const handleProductSearch = (value: string) => {
    setNewProductName(value)
    setFilteredProducts(
      cameraGearDatabase.filter(product =>
        product.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  const totalItems = Object.values(groupedItems).reduce((acc, group) => acc + group.items.length, 0)
  const uniqueProducts = Object.keys(groupedItems).length

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Camera Gear Marketplace Analyzer</h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={() => handleManualScrape("all")} className="bg-blue-600 hover:bg-blue-700 text-white">
              Scrape All
            </Button>
            <Select value={scrapeFrequency} onValueChange={handleScrapeFrequencyChange}>
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
            <Button onClick={() => handleManualScrape("all")}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh All Data
            </Button>
          </div>
        </div>
      </header>

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

      <div className="flex justify-end mb-8">
        <Button onClick={handleAddProduct} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {Object.entries(groupedItems).map(([groupName, group]) => (
        <Card key={groupName} className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center space-x-4">
                  <Image src={group.items[0]?.image || "/placeholder.svg"} alt={groupName} width={100} height={100} className="rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold">{groupName}</h2>
                    <div className="flex items-center mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleGroupExpansion(groupName)}
                        aria-expanded={expandedGroups[groupName]}
                        aria-controls={`search-terms-${groupName}`}
                        className="text-sm"
                      >
                        Search Terms ({group.searchTerms.length})
                        {expandedGroups[groupName] ? (
                          <ChevronUp className="ml-2 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleAddSearchTermToGroup(groupName)}
                        title="Add search term"
                        className="ml-2"
                      >
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Add search term</span>
                      </Button>
                    </div>
                  </div>
                </div>
                {expandedGroups[groupName] && (
                  <div id={`search-terms-${groupName}`} className="flex flex-wrap gap-2 mt-2">
                    {group.searchTerms.map((term, index) => (
                      <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                        {editingTag.groupName === groupName && editingTag.index === index ? (
                          <input
                            type="text"
                            value={editingTag.value}
                            onChange={(e) => setEditingTag({ ...editingTag, value: e.target.value })}
                            onBlur={() => handleEditGroupSearchTerm(groupName, index, editingTag.value)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                handleEditGroupSearchTerm(groupName, index, editingTag.value)
                              }
                            }}
                            className="bg-transparent border-none focus:outline-none"
                            autoFocus
                          />
                        ) : (
                          <>
                            <span>{term}</span>
                            <button onClick={() => setEditingTag({ groupName, index, value: term })} className="ml-2">
                              <Edit2 className="h-3 w-3" />
                            </button>
                            <button onClick={() => handleRemoveGroupSearchTerm(groupName, index)} className="ml-2">
                              <X className="h-3 w-3" />
                            </button>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <Button onClick={() => handleManualScrape(groupName)} variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Scrape Now
                </Button>
                <Select value={sortOption} onValueChange={handleSortChange}>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Lowest Confirmed Price</p>
                <p className="text-2xl font-bold">{formatPrice(group.confirmedPrices.lowest)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Average Confirmed Price</p>
                <p className="text-2xl font-bold">{formatPrice(group.confirmedPrices.average)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">Highest Confirmed Price</p>
                <p className="text-2xl font-bold">{formatPrice(group.confirmedPrices.highest)}</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Seller</TableHead>
                    <TableHead>Seller Rating</TableHead>
                    <TableHead>Last Checked</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortItems(group.items).map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        {item.name}
                        {item.isSold && (
                          <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                            Sold
                          </span>
                        )}
                      </TableCell>
                      <TableCell>{item.price ? formatPrice(item.price) : "N/A"}</TableCell>
                      <TableCell>{item.seller || "N/A"}</TableCell>
                      <TableCell>
                        {item.sellerRating ? (
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span>{item.sellerRating.toFixed(1)} ({item.sellerReviews})</span>
                          </div>
                        ) : "N/A"}
                      </TableCell>
                      <TableCell>{new Date(item.lastChecked).toLocaleString('id-ID')}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {item.price ? (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">View Details</Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl">
                                <DialogHeader>
                                  <DialogTitle>{item.name}</DialogTitle>
                                </DialogHeader>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                    <Image src={item.image} alt={item.name} width={300} height={300} className="rounded-lg mb-4" />
                                    <h3 className="font-semibold mb-2">Product Details</h3>
                                    <p><strong>Price:</strong> {formatPrice(item.price)}</p>
                                    <p><strong>Seller:</strong> {item.seller}</p>
                                    <p><strong>Seller Rating:</strong> {item.sellerRating.toFixed(1)} ({item.sellerReviews} reviews)</p>
                                    <p><strong>Last Checked:</strong> {new Date(item.lastChecked).toLocaleString('id-ID')}</p>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer"
                                       className="text-blue-600 hover:underline flex items-center mt-2">
                                      View on Tokopedia
                                      <ExternalLink className="h-4 w-4 ml-1" />
                                    </a>
                                  </div>
                                  <div>
                                    <h3 className="font-semibold mb-2">Price History</h3>
                                    <ResponsiveContainer width="100%" height={200}>
                                      <LineChart data={item.priceHistory}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <YAxis />
                                        <Tooltip formatter={(value: number) => formatPrice(value)} />
                                        <Legend />
                                        <Line type="monotone" dataKey="price" stroke="#8884d8" />
                                      </LineChart>
                                    </ResponsiveContainer>
                                    <h3 className="font-semibold mt-4 mb-2">Product Description</h3>
                                    <p>{item.description}</p>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          ) : (
                            <Button variant="outline" size="sm" onClick={() => handleManualScrape(groupName)}>Scrape Now</Button>
                          )}
                          <Button variant="destructive" size="sm" onClick={() => handleUntrackItem(groupName, item.id, item.seller)}>
                            <Trash2 className="h-4 w-4 mr-1" />
                            Untrack
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      ))}

      <AddProductModal
        isOpen={isAddProductModalOpen}
        onOpenChange={setIsAddProductModalOpen}
        onConfirm={handleConfirmAddProduct}
      />
    </div>
  )
}