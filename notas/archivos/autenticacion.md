# AUTENTICACION
# UI REGISTER
1. Instalamos zustand ► npm i zustand
2. Creamos el hook useRegisterModal ► `hooks/useRegisterModal.ts`
3. Instalamos axios ► npm i axios
4. Instalamos react-hook-form ► npm i react-hook-form
5. Instalamos toaster ► npm i react-hot-toast
6. Creamos el componente RegisterModal ► `components/modals/RegisterModal.tsx`
7. Creamos el componente Heading ► `components/Heading.tsx`
8. Creamos el componente Input ► `components/inputs/Input.tsx`
9. Agregamos ambos componentes al RegisterModal ► `components/modals/RegisterModal.tsx`
10. Creamos el provider ToasterProvider ► `components/providers/ToasterProvider.tsx`
11. Agregamos el ToasterProvider y el RegisterModal al `app/layout.tsx`
12. Le agregamos un onClick para abrir el modal al *signUp* ► `components/navbar/UserMenu.tsx`

# UI LOGIN
1. Creamos el hook useLoginModal ► `hooks/useLoginModal.ts`
2. Creamos el componente LoginModal ► `components/modals/LoginModal.tsx`
3. Agregamos el LoginModal al `app/layout.tsx`
4. Le agregamos un onClick para abrir el modal al *signIn* ► `components/navbar/UserMenu.tsx`
5. Creamos una accion *getCurrentUser* para obtener el usuario ► `actions/getCurrentUser.ts`
6. Creamos el type *SafeUser* ► `types/index.ts`
7. Utilizamos el getCurrentUser en el `app/layout.tsx` y se lo pasamos al Navbar
8. Desde el *Navbar* se lo pasamos al *UserMenu* ► `app/navbar/Navbar.tsx`
9. En el UserMenu lo usamos para mostrar un menu diferente y hacer el logout ► `app/navbar/UserMenu.tsx`
10. Trabajamos en el login con Github:
    - En Github vamos a *settings* → *developer settings* → *OAuth apps*
    - Definimos un nombre, en esta caso *airbnb-clone-app*
    - Definimos Homepage URL y Authorization callback URL, en ambos casos *http://localhost:3000/*
    - En el archivo `.env`:
      - Definimos la vde *GITHUB_ID* y su valor va a ser el ClientId que nos da github
      - Definimos la vde *GITHUB_SECRET* y su valor va a ser el ClientSecret que nos da github
    - Usamos el metodo signIn("github") para registrarse con github ► `components/modals/RegisterModal.tsx`
    - Usamos el metodo signIn("github") para ingresar con github ► `components/modals/LoginModal.tsx`
11. Trabajamos en el login con Google:
    - Vamos a [https://console.cloud.google.com/cloud-resource-manager?pli=1]
    - Creamos un nuevo proyecto
    - Definimos un nombre, en esta caso *airbnb-clone-app*
    - Tocamos en *Api y servicios* → *Api y servicios habilitados* → *Pantalla de concentimiento de OAuth*
    - Seleccionamos *Externos* y lo creamos
    - Definimos un nombre, en esta caso *airbnb-clone-app*
    - Definimos un correo electronico
    - Definimos la informacion de contacto del desarrollador, el resto lo podemos dejar en blanco
    - Los permisos dejamos todo como viene por defecto
    - Los usuarios de prueba tambien dejamos todo como viene por defecto
    - Ahora tocamos en *Credenciales* → *Crear credenciales* → *Id de cliente de OAuth*
    - Seleccionamos *Aplicacion Web*
    - Agregamos la URI de redireccionamiento autorizados → *http://localhost:3000/api/auth/callback/google*
    - En el archivo `.env`:
      - Definimos la vde *GOOGLE_CLIENT_ID* y su valor va a ser el ClientId que nos da el modal de google
      - Definimos la vde *GOOGLE_CLIENT_SECRET* y su valor va a ser el ClientSecret que nos da google
    - Usamos el metodo signIn("google") para registrarse con google ► `components/modals/RegisterModal.tsx`
    - Usamos el metodo signIn("google") para ingresar con google ► `components/modals/LoginModal.tsx`
12. xwww
