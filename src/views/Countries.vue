<template>
    <b-table head-variant hover :items="items"></b-table>
</template>

<script>
export default {
    name: 'Countries',

    data: () => ({
        items: [
            { id: 1, country_code: 'AF', country_name: 'AFGHANISTAN' },
            { id: 2, country_code: 'AX', country_name: 'ALAND ISLANDS' },
            { id: 3, country_code: 'AL', country_name: 'ALBANIA' },
            { id: 4, country_code: 'DZ', country_name: 'ALGERIA' },
            { id: 5, country_code: 'AS', country_name: 'AMERICAN SAMOA' },
        ]
    }),

    methods: {

    },
}
</script>