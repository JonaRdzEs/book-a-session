import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sessions from "./pages/Sessions";
import Session from "./pages/Session";
import MySessions from "./pages/MySessions";
import UpcomingSessions from "./pages/UpcomingSessions";

function App() {

  return (
    <div className="container mx-auto min-h-dvh py-11 px-4 sm:px-10">
      <Header />
      <main className="mt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/sessions" component={Sessions} />
          <Route path="/sessions/:id">
            {({ id }) => <Session id={id} />}
          </Route>
          <Route path="/upcoming-sessions" component={UpcomingSessions}/>
          <Route path="/my-sessions" component={MySessions}/>
          <Route>404: No such page!</Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
