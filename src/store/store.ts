import { create } from "zustand";

type UserProps = {
    name: string;
    major: string;
};

type UserAction = {
    setName: (name: UserProps["name"]) => void;
    setMajor: (major: UserProps["major"]) => void;
};

export const useUserInfo = create<UserProps & UserAction>()((set) => ({
    name: "",
    major: "",
    setName: (name) => set(() => ({ name: name })),
    setMajor: (major) => set(() => ({ major: major })),
}));
