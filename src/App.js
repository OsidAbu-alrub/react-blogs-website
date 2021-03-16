import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewBlog from "./components/NewBlog";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar></Navbar>
				<div className="content">
					<Switch>
						<Route path="/" exact>
							<Home></Home>
						</Route>
						<Route path="/new-blog" exact>
							<NewBlog></NewBlog>
						</Route>
						<Route path="/blogs/:id" exact>
							<BlogDetails></BlogDetails>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
