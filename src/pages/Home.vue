<template>
  <div style="display:flex; flex-direction:column;">
    <div ref='home' class="fade-in" :style="`height:100vh; width:100%; margin:auto; display:flex; flex-direction:column; background: #535457 ${'url(' + require('../assets/img/landing.png') + ') no-repeat center center; background-size:cover;' }`">
      <div :style="`position:fixed; display:flex; top:0; left:0; align-items:center; width:100%; justify-content:space-between; height:128px; background: ${headerBackgroundColor}; box-shadow: 0 6px 7px -2px black; `">
          <img style="height:100px; width:120px; margin-left:20px;" src="../assets/img/logo.png" />
          <div style="margin-right:20px;">
              <span class='linkText' @click="(event)=>{handleScroll(event,'home')}">Home</span>
              <span class='linkText' @click="(event)=>{handleScroll(event,'tech')}">Technology</span>
              <span class='linkText' @click="(event)=>{handleScroll(event,'us')}">About Us</span>
              <span class='linkText' @click="(event)=>{handleScroll(event,'com')}">Community</span>
          </div>

      </div>
      <div style="margin-top:128px; display:flex; justify-content:center; width:100%;">
        <span :style="`color:white; padding-top:150px; font-size:42px;`">Welcome To</span>
        <span :style="`color:#BB4F16; padding-top:150px; font-size:42px; margin-left:14px;`">Shift-Two</span>
      </div>
      <div style="margin-top:128px; display:flex; justify-content:center; width:100%;">
        <router-link to="recent-work" class='link' >
          <span class='latestWork'>Check Out Our Latest Work</span>
        </router-link>
      </div>
    </div>

    <div ref="tech" :style="`height:100vh; width:100%; margin:auto; display:flex; justify-content:center;  background: #535457 ${'url(' + require('../assets/img/landingBottom.png') + ') no-repeat center center; background-size:cover;' }`">
        <span class="sectionHeader">Our Technology</span>
    </div>

    <div ref="us" :style="`height:100vh; width:100%; margin:auto; display:flex; justify-content:center; background: #535457 ${'url(' + require('../assets/img/landing.png') + ') no-repeat center center; background-size:cover;' }`">
        <span class="sectionHeader">About Us</span>
    </div>

    <div ref="com" :style="`height:100vh; width:100%; margin:auto; display:flex; justify-content:center; background: #535457 ${'url(' + require('../assets/img/landingBottom.png') + ') no-repeat center center; background-size:cover;' }`">
        <span class="sectionHeader">Community</span>    
    </div>
  </div>
</template>
<script>

export default {
  name: 'home',
  data(){
    return(
      {
        headerBackgroundColor:{
          home:'rgba(42,43,45, 0.3)',
          tech:'',
          us:'',
          blog:''
        }
      }
    )
  },
  components: {
  },
  methods:{
    handleScroll(event,ref){
      this.$refs[ref].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
  }
};
</script>
<style>
  .latestWork {
      color:white; 
      font-size:25px;    
  }
  .sectionHeader{
    font-size: 50px;
    color:white;
    margin-top:130px;
  }
  .link{
    text-decoration: none;
  }
  .link :hover{
    text-decoration: underline;
    text-decoration-color: #BB4F16;
  }
  .linkText{
    color:#BB4F16;
    font-size:18px;
    cursor: pointer;
    padding:10px;
  }
  .linkText :hover{
    color:white !important;
  }
  .fade-in {
        animation: fadeIn ease 1s;
        -webkit-animation: fadeIn ease 1s;
        -moz-animation: fadeIn ease 1s;
        -o-animation: fadeIn ease 1s;
        -ms-animation: fadeIn ease 1s;
        }
        @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }

        @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }

        @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }

        @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }

        @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }
</style>
