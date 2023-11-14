import { SafeUser } from "@/types";
import { useRouter } from 'next/navigation';
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface IUseFavorite {
    listingId: string,
    currentUser?: SafeUser | null
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
    const router = useRouter()
    const loginModal = useLoginModal()

    /* Creamos esta funcion para saber si el listing esta incluido en favoritos o no
    En caso de estarlo retorna true, caso contrario retorna false */
    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || []

        return list.includes(listingId)
    }, [currentUser, listingId])

    /* Creamos esta funcion para agregar o eliminar un listing de favoritos
    Para eso vamos a tener que usar el endpoint que creamos anteriormente */
    const toggleFavorite = useCallback(async(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()

        if(!currentUser){
            return loginModal.onOpen()
        }

        try {
            let request 

            if(hasFavorited){
                request = () => axios.delete(`/api/listings/${listingId}`)
            } else {
                request = () => axios.post(`/api/listings/${listingId}`)
            }

            await request()
            router.refresh()
            toast.success('Success')

        } catch (error) {
            toast.error('Something went wrong.')
        }
    }, [currentUser, hasFavorited, listingId, loginModal, router])

    return {
        hasFavorited,
        toggleFavorite
    }

}

export default useFavorite