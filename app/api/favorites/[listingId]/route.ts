import getCurrentUser from "@/actions/getCurrentUser"
import { NextResponse } from "next/server"
import prisma from '@/libs/prismadb';

interface IParams {
    listingId: string
}

export async function POST(req: Request, { params }: {params: IParams}){

    /* Obtenemos el usuario */
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return new NextResponse("Unauthorized", { status: 401 })
    }

    /* Obtenemos el listingId que viene en los params, ya que asi se llama la carpeta donde esta este archivo */
    const { listingId } = params

    if(!listingId || typeof listingId !== 'string'){
        return new NextResponse('LisitngId missing', { status: 400 })
    }

    /* Obtenemos todos los favoritos que tiene el usuario */
    let favoriteIds = [...(currentUser.favoriteIds || [])]

    /* y le agregamos el nuevo al arreglo */
    favoriteIds.push(listingId)

    /* Actualizamos los favoritos del usuario con el arreglo donde agregamos el ultimo listing */
    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoriteIds
        }
    })

    return NextResponse.json(user)
}

export async function DELETE(req: Request, { params }:{ params: IParams }){
    
    /* Obtenemos el usuario */
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return new NextResponse('Unauthorized', { status: 401 })
    }

    /* Obtenemos el listingId que viene en los params, ya que asi se llama la carpeta donde esta este archivo */
    const { listingId } = params

    if(!listingId || typeof listingId !== 'string'){
        return new NextResponse("ListingId missing", { status: 400 })
    }

    /* Obtenemos todos los favoritos que tiene el usuario */
    let favoriteIds = [...(currentUser.favoriteIds || [])]

    /* Eliminamos el favoriteId que coincida con el listingId */
    favoriteIds = favoriteIds.filter(id => id !== listingId)

    /* Actualizamos los favoritos del usuario con el arreglo donde eliminamos el ultimo listing */
    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoriteIds
        }
    })

    return NextResponse.json(user)
}
