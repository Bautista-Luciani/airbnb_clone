# BASE DE DATOS
### Para la base de datos vamos a usar `Prisma` y `MongoDB`
1. Instalamos prisma ► npm install -D prisma
2. Inicializamos prisma ► npx prisma init
3. Reemplazamos el provider por *mongodb* ► `prisma/schema.prisma`
4. Vamos a [https://www.mongodb.com/atlas/database]
5. Creamos una nueva base de datos:
   - Nos logeamos en MongoDB Atlas
   - Creamos un nuevo proyecto
   - Le definimos el nombre, en este caso *airbnb-clone*
   - Creamos un nuevo deployment
   - Seleccionamos la opcion gratuita, y lo creamos
   - Creamos un user, primero definimos el nombre y luego la contraseña (en ambos casos en *bautiluciani*)
   - Agregamos la siguiente ip address para no tener que ir actualizandola cada vez que nos conectamos a una red diferente de wifi: 0.0.0.0/0
   - Por ultimo tocamos en *Finish and close* y listo
6. Conectamos la base de datos a nuestro proyecto:
   - Tocamos en *CONNECT*
   - Seleccionamos la opcion *MongoDB for VS Code*
   - Copiamos la url y la pegamos en la vde *DATABASE_URL* que se creo al instalar prisma ► `.env`
7. En el archivo `schema.prisma` ►
   - Creamos un modelo para los usuarios
   - Creamos un modelo para las cuentas que ingresaron con google o github
   - Relacionamos ambos modelos
   - Creamos un modelo para el listado
   - Lo relacionamos con el modelo de usuarios
   - Creamos un modelo para las reservas
   - La relacionamos con el modelo del listado y el de usuarios
8. En la terminal ejecutamos: (*Esto hay que hacerlo cada vez que modificamos el schema.prisma*)
    - npx prisma db push 
9. Vamos a [https://authjs.dev/reference/adapter/prisma]
10. Instalamos prisma para NextAuth ► npm install next-auth @prisma/client @auth/prisma-adapter 
11. Instalamos bcrypt ► npm i bcrypt
12. Instalamos bcrypt (types) ► npm i -D @types/bcrypt
13. Creamos el archivo *prismadb.ts* para que prisma solo se inicialice una vez, si no hacemos esto prisma se inicializa cada vez que hace una modificacion en la base de datos ► `lib/prismadb.ts`
14. Creamos el archvio *[...nextauth].ts* para la config de nextauth ► `pages/api/auth/[...nextauth].ts`
15. Creamos la vde *NEXTAUTH_SECRET* ► `.env`
16. Creamos el endpoint para crear un nuevo usuario ► `app/api/register/route.ts`
