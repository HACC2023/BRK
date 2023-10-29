import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { GetServerSideProps } from "next";
import NavBar from "~/Components/NavBar";
import { SignIn } from "@clerk/nextjs";

import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { userId } = getAuth(ctx.req);

  if (!userId) {
    // handle user is not logged in.
  }

  // Load any data your application needs for the page using the userId
  return { props: { ...buildClerkProps(ctx.req), userId } };
};

export default function Signin(props: any) {
  return (
    <>
      <Head>
        <title>HPU Center for Marine Debris Research</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar userId={props.userId} />
      <div className="flex justify-center pt-[20rem]">
        <SignIn />
      </div>
    </>
  )
}