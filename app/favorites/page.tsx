import getCurrentUser from "@/actions/getCurrentUser"
import getFavoriteListing from "@/actions/getFavoriteListings"
import EmptyState from "@/components/EmptyState"
import FavoritesClient from "@/components/favorites/FavoritesClient"

const FavoritesPage = async() => {

    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <EmptyState
                title="Unauthorized"
                subtitle="Please login"
            />
        )
    }

    const listings = await getFavoriteListing()

    if (listings.length === 0) {
        return (
            <EmptyState
                title="No favorites found"
                subtitle="Looks like you have no favorites listings."
            />
        )
    }

    return (
        <FavoritesClient
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default FavoritesPage