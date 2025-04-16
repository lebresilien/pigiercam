
export default function Footer() {
    return (
        <footer className="py-20 lg:py-34 text-center bg-white">
            <div className="w-full mx-auto px-4">
                <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-y-0 items-center justify-between">
                    {/* Logo Section */}
                    <div className="mb-3 lg:mb-0">
                        <img src="/img/logo.png" alt="IUPPC Pigier" className="h-34" />
                    </div>

                    {/* Campus Section */}
                    <div className="text-black text-sm space-y-2 lg:text-center lg-6 lg:mb-0">
                        <h3 className="text-xl mb-2 lg:text-4xl lg:mb-5 tracking-wider font-bold text-blue-900">NOS CAMPUS</h3>
                        <div>
                            <p className="font-semibold">SIÈGE SOCIAL DU CAMEROUN :</p>
                            <p>Douala, Bessengue, 39 rue 1436 (En face Hôtel Lewat).</p>
                        </div>
                        <div>
                            <p className="font-semibold">CAMPUS DE YAOUNDÉ :</p>
                            <p>Nouvelle route Bastos, derrière Zenith Assurance, ancien PNDP.</p>
                        </div>
                        <div>
                            <p className="font-semibold">CAMPUS DE MAROUA :</p>
                            <p>Quartier Comice, complexe Woïla, face école des champions.</p>
                        </div>
                    </div>

                    {/* Contacts Section */}
                    <div className="text-sm text-black space-y-2 text-center">
                        <h3 className="text-xl mb-2 lg:text-4xl lg:mb-5 tracking-wider font-bold text-blue-900">NOS CONTACTS</h3>
                        <div>
                            <p><strong>Hotline - Douala :</strong> (+237) 696 703 976</p>
                            <p><strong>Email :</strong> pigierdouala@pigiercam.com</p>
                        </div>
                        <div>
                            <p><strong>Hotline - Yaoundé :</strong> (+237) 695 637 923</p>
                            <p><strong>Email :</strong> pigieryaounde@pigiercam.com</p>
                        </div>
                        <div>
                            <p><strong>Hotline - Maroua :</strong> (+237) 690 195 405</p>
                            <p><strong>Email :</strong> pigiermaroua@pigiercam.com</p>
                        </div>
                    </div>
                </div>
            </div>
      </footer>
    )
}
