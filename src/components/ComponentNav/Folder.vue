<script setup lang="ts">
    import { ref } from 'vue'
    import Item from './Item.vue'

    export interface DataList {
        icon: string
        title: string
    }

    export interface Item {
        group: string
        title: string
    }

    export interface Props {
        extendNav: boolean
        dataHead: DataList
        itemsList: Item[]
        routeSelected: string
    }

    const props = withDefaults(defineProps<Props>(), {
        extendNav: false,
        dataHead: () => ({
            icon: '\\N',
            title: 'Números',
        }),
        itemsList: () => [
            {
                group: 'numbers',
                title: 'Números naturales',
            },
            {
                group: 'numbers',
                title: 'Números enteros',
            },
        ],
    })

    const emit = defineEmits(['taskSelected'])
    const openFolder = ref(true)
    const isVisited = ref(false)
    const taskSelected = (type: string) => {
        emit('taskSelected', type)
    }
</script>

<template>
    <button
        class="w-full flex justify-center items-center mt-2 border-b-2 border-solid border-white"
        aria-label="x"
        @click.prevent="openFolder = !openFolder">
        <img
            v-if="extendNav && !openFolder"
            class="w-6 h-6"
            :class="[extendNav ? 'transform rotate-0' : 'transform rotate-180']"
            src="../../assets/Icons/Navigation/folder-closed.svg"
            alt="open and closed navigation bar" />
        <img
            v-if="extendNav && openFolder"
            class="w-6 h-6"
            :class="[extendNav ? 'transform rotate-0' : 'transform rotate-180']"
            src="../../assets/Icons/Navigation/folder-open.svg"
            alt="open and closed navigation bar" />
        <div
            v-if="extendNav"
            class="w-8/12 h-10 flex justify-start items-center text-lg font-semibold ml-3">
            {{ dataHead.title }}
        </div>
        <div
            class="h-10 text-base font-bold flex justify-center items-center"
            :class="[extendNav ? 'w-2/12' : 'w-8/12']">
            <katex-element :expression="dataHead.icon" />
        </div>
    </button>
    <div
        v-if="extendNav && openFolder"
        class="w-full h-full flex flex-col justify-center items-start mt-2">
        <div
            v-for="(item, idx) in itemsList"
            :key="idx"
            class="flex justify-center items-center">
            <Item
                :group="item.group"
                :title="item.title"
                :target="routeSelected"
                @select-item="taskSelected" />
        </div>
    </div>
</template>

<style></style>
