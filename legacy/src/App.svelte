<script>
    import { Router, Route, link } from "svelte-routing"
    import Register from "./routeComponents/Register.svelte"
    import Recover from "./routeComponents/Recover.svelte"
    import Signin from "./routeComponents/Signin.svelte"
    import Users from "./routeComponents/Users.svelte"
    import Settings from "./routeComponents/Settings.svelte"
    import Home from "./routeComponents/Home.svelte"
    import Profile from "./routeComponents/Profile.svelte"
    import { logout } from "./firebaseBackend"
    import { userDataStore } from "./stores/userDataStore"
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

<Router>
    <h1>Svelte Firebase Starter</h1>
    <!--
    {@debug $userDataStore}
-->
    {#if $userDataStore}
        {#if !$userDataStore.displayName && !$userDataStore.email}
            <p>Please complete your profile in Settings</p>
        {:else}
            <p>Logged in as {$userDataStore.displayName || $userDataStore.email}</p>
        {/if}
    {:else}
        <p>Not logged in</p>
    {/if}
    <div>
        <a href="/" use:link>Home</a>
        {#if !$userDataStore}
            <a href="/register" use:link>Register</a>
            <a href="/signin" use:link>Signin</a>
        {:else}
            <a href="{$userDataStore.username}" use:link>Profile</a>

            <a href="/settings" use:link>Settings</a>
            <button on:click="{logout}">Logout</button>
        {/if}
        <a href="/users" use:link>Users</a>

        <hr />

        <div>

            <Route path="register" component="{Register}" />
            <Route path="recover" component="{Recover}" />
            <Route path="signin" component="{Signin}" />
            <Route path="settings" component="{Settings}" />
            <Route path="users" component="{Users}" />
            <Route path=":username" component="{Profile}" />

            <Route path="/" component="{Home}" />
        </div>
    </div>
</Router>
