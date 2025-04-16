import { Testimony } from "@/types";
import htmlParser from 'html-react-parser';

const TestimonyItem = ({
    bio,
    full_picture,
    star,
    description
} : {
    bio: string,
    full_picture: string,
    star: number,
    description: string
}) => (
    <div className="text-white text-center p-6 rounded-xl max-w-md mx-auto space-y-4">
      <div className="flex justify-center">
        <img
          src={full_picture}
          alt={bio}
          className="w-32 h-32 rounded-full border-4 border-white object-cover"
        />
      </div>

      <p className="text-sm leading-relaxed">{htmlParser(description)}</p>

      <div className="flex justify-center space-x-1 text-xl">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={star > i ? "text-yellow-400" : ""}>★</span>
        ))}
      </div>

      <p className="italic text-sm">{bio}</p>
    </div>
)
const TestimonySection = ({ data } : { data: Testimony[]}) => {

    return (
        <div className="grid bg-primary text-white py-10 px-3 gap-4">

            <div className="flex flex-col space-y-1">
                <span className="uppercase text-4xl font-bold tracking-wider">Témoignages</span>
                <div className="w-20 border-white border-2"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 py-10">
                {data.map((item, index) => (
                    <TestimonyItem
                        key={index}
                        bio={item.bio}
                        full_picture={item.full_picture}
                        star={item.star}
                        description={item.description}
                    />
                ))}
            </div>

        </div>
    )

}

export default TestimonySection;
