import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import CityPage from "@/pages/CityPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/edmonton">
        {() => <CityPage city="Edmonton" />}
      </Route>
      <Route path="/calgary">
        {() => <CityPage city="Calgary" />}
      </Route>
      <Route path="/vancouver">
        {() => <CityPage city="Vancouver" />}
      </Route>
      <Route path="/ottawa">
        {() => <CityPage city="Ottawa" />}
      </Route>
      <Route path="/toronto">
        {() => <CityPage city="Toronto" />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;