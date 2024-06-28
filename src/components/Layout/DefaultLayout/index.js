import Header from "~/components/component/Header/Header";
import Footer from "~/components/component/Footer/Footer";
import Sidebar from "~/components/component/Sidebar/Sidebar";

function DefaultLayout({ children}) {
    return(
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                <div className="content">
                    { children }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout;