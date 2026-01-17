import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <p>Hellow world</p>
      <Button>Click me</Button>
    </QueryClientProvider>
  );
}

export default App;
