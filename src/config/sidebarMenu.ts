import { ReactComponent as DashboardIcon } from "assets/icons/home.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as NotificationIcon } from "assets/icons/notification.svg";

const sidebarMenu = [
  {
    title: "Dashboard",
    path: "/",
    icon: DashboardIcon,
  },
  {
    title: "Cart",
    path: "/cart",
    icon: CartIcon,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: NotificationIcon,
  },
];

export default sidebarMenu;
