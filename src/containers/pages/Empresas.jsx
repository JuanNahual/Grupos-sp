import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Empresas(){
	return (
		<Layout>
			<Navbar/>
			<div className="pt-28">
			Empresas
			
			</div>
			<Footer/>
		</Layout>
	)
}
export default Empresas

