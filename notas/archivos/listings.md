# LISTING
## CREACION DE LISITNGS
1. Creamos el hook *useRentModal* ► `hooks/useRentModal.ts`
2. Creamos el componente *RentModal* ► `components/modals/RentModal.tsx`
3. Agregamos RentModal al `app/layout`
4. Usamos el RentModal en el *UserMenu* ► `components/navbar/UserMenu.tsx`
<!-- CATEGORY -->
5. Creamos el componente *CategoryInput* ► `components/inputs/CategoryInput.tsx`
6. Usamos el CategoryInput en el *RentModal* ► `components/modals/RentModal.tsx`
<!-- LOCATION -->
7. Instalamos world-countries ► npm i world-countries
8. Creamos el hook *useCountries* ► `hooks/useCountries.ts`
9.  Instalamos react-select ► npm i react-select
10. Creamos el componente *CountrySelect* ► `components/inputs/CountrySelect.tsx`
11. Usamos el CountrySelect en el *RentModal* ► `components/modals/RentModal.tsx`
12. Instalamos leaflet ► npm i leaflet
13. Instalamos el type de leaflet ► npm i -D @types/leaflet
14. Instalamos react-leaflet ► npm i react-leaflet
15. Creamos el componente *Map* ► `components/Map.tsx`
16. Agregamos los estilos de leaflet al archivo `app/globals.css`
17. Usamos el Map en el *RentModal* ► `components/modals/RentModal.tsx`
<!-- INFO -->
18. Creamos el componente *Counter* ► `components/inputs/Counter.tsx`
19. Usamos el Counter en el *RentModal* ► `components/modals/RentModal.tsx`
<!-- IMAGES -->
20. Vamos a [https://cloudinary.com/]
21. Instalamos cloudinary ► npm i next-cloudinary
22. Agregamos la vde *NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME* y su valor va a ser el Cloud Name que se encuentra en dashboard al ingresar a cloudinary ► `.env`
23. Creamos un UploadPreset:
    - En cloudinary vamos a *settings* → *upload*
    - Tocamos en *Add upload preset*
    - Seleccionamos *Unsigned* en Signing Mode y guardamos
    - Copiamos el nombre y lo usamos en el componente que vamos a crear a continuacion
24. Creamos el componente *ImageUpload* ► `components/inputs/ImageUpload.tsx`
25. Usamos el ImageUpload en el *RentModal* ► `components/modals/RentModal.tsx`
<!-- DESCRIPTION -->
26. Usamos el Input en el *RentModal* ► `components/modals/RentModal.tsx`
<!-- PRICE -->
27. Usamos el Input en el *RentModal* ► `components/modals/RentModal.tsx`
28. Creamos el endpoint para crear los listings ► `app/api/listings/route.ts`
29. Usamos el endpoint para el submit del formulario ► `components/modals/RentModal.tsx`

## CARDS
1. Envolvemos el children en un div ► `app/layout`
2. 
