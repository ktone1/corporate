<template>
  <v-navigation-drawer
    :value="value"
    @input="(v) => $emit('input', v)"
    fixed
    app
  >
    <v-list dense nav>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
        router
        exact
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { DrawerItem } from '~/types/components';

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    items: {
      type: Array as PropType<DrawerItem[]>,
      required: true,
    },
  },
  model: {
    prop: 'value',
    event: 'input',
  },
});
</script>
