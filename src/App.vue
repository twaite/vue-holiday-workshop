<template>
  <dismissable-alert />
  <app-header />
  <router-view/>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import DismissableAlert from '@/components/DismissableAlert';

export default {
  components: {
    AppHeader,
    DismissableAlert
  }
}
</script>

