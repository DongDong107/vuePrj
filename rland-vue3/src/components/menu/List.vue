<script>
import NewMenuList from '../menu/NewMenuList.vue';
// const def = 
export default {
  data() {
    return {
      list: [{}, {}, {}, {}],
      newList: []
    }
  },
  mounted() {
    fetch("http://localhost:8080/menus")
      .then(response => response.json())
      .then(data => {
        this.list = data.list;
        this.newList = data.newList;
      });

    // .then 을 하게 되면 위에서 받아온 것을 이어서 계속 받게된다.
    // .then(response => {return response.json();})
    // .then(function(list){
    //   this.list = list;
    //   this.list.push(list[0]);
    // })
  },
  components: {
    NewMenuList,
  }
}
</script>
<style>
@import url(/css/component/search-header.css);
@import url(/css/component/menu-section.css);
@import url(/css/component/menu-category.css);
@import url(/css/component/aside.css);
@import url(/css/component/cart-section.css);
</style>
<template>
  <!-- ---------------------------------------------------------------------- -->
  <main>
    <section>
      <header class="search-header">
        <h1 class="text-title1-h1">알랜드 메뉴</h1>
        <form>
          <input type="text">
          <input type="submit" class="icon icon-find">
        </form>
      </header>
      <aside class="aside-bar">
        <h1>aside</h1>
        <section class="aside-bar-content">
          <h1>메인메뉴</h1>
          <ul class="mt-3">
            <li><a href="">카페메뉴</a></li>
            <li><a href="">공지사항</a></li>
            <li><a href="/user/login.html">로그인</a></li>
          </ul>
        </section>
      </aside>
      <nav class="menu-category">
        <div>
        <h1 class="text-normal-bold">메뉴분류</h1>
        </div>
        <ul>
          <li class="menu-selected">
            <a href="/menu/list">전체</a>
          </li>
          <li>
            <a href="">커피음료</a>
          </li>
          <li>
            <a href="">수제청</a>
          </li>
          <li>
            <a href="">샌드위치</a>
          </li>
          <li>
            <a href="">쿠키</a>
          </li>
        </ul>
      </nav>

      <section class="cart-section">
        <h1 class="d-none">장바구니</h1>
        <span class="text-title3">커피음료</span>
        <div class="icon icon-basket icon-text">1</div>
      </section>

      <section class="menu-section">
        <h1 class="d-none">메뉴목록</h1>
        <div class="menu-list">
          <section class="menu" v-for="m in list">
            <form class="">
              <h1>{{ m.name }}</h1>
              <div class="menu-img-box">
                <!-- <router-link :to="'detail?id=' + m.id"><img class="menu-img"
                                    :src="`/image/product/` + m.img"></router-link> -->
                <router-link :to="'./' + m.id"><img class="menu-img" :src="`/image/product/` + m.img"></router-link>
                <!-- <img :src="'/path/to/images/' + fileName" /> -->
              </div>
              <div class="menu-price">{{ m.price }}원</div>
              <div class="menu-option-list">
                <span class="menu-option">
                  <input class="menu-option-input" type="checkbox">
                  <label>ICED</label>
                </span>
                <span class="menu-option ml-2">
                  <input class="menu-option-input" type="checkbox">
                  <label>Large</label>
                </span>
              </div>
              <div class="menu-button-list">
                <input class="btn btn-fill btn-size-1 btn-size-1-lg" type="submit" value="담기">
                <input class="btn btn-line btn-size-1 btn-size-1-lg ml-1" type="submit" value="주문하기">
              </div>
            </form>
          </section>

        </div>
      </section>

      <div class="d-flex justify-content-center py-3">
        <a href="" class="btn btn-round w-100 w-50-md py-2">더보기(13+)</a>
      </div>

      <NewMenuList />

    </section>
  </main>
</template>