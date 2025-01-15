import { LoginForm } from "@/features/auth/components/login-form";
import useAuth from "@/features/auth/hooks/use-auth";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {getAppName} from "@/lib/config.ts";
import { useTranslation } from "react-i18next";


const ntlmAuth = import.meta.env.VITE_NTLM_AUTH;

export default function LoginPage() {
  const { t } = useTranslation();
  
  const { ntlmSignIn } = useAuth();

  useEffect(() => {

    if (ntlmAuth)
      ntlmSignIn();

  }, [])

  return (
    <>
      <Helmet>
        <title>{t("Login")} - {getAppName()}</title>
      </Helmet>
      {!ntlmAuth && <LoginForm />}
    </>
  );
}
