import prisma from '@/libs/prismadb'

export interface IListingParams {
    userId?: string
    roomCount?: string
    bathroomCount?: string
    guestCount?: string
    locationValue?: string
    startDate?: string
    endDate?: string
    category?: string
}

export default async function getListings(params: IListingParams){
    try {

        /* Extraemos todos los params posibles, ya que no solo vamos a necesitar los listings para mostarlos en el home
        Ademas en el home vamos a mostrar los listings en base a los params que haya, que eso serian los filtros
        Entonces estamos reciclando la accion en base a que parte de la pagina nos encontramos */
        const { userId, roomCount, bathroomCount, guestCount, locationValue, startDate, endDate, category } = params

        /* En base a que parte de la pagina nos encontramos, el valor del query va a ser uno o otro */
        let query: any = {}

        /* En caso de que en la url este el param del userId, vamos a buscar todos los listings que le corresponden a ese usuario */
        if(userId){
            query.userId = userId
        }

        /* En caso de que en la url este el param del category, vamos a buscar todos los listings que le corresponden a esa categoria */
        if(category){
            query.category = category
        }

        /* En caso de que en la url este el param del roomCount, bathroomCount y/o guestCount, vamos a buscar todos los listings que tengan la misma o mas cantidad que esos params
        Es por eso que usamos el 'gte (greater than or equal)' y es importante ponerle el '+' adelante para que lo tome como un numero y no como un string */
        if(roomCount){
            query.roomCount = {
                gte: +roomCount
            }
        }

        if(bathroomCount){
            query.bathroomCount = {
                gte: +bathroomCount
            }
        }

        if(guestCount){
            query.guestCount = {
                gte: +guestCount
            }
        }

        /* En caso de que en la url este el param del locationValue, vamos a buscar todos los listings que le corresponden a esa ubicacion */
        if(locationValue){
            query.locationValue = locationValue
        }

        /* En caso de que en la url este el param del startDate o endDate, vamos a filtrar todos los listings que ya esten reservados en esa fecha
        Para excluirlos vamos a usar el 'NOT', y vamos a saber si hay alguna reserva dentro de las fechas seleccionadas con 'gte' y 'lte (less than or equal)' */
        if(startDate && endDate){
            query.NOT = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: { gte: startDate },
                                startDate: { lte: startDate }
                            },
                            {
                                startDate: { lte: endDate },
                                endDate: { gte: endDate }
                            }
                        ]
                    }
                }
            }
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: "desc"
            }
        })

        const safeListings = listings.map(listing => ({
            ...listing,
            createdAt: listing.createdAt.toISOString()
        }))

        return safeListings
        
    } catch (error: any) {
        throw new Error(error)
    }
}