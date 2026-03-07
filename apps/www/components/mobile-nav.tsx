"use client"

import React from "react";
import {
  History,
  Home, LanguagesIcon,
  LucideIcon,
  MapIcon,
  NotebookPen,
  ScrollText,
  Sun,
  User
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/ui/components/ui/drawer";
import { Container } from "@repo/ui/components/ui/container";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";
import { Logo } from "@repo/ui/components/logo";
import { siteConfig } from "@repo/data/site";
import { routes } from "~/lib/routes";

interface Navlink {
  label: string;
  route?: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const navlinks: Navlink[] = [
  { label: "About", route: routes.about, icon: User },
  { label: "Contact", route: routes.contact, icon: NotebookPen },
  { label: "Projects", route: routes.projects, icon: History },
  { label: "Resume", route: siteConfig.resumeUrl, icon: ScrollText },
  { label: "Theme", icon: Sun, onClick: () => {} },
  { label: "Language", icon: LanguagesIcon, onClick: () => {} },
];

interface MobileLinkButtonProps {
  label: string;
  route?: string;
  onClick?: () => void;
  Icon: LucideIcon;
}

const MobileLinkButton: React.FC<MobileLinkButtonProps> = ({
  label,
  route = "#",
  onClick = () => {},
  Icon,
}) => {
  if (!route || route === "#") {
    return (
      <button
        type="button"
        onClick={onClick}
        className="flex h-16 w-full flex-col items-center justify-center gap-1"
      >
        <Icon className="h-5 w-5" />
        <p className="text-sm">{label}</p>
      </button>
    );
  }

  return (
    <Link
      href={route}
      onClick={onClick}
      className="flex h-16 w-full flex-col items-center justify-center gap-1"
    >
      <Icon className="h-5 w-5" />
      <p className="text-sm">{label}</p>
    </Link>
  );
};

export const MobileNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-40 block h-16 w-full md:hidden bg-background">
      <Container className="flex items-center justify-between h-full">
        <Logo />
        <Drawer>
          <DrawerTrigger>
            <Button size="icon" variant="ghost">
              <MapIcon className={"h-4 w-4"} />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Navigator</DrawerTitle>
              <DrawerDescription>
                Click and it will automatically redirect.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid grid-cols-3 gap-4">
              {navlinks.map(({ label, route, icon, onClick }) => (
                <DrawerClose key={label}>
                  <MobileLinkButton
                    label={label}
                    route={route}
                    onClick={onClick}
                    Icon={icon}
                  />
                </DrawerClose>
              ))}
            </div>
            <DrawerFooter />
          </DrawerContent>
        </Drawer>
      </Container>
    </nav>
  );
};
