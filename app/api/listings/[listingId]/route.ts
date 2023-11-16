import getCurrentUser from "@/actions/getCurrentUser"
import { NextResponse } from "next/server"
import prisma from '@/libs/prismadb';

interface IParams {
    listingId?: string
}

export async function DELETE(req: Request, { params }:{ params: IParams }){
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return new NextResponse('Unauthorized', { status: 401 })
    }

    const { listingId } = params

    if(!listingId || typeof listingId !== 'string'){
        return new NextResponse('Listing id missing', { status: 400 })
    }

    const listing = await prisma.listing.deleteMany({
        where: {
            id: listingId,
            userId: currentUser.id
        }
    })

    return NextResponse.json(listing)
}