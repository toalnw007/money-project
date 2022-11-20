<template>
    <div class="background-cover"></div>
    <div class="flex">
        <nav class="side-nav">

            <div class="pt-4 mb-4">
                <div class="flex items-center">
                    <a href="" class="intro-x flex items-center">
                        <img
                            alt="Rocketman Tailwind HTML Admin Template"
                            class="side-nav__header__logo"
                            src="@/assets/images/authentication/logo.svg"
                        />
                        <span class="side-nav__header__text text-white pt-0.5 text-lg ml-2.5">
                            Money Project
                        </span>
                    </a>
                </div>
            </div>
            <div class="scrollable">
                <ul class="scrollable__content">
                    <li class="side-nav__devider text-slate-400 mb-4">START MENU</li>
                    <li>
                        <router-link class="side-menu" to="/">
                            <iconf icon="fa-solid fa-dashboard" class="side-menu__icon"/>
                            <div class="side-menu__title">Dashboard</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu" to="/filemanager">
                            <iconf icon="fa-solid fa-file" class="side-menu__icon"/>
                            <div class="side-menu__title">File Manager</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu" to="/courselevelup">
                             <iconf icon="fa-solid fa-book" class="side-menu__icon"/>
                            <div class="side-menu__title">Course Level Up</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu" to="/airobottrade">
                             <iconf icon="fa-solid fa-robot" class="side-menu__icon"/>
                            <div class="side-menu__title">AI&Robot Trade</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu" to="/partner">
                            <iconf icon="fa-solid fa-user-friends" class="side-menu__icon"/>
                            <div class="side-menu__title">Partner</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu" to="/saminar">
                            <iconf icon="fa-solid fa-calendar" class="side-menu__icon"/>
                            <div class="side-menu__title">Saminar</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu" to="/timeline">
                            <iconf icon="fa-solid fa-timeline" class="side-menu__icon"/>
                            <div class="side-menu__title">Timeline</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu" to="/faq">
                            <iconf icon="fa-solid fa-chart-area" class="side-menu__icon"/>
                            <div class="side-menu__title">FAQ</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-menu" to="/">
                            <iconf icon="fa-solid fa-contact-book" class="side-menu__icon"/>
                            <div class="side-menu__title">Contact US</div>
                        </router-link>
                    </li>
                    <li class="side-nav__devider text-slate-400 mb-4">AUTH MENU</li>
                    <li>
                        <a class="side-menu" href="/login">
                            <iconf icon="fa-solid fa-unlock" class="side-menu__icon"/>
                            <div class="side-menu__title">Login</div>
                        </a>
                    </li>
                    <li>
                        <a class="side-menu" href="/register">
                            <iconf icon="fa-solid fa-book-atlas" class="side-menu__icon"/>
                            <div class="side-menu__title">Register</div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>


        <div class="wrapper">
            <TopBar />
            <div class="content">
                <router-view />
            </div>
        </div>
    </div>
</template>


<script setup>
    import TopBar from "@/components/top-bar/Main.vue";

</script>