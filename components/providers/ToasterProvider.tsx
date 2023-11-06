/* Creamos un componente aparte para usar el toaster porque necesita un componente padre el cual sea "use client" */

"use client"

import { Toaster } from "react-hot-toast"

const ToasterProvider = () => {
    return (
        <Toaster />
    )
}

export default ToasterProvider
