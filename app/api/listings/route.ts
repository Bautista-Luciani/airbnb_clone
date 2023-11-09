import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';

export async function POST(req: Request){
    /* Obtenemos el usuario */
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return new NextResponse("Unauthorized", { status: 401 })
    }

    /* Obtenemos todos los valores que mandamos en el formulario */
    const body = await req.json()
    const {title, description, imageSrc, category, roomCount, bathroomCount, guestCount, location, price} = body

    const listing = await prisma.listing.create({
        data: {
            title, 
            description, 
            imageSrc, 
            category, 
            roomCount, 
            bathroomCount, 
            guestCount, 
            locationValue: location.value, 
            price: parseInt(price, 10),
            userId: currentUser.id
        }
    })

    return NextResponse.json(listing)
}