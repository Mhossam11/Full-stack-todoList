"use client"

import * as React from "react"
// import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ITodo } from "@/interfaces"

interface IProps{
    data:ITodo
}
export function TodoDetails({data}:IProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button 
            variant="outline" 
            className="text-amber-950 dark:text-white rounded-3xl"
        >
            Show details
        </Button>

      </DrawerTrigger>
      <DrawerContent className="dark:bg-transparent bg-black/20 backdrop-blur">
        <div className="mx-auto w-full max-w-sm space-y-5">
          <DrawerHeader>
            <DrawerTitle className="text-center">{data?.title}</DrawerTitle>
          </DrawerHeader>
          
            <span className="font-bold text-blue-400/80">Description :
              <DrawerDescription>{data?.body}</DrawerDescription>
            </span>
          <div className="items-center"> <span className="font-bold text-blue-400/80">Status :</span>  {data?.Completed?"Completed ✅":"Not Completed ❌"}</div>
          <div className="items-center"><span className="font-bold text-blue-400/80">Created At :</span> {data.createdAt? data.createdAt.toLocaleString():""}</div>
          

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
