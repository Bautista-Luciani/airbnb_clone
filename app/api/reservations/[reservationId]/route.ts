import getCurrentUser from '@/actions/getCurrentUser';
import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';

interface IParams {
    reservationId: string
}

export async function DELETE(req: Request, { params }: { params: IParams }) {
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return new NextResponse('Unauthorized', { status: 401 })
    }

    const { reservationId } = params

    if(!reservationId || typeof reservationId !== 'string'){
        return new NextResponse('ReservationId missing', { status: 400 })
    }

    const reservation = await prisma.reservation.deleteMany({
        where: {
            id: reservationId,
            /* Aca lo que definimos es que solo puedan cancelar la reserva el dueño de la reserva o el dueño de la propiedad */
            OR: [
                {userId: currentUser.id},
                {listing: { userId: currentUser.id }}
            ]
        }
    })

    return NextResponse.json(reservation)
}