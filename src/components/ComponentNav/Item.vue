<script setup lang="ts">
    const props = defineProps({
        group: String,
        title: String,
        target: String,
    })

    const emit = defineEmits(['selectItem'])

    const selectItem = (value: string | undefined) => {
        emit('selectItem', value)
    }
</script>

<template>
    <div
        class="flex justify-center items-center cursor-pointer"
        @click="selectItem(title)">
        <input
            :checked="target === title"
            class="w-4 h-4 m-2 cursor-pointer ml-3"
            type="radio"
            :name="group"
            value="naturales" />
        <label class="text-base ml-2 cursor-pointer">{{ title }}</label>
    </div>
</template>
