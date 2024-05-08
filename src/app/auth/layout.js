import ImageWrapper from "@/Components/ImageWrapper/ImageWrapper";

export default function Layout({children}) {

    const navStyles = {
        width: '100%',
        padding: '16px 10vw'
    };

    return (
        <main>
            <nav style={navStyles}>
                <ImageWrapper size={45} />
            </nav>
            {children}
        </main>
    )
}