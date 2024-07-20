
import Link from "next/link"
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { CardTitle, CardDescription, CardHeader, CardFooter, Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { PaginationPrevious, PaginationItem, PaginationLink, PaginationNext, PaginationContent, Pagination } from "@/components/ui/pagination"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


export default function Dashboard () {
    return ( 
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="sm:hidden" size="icon" variant="outline">
              <PanelLeftIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-xs" side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                href="#"
              >
                <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" href="#">
                <HomeIcon className="h-5 w-5" />
                Dashboard
              </Link>
              <Link className="flex items-center gap-4 px-2.5 text-foreground" href="#">
                <ShoppingCartIcon className="h-5 w-5" />
                Orders
              </Link>
              <Link className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" href="#">
                <PackageIcon className="h-5 w-5" />
                Products
              </Link>
              <Link className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" href="#">
                <UsersIcon className="h-5 w-5" />
                Customers
              </Link>
              <Link className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" href="#">
                <LineChartIcon className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Overview</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Reports</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="relative ml-auto flex-1 md:grow-0">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            placeholder="Search..."
            type="search"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle>Get started with IAM</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Identity and Access Management (IAM) makes sure the right people can access the right technology resources.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>
                <Link href="/user/registration">Register Resident</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>This Week</CardDescription>
                <CardTitle className="text-4xl">$1,329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+25% from last week</div>
              </CardContent>
              <CardFooter>
                <Progress aria-label="25% increase" value={25} />
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-2">
              <CardHeader className="pb-2">
                <CardDescription>This Month</CardDescription>
                <CardTitle className="text-4xl">$5,329</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+10% from last month</div>
              </CardContent>
              <CardFooter>
                <Progress aria-label="12% increase" value={12} />
              </CardFooter>
            </Card>
          </div>
          <Tabs defaultValue="population">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="population">Population</TabsTrigger>
                <TabsTrigger value="growth">Growth</TabsTrigger>
                <TabsTrigger value="demographics">Economic</TabsTrigger>
                
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="h-7 gap-1 text-sm" size="sm" variant="outline">
                      <ListFilterIcon className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>Country</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Region</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Age Group</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button className="h-7 gap-1 text-sm" size="sm" variant="outline">
                  <FileIcon className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Export</span>
                </Button>
              </div>
            </div>
            <TabsContent value="population">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Population</CardTitle>
                  <CardDescription>Detailed population data for your region.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Province</TableHead>
                        <TableHead className="hidden sm:table-cell">Population</TableHead>
                        <TableHead className="hidden sm:table-cell">Density</TableHead>
                        <TableHead className="hidden md:table-cell">Growth Rate</TableHead>
                        <TableHead className="text-right">Employed</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>

                      <TableRow className="bg-accent">
                        <TableCell>
                          <div className="font-medium">Bulacan</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Region III</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">3,708,890</TableCell>
                        <TableCell className="hidden sm:table-cell">86 /sq mi</TableCell>
                        <TableCell className="hidden md:table-cell">Positive 0.1%</TableCell>
                        <TableCell className="text-right">0.1%</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Cavite</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Region IV‑A</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">4,344,829</TableCell>
                        <TableCell className="hidden sm:table-cell">464 /sq mi</TableCell>
                        <TableCell className="hidden md:table-cell">Negative 0.2%</TableCell>
                        <TableCell className="text-right">1.0%</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Cebu</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Region VII</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">3,325,385</TableCell>
                        <TableCell className="hidden sm:table-cell">153 /sq mi</TableCell>
                        <TableCell className="hidden md:table-cell">Positive 0.8%</TableCell>
                        <TableCell className="text-right">0.3%</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <div className="font-medium">La Union</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Region I</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">822,352</TableCell>
                        <TableCell className="hidden sm:table-cell">25 /sq mi</TableCell>
                        <TableCell className="hidden md:table-cell">Positive 0.1%</TableCell>
                        <TableCell className="text-right">0.8%</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Tarlac</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Region III</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">1,503,456</TableCell>
                        <TableCell className="hidden sm:table-cell">9 /sq mi</TableCell>
                        <TableCell className="hidden md:table-cell">Negative 0.2%</TableCell>
                        <TableCell className="text-right">-0.1%</TableCell>
                      </TableRow>
                    </TableBody>

                  </Table>

                  <Pagination className="mt-4">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="demographics">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Demographic Report</CardTitle>
                  <CardDescription>Detailed demographic data for your region.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Country</TableHead>
                        <TableHead className="hidden sm:table-cell">Region</TableHead>
                        <TableHead className="hidden sm:table-cell">Age 0-14</TableHead>
                        <TableHead className="hidden md:table-cell">Age 15-64</TableHead>
                        <TableHead className="text-right">Age 65+</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-accent">
                        <TableCell>
                          <div className="font-medium">United States</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">North America</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">North America</TableCell>
                        <TableCell className="hidden sm:table-cell">18.5%</TableCell>
                        <TableCell className="hidden md:table-cell">66.5%</TableCell>
                        <TableCell className="text-right">15.0%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">China</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Asia</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Asia</TableCell>
                        <TableCell className="hidden sm:table-cell">17.8%</TableCell>
                        <TableCell className="hidden md:table-cell">71.4%</TableCell>
                        <TableCell className="text-right">10.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">India</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Asia</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Asia</TableCell>
                        <TableCell className="hidden sm:table-cell">26.7%</TableCell>
                        <TableCell className="hidden md:table-cell">67.1%</TableCell>
                        <TableCell className="text-right">6.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Brazil</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">South America</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">South America</TableCell>
                        <TableCell className="hidden sm:table-cell">21.4%</TableCell>
                        <TableCell className="hidden md:table-cell">67.0%</TableCell>
                        <TableCell className="text-right">11.6%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Russia</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Europe</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Europe</TableCell>
                        <TableCell className="hidden sm:table-cell">17.3%</TableCell>
                        <TableCell className="hidden md:table-cell">67.5%</TableCell>
                        <TableCell className="text-right">15.2%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="growth">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Population Growth Report</CardTitle>
                  <CardDescription>Detailed population growth data for your region.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Country</TableHead>
                        <TableHead className="hidden sm:table-cell">Region</TableHead>
                        <TableHead className="hidden sm:table-cell">2020</TableHead>
                        <TableHead className="hidden md:table-cell">2021</TableHead>
                        <TableHead className="text-right">2022</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-accent">
                        <TableCell>
                          <div className="font-medium">United States</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">North America</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">North America</TableCell>
                        <TableCell className="hidden sm:table-cell">328,239,523</TableCell>
                        <TableCell className="hidden md:table-cell">329,484,123</TableCell>
                        <TableCell className="text-right">331,002,651</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">China</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Asia</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Asia</TableCell>
                        <TableCell className="hidden sm:table-cell">1,439,323,776</TableCell>
                        <TableCell className="hidden md:table-cell">1,412,600,000</TableCell>
                        <TableCell className="text-right">1,411,000,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">India</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Asia</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Asia</TableCell>
                        <TableCell className="hidden sm:table-cell">1,380,004,385</TableCell>
                        <TableCell className="hidden md:table-cell">1,380,004,000</TableCell>
                        <TableCell className="text-right">1,380,004,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Brazil</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">South America</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">South America</TableCell>
                        <TableCell className="hidden sm:table-cell">211,049,527</TableCell>
                        <TableCell className="hidden md:table-cell">211,049,500</TableCell>
                        <TableCell className="text-right">211,049,500</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Russia</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">Europe</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">Europe</TableCell>
                        <TableCell className="hidden sm:table-cell">145,934,462</TableCell>
                        <TableCell className="hidden md:table-cell">145,934,000</TableCell>
                        <TableCell className="text-right">145,934,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
            <CardHeader className="flex flex-row items-start bg-muted/50">
              <div className="grid gap-0.5">
                <CardTitle className="group flex items-center gap-2 text-lg">
                  Registered Province
                  <Button
                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    size="icon"
                    variant="outline"
                  >
                    <CopyIcon className="h-3 w-3" />
                    <span className="sr-only">Copy Report ID</span>
                  </Button>
                </CardTitle>
                <CardDescription>Generated on May 14, 2024</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <Button className="h-8 gap-1" size="sm" variant="outline">
                  <DownloadIcon className="h-3.5 w-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">Download Report</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="h-8 w-8" size="icon" variant="outline">
                      <MoveVerticalIcon className="h-3.5 w-3.5" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
              <div className="grid gap-3">
                <dl className="grid gap-3">

                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Bulacan</dt>
                    <dd>
                      <a href="#">bulacanadmin@gmail.com</a>
                    </dd>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Bulacan</dt>
                    <dd>
                      <a href="#">bulacanadmin@gmail.com</a>
                    </dd>
                  </div>

                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Bulacan</dt>
                    <dd>
                      <a href="#">bulacanadmin@gmail.com</a>
                    </dd>
                  </div>

                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Bulacan</dt>
                    <dd>
                      <a href="#">bulacanadmin@gmail.com</a>
                    </dd>
                  </div>

                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Bulacan</dt>
                    <dd>
                      <a href="#">bulacanadmin@gmail.com</a>
                    </dd>
                  </div>

                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Bulacan</dt>
                    <dd>
                      <a href="#">bulacanadmin@gmail.com</a>
                    </dd>
                  </div>


                </dl>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
              <div className="text-xs text-muted-foreground">
                Updated
                <time dateTime="2023-11-23">November 23, 2023</time>
              </div>
              <Pagination className="ml-auto mr-0 w-auto">
                <PaginationContent>
                  <PaginationItem>
                    <Button className="h-6 w-6" size="icon" variant="outline">
                      <ChevronLeftIcon className="h-3.5 w-3.5" />
                      <span className="sr-only">Previous Order</span>
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button className="h-6 w-6" size="icon" variant="outline">
                      <ChevronRightIcon className="h-3.5 w-3.5" />
                      <span className="sr-only">Next Order</span>
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  
      );
}  




function ChevronLeftIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    )
  }
  
  
  function ChevronRightIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }
  
  
  function CopyIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    )
  }
  
  
  function DownloadIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    )
  }
  
  
  function FileIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </svg>
    )
  }
  
  
  function HomeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  function LineChartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  }
  
  
  function ListFilterIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M7 12h10" />
        <path d="M10 18h4" />
      </svg>
    )
  }
  
  
  function MoveVerticalIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="8 18 12 22 16 18" />
        <polyline points="8 6 12 2 16 6" />
        <line x1="12" x2="12" y1="2" y2="22" />
      </svg>
    )
  }
  
  
  function Package2Icon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    )
  }
  
  
  function PackageIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    )
  }
  
  
  function PanelLeftIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 3v18" />
      </svg>
    )
  }
  
  
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function SettingsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  
  
  function ShoppingCartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }
  
  
  function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  