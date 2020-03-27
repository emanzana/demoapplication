<template>
    <b-table head-variant hover :items="items"></b-table>
</template>

<script>
export default {
    name: 'Capextypes',

    data: () => ({
        items: [
            { id: 1, name: 'BRONCE' },
            { id: 2, name: 'SILVER' },
            { id: 3, name: 'GOLD' },
            { id: 4, name: 'PLATINUM' },
            { id: 5, name: 'AWARDED' },
            { id: 6, name: 'EXECUTED' },
            { id: 7, name: 'N.A' },
        ]
    }),

    methods: {

    },
}
</script>