import { Head, Link, usePage } from '@inertiajs/react';
import Footer from '@/components/footer';
import Contact from '@/components/contact-us';
import { Layout } from '@/components/layout';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Counter from '@/components/counter';
import News from '@/components/news';
import { News as NewsArticle, Testimony } from '@/types';
import TestimonySection from '@/components/testimony';


export default function Welcome({ news, testimonies }: { news: NewsArticle[], testimonies: Testimony[] }) {
    //const { auth } = usePage<SharedData>().props;

    return (
        <Layout>
            <Head title="Pigier Cameroun">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex w-full border-2 border-y-primary justify-center w-full overflow-hidden whitespace-nowrap mt-3 py-2">
                <motion.div
                    animate={{ x: ["100%", "-100%"], opacity: [1, 1, 0] }}
                    className="uppercase text-secondary text-base font-bold py-2"
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                >
                    <a href="#">Dates de rentrée académiques 2025/2026</a>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 bg-white ">

            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 bg-white md:bg-primary text-white p-2">
                <Counter targetValue={5} duration={100} title={"Enseignements"} />
                <Counter targetValue={21} duration={100} title={"Formations"} />
                <Counter targetValue={100} duration={100} title={"entreprises partenaires"} />
                <Counter targetValue={1000} duration={100} title={"alumni"} />
                <Counter targetValue={1} duration={100} title={"Incubateur"} />
            </div>

            <News data={news} />

            <TestimonySection data={testimonies} />

            <Contact />

        </Layout>
    );
}
