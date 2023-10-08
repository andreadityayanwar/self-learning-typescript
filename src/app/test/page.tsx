'use client'
import '../../../styles/global.css'
import React from "react"
import {Purchasing, placeMaxLength, usePurchasingForm} from './PurchasingForm'
import { IngredientsSection } from './IngredientsSection'
import {SubmitHandler} from 'react-hook-form'

const Purchasing = () => {
    const form = usePurchasingForm()
    const {
        handleSubmit,
        register,
        formState: {errors},

    } = form


    const check : SubmitHandler<Purchasing> = data => {console.log(data)}

    return (
        <>
        <div className='px-5 py-4'>
            <form onSubmit={handleSubmit(check)}>
                <div className="grid grid-cols-2 col-start-1 gap-2 pt-2" >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Supplier Name
                        </label>
                        <div>
                            <input type="text"
                            {...register('name')}
                            className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="place" className="block text-sm font-medium leading-6 text-gray-900">
                            Place
                        </label>
                        <div>
                            <input type="text"
                            {...register('place')}
                            maxLength={placeMaxLength}
                            className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>
                </div>
                <IngredientsSection form={form}/>
                <div className='pt-3'>
                    <button type="submit" className='btn btn-sm btn-active btn-neutral'>Save</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Purchasing