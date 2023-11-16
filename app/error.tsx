"use client"

import EmptyState from "@/components/EmptyState"
import { useEffect } from "react"

interface ErrorProps {
    error: Error
}

const ErrorState = ({ error }: ErrorProps) => {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <EmptyState
            title="Uh Oh"
            subtitle="Something went wrong!"
        />
    )
}

export default ErrorState