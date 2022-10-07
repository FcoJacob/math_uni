<script setup lang="ts">
import { ref } from "vue";
import ComponentNav from './components/ComponentNav/ComponentNav.vue';

const extendNav = ref(false);

const changeExtendNav = (value: boolean) => {
    extendNav.value = value;
}
</script>

<template>
    <ComponentNav :extend-nav="extendNav" @extend-nav="changeExtendNav" />
    <main class="h-full flex flex-col justify-center items-start bg-gray-300" :class="[
        extendNav
        ? 'w-[calc(100vw_-_20rem)] closed_nav'
        : 'w-[calc(100vw_-_4rem)] open_nav'
    ]">

    </main>
</template>

<style>
::-webkit-scrollbar {
    display: none;
}

.open_nav {
    animation: open_nav 0.4s linear;
}

.closed_nav {
    animation: closed_nav 0.4s linear;
}

@keyframes closed_nav {
    0% {
        width: calc(100vw - 20rem);
    }

    from {
        width: calc(100vw - 4rem);
    }
}

@keyframes open_nav {
    0% {
        width: calc(100vw - 4rem);
    }

    from {
        width: calc(100vw - 20rem);
    }
}
</style>
