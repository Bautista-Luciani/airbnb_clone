import prisma from '@/libs/prismadb'

export interface IListingParams {
    userId?: string
}

export default async function getListings(params: IListingParams){
    try {

        /* Extraemos todos los params posibles, ya que no solo vamos a necesitar los listings para mostarlos en el home
        Sino que en este caso tambien los vamos a necesitar para mostrar todas las propiedades que le corresponden a un usuario
        Entonces estamos reciclando la accion en base a que parte de la pagina nos encontramos */
        const { userId } = params

        /* En base a que parte de la pagina nos encontramos, el valor del query va a ser uno o otro */
        let query: any = {}

        /* En caso de que en la url este el param del userId, vamos a buscar todos los listings que le corresponden a ese usuario */
        if(userId){
            query.userId = userId
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