"use client"

import { ProgressProvider } from '@bprogress/next/app';
import { Bounce, Slide, ToastContainer } from 'react-toastify';

import { useAtom } from "jotai";
import { darkMode, loggedIn } from "@/storage/atom";
import { useEffect } from "react";
import axios from 'axios';

type Props = {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {

  const [themeDark] = useAtom(darkMode);
  const [userLogged, setUserLogged] = useAtom(loggedIn);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("dark", "light");
    html.classList.add(themeDark ? "dark" : "light");
  }, [themeDark]);

  useEffect(() => {
    axios.get("/api/auth/validate", {
      withCredentials: true
    })
    .then((res) => {
      const { loggedIn } = res.data;

      if(loggedIn) return setUserLogged(true)

      return setUserLogged(false)
    })
    .catch((err) => {
      setUserLogged(false)
    })
  }, [userLogged])

  return (
    <div>
      <ProgressProvider
        height="2px"
        color="#ec003f"
        options={{ showSpinner: true }}
        shallowRouting
      />
      <ToastContainer
        transition={Slide}
        draggable={false}
        theme="dark"
        position="bottom-right"
      />
      {children}
    </div>
  )
}

export default Providers;