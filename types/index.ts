import { Listing, Reservation, User } from '@prisma/client';

export type SafeListing = Omit<Listing, "createdAt"> & {
    createdAt: string
}

/*  Creamos este type ya que en el getCurrentUser cambiamos los tipos de las propiedades DateTime del User por string
Entonces para evitar errores en el Navbar al pasar el getCurrentUser() creamos este type que es igual a User,
con la diferencia de que las propiedades que estaban definidas en DateTime ahora son strings
Para eso usamos el Omit, el cual el primer parametro es el modelo que queremos modificar, y el segundo las propiedades que queremos omitir
Luego definimos esas propiedades a string */
export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
    createdAt: string,
    updatedAt: string,
    emailVerified: string | null
}

export type SafeReservation = Omit<Reservation, "startDate" | "endDate" | "createdAt" | "listing"> & {
    startDate: string,
    endDate: string,
    createdAt: string,
    listing: SafeListing
}