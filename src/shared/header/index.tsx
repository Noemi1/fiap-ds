import { Button } from "primereact/button";

export function Header() {


    const menuBar = (
        <>
            <Button icon="pi pi-bars" className="mr-2" text severity="contrast" size="small" />
        </>
    );


    const notification = (
        <>
            <Button icon="pi pi-bell" severity="secondary" rounded className="mr-2 ml-auto" text />
        </>
    );
    const user = (
        <>
            <img src="https://atlantis.primereact.org/layout/images/avatar/avatar-m-1.jpg" className="border-circle cursor-pointer w-3rem h-3rem" />
        </>
    )

    return (
        <>
            <header className="bg-black-alpha-60 p-2 flex justify-content-between py-3">
                {menuBar}
                {notification}
                {user}
            </header>
        </>
    )
}
