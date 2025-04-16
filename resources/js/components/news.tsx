import { News as NewsArticle } from "@/types";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const links = [
    {
        id: 1,
        name: "Toute l'actualité",
        href: "#",
        isOpen: true
    },
    {
        id: 2,
        name: "Evenements",
        href: "#",
        isOpen: false
    }
];

const NewsItem = ({
    name,
    full_cover,
    full_slug,
    description
} : {
    name: string,
    full_cover: string,
    full_slug: string,
    description: string
}) => (
    <div className="relative w-full max-w-xl mx-auto shadow-lg rounded overflow-hidden">
        <img
            src={full_cover} // Remplace par ton vrai chemin
            alt="Soutenances des Thèses"
            className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-0 left-0 w-4/5 bg-red-600 opacity-70 text-white p-6">
            <h2 className="text-lg font-extrabold leading-tight">
                {name}
            </h2>
            {/* Flèche en bas à droite */}
            <div className="absolute bottom-4 right-6">
                <Link href={full_slug} className="text-3xl text-black hover:text-white">
                    <span className="">→</span>
                </Link>
            </div>
        </div>
    </div>
)

const News = ({ data } : { data: NewsArticle[]}) => {

    const [nav, setNav] = useState(links);

    const handleClick = (id: number) => {
        const copyNav = [...nav];
        const item = links.find(link => link.id == id);
        const item_1 = links.find(link => link.id != id);
        if(item) item.isOpen = true;
        if(item_1) item_1.isOpen = false;
        setNav(copyNav);
    }

    return (
        <div className="grid bg-primary text-white py-8 px-3 gap-4">

            <span className="uppercase text-4xl font-bold tracking-wider">Actualités</span>

            <ul className="flex justify-end gap-4">
                {nav.map((link, index) => (
                    <li key={index} className="flex flex-col" onClick={() => handleClick(link.id)}>
                        <Link href={link.href} className="text-lg">{link.name}</Link>
                        <div className={link.isOpen ? "w-14 border-white border-2" : ""}></div>
                    </li>
                ))}
            </ul>

            <div className="grid md:grid-cols-3 gap-4 py-10">
                {data.map((item) => (
                    <NewsItem
                        key={item.full_slug}
                        name={item.name}
                        full_cover={item.full_cover}
                        full_slug={item.full_slug}
                        description={item.description}
                    />
                ))}
            </div>

        </div>
    );
};

export default News;
