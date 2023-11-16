# PAGES
## TRIPS
1. Creamos la pagina de trips ► `app/trips/page.tsx`
2. Creamos el componente *TripsClient* ► `components/trips/TripsClient.tsx`
3. Creamos el enpoint para cancelar una reserva ► `app/api/reservations/[reservationId]/route.ts`
4. Agregamos el onClick para redirijir al TripsClient ► `components/navbar/UserMenu.tsx`

## RESERVAS
1. Creamos la pagina de las reservas ► `app/reservation/page.tsx`
2. Creamos el componente *ReservationsClient* ► `components/reservations/ReservationsClient.tsx`
3. Agregamos el onClick para redirijir al ReservationsClient ► `components/navbar/UserMenu.tsx`

## FAVORITOS
1. Creamos la accion *getFavoriteListings* ► `actions/getFavoriteListings.ts`
2. Creamos la pagina de favoritos ► `app/favorites/page.tsx`
3. Creamos el componente *FavoritesClient* ► `components/favorites/FavoritesClient.tsx`
4. Agregamos el onClick para redirijir al FavoritesClient ► `components/navbar/UserMenu.tsx`

## PROPIEDADES
1. Agregamos la interface en el *getListings.ts* ► `actions/getListings.ts`
2. Agregamos la interface en el HomePage y se lo pasamos al getListings para arreglar el error ► `app/page`
3. Creamos la pagina de propiedades ► `app/properties/page.tsx`
4. Creamos el componente *PropertiesClient* ► `components/properties/PropertiesClient.tsx`
5. Creamos el endpoint para eliminar las properties ► `api/listings/[listingId]/route.ts`
6. Agregamos el onClick para redirijir al PropertiesClient ► `components/navbar/UserMenu.tsx`
