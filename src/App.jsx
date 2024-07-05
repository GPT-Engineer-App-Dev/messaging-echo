import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessageSquare, Search, Settings, Phone, Video, MoreHorizontal } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Chats",
    to: "/",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    title: "Search",
    to: "/search",
    icon: <Search className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

export const chatActions = [
  {
    title: "Call",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    title: "Video Call",
    icon: <Video className="h-4 w-4" />,
  },
  {
    title: "More",
    icon: <MoreHorizontal className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;