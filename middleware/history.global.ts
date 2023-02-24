export default defineNuxtRouteMiddleware((to, from) => {
  const navigatonHistory = useLocalStorage('history', []);
  navigatonHistory.value.push(to.path);
})
