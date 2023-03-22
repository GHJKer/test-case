<script setup lang="ts">
import CrossSvg from "./svg/CrossSvg.vue";
import CheckSvg from "./svg/CheckSvg.vue";

let leaders = [
  {
    num: 1,
    name: "Den",
    address: "Ленина 9",
    date: "9 мая",
    status: "готово",
    comment: "Не опаздывать",
  },
  {
    num: 2,
    name: "Oleg",
    address: "Пушкина 2",
    date: "1 апреля",
    status: "Новый",
    comment: "Не кантовать",
  },
];
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
        <tr v-for="item in leaders">
          <td :class="$style['table-td']">
            <span>
              {{ item.num }}
            </span>
          </td>
          <td :class="$style['table-td']">
            <span>
              {{ item.name }}
            </span>
          </td>
          <td :class="$style['table-td']">
            <span>
              {{ item.address }}
            </span>
          </td>
          <td :class="$style['table-td']">
            <span>
              {{ item.date }}
            </span>
          </td>
          <td :class="$style['table-td']">
            <span>
              {{ item.status }}
            </span>
          </td>
          <td :class="$style['table-td']">
            <span>
              {{ item.comment }}
            </span>
          </td>
          <td>
            <span>
              <div :class="$style['svg-group']">
                <div :class="$style['svg-container']">
                  <CheckSvg :class="$style['check-svg']" />
                </div>
                <div :class="$style['svg-container']">
                  <CrossSvg :class="$style['cross-svg']" />
                </div>
              </div>
            </span>
          </td>
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
}

.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
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
</style>
