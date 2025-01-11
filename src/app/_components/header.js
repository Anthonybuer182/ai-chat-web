'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import SignInModal from "./signin";
import SignUpModal from "./signup";
import { useAppStore } from "@/zustand/store";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Header() {
  const { tabNow, setTab, tabs, user, clearUser } = useAppStore();
  const [isSignInVisible, setSignInVisible] = useState(false);
  const [isSignUpVisible, setSignUpVisible] = useState(false);

  const openSignInModal = () => setSignInVisible(true);
  const closeSignInModal = () => setSignInVisible(false);

  const openSignUpModal = () => setSignUpVisible(true);
  const closeSignUpModal = () => setSignUpVisible(false);
  
  const handleTabClick = (tabNow) => {
    setTab(tabNow); // 设置当前选中的 tab
  };

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {Object.entries(tabs).map(([tab, icon]) => (
            <NavbarItem key={tab}>
              <Link onPress={() => handleTabClick(tab)} className={`px-10 cursor-pointer ${tabNow === tab ? "text-primary" : "text-foreground"}`}>
                {tab}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        
        <NavbarContent justify="end">
          {!user.username ? (
            <>
              <NavbarItem className="hidden lg:flex">
                <Button auto flat onPress={openSignInModal}>
                  Sign In
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button auto color="primary" onPress={openSignUpModal}>
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          ) : (
            // If user is logged in, show Avatar and Dropdown menu
            <NavbarItem>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name={user.username}
                    size="sm"
                    src={user.avatar}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="username">{user.username}</DropdownItem>
                  <DropdownItem key="settings">Settings</DropdownItem>
                  <DropdownItem key="feedback">Feedback</DropdownItem>
                  <DropdownItem key="logout" color="danger" onPress={() => {
                    clearUser();
                  }}>Log Out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          )}
        </NavbarContent>
      </Navbar>

      <SignInModal visible={isSignInVisible} onClose={closeSignInModal} />
      <SignUpModal visible={isSignUpVisible} onClose={closeSignUpModal} />
    </>
  );
}
