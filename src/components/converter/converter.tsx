import { SlidersVertical } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useIsCountryDrawerOpen } from '@/store'

export default function Converter() {
  const {setIsOpen} = useIsCountryDrawerOpen()
  
  return (
    <Card className="">

      <CardHeader className="flex flex-row justify-between">

        <div>

        <CardTitle className='text-2xl'>Currency Converter</CardTitle>
        <CardDescription className="text-sm">Convert Ethiopian Birr to USD.</CardDescription>
        
        </div>
        <Button
        onClick={() => setIsOpen(true)}
        aria-label='Settings'
        variant='ghost'
        size='icon'
        className='relative bottom-2'
        >
        <SlidersVertical />
        </Button>

      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
