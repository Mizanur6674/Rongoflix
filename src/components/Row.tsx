import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useRef, useState } from "react"
import { Movie } from "../../type"
import Thumbnail from "./Thumbnail"

interface props {
    title: string
    movies: Movie[]
}
function Row({ title, movies}:props) {
    const rowRef = useRef <HTMLDivElement>(null)
    const [ isMoved, setIsMoved] = useState(false)

    const handleClick = ( derection:string) => {
        setIsMoved(true)
        if (rowRef.current) {
            const {scrollLeft, clientWidth} = rowRef.current
            const scrollTo = derection === "left" 
            ?scrollLeft - clientWidth 
            : scrollLeft + clientWidth
            rowRef.current.scrollTo({left:scrollTo, behavior:"smooth"})
        }

    }
  return (
    <div className=" h-40 space-y-0.5 md:space-y-2">
        <h1 className=" w-56 text-gray-300 text-md cursor-pointer md:text-2xl hover:text-white transition duration-200 font-semibold ">{title}</h1>
        <div className=" relative md:ml-2 group">
            <ChevronLeftIcon onClick={() => handleClick("left")} 
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto cursor-pointer opacity-0 group-hover:opacity-100 transition hover:scale-125 text-white h-9 w-9 ${!isMoved && 'hidden'}`}
            />

            <div ref={rowRef} className=" flex items-center space-x-0.5 md:space-x-2.5 overflow-x-scroll scrollbar-hide md:p-2">
                { movies.map((movie)=> (
                    <Thumbnail key={movie.id} movie={movie} />

                ))}
                
            </div>
            <ChevronRightIcon onClick={() => handleClick("right")} className=" absolute top-0 bottom-0 right-2 z-40 m-auto cursor-pointer opacity-0 group-hover:opacity-100 transition hover:scale-125 text-white h-9 w-9"/>
        </div>
    </div>
  )
}

export default Row;