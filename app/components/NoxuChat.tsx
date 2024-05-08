
'use client'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from './DataTable'
import { DataType, DummyData } from '../helper'
import { Button } from './ui/Button'
import { ArrowUpDown, AlertCircle, ArrowRight } from 'lucide-react'

export const NoxuChat = () => {

    const columns: ColumnDef<DataType>[] = [
        {
            accessorKey: "row",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        size="sm"
                        className='border-none'
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        {
            accessorKey: "name",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        size="sm"
                        className='border-none'
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        {
            accessorKey: "industry",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        size="sm"
                        className='border-none'
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Industry
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        {
            accessorKey: "city",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        size="sm"
                        className='border-none'
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        City
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const val = row.getValue('city') as string
                return <div className="truncate max-w-9">{val}</div>
            },
        },
        {
            accessorKey: "state",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        size="sm"
                        className='border-none'
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        State
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        {
            accessorKey: "segment",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        size="sm"
                        className='border-none'
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Segment
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const val = row.getValue('segment') as string
                return <div className="truncate max-w-12">{val}</div>
            },
        },
        {
            accessorKey: "ownerId",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        size="sm"
                        className='border-none'
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Owner ID
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
    ]

    return (
        <div className="w-full py-10 px-12 flex flex-col bg-slate-100">
            <div className='pb-3 flex'>
                <Button variant='issue' className='flex gap-2 bg-white py-0' size='sm'>
                    <AlertCircle className="h-5 w-5" />
                    Not Confident,
                    Human Help
                    <ArrowRight className="h-5 w-5" />
                </Button>
            </div>
            <div className='flex items-center gap-3'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5.29203" y="8.45072" width="32" height="20.7324" rx="10.3662" stroke="black" strokeWidth="1.80282" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.3086 20.0563C14.682 20.0563 14.9847 19.7537 14.9847 19.3803C14.9847 19.2761 14.9611 19.1774 14.919 19.0893C15.1456 18.9867 15.3971 18.9296 15.6619 18.9296C16.6576 18.9296 17.4648 19.7367 17.4648 20.7324C17.4648 21.7281 16.6576 22.5352 15.6619 22.5352C14.6663 22.5352 13.8591 21.7281 13.8591 20.7324C13.8591 20.4681 13.916 20.2171 14.0182 19.9909C14.1062 20.0329 14.2047 20.0563 14.3086 20.0563Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.5745 20.0563C25.9479 20.0563 26.2506 19.7537 26.2506 19.3803C26.2506 19.2761 26.227 19.1774 26.1849 19.0893C26.4114 18.9867 26.663 18.9296 26.9278 18.9296C27.9235 18.9296 28.7306 19.7367 28.7306 20.7324C28.7306 21.7281 27.9235 22.5352 26.9278 22.5352C25.9321 22.5352 25.125 21.7281 25.125 20.7324C25.125 20.4681 25.1819 20.2171 25.284 19.9909C25.372 20.0329 25.4705 20.0563 25.5745 20.0563Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M30.2249 16.0499C33.0345 18.437 34.8173 21.9963 34.8173 25.972C34.8173 26.2809 34.8065 26.5874 34.7853 26.891C32.7637 28.8592 30.0056 30.0746 26.9636 30.0846H15.6205C14.5511 30.0811 13.5168 29.9286 12.5373 29.6468C10.2976 31.4702 7.43977 32.5633 4.32661 32.5633C3.72696 32.5633 3.13679 32.5227 2.55869 32.4442C1.71231 32.3293 1.65427 31.1886 2.38909 30.7532C4.86452 29.2863 6.81198 27.0223 7.87797 24.3149C8.01674 23.2228 8.29085 22.1731 8.68294 21.1829C8.70651 21.0869 8.74394 20.9964 8.79292 20.914C9.58719 19.0328 10.8111 17.3772 12.3417 16.0704C11.6517 15.9501 10.9418 15.8874 10.2173 15.8874C9.42965 15.8874 8.90607 15.0376 9.47958 14.4976C10.7905 13.2634 12.5565 12.5071 14.4991 12.5071C15.0278 12.5071 15.5435 12.5631 16.0405 12.6696C16.1286 12.6795 16.2172 12.6932 16.3062 12.7107L20.1485 13.4654C20.9043 13.6139 21.6818 13.6139 22.4376 13.4654L26.0381 12.7582C26.6465 12.5944 27.2862 12.5071 27.9463 12.5071C29.8889 12.5071 31.6549 13.2634 32.9658 14.4976C33.5393 15.0376 33.0157 15.8874 32.228 15.8874C31.5459 15.8874 30.8768 15.943 30.2249 16.0499ZM15.6616 24.1127C17.5284 24.1127 19.0418 22.5993 19.0418 20.7325C19.0418 18.8656 17.5284 17.3522 15.6616 17.3522C13.7947 17.3522 12.2813 18.8656 12.2813 20.7325C12.2813 22.5993 13.7947 24.1127 15.6616 24.1127ZM26.9272 24.1127C28.7941 24.1127 30.3075 22.5993 30.3075 20.7325C30.3075 18.8656 28.7941 17.3522 26.9272 17.3522C25.0603 17.3522 23.5469 18.8656 23.5469 20.7325C23.5469 22.5993 25.0603 24.1127 26.9272 24.1127ZM21.2995 22.5353C20.3661 22.5353 19.6094 23.292 19.6094 24.2254V24.5985C19.6094 25.0089 19.7724 25.4025 20.0626 25.6927L20.6621 26.2923C21.0142 26.6443 21.5849 26.6443 21.9369 26.2923L22.5364 25.6927C22.8266 25.4025 22.9897 25.0089 22.9897 24.5985V24.2254C22.9897 23.292 22.233 22.5353 21.2995 22.5353Z" fill="black" />
                </svg>
                To find out how many accounts you have, you can use the following query:
            </div>
            <div className='px-12'>
                <DataTable columns={columns} data={DummyData} />
            </div>
        </div>
    )
}