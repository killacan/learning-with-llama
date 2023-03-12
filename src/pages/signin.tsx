

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import  NextAuth from "../pages/api/auth/[...nextauth]";


const SignIn = () => {
    // const { data: sessionData } = useSession();

    return (
        <>
            <h2>Sign In</h2>
        </>
    );
}

export default SignIn;

