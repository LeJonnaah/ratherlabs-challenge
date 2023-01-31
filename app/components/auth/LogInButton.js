import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginInButton () {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    return (
        <>
            {!session && <>
                Not signed in <br />
                <button onClick={() => signIn("google")}>Sign in</button>
            </>}
            {session && <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>}
        </>
    )
}