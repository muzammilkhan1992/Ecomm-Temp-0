import { Filter, GridIcon, LayoutList } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Dropdownmenu = () => {
    return (
        <div className="bg-[#FAF4F4] flex flex-wrap sm:flex-nowrap flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b py-4 mx-auto px-4 sm:px-10">
        
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            
                <button className="items-center gap-2 text-sm text-gray-600 hidden sm:flex">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                </button>
            
                <div className="items-center gap-2 border rounded hidden sm:flex">
                    <button className="p-1 hover:bg-gray-100">
                        <GridIcon className="h-5 w-5" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 border-l">
                        <LayoutList className="h-5 w-5" />
                    </button>
                </div>
            
                <p className="text-sm text-gray-600 hidden sm:inline">
                    Showing 1–16 of 32 results
                </p>
            </div>

        
            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between">
            
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 hidden sm:inline">Show</span>
                    <Select defaultValue="16">
                        <SelectTrigger className="w-[70px] bg-white">
                            <SelectValue placeholder="Show" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="16">16</SelectItem>
                            <SelectItem value="32">32</SelectItem>
                            <SelectItem value="48">48</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

        
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 hidden sm:inline">Sort by</span>
                    <Select defaultValue="default">
                        <SelectTrigger className="w-[120px] bg-white">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="default">Default</SelectItem>    
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default Dropdownmenu
