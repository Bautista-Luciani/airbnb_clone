"use client"

import { SafeReservation, SafeUser } from "@/types"
import Container from "../Container"
import Heading from "../Heading"
import ListingCard from "../listings/ListingCard"
import { useRouter } from 'next/navigation';
import { useCallback, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

interface ReservationClientProps {
    reservations: SafeReservation[]
    currentUser?: SafeUser | null
}

const ReservationsClient = ({reservations, currentUser}: ReservationClientProps) => {

    const router = useRouter()
    const [deletedId, setDeletedId] = useState("")

    const onCancel = useCallback((id: string) => {
      setDeletedId(id)

      axios.delete(`/api/reservations/${id}`)
      .then(()=> {
        toast.success('Reservation cancelled')
        router.refresh()
      })
      .catch((error)=> {
        toast.error(error?.response?.data?.error)
      })
      .finally(()=> {
        setDeletedId('')
      })
    }, [router])

  return (
    <Container>
        <Heading
            title="Reservation"
            subtitle="Booking on your properties"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {reservations.map( reservation => (
            <ListingCard 
              key={reservation.id}
              data={reservation.listing}
              reservation={reservation}
              actionId={reservation.id}
              onAction={onCancel}
              disabled={deletedId === reservation.id}
              actionLabel="Cancel guest reservation"
              currentUser={currentUser}
            />
          ))}
        </div>
    </Container>
  )
}

export default ReservationsClient