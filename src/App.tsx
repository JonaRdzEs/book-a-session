import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sessions from "./pages/Sessions";
import Session from "./pages/Session";

function App() {

  return (
    <div className="mx-auto w-full max-w-7xl min-h-dvh border-2 py-11 px-2">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/sessions" component={Sessions} />
          <Route path="/sessions/:id">
            {({ id }) => <Session id={id} />}
          </Route>
          <Route path="/upcoming-sessions">
            <h1>Upcoming sessions</h1>
          </Route>
          <Route path="/my-sessions">
            my sessions
          </Route>
          <Route>404: No such page!</Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
