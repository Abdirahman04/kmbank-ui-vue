<template>
  <div class="statistics container">
    <h1>Statistics Page</h1>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col">
              <card ctitle="No. of Users" ctext="543"></card>
            </div>
            <div class="col">
              <card ctitle="Total Money" ctext="$43,332,345"></card>
            </div>
          </div>
          <div class="row">
            <div class="col"><button class="btn btn-outline-danger">Users</button></div>
            <div class="col"><button class="btn btn-outline-info">B.Transactions</button></div>
            <div class="col"><button class="btn btn-outline-warning">T.Transactions</button></div>
          </div>
          <div class="row">
            <div class="col">
              <p>dsajlfkdkfjdlkfjldksjfldkajflkjdajfkdajflkdjfdkjflkdjfkldf</p>
              <p>djfjdkljfldkjflksdjfklsdjflkdjflkdjaflkjdlfjldkajfldjfljda</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <card ctitle="No. of transactions" ctext="32"></card>
          <card ctitle="No. of B.transactions" ctext="33"></card>
          <card ctitle="No. of deposits" ctext="12"></card>
          <card ctitle="No. of withdrawals" ctext="34"></card>
          <card ctitle="No. of T.transactions" ctext="98"></card>
        </div>
      </div>
    </div>
  </div>
</template>
import Card from '@/components/Card'
<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    'card': Card
  },

}
</script>

<style scoped>
  .statistics {
    height: 80%;
  }
</style>