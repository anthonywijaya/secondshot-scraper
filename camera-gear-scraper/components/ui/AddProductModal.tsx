'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, X } from 'lucide-react'
import { sonyGearDatabase, SonyGear } from '@/lib/sonyGearData'

interface AddProductModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: (productName: string, searchTerms: string[]) => void
}

export default function AddProductModal({
  isOpen,
  onOpenChange,
  onConfirm
}: AddProductModalProps) {
  const [newProductName, setNewProductName] = useState("")
  const [newProductSearchTerms, setNewProductSearchTerms] = useState([""])
  const [filteredProducts, setFilteredProducts] = useState<SonyGear[]>([])

  useEffect(() => {
    setFilteredProducts(sonyGearDatabase)
  }, [])

  const handleProductSearch = (value: string) => {
    setNewProductName(value)
    setFilteredProducts(
      sonyGearDatabase.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  const handleSearchTermChange = (index: number, value: string) => {
    const updatedTerms = [...newProductSearchTerms]
    updatedTerms[index] = value
    setNewProductSearchTerms(updatedTerms)
  }

  const handleAddSearchTerm = () => {
    setNewProductSearchTerms([...newProductSearchTerms, ""])
  }

  const handleRemoveSearchTerm = (index: number) => {
    setNewProductSearchTerms(newProductSearchTerms.filter((_, i) => i !== index))
  }

  const handleConfirm = () => {
    if (newProductName && newProductSearchTerms.length > 0) {
      onConfirm(newProductName, newProductSearchTerms.filter(term => term !== ""))
      setNewProductName("")
      setNewProductSearchTerms([""])
      setFilteredProducts(sonyGearDatabase)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Sony Product</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="product-name" className="text-right">
              Product Name
            </Label>
            <div className="col-span-3">
              <Input
                id="product-name"
                value={newProductName}
                onChange={(e) => handleProductSearch(e.target.value)}
                placeholder="Search for a Sony product..."
              />
              {filteredProducts.length > 0 && newProductName && (
                <ul className="mt-2 max-h-60 overflow-auto border border-gray-200 rounded-md">
                  {filteredProducts.map((product, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white cursor-pointer transition-colors duration-150"
                      onClick={() => {
                        setNewProductName(product.name)
                        setFilteredProducts([])
                      }}
                    >
                      {product.name} ({product.type}, {product.mountType})
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right mt-2">Search Terms</Label>
            <div className="col-span-3 space-y-2">
              {newProductSearchTerms.map((term, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    value={term}
                    onChange={(e) => handleSearchTermChange(index, e.target.value)}
                    placeholder={`Search term ${index + 1}`}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => handleRemoveSearchTerm(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={handleAddSearchTerm}>
                <Plus className="h-4 w-4 mr-2" />
                Add Search Term
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleConfirm}>Add Product</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}