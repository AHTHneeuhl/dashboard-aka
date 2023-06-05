import { ReactComponent as ReportIcon } from "assets/icons/reports.svg";
import { ReactComponent as SettingIcon } from "assets/icons/settings.svg";
import { ReactComponent as WorkspacesIcon } from "assets/icons/workspaces.svg";

const sidebarMenu = [
  {
    title: "Reports",
    path: "/reports",
    icon: ReportIcon,
  },
  {
    title: "Workspaces",
    path: "/",
    icon: WorkspacesIcon,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: SettingIcon,
  },
];

export default sidebarMenu;
