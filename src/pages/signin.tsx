

import { NextPage } from "next";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn, useSession } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import  NextAuth from "../pages/api/auth/[...nextauth]";


const SignIn = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    // const { data: sessionData } = useSession();

    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    );
}

export default SignIn;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, NextAuth);
    
    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
      return { redirect: { destination: "/" } };
    }
  
    const providers = await getProviders();
    
    return {
      props: { providers: providers ?? [] },
    }
  }