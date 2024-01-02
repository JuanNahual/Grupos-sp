import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Header from "components/Home/Header"
import Section from "components/Home/Section"


function Home(){
	return (
		<Layout>
			<Navbar/>
			<div className="pt-28">
			
			<Header/>
			
			<Section/>
			<div className="pt-28">

			
			</div>
			</div>
			<Footer/>
		</Layout>
	)
}
export default Home

