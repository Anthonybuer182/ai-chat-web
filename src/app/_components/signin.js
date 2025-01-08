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
  const [rememberMe, setRememberMe] = useState(false);
  const { setToken, setUser } = useAppStore();

  useEffect(() => {
    try {
      const savedCredentials = localStorage.getItem('userCredentials');
      if (savedCredentials) {
        const { username: savedUsername, rememberMe: savedRememberMe } = JSON.parse(savedCredentials);
        setUsername(savedUsername);
        setRememberMe(savedRememberMe);
      }
    } catch (err) {
      console.error('Failed to load saved credentials:', err);
    }
  }, []);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleRememberMe = (checked) => {
    setRememberMe(checked);
    if (!checked) {
      localStorage.removeItem('userCredentials');
    }
  };

  const handleSignIn = async () => {
    try {
      const result = await signIn(username, password);
      await setToken(result.access_token);
      const user = await getUser();
      setUser(user);

      if (rememberMe) {
        localStorage.setItem('userCredentials', JSON.stringify({
          username,
          rememberMe
        }));
      } else {
        localStorage.removeItem('userCredentials');
      }

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
              <Checkbox
                isSelected={rememberMe}
                onValueChange={handleRememberMe}
                classNames={{
                  label: "text-small",
                }}
              >
                Remember me
              </Checkbox>
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