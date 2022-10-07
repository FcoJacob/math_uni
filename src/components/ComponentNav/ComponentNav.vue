<script setup lang="ts">
    import { ref } from 'vue'
    import Folder from './Folder.vue'

    export interface Props {
        extendNav: boolean
    }

    const props = withDefaults(defineProps<Props>(), {
        extendNav: false,
    })

    const emit = defineEmits(['extendNav'])

    const folders = ref([
        {
            dataHead: {
                icon: '\\N',
                title: 'Números',
            },
            itemsList: [
                {
                    group: 'numbers',
                    title: 'Números naturales',
                },
                {
                    group: 'numbers',
                    title: 'Números enteros',
                },
                {
                    group: 'numbers',
                    title: 'Números racionales',
                },
                {
                    group: 'numbers',
                    title: 'Números reales',
                },
                {
                    group: 'numbers',
                    title: 'Expresiones numéricas',
                },
            ],
        },
    ])

    const routeTarget = ref('')

    const changeRoute = (routeName: string) => {
        routeTarget.value = routeName
    }
</script>

<template>
    <nav
        data-testid="open-closed-nav"
        class="min-h-screen flex flex-col justify-start items-center bg-gradient-to-t from-purple-900 to-purple-700 text-white fixed top-0 right-0"
        :class="[extendNav ? 'w-80 open_nav' : 'w-16 closed_nav']">
        <div class="w-full flex justify-end items-center">
            <button
                class="w-8 h-8 rounded-md shadow-md bg-orange-500 mt-3 mr-3 text-2xl font-bold flex justify-center items-center"
                aria-label="x"
                @click.prevent="emit('extendNav', !extendNav)">
                <img
                    class="w-4 h-4"
                    :class="[
                        extendNav
                            ? 'transform rotate-0'
                            : 'transform rotate-180',
                    ]"
                    src="../../assets/Icons/Navigation/chevron.svg"
                    alt="open and closed navigation bar" />
            </button>
        </div>
        <template
            class="mt-4"
            v-for="(fold, ref) in folders"
            :key="ref">
            <Folder
                :extend-nav="extendNav"
                :data-head="fold.dataHead"
                :items-list="fold.itemsList"
                :route-selected="routeTarget"
                @task-selected="changeRoute" />
        </template>
    </nav>
</template>

<style scoped>
    .open_nav {
        animation: open_nav 0.4s linear;
    }

    .closed_nav {
        animation: closed_nav 0.4s linear;
    }

    @keyframes open_nav {
        0% {
            width: 20rem;
        }

        from {
            width: 4rem;
        }
    }

    @keyframes closed_nav {
        0% {
            width: 4rem;
        }

        from {
            width: 20rem;
        }
    }
</style>
