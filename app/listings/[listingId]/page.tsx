import getCurrentUser from "@/actions/getCurrentUser"
import { getListingById } from "@/actions/getListingById"
import EmptyState from "@/components/EmptyState"
import ListingClient from "@/components/listings/ListingClient"

interface IParams {
    listingId?: string
}

const ListingIdPage = async({ params }:{ params: IParams}) => {

    const listing = await getListingById(params)
    const currentUser = await getCurrentUser()

    if(!listing){
        return <EmptyState/>
    }

  return (
    <ListingClient
        listing={listing}
        currentUser={currentUser}
    />
  )
}

export default ListingIdPage