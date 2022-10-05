<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    export interface Props {
        msg?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        msg: ''
    })

    const extendNav = ref(false);
</script>

<template>
    <nav
        data-testid="open-closed-nav"
        class="
            min-h-screen
            flex flex-col justify-start items-center 
            bg-gradient-to-t from-purple-900 to-purple-700
            text-white
            absolute
            top-0
            right-0
        "
        :class="[
            extendNav
            ? 'w-80 closed_nav'
            : 'w-16 open_nav'
        ]"
    >
        <div
            class="w-full flex justify-end items-center"
        >
            <button
                class="w-10 h-10 rounded-lg shadow-md bg-orange-500 mt-3 mr-3 text-2xl font-bold flex justify-center items-center"
                aria-label="x"
                @click.prevent="extendNav = !extendNav"
            >
                {{ extendNav ? '&gt;' : '&lt;'}}    
            </button>
        </div>
        {{ msg }}
    </nav>
</template>

<style scoped>
    .open_nav {
        animation: open_nav 1s linear;
    }

    .closed_nav {
        animation: closed_nav 1s linear;
    }

    @keyframes open_nav {
        0% {
            width: 4rem;
        }
        from {
            width: 20rem;
        }
    }

    @keyframes closed_nav {
        0% {
            width: 20rem;
        }
        from {
            width: 4rem;
        }
    }
</style>