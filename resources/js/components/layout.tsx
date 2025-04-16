import { useState, useEffect } from "react";
import { Link } from '@inertiajs/react';
import { ArrowUp } from 'lucide-react';
import NavigationProvider from "@/context/navigationContext";
import AOS from 'aos';
import ResponsiveMenu from "./menu";
import Footer from "./footer";

export function Layout({ children, ...props }: React.ComponentProps<'main'>) {

    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = () =>  {
        if(window.scrollY >= 20) setIsScroll(true);
        else setIsScroll(false);
    }

    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <NavigationProvider>
            <main className="flex min-h-screen w-full flex-1 flex-col gap-4 rounded-xl" {...props}>

                <ResponsiveMenu isScroll={isScroll} />

                <div className="flex flex-col w-full gap-6 mt-52">
                    {children}
                    <div className="flex fixed bottom-20 right-3 hover:-translate-y-2 duration-300 z-50">
                        <Link href="https://api.whatsapp.com/send?phone=237678660800" target="_blank">
                            <img
                                src="/img/whatsapp.svg"
                                alt="Watsapp logo"
                                height={60}
                                width={60}
                            />
                        </Link>
                    </div>
                    <div onClick={scrollToTop} data-aos="fade-down" data-aos-anchor-placement="bottom-center" className="flex h-12 w-12 p-2 cursor-pointer bg-primary rounded-full fixed bottom-2 right-3 justify-center items-center hover:bg-secondary block">
                        <ArrowUp className="text-white" />
                    </div>
                </div>

                <Footer />

            </main>
        </NavigationProvider>
    );
}
