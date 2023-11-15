import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';

export async function POST(req: Request){
    
    /* Obtenemos el usuario */
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return new NextResponse('Unauthorized', { status: 401 })
    }

    /* Obtenemos los valores que enviamos en el body */
    const body = await req.json()
    const { totalPrice, startDate, endDate, listingId } = body

    if(!totalPrice || !startDate || !endDate || !listingId){
        return new NextResponse('Body missing', { status: 400 })
    }

    /* Creamos una reserva para un listing */
    const listingAndReservation = await prisma.listing.update({
        where: {
            id: listingId
        },
        data: {
            reservations: {
                create: {
                    userId: currentUser.id,
                    startDate,
                    endDate,
                    totalPrice
                }
            }
        }
    })

    return NextResponse.json(listingAndReservation)

}