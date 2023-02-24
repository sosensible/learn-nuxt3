<template>
  <NuxtLayout>
    <div v-if="error.statusCode === '404'" class="prose">
      <h1>404</h1>
      <p>I guess that page does not exist.</p>
    </div>
    <div class="prose" v-else>
      <h1>Bummer</h1>
      <p>It looks like something went wrong.</p>
      <p>Sorry about that.</p>
    </div>
    <div class="prose">
      <p>
        <strong>{{ error.message }}</strong>
      </p>
      <p>
        Go to the
        <a class="hover:cursor-pointer" @click="handleError">
          first lesson
        </a>
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
  });
}
</script>