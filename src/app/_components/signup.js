import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import { signUp,getUser } from "@/api/user";
import { useAppStore } from "@/zustand/store";
import { IoMdPerson } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function SignUp({ visible, onClose }) {
  const {setToken, setUser} = useAppStore();
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignUp = async () => {
    try {
          const result = await signUp(formData);
          setToken(result.access_token);
          onClose();
          const user=await getUser()
          setUser(user);
        } catch (err) {
          console.error('Sign in failed:', err);
          setError('Invalid username or password.');
        }
  };

  return (
    <Modal isOpen={visible} placement="top-center" onClose={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
          <ModalBody>
            <Input
              value={formData.username}
              onChange={handleChange}
              name="username"
              endContent={
                <IoMdPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Username"
              placeholder="Enter your username"
              variant="bordered"
            />
            <Input
              value={formData.password}
              onChange={handleChange}
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
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={handleSignUp}>
              Sign up
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}