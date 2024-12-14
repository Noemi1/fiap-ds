import { Header, Navigation } from "../../shared"

import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import { H1Typography } from "../../DS/typography";
import { DS_Button } from "../../DS/components";
import { FaHome } from "react-icons/fa";

export function Home() {
    return (
        <>
            <Header />
            <Navigation></Navigation>
            <div>Home</div>
            <PrimeReactProvider>
                <Button label="Banana" icon />
            </PrimeReactProvider>
            <DS_Button state="outlined" leftIcon={<FaHome />}>Entrar</DS_Button>
            <br />
            <H1Typography>Olá Mundo</H1Typography>
        </>
    )
}
