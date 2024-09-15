import NavLinks from "./nav-links"

function Sidenav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 w-[250px]">
            <div className="flex md:flex-col h-fit">
                <NavLinks />
            </div>
        </div>
    )
}

export default Sidenav