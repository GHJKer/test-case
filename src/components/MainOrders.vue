<script setup lang="ts">
import { ref, Ref, computed, onBeforeMount, onMounted } from "vue";
import CrossSvg from "./svg/CrossSvg.vue";
import CheckSvg from "./svg/CheckSvg.vue";
import MainDialogue from "./MainDialogue.vue";
import { useStore } from "../store/useStore";
import router from "../router";
import { deleteRequest, putRequest, requestBase } from "../use/useRequest";
import { Order } from "../types/general";

let store = useStore();
let isAdmin = computed(() => store.profileData?.role === "ADMIN");
let orders: Ref<Order[]> = ref([]);
let isDialogueOpen = ref(false);

const deleteOrderHandler = async (id: number, name: string) => {
  await deleteRequest(id);

  orders.value = await requestBase(`events?name=${name}`);
  store.addProfileOrders(orders.value);
};

const changeHandler = async (order: Order) => {
  let localOrder = {
    id: order.id,
    name: order.name,
    address: order.address,
    date: order.date,
    status: "Выполнен",
    comment: order.comment,
  };
  await putRequest(order.id, localOrder);

  orders.value = await requestBase(`events?name=${order.name}`);
  store.addProfileOrders(orders.value);
};

onBeforeMount(() => {
  if (!store.isLogged) {
    router.push({ path: "/auth" });
  }
});

onMounted(() => {
  orders.value = store.profileOrders ?? [];
});
</script>

<template>
  <div :class="$style['main-container']">
    <table>
      <t-body :class="$style['main-table']">
        <tr>
          <th :class="$style['table-th']">
            <span>№</span>
          </th>
          <th :class="$style['table-th']">
            <span>Имя клиента</span>
          </th>
          <th :class="$style['table-th']">
            <span>Адрес</span>
          </th>
          <th :class="$style['table-th']">
            <span>Дата заказа</span>
          </th>
          <th :class="$style['table-th']">
            <span>Статус</span>
          </th>
          <th :class="$style['table-th']">
            <span>Комментарий</span>
          </th>
        </tr>
        <tr v-for="item in orders" :key="item.id">
          <td
            :class="[
              $style['table-td'],
              { [$style['done']]: item.status === 'Выполнен' },
            ]"
          >
            <span>
              {{ item.id }}
            </span>
          </td>
          <td
            :class="[
              $style['table-td'],
              { [$style['done']]: item.status === 'Выполнен' },
            ]"
          >
            <span>
              {{ item.name }}
            </span>
          </td>
          <td
            :class="[
              $style['table-td'],
              { [$style['done']]: item.status === 'Выполнен' },
            ]"
          >
            <span>
              {{ item.address }}
            </span>
          </td>
          <td
            :class="[
              $style['table-td'],
              { [$style['done']]: item.status === 'Выполнен' },
            ]"
          >
            <span>
              {{ item.date }}
            </span>
          </td>
          <td
            :class="[
              $style['table-td'],
              { [$style['done']]: item.status === 'Выполнен' },
            ]"
          >
            <span>
              {{ item.status }}
            </span>
          </td>
          <td
            :class="[
              $style['table-td'],
              { [$style['done']]: item.status === 'Выполнен' },
            ]"
          >
            <span>
              {{ item.comment }}
            </span>
          </td>
          <td v-if="isAdmin">
            <span>
              <div :class="$style['svg-group']">
                <div
                  v-if="item.status === 'Новый'"
                  :class="$style['svg-container']"
                  @click="changeHandler(item)"
                >
                  <CheckSvg :class="$style['check-svg']" />
                </div>
                <div
                  :class="$style['svg-container']"
                  @click="isDialogueOpen = true"
                >
                  <CrossSvg :class="$style['cross-svg']" />
                </div>
              </div>
            </span>
          </td>
          <MainDialogue
            v-if="isDialogueOpen"
            @ok="deleteOrderHandler(item.id, item.name)"
            @cancel="isDialogueOpen = false"
          />
        </tr>
      </t-body>
    </table>
  </div>
</template>
<style module>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 70px 20px 10px;
  min-width: 400px;
  min-height: 120px;
  border-radius: 10px;
}
.main-table {
  border-collapse: collapse;
}
.table-td,
.table-th {
  border: 1px solid rgb(var(--color_black));
  padding: 10px 23px;
  text-align: center;
}

.table-td {
  width: 70px;
}

.svg-group {
  display: flex;
  gap: 5px;
  padding-left: 3px;
  opacity: 1;
}

.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
}

.check-svg {
  color: rgb(var(--color_black));
  width: 15px;
}

.cross-svg {
  color: rgb(var(--color_black));
  width: 15px;
  transform: rotate(45deg);
}

.done {
  opacity: 0.25;
}
</style>
