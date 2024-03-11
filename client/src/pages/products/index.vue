<script setup lang="ts">
    import { ref, computed } from "vue";
    import { type Product, getProducts } from "@/model/products";  
    import ProductCard from "@/components/ProductCard.vue";
import FlyOut from "@/components/FlyOut.vue";

    const products = ref([] as Product[])

    products.value = getProducts()

    type CartItem = { 
        product: Product, 
        quantity: number 
    }

    const cart = ref([] as CartItem[])

    function addToCart(product: Product){
                    //find is a function that takes a function as an argument
        const item = cart.value.find(item => item.product.id === product.id)

        if (item) {
            item.quantity++
        } else {
            cart.value.push({ product, quantity: 1 })
        }
    }
                        //have to do .value for the JS object
    const total = computed(() => cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0))
    /*
    const addToCart2 = (product: Product) => {
                    //find is a function that takes a function as an argument
        const item = cart.value.find(item => item.product.id === product.id)

        if (item) {
            item.quantity++
        } else {
            cart.value.push({ product, quantity: 1 })
        }
    }*/ //arrow function one of the two ways to define a function in javascript

    
</script>

<template>
    <div class = "product-list">
        <ProductCard v-for="product in products" 
        :key="product.id" :product="product" @addToCart="addToCart"/>
    </div>

    <FlyOut :isOpen="false">
        <h1 class="title">
            The Cart
        </h1>
        <ul>
            <li v-for="item in cart" :key="item.product.id">
                <img :src="item.product.thumbnail" :alt="item.product.title" width="50">
                {{ item.product.title }} x {{ item.quantity }} = ${{ item.product.price * item.quantity}}
            </li>
        </ul>                                
        {{ cart.length }} items totalling ${{ total }}
    </FlyOut>
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
        .cart li {
            list-style: none;
            display: flex;

        }
</style>