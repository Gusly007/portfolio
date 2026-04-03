
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
const MainLayout = ({ children }) =>(
    <div className="site-shell">
        <Header/>
        <main className="site-main">
            {children}
        </main>
        <Footer/>
    </div>
)
export default MainLayout;