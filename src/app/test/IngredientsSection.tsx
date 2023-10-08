import {UseFormReturn, useFieldArray} from 'react-hook-form'
import  {Purchasing, emptyIngredients} from './PurchasingForm'

export interface Props {
    form: UseFormReturn<Purchasing, any>
}

export const IngredientsSection = ({
    form: {
        control,
        register,
        formState: {errors}
    },
}: Props) => {
    const {fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients',
    })

    return (
            <div className='border-gray-900/10 pb-12'>
                <h2 className='text-lg font-semibold leading-7 text-gray-900'>Ingredients</h2>
                    {fields.map((field, index) => (
                        <div className="grid grid-cols-6 col-start-1 gap-2 pt-2" key={index}>
                            <div>
                                <label htmlFor="itemName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item Name
                                </label>
                                <div>
                                    <input type="text"
                                    {...register(`ingredients.${index}.itemName`)}
                                    className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                                <div>
                                    <input type="number"
                                    {...register(`ingredients.${index}.price`)}
                                    className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="qty" className="block text-sm font-medium leading-6 text-gray-900">
                                    QTY
                                </label>
                                <div>
                                    <input type="number"
                                    {...register(`ingredients.${index}.qty`)}
                                    className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="discount" className="block text-sm font-medium leading-6 text-gray-900">
                                    Discount
                                </label>
                                <div>
                                    <input type="number"
                                    {...register(`ingredients.${index}.discount`)}
                                    className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="total" className="block text-sm font-medium leading-6 text-gray-900">
                                    Total
                                </label>
                                <div>
                                    <input type="number"
                                    {...register(`ingredients.${index}.total`)}
                                    className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-wrap content-end gap-3'>
                                <button
                                onClick={() => append (emptyIngredients)}
                                className='btn btn-sm btn-active btn-info text-white'>
                                    Add
                                </button>
                                <button
                                onClick={() => remove (index)}
                                className='btn btn-sm btn-active btn-info text-white'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
    )
}