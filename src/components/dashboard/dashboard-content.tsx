import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { ArrowBigRightDash, Bell, Calendar, CirclePlus, Clock4 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import SaleChart from './sale-chart'
import ProfitSummary from './profit-summary'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import HistoryTable from './history-table'

const DashboardContent = () => {
  return (
    <div className='px-10 flex flex-col gap-5 w-full'>
      <div className='flex items-center justify-between w-full gap-20'>
        <h2 className='text-[var(--dark-header)] font-semibold text-[28px]'>
          Welcome to Admin Dashboard.
        </h2>
        <div className='flex items-center gap-10'>
          <div className='flex flex-row justify-center items-center gap-3 text-[var(--grey-text)]'>
            <Popover>
              <PopoverTrigger>
                <CirclePlus className='h-5 w-5' />
              </PopoverTrigger>
              <PopoverContent>
                Plus
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>
                <Calendar className='h-5 w-5' />
              </PopoverTrigger>
              <PopoverContent>
                Calendar4
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger className='relative'>
                <Bell className='h-5 w-5' />
                <span className='h-1 w-1 bg-[#f00] rounded-full absolute top-[1.5px] right-[4px]' />
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-1 p-0">
                <div className='flex flex-row justify-between gap-8 items-center px-3'>
                  <div className='flex gap-2 items-center'>
                    <h3 className='text-[var(--dark-header)] font-semibold'>
                      Notifications
                    </h3>
                    <span className='h-5 w-5 rounded-full min-h-5 min-w-5 flex text-[12px] justify-center items-center bg-[var(--normal-grey)] font-semibold'>
                      2
                    </span>
                  </div>
                  <Button variant={"link"} className='px-0'>
                    Mark all as read
                  </Button>
                </div>
                <Separator className="" />
                <div className='flex flex-col gap-2 pb-2'>
                  <div className='flex items-center gap-4 py-1.5 px-3 max-w-[350px]'>
                    <div className='min-h-10 min-w-10 h-10 w-10 flex justify-center items-center rounded-lg border-[.5px] border-[#95fbc8]'>
                      <Clock4 className='h-5 w-5 text-[#3adf8d]' />
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='text-[var(--dark-header)] text-[15px] leading-[17px] font-semibold'>
                        Packing for tomorrow has been done and ready to be shipped.
                      </h3>
                      <div className='flex justify-between items-center w-full text-[var(--grey-text)] text-[12px]'>
                        <p>
                          2 hours ago
                        </p>
                        <p>
                          Completed
                        </p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className='flex items-center gap-4 py-1.5 px-3 max-w-[350px]'>
                    <div className='min-h-10 min-w-10 h-10 w-10 flex justify-center items-center rounded-lg border-[.5px] border-[#fdffb6]'>
                      <Bell className='h-5 w-5 text-[#fbff80]' />
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='text-[var(--dark-header)] text-[15px] leading-[17px] font-semibold'>
                        Delivering of goods to berlin is experiencing problem.
                      </h3>
                      <div className='flex justify-between items-center w-full text-[var(--grey-text)] text-[12px]'>
                        <p>
                          3 hours ago
                        </p>
                        <p>
                          Pending
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Link href="/product" className='flex gap-2 items-center text-[var(--dark-header)]'>
              <span>
                Go to market place
              </span>
              <ArrowBigRightDash className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-10 w-full'>
        <div className='flex flex-col items-start basis-3/5 gap-5'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-var(--dark-header font-semibold'>
              Revenue
            </h3>
            <p className='font-semibold text-var(--dark-header)] text-[12px] flex gap-1 items-center'>
              Showing for: <Calendar className='h-2.5 w-2.5' /> March 18 - March 24
            </p>
          </div>
          <SaleChart />
        </div>
        <div className='flex basis-2/5 gap-8 flex-col items-start mt-5'>
          <div className='flex flex-col gap-1 w-full'>
            <h3 className='text-var(--dark-header font-semibold'>
              Profit Loss Summary
            </h3>
            <div className='flex justify-between items-center gap-3 w-full'>
              <p className='font-semibold text-var(--dark-header)] text-[12px] flex gap-1 items-center'>
              <Calendar className='h-2.5 w-2.5' /> Showing for:
              </p>
              <Select>
                <SelectTrigger className="w-[105px] text-[12px] p-1.5 px-2 h-fit">
                  <SelectValue placeholder="May" defaultValue={"may"}/>
                </SelectTrigger>
                <SelectContent className='text-[12px] items-start shadow-sm'>
                  <SelectItem className='text-[12px]' value="december">December</SelectItem>
                  <SelectItem className='text-[12px]' value="january">January</SelectItem>
                  <SelectItem className='text-[12px]' value="february">February</SelectItem>
                  <SelectItem className='text-[12px]' value="march">March</SelectItem>
                  <SelectItem className='text-[12px]' value="april">April</SelectItem>
                  <SelectItem className='text-[12px]' value="may" defaultChecked>May</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ProfitSummary />
        </div>
      </div>
      <HistoryTable /> 
    </div>
  )
}

export default DashboardContent