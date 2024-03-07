<script setup lang="ts">
    import { ref } from "vue";
    import { type Product, getProducts } from "@/model/products";  

    const products = ref([] as Product[])

    type CartItem = { 
        product: Product, 
        quantity: number 
    }

    const cart = ref([] as CartItem[])

    function addToCart(product: Product){
        const item = cart.value.find(item => item.product.id === product.id)
        if (item) {
            item.quantity++
        } else {
            cart.value.push({ product, quantity: 1 })
        }
    }

    products.value = getProducts()
</script>

<template>
    <div class = "product-list">
        <div v-for="product in products" :key="product.id" class="card">
            <div class="card-image">
                <img :src="product.thumbnail" :alt="product.title">
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ product.title }}</p>
                        <p class="subtitle is-6">{{ product.price }}</p>
                    </div>
                </div>
                <div class="content">
                    <p>${{ product.price }}</p>
                    <h3>{{ product.title }}</h3>
                    <p>{{ product.description }}</p>
                    <button @click="addToCart(product)" class="button is-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>

    <div class="flyout">
        <h1 class="title">
            The Cart
        </h1>
        <ul>
            <li v-for="item in cart" :key="item.product.id">
                <img :src="item.product.thumbnail" :alt="item.product.title" width="50">
                {{ item.product.title }} x {{ item.quantity }} = ${{ item.product.price * item.quantity}}
            </li>
        </ul>
        {{ cart.length }} items totalling ${{ cart.reduce((total, item) => total + item.product.price * item.quantity, 0) }}
    </div>
</template>

<style scoped>
        .product-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
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
        .flyout {
            position: fixed;
            top: 0;
            right: 0;
            width: 20rem;
            height: 100%;
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            box-shadow: -1px 0 5px 0 rgba(0, 0, 0, 0.2);
            z-index: 100;
            transform: translateX(80%);
            transition: transform 1s;
            padding: 1rem;
        }
        .flyout.open, .flyout:hover {
            transform: translateX(0);
        }
        .cart li {
            list-style: none;
            display: flex;

        }
</style>