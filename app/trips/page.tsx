import getCurrentUser from "@/actions/getCurrentUser"
import getReservations from "@/actions/getReservations"
import EmptyState from "@/components/EmptyState"
import TripsClient from "@/components/trips/TripsClient"

const TripsPage = async () => {

    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <EmptyState
                title="Unauthorized"
                subtitle="Please login"
            />
        )
    }

    const reservations = await getReservations({ userId: currentUser.id })

    if (reservations.length === 0) {
        <EmptyState
            title="No trips found"
            subtitle="Look like you havent reserved any trips."
        />
    }

    return (
        <TripsClient 
            reservations={reservations}
            currentUser={currentUser}
        />
    )
}

export default TripsPage