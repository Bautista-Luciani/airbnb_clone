import prisma from '@/libs/prismadb';

interface IParams {
    listingId?: string
    userId?: string
    authorId?: string
}

export default async function getReservations(params: IParams) {
    try {
        /* Extraemos todos los params posibles, ya que no solo vamos a necesitar las reservas para los listings
        Entonces estamos reciclando la accion en base a que parte de la pagina nos encontramos */
        const { listingId, userId, authorId } = params

        /* En base a que parte de la pagina nos encontramos, el valor del query va a ser uno o otro */
        const query: any = {}

        /* En caso de que en la url este el param del listingId, vamos a buscar todas las reservas que coincidan con ese listingId */
        if (listingId) {
            query.listingId = listingId
        }

        /* En caso de que en la url este el param del userId, vamos a buscar todas las reservas que coincidan con ese usuario */
        if (userId) {
            query.userId = userId
        }

        /* En caso de que en la url este el param del authorId, vamos a buscar todas las reservas que hicieron todos los usuarios por ese listing */
        if (authorId) {
            query.listing = { userId: authorId }
        }

        /* Obtenemos las reservas, cambiamos los atributos que estan definidos con 'Date' por 'string' y las retornamos */
        const reservations = await prisma.reservation.findMany({
            where: query,
            include: {
                listing: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        const safeReservations = reservations.map(reservation => ({
            ...reservation,
            createdAt: reservation.createdAt.toISOString(),
            startDate: reservation.startDate.toISOString(),
            endDate: reservation.endDate.toISOString(),
            listing: {
                ...reservation.listing,
                createdAt: reservation.listing.createdAt.toISOString()
            }
        }))

        return safeReservations

    } catch (error: any) {
        throw new Error(error)
    }
}