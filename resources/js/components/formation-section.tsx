import { Formation } from "@/types";


const News = ({ data } : { data: Formation[]}) => {

    return (
        <div className="grid bg-white py-10 gap-4">
            <div className="flex justify-center items-center py-10 text-white">
                <h3 className="uppercase font-bold tracking-wider text-2xl">
                    nos principaux partenaires institutionnels
                </h3>
            </div>
        </div>
    )
}
