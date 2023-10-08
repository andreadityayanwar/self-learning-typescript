import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export const placeMaxLength = 200;

interface Ingredient {
    itemName : String
    price: number
    qty: number
    discount: number
    total: number
}

export interface Purchasing {
    name: string
    place: string
    ingredients: Ingredient[]
}

const schema : yup.ObjectSchema<Purchasing> = yup.object({
    name: yup.string().max(100).required(),
    place: yup.string().max(placeMaxLength).required(),
    ingredients: yup
    .array()
    .of(
        yup.object ({
            itemName: yup.string().max(50).required(),
            price: yup.number().min(1).required(),
            qty: yup.number().min(1).required(),
            discount: yup.number().min(1).required(),
            total: yup.number().min(1).required(),

        })
    )
    .required(),
})

export const emptyIngredients: Ingredient = {
    itemName : '',
    price: 0,
    qty: 0,
    discount: 0,
    total: 0
}

export const usePurchasingForm = () => {
    return useForm<Purchasing> ({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
        defaultValues : {
            ingredients:[emptyIngredients],
        },
    })
}