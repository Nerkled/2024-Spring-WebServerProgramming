<script setup lang="ts">
import type { Product } from '@/model/products';


const props = defineProps<{
    product: Product
}>()

const emit = defineEmits<{
    addToCart: [product: Product]
}>()


</script>

<template>
    <div class="card">
            <div class="card-image">
                <img :src="product.thumbnail" :alt="product.title">
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ product.title }}</p>
                        
                    </div>
                </div>
                <div class="content">
                    <p>${{ product.price }}</p>
                    <h3>{{ product.title }}</h3>
                    <p>{{ product.description }}</p>
                    <button @click="emit('addToCart', product)" class="button is-primary">Add to Cart</button>
                </div>
            </div>
        </div>
</template>

<style scoped>
    .card {
            flex-basis: 15rem;
            flex-grow: 1;
            margin: .5rem;
        }
        h3 {
            font-weight: bold;
        }
        .price {
            font-weight: bold;
            font-size: xx-large;
            color: bisque;
            float: right;
        }
        .cart li {
            list-style: none;
            display: flex;

        }

</style>