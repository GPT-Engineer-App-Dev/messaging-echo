import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, MessageCircle } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[300px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
          <MobileSidebar />
          <div className="flex flex-1 items-center gap-4">
            <UserAvatar />
            <div>
              <h2 className="text-lg font-semibold">Chat Name</h2>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>
          <ChatActions />
        </header>
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <MessageCircle className="h-6 w-6" />
          <span>Telegram Clone</span>
        </NavLink>
      </div>
      <div className="px-6 py-2">
        <Input placeholder="Search chats..." />
      </div>
      <nav className="flex-1 overflow-auto px-4">
        <ChatList />
      </nav>
      <div className="border-t p-4">
        <UserMenu />
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
      <nav className="flex flex-col gap-4">
        <div className="flex items-center gap-2 border-b pb-4">
          <MessageCircle className="h-6 w-6" />
          <span className="font-semibold">Telegram Clone</span>
        </div>
        <Input placeholder="Search chats..." />
        <ChatList />
      </nav>
    </SheetContent>
  </Sheet>
);

const ChatList = () => (
  <div className="space-y-2 py-4">
    {[...Array(10)].map((_, i) => (
      <NavLink
        key={i}
        to={`/chat/${i + 1}`}
        className={({ isActive }) =>
          cn(
            "flex items-center gap-4 rounded-lg px-4 py-2 transition-colors hover:bg-accent",
            isActive && "bg-accent"
          )
        }
      >
        <UserAvatar />
        <div className="flex-1 overflow-hidden">
          <p className="truncate font-medium">User {i + 1}</p>
          <p className="truncate text-sm text-muted-foreground">
            Last message preview...
          </p>
        </div>
      </NavLink>
    ))}
  </div>
);

const UserAvatar = () => (
  <div className="relative">
    <div className="h-10 w-10 rounded-full bg-muted" />
    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500" />
  </div>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="w-full justify-start gap-2">
        <UserAvatar />
        <span>User Name</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-[200px]">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Log out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const ChatActions = () => (
  <div className="flex items-center gap-2">
    {navItems.map((item) => (
      <Button key={item.title} size="icon" variant="ghost">
        {item.icon}
        <span className="sr-only">{item.title}</span>
      </Button>
    ))}
  </div>
);

export default Layout;