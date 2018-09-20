<template>
    <div class="crayon">
        <ul class="crayonsList">
            <li v-for="crayon in crayons" class="crayonsItem">
                {{ crayon.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            crayons: [
                { name: 'red', color: '#800000' },
                { name: 'orange', color: '#DD7013' },
                { name: 'yellow', color: '#C9C71A' },
                { name: 'green', color: '#18981D' },
                { name: 'tiffany', color: '#19A79B' },
                { name: 'blue', color: '#1D2089' },
                { name: 'purple', color: '#5C2E9B' },
                { name: 'pink', color: '#930192' },
                { name: 'gray', color: '#B18D73' },
                { name: 'brown', color: '#5b3f33' },
                { name: 'black', color: '#000000' },
                { name: 'sliver', color: '#aaaaaa' },
                { name: 'white', color: '#ffffff' }
            ]
        };
    }
}
</script>

<style>
.crayonsList {
    list-style: none;
    display: grid;
    grid-column: repeat(13, 1fr);
    font-size: 2rem;
}
.crayonsItem {
    display: block;
    width: 30px;
}
</style>
