
import { PrimeReactProvider } from 'primereact/api';
import { H1Typography } from "../../DS/typography";
import { DS_Button, DS_Input } from "../../DS/components";
import { FaAt, FaLock } from "react-icons/fa";
import { TextPrimary } from "../../DS/typography/text-primary";

export function Home() {
    return (
        <>
            <PrimeReactProvider>
                <div className="w-screen overflow-hidden px-2 surface-50 h-screen py-2">
                    <H1Typography>LOGIN</H1Typography>
                    <div className="max-w-20rem col-12 flex flex-column mx-auto">
                        <div className="my-2">
                        <DS_Input
                            state="default"
                            label="E-mail"
                            iconPos="right"
                            placeholder="example@gmail.com"
                            icon={<FaAt />} ></DS_Input>
                        </div>
                        <div className="my-2">
                            <DS_Input
                                state="default"
                                label="Senha"
                                iconPos="right"
                                placeholder="******"
                                icon={<FaLock />} ></DS_Input>
                        </div>
                        <div className="mt-4">
                            <DS_Button
                                label="ENTRAR"
                                textAlignment="center"
                                severity="primary"></DS_Button>
                        </div>
                        <TextPrimary>OU</TextPrimary>
                        <div >
                            <DS_Button
                                label="CRIAR CONTA"
                                textAlignment="center"
                                severity="secondary"></DS_Button>
                        </div>
                    </div>
                </div>
            </PrimeReactProvider>
        </>
    )
}
