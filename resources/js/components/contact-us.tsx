import { useForm } from "@inertiajs/react";
import InputError from "./input-error";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

type ContactForm = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    object: string;
    message: string;
};

export default function Contact() {

    const { data, setData, post, processing, errors, reset } = useForm<Required<ContactForm>>({
        name: '',
        surname: '',
        email: '',
        phone: '',
        object: '',
        message: '',
    });

    return (
        <div className="flex flex-col px-4 lg:px-10 py-5 lg:py-10 bg-white items-center">
            <div className="w-full gap-x-8 lg:px-20">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-y-0 lg:items-center justify-between">

                    {/* Campus Section */}
                    <div className="text-black space-y-2 mb-4 lg:mb-0">
                        <h3 className="max-w-[250px] lg:max-w-xl text-2xl mb-2 lg:text-5xl lg:mb-5 tracking-wider py-3 font-bold text-primary border-b-4 border-primary">CONTACTEZ-NOUS</h3>

                        <div className="max-w-sm">
                            <p className="font-semibold text-start">
                                L'équipe Pigier Cameroun s'engage à vous fournir une réponse personnalisée dans un délai de <span className="text-secondary">24 heures ouvrables.</span>
                                Nous vous remercions de votre intérêt
                            </p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <form className="flex flex-col gap-6 text-black" onSubmit={() => {}}>

                        <div className="grid gap-6">
                            <div className="flex gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Nom(s)</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        tabIndex={1}
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="John Doe"
                                        className="border-primary"
                                    />
                                    <InputError message={errors.name} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="surname">Prénom(s)</Label>
                                    <Input
                                        id="surname"
                                        type="text"
                                        tabIndex={2}
                                        value={data.surname}
                                        onChange={(e) => setData('surname', e.target.value)}
                                        placeholder="John Doe"
                                    />
                                    <InputError message={errors.surname} />
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Addresse email</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                tabIndex={3}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                disabled={processing}
                                placeholder="email@example.com"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="phone">Numéro de téléphone</Label>
                            <Input
                                id="phone"
                                type="text"
                                required
                                tabIndex={4}
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                disabled={processing}
                                placeholder="678660800"
                            />
                            <InputError message={errors.phone} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="object">Objet</Label>
                            <Input
                                id="object"
                                type="text"
                                required
                                tabIndex={5}
                                value={data.object}
                                onChange={(e) => setData('object', e.target.value)}
                                disabled={processing}
                                placeholder="Renseignement scolarité"
                            />
                            <InputError message={errors.object} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                required
                                tabIndex={6}
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                                disabled={processing}
                                placeholder="Bonjour..."
                                className="h-30 focus-visible:border-green-500 focus-visible:ring-0"
                            />
                            <InputError message={errors.message} />
                        </div>

                        <Button type="submit" className="cursor-pointer border-1 h-14 mt-4 uppercase tex-white bg-secondary hover:bg-primary hover:text-white" disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Soumettre
                        </Button>

                    </form>
                </div>
            </div>
        </div>
    )
}
