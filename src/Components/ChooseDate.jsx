

import { format } from 'date-fns'
import { useState } from 'react'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverContent, PopoverAction } from 'keep-react'

export const ChooseDate = () => {
  const [date, setDate] = useState(null)
  return (
    <Popover>
      <PopoverAction asChild>
        <Button color="secondary" size="lg" className="w-[286px] justify-start gap-2 border border-metal-100" variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverAction>
      <PopoverContent align="start" className="max-w-min border-0">
        <DatePicker dayShape="circle" mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}
