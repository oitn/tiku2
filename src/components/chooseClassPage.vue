<template>
  <div class="wapper">
    <!--    <div class="header">
          <tikuHeader :inputName= className></tikuHeader>
        </div> -->
    <div class="header">
      <div class='left' @click='$router.go(-1)'>&nbsp;&nbsp;<</div>
      <div class='title'>题库</div>
      <div class='right'>···&nbsp;&nbsp;</div>
    </div>


    <div class="content">
      <div class="classTag2"  @click="goClassPage('军理')"><span class="className">军理（上）</span></div>
      <div class="classTag2"  @click="goClassPage('军理')"><span class="className">军理（下）</span></div>
      <div class="classTag2"  @click="goClassPage('毛概')"><span class="className" >毛概</span></div>
      <div class="classTag2"  @click="goClassPage('近代史')"><span class="className" >近代史</span></div>
      <div class="classTag2"  @click="goClassPage('思修')"><span class="className" >思修</span></div>
      <div class="classTag2"  @click="goClassPage('马克思')"><span class="className">马克思</span></div>
      <div class="classTag2"  @click="goClassPage('C语言（上）')"><span class="className" > C语言（上）</span></div>
      <div class="classTag2"  @click="goClassPage(' C语言（下）')"><span class="className" > C语言（下）</span></div>


    </div>
    <div class="footer">
      <span class="footer-msg">Design By Toast Studio</span>
    </div>

  </div>
</template>

<script>
  // import tikuHeader from './tikuHeader'

  export default {
    name: "chooseClassPage",
    data() {
      return {
        className: '题库',

      }
    },
    //引入组件
    components: {
      // tikuHeader: tikuHeader,
    },
    created() {

    },
    methods: {
      goClassPage: function (name) {
        console.log(name);
        this.className = name;
        this.$router.push(name + '/func')
      },
    }
  }
</script>

<style lang='scss' scoped>
  @import "../style/style.scss";
  @import "../style/mixin.scss";

  .wrapper {
    height: 100%;
    overflow: hidden;

  }

  .header {
    background-color: $tk-bc;
    position: relative;
    height: 3.5rem;
    line-height: 3.5rem;
    .left {
      position: absolute;
      color: #fff;
      left: 0;
      font-weight: bold;
    }
    .title {
      @include cl;
      color: #fff;
    }
    .right {
      position: absolute;
      color: #fff;
      right: 0;
      font-weight: bold;
    }
  }

  .content {
    position: fixed;
    top: 6rem;
    width: 93%;
    margin-left: 3.5%;
    .content div:nth-child(1) {background-color: rgb(210, 177, 24)}
    .content div:nth-child(2) {background-color: #69a794}
    .content div:nth-child(3) {background-color: #806300}
    .content div:nth-child(4) {background-color: #71361d}
    .content div:nth-child(5) {background-color: #f1908c}
    .content div:nth-child(6) {background-color: #644800}
    .content div:nth-child(7) {background-color: #695e45}
    .content div:nth-child(8) {background-color: #6e820b}
    .content div:nth-child(9) {background-color: #248067}
  }

  .classTag2 {
    text-align: left;
    /*border-radius: .3rem .3rem;*/
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    -moz-box-shadow: 0px -10px 18px rgba(67, 64, 69, 0.46);
    -webkit-box-shadow: 0px -10px 18px rgba(67, 64, 69, 0.46);
    box-shadow: 0px -10px 18px rgba(67, 64, 69, 0.46);
    background-color: #3487ff;
    height: 2.8rem;
  }

  .className {
    font-size: 1.3rem;
    left: 15%;
    margin: 2rem;

  }

  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 17.8rem;
    background-color: #a4845d;
    text-align: center;
  }


</style>
