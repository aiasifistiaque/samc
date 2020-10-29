import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import './style/style.css';
import Footer from './components/Footer';
import HistoryPage from './pages/HistoryPage';
import TeamPage from './pages/TeamPage';
import DonationPage from './pages/DonationPage';
import PayDonationPage from './pages/PayDonationPage';
import CheckoutPage from './pages/CheckoutPage';
import AfterPayment from './pages/AfterPayment';
import Whoarewe from './pages/Whoarewe';
import WhoareweTwo from './pages/WhoareweTwo';
import Whoarewethree from './pages/Whowearethree';
import NewHome from './pages/NewHome';
import Header from './components/header/Header';
import HeaderFixed from './components/header/HeaderFixed';
import ProjectWac from './pages/ProjectWac';
import ProjectEow from './pages/ProjectEow';
import ProjectNss from './pages/ProjectNss';
import ProjectPage from './pages/ProjectPage';
import CovidResponsePage from './pages/CovidResponsePage';

function App() {
	return (
		<BrowserRouter>
			<main style={{ minHeight: '100vh', backgroundColor: 'whitesmoke' }}>
				<a href='/donate' className='donate-fab'>
					<p>D</p>
					<p>O</p>
					<p>N</p>
					<p>A</p>
					<p>T</p>
					<p>E</p>
				</a>
				<Switch>
					<Route path='/' exact>
						<Header />
						<NewHome />
					</Route>
					<Route path='/about'>
						<Header />
						<About />
					</Route>
					<Route path='/history'>
						<Header />
						<HistoryPage />
					</Route>
					<Route path='/team'>
						<Header />
						<TeamPage />
					</Route>
					<Route path='/donate'>
						<Header />
						<DonationPage />
					</Route>
					<Route path='/checkout'>
						<HeaderFixed />
						<PayDonationPage />
					</Route>
					<Route path='/paydonation/:id'>
						<HeaderFixed />
						<CheckoutPage />
					</Route>
					<Route path='/paydonation/:id/:transaction'>
						<HeaderFixed />
						<AfterPayment />
					</Route>
					<Route path='/whoarewe'>
						<Header />
						<Whoarewe />
					</Route>
					<Route path='/projects'>
						<Header />
						<ProjectPage />
					</Route>
					<Route path='/whoarewetwo'>
						<Header />
						<WhoareweTwo />
					</Route>
					<Route path='/whoarewethree'>
						<Header />
						<Whoarewethree />
					</Route>
					<Route path='/project_women_and_children'>
						<HeaderFixed />
						<ProjectWac />
					</Route>
					<Route path='/project_nursing_school_and_scholarship'>
						<HeaderFixed />
						<ProjectNss />
					</Route>
					<Route path='/project_empowerment_of_women'>
						<HeaderFixed />
						<ProjectEow />
					</Route>
					<Route path='/covid19_situation_at_samc'>
						<HeaderFixed />
						<CovidResponsePage />
					</Route>
				</Switch>
			</main>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
