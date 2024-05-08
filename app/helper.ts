'use client'
import { ColumnDef } from "@tanstack/react-table";

export type DataType = {
    row: number,
    name: string,
    industry: string,
    city: string,
    state: string,
    segment: string,
    ownerId: number,
}

export const DummyData: DataType[] = [
    {
        row: 1,
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Denver",
        state: "CO",
        segment: "Enterprise Segment",
        ownerId: 7
    },
    {
        row: 2,
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Denver",
        state: "CO",
        segment: "Enterprise Segment",
        ownerId: 7
    },
    {
        row: 3,
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Denver",
        state: "CO",
        segment: "Enterprise Segment",
        ownerId: 7
    },
    {
        row: 4,
        name: "Abbott - Pacocha",
        industry: "IT",
        city: "Denver",
        state: "CO",
        segment: "Enterprise Segment",
        ownerId: 7
    }
];