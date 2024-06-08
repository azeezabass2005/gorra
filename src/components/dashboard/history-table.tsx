import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


const HistoryTable = () => {
  return (
    <div className='w-full flex justify-center items-center mt-5'>
      <Tabs defaultValue="history-orders" className="w-full flex justify-center items-center flex-col">
        <TabsList>
          <TabsTrigger value="history-orders">
            History Orders
          </TabsTrigger>
          <TabsTrigger value="all-invoice">
            All Invoice
          </TabsTrigger>
          <TabsTrigger value="open-invoice">
            Open Invoice
          </TabsTrigger>
          <TabsTrigger value="post-invoice">
            Post Invoice
          </TabsTrigger>
        </TabsList>
        <TabsContent value="history-orders" className="w-full max-w-[1000px] mt-4">
          <Table className="border-2 border-[var(--normal-grey)] border-solid rounded-[5px]">
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">ID</TableHead>
                <TableHead className="font-semibold">Date</TableHead>
                <TableHead className="font-semibold">Product</TableHead>
                <TableHead className="font-semibold">Payment</TableHead>
                <TableHead className="font-semibold">
                  Country
                </TableHead>
                <TableHead className="font-semibold">
                  Fufilment
                </TableHead>
                <TableHead className="font-semibold">
                  Total
                </TableHead>
                <TableHead className="font-semibold">
                  Stats
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
            </TableBody>
          </Table> 
        </TabsContent>
        <TabsContent value="all-invoice">
        <Table className="border-2 border-[var(--normal-grey)] border-solid rounded-[5px]">
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">ID</TableHead>
                <TableHead className="font-semibold">Date</TableHead>
                <TableHead className="font-semibold">Product</TableHead>
                <TableHead className="font-semibold">Payment</TableHead>
                <TableHead className="font-semibold">
                  Country
                </TableHead>
                <TableHead className="font-semibold">
                  Fufilment
                </TableHead>
                <TableHead className="font-semibold">
                  Total
                </TableHead>
                <TableHead className="font-semibold">
                  Stats
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
            </TableBody>
          </Table> 
        </TabsContent>
        <TabsContent value="open-invoice">
        <Table className="border-2 border-[var(--normal-grey)] border-solid rounded-[5px]">
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">ID</TableHead>
                <TableHead className="font-semibold">Date</TableHead>
                <TableHead className="font-semibold">Product</TableHead>
                <TableHead className="font-semibold">Payment</TableHead>
                <TableHead className="font-semibold">
                  Country
                </TableHead>
                <TableHead className="font-semibold">
                  Fufilment
                </TableHead>
                <TableHead className="font-semibold">
                  Total
                </TableHead>
                <TableHead className="font-semibold">
                  Stats
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
            </TableBody>
          </Table> 
        </TabsContent>
        <TabsContent value="post-invoice">
        <Table className="border-2 border-[var(--normal-grey)] border-solid rounded-[5px]">
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">ID</TableHead>
                <TableHead className="font-semibold">Date</TableHead>
                <TableHead className="font-semibold">Product</TableHead>
                <TableHead className="font-semibold">Payment</TableHead>
                <TableHead className="font-semibold">
                  Country
                </TableHead>
                <TableHead className="font-semibold">
                  Fufilment
                </TableHead>
                <TableHead className="font-semibold">
                  Total
                </TableHead>
                <TableHead className="font-semibold">
                  Stats
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">173294</TableCell>
                <TableCell>18 May</TableCell>
                <TableCell>Blue Cap</TableCell>
                <TableCell>Paypal</TableCell>
                <TableCell>Toronto, Canada</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$1699</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
            </TableBody>
          </Table> 
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default HistoryTable