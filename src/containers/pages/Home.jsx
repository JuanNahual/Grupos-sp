import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Header from "components/Home/Header"
import Section from "components/Home/Section"
import Feacture from "components/Home/Feacture"
import Seactionblog from "components/Home/Section_blog"

function Home(){
	return (
		<Layout>
			<Navbar/>
			<div className="pt-28">
			
			<Header/>
			<Feacture/>
			<Section/>
			<div className="pt-28">

			<Seactionblog/>
			</div>
			</div>
			<Footer/>
		</Layout>
	)
}
export default Home

