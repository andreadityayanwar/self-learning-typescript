'use client'

import '../../../styles/global.css'
import Select from 'react-select'
import React from "react"
import {useForm, Controller, SubmitHandler} from "react-hook-form"


interface Purchasing  {
    itemName : {value: number; label: string}
    price: number
    qty: number
    discount: number
    total: number
}

const Dashboard = () => {
    const {control, handleSubmit} = useForm({
        defaultValues: {
            itemName: {},
            price: 0,
            qty: 0,
            discount: 0,
        },
    })
    const onSubmit : SubmitHandler<Purchasing> = (data) => {console.log(data)}

    return (
        <>
        <div className="px-5 pt-4">
            <div className="border-gray-900/10 pb-12">
                <h2 className="text-lg font-semibold leading-7 text-gray-900">Purchasing</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid col-span-full pt-2">
                        <label htmlFor="itemName" className="block text-sm font-medium leading-6 text-gray-900">
                            Item Name
                        </label>
                        <div className="">
                            <Controller
                                name="itemName"
                                control={control}
                                render= {({field}) => (
                                    <Select
                                        {...field}
                                        options={[
                                            {value: 1, label: "Milk"},
                                            {value: 2, label: "Coffe"},
                                            {value: 3, label: "Juice"},
                                        ]}/>
                                )}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 col-start-1 gap-2 pt-2">
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="">
                                <Controller
                                    name="price"
                                    control={control}
                                    render={({field}) => <input className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' {...field}/>}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="qty" className="block text-sm font-medium leading-6 text-gray-900">
                                QTY
                            </label>
                            <div className="">
                                <Controller
                                    name="qty"
                                    control={control}
                                    render={({field}) => <input className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' {...field}/>}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="discount" className="block text-sm font-medium leading-6 text-gray-900">
                                Discount
                            </label>
                            <div className="">
                                <Controller
                                    name="discount"
                                    control={control}
                                    render={({field}) => <input className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' {...field}/>}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="total" className="block text-sm font-medium leading-6 text-gray-900">
                                Total
                            </label>
                        </div>
                    </div>
                    <div className='pt-3'>
                    <button type="submit" className='btn btn-sm btn-active btn-neutral'>Save</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Dashboard