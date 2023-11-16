## DEPLOY
1. En la terminal corremos el comando *npm run lint* para asegurarnos de que no haya ningun error, los warnings no pasa nada
2. Subimos todo al repositorio
3. Vamos a Vercel
4. Tocamos en *Add new* → *Project*
5. Importamos el repositorio
6. Definimos un nombre (que no diga airbnb porque nos puede lanzar un error por plagio)
7. Agregamos todas las variables del archivo `.env` en donde dice *Enviroment Variables*
8. En Github vamos a *Settings* → *Developer Settings* → *OAuth app* → seleccionamos la app (*airbnb-clone-app*)
9. Reemplazamos donde dice *Homepage URL* y *Authorization callback URL* por la nueva url que nos da vercel
10. En Google Cloud vamos a *Api y servicios* → *Credenciales* → tocamos en el id de cliente OAuth
11. Reemplazamos donde dice *URI de redireccionamiento autorizados* por la nueva url que nos da vercel