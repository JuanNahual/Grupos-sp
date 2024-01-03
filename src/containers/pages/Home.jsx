import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Header from "components/Home/Header"
import Section from "components/Home/Section"
import Banner from "components/Home/Banner"


function Home(){
	return (
		<Layout>
			<Navbar/>
			
			
			
			<Header/>
			
			<Banner />
			
			<Section/>
			
			
			
			
		<Footer/>
		</Layout>
	)
}
export default Home;
