<template >
  <div v-if="!$auth.loading">
    <div>
      <img style="margin-left: auto;
  margin-right: auto;" :src="$auth.user.picture">
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>
