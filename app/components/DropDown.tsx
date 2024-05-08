'use client'
import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);  // State to track if dropdown is open


    return (
        <Dropdown onOpenChange={() => setIsOpen(!isOpen)}>
            <DropdownTrigger>
                <Button
                    variant="light"
                    className="rounded-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>
                    Open Menu
                    <ChevronDownIcon
                        className={`ml-2 h-5 w-5 duration-300 ${isOpen
                            ? 'rotate-180 text-slate-900'
                            : 'text-slate-600/90 group-hover:text-slate-900'
                            }`}
                        aria-hidden="true"
                    />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Chat 1</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
