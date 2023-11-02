"use client"

const Container = ({children}:{children: React.ReactNode}) => {
  return (
    <div 
        className="
            max-w-[2520px]
            mx-auto
            px-4
            sm:px-2
            md:px-10
            xl:px-20
        "
    >
        {children}
    </div>
  )
}

export default Container