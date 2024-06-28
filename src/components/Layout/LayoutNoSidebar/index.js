import Header from "~/components/component/Header/Header";
import Footer from "~/components/component/Footer/Footer";

function LayoutNoSidebar({ children }) {
    return (
        <div>
            <Header/>

            <div className="container">
                <div className="content">
                    { children }
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default LayoutNoSidebar;