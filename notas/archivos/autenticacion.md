# AUTENTICACION
# UI REGISTER
1. Instalamos zustand ► npm i zustand
2. Creamos el hook useRegisterModal ► `hooks/useRegisterModal`
3. Instalamos axios ► npm i axios
4. Instalamos react-hook-form ► npm i react-hook-form
5. Instalamos toaster ► npm i react-hot-toast
6. Creamos el componente RegisterModal ► `components/modals/RegisterModal.tsx`
7. Creamos el componente Heading ► `components/Heading.tsx`
8. Creamos el componente Input ► `components/inputs/Input.tsx`
9.  Agregamos ambos componentes al RegisterModal ► `components/modals/RegisterModal.tsx`
10. Creamos el provider ToasterProvider ► `components/providers/ToasterProvider.tsx`
11. Agregamos el ToasterProvider y el RegisterModal al `app/layout.tsx`
12. Le agregamos un onClick para abrir el modal al *signUp* ► `components/navbar/UserMenu.tsx`
