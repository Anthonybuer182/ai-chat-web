import React, { useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link } from "@nextui-org/react";
import { getUser, signIn } from "@/api/user";
import { useAppStore } from "@/zustand/store";
import { IoMdPerson } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function SignIn({ visible, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { setToken, setUser } = useAppStore();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignIn = async () => {
    try {
      const result = await signIn(username, password);
      await setToken(result.access_token);
      const user = await getUser();
      setUser(user);
      onClose();
    } catch (err) {
      console.error('Sign in failed:', err);
      setError(err.response?.data?.message || 'Invalid username or password.');
    }
  };

  return (
    <Modal isOpen={visible} placement="top-center" onClose={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">Sign in</ModalHeader>
          <ModalBody>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              endContent={
                <IoMdPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Username"
              placeholder="Enter your username"
              variant="bordered"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <IoEyeOff className="text-2xl text-default-400 cursor-pointer" />
                  ) : (
                    <IoEye className="text-2xl text-default-400 cursor-pointer" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              label="Password"
              placeholder="Enter your password"
              variant="bordered"
            />
            {error && (
              <div className="text-red-600 mt-2">{error}</div>
            )}
            <div className="flex py-2 px-1 justify-between">
              <Link color="primary" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={handleSignIn}>
              Sign in
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}