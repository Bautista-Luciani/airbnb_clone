"use client"

import { IconType } from "react-icons"
import { useRouter, useSearchParams } from 'next/navigation'
import qs from "query-string"
import { useCallback } from 'react';

interface CategoryBoxProps {
    label: string
    icon: IconType
    selected?: boolean
}

const CategoryBox = ({ label, icon: Icon, selected }: CategoryBoxProps) => {

    const router = useRouter()
    const params = useSearchParams()

    const handleClick = useCallback(() => {
        /* Creamos un objeto vacio para agregar los params */
        let currentQuery = {}

        /* En caso de que hayan params los guardamos como objeto en el currentQuery */
        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        /* A los params que haya, le agregamos el param "category" y su valor va a ser el nombre de la category */
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        /* Queremos que en caso de que la category este seleccionada, si la volvemos a tocar que se limpie la url */
        if (params?.get("category") === label) {
            delete updatedQuery.category
        }

        /* Creamos la url con los params */
        const url = qs.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, { skipNull: true })

        /* Navegamos a esa url */
        router.push(url)
    }, [label, params, router])

    return (
        <div
            onClick={handleClick}
            className={`
                flex
                flex-col
                items-center
                justify-center
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                cursor-pointer
                ${selected ? "border-b-neutral-800" : "border-transparent"}
                ${selected ? "text-neutral-800" : "text-neutral-500"}
            `}
        >
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    )
}

export default CategoryBox