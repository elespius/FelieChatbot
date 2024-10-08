import { computed } from 'vue';
import { useRoute } from 'vue-router';

export function useAccountId() {
  const route = useRoute();

  return computed(() => {
    return route.params.account_id;
  });
}
