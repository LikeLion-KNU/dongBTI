import { create } from "zustand";

type UserProps = {
    name: string;
    department: string;
};

type UserAction = {
    setName: (name: UserProps["name"]) => void;
    setDepartment: (department: UserProps["department"]) => void;
};

export const useUserInfo = create<UserProps & UserAction>()((set) => ({
    name: "",
    department: "",
    setName: (name) => set(() => ({ name: name })),
    setDepartment: (department) => set(() => ({ department: department })),
}));
