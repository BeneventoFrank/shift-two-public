<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout spaceBottom">
          <div class="md-layout-item" style=" display:flex; white-space:nowrap; justify-content:center;">
            <h1 class="title ">
              Welcome to 
            </h1>
            <h1 class="title fullScreen" style="color:#c66019 !important; margin-left:15px;">
              Shift-Two
            </h1>            
          </div>
        </div>
        <div class="md-layout smallOnly">
          <div class="md-layout-item" style=" display:flex; white-space:nowrap; justify-content:center; margin-top:-50px; margin-bottom:60px;">
              <h1 class="title" style="color:#c66019 !important; margin-left:15px;">
                 Shift-Two
              </h1>            
          </div>
        </div>
        <div class="md-layout largeOnly">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <h1 class="title">
              Your Story Starts With Us.
            </h1>
            <h4>
              Shift-Two is commited to your success. It is our mission to lower your costs and improve efficiency while doing it. Whether its Software Development or AWS Management, our team of experts are standing by. 
            </h4>
            <br>
            <h3 style="color:#c66019 !important;">
              How can we help you?
            </h3>
            <br>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">
                Products and Services
              </h2>
              <h5 class="description">
                Shift-Two offers services that are tailored for your needs.  If you need a new project completed, check out our 'cradle to grave' service.  Looking for someone to fine tune your AWS infrastructure? Our team of AWS certified professionals will lower your costs, eliminate random bugs, and tune your AWS envionrment so you're maximizing your ROI. 
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <img style="height:100px; width:150px;" :src="productImages.aws"/>
                  </div>
                  <h4 class="info-title">
                    AWS Consulting
                  </h4>
                  <p>
                    Work with our world class technicians to help tackle your toughest problems.  Our trained experts will work with you to reduce monthly costs, ensure your infrastructure is optimized as well as present you with recommendations.  
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <img style="height:100px; width:150px;" :src="productImages.soft"/>
                  </div>
                  <h4 class="info-title">
                    Software Development
                  </h4>
                  <p>
                    With a combined 40+ years of development experience our team is well versed in producing software.  Our team enjoys leveraging technologies such as Vue.js, React.js, even ASP.NET and Mobile.  Collaborate with our development team to bring your next project to life.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <img style="height:100px; width:120px;" :src="productImages.maint"/>
                  </div>
                  <h4 class="info-title">
                    Support
                  </h4>
                  <p>
                    Need a team to look after your new application? Our team will maintain your new creation and provide scalable rock solid solutions using AWS.  Looking to migrate your existing infrastructure to AWS? Our team will analyze your needs and prepare AWS specs for your consideration. 
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-size-100 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <img style="height:100px; width:120px;" :src="productImages.open"/>
                  </div>
                  <h4 class="info-title">
                    Open Source
                  </h4>
                  <p>
                    At Shift-Two, we believe in giving back to the community. Our open source projects are aimed directly at the developer experience.  Our goal is to provide tools that allow the developer to work faster and without all the clutter and configuration getting in the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">
            Leadership
          </h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-size-50 md-small-size-100">
                <profile-card
                  text-center
                  card-plain
                  type="horizontal"
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="profileImages.daniel"
                >
                  <template slot="cardContent">
                    <h4 class="card-title">
                      Daniel
                    </h4>
                    <h6 class="card-category text-muted">
                      Co-Founder, CFO
                    </h6>
                    <p class="card-description">
                      Daniel has been excelling in the IT industry for over 20 years. Starting out as a developer, Daniel has climbed his way to the top of his field.  Aside from being a leader, Daniel enjoys three things, leveraging technology, saving money and brewing craft beers. 
                    </p>
                  </template>
                  <!-- <template slot="cardAction">
                    <md-button
                      href="javascript:void(0)"
                      class="md-twitter md-just-icon md-simple"
                    >
                      <i class="fab fa-twitter" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-facebook md-just-icon md-simple"
                    >
                      <i class="fab fa-facebook" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-google md-just-icon md-simple"
                    >
                      <i class="fab fa-google" />
                    </md-button>
                  </template> -->
                </profile-card>
              </div>
              <div class="md-layout-item md-size-50 md-small-size-100">
                <profile-card
                  text-center
                  card-plain
                  type="horizontal"
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="profileImages.frank"
                >
                  <template slot="cardContent">
                    <h4 class="card-title">
                      Frank
                    </h4>
                    <h6 class="card-category text-muted">
                      Co-Founder, COO
                    </h6>
                    <p class="card-description">
                      Frank brings a diverse solutions background as well as over 20 years of experience in the IT industry.  He enjoys working through problems, learning new technologies and collaborating at all levels.  Frank works very closely with the development and AWS teams ensuring customers needs come first.  
                    </p>
                  </template>
                  <template slot="cardAction">
                    <!-- <md-button
                      href="javascript:void(0)"
                      class="md-linkedin md-just-icon md-simple"
                    >
                      <i class="fab fa-linkedin" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-facebook md-just-icon md-simple"
                    >
                      <i class="fab fa-facebook" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-dribbble md-just-icon md-simple"
                    >
                      <i class="fab fa-dribbble" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-google md-just-icon md-simple"
                    >
                      <i class="fab fa-google" />
                    </md-button> -->
                  </template>
                </profile-card>
              </div>
              <div class="md-layout-item md-size-50 md-small-size-100">
                <profile-card
                  text-center
                  card-plain
                  type="horizontal"
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="profileImages.terry"
                >
                  <template slot="cardContent">
                    <h4 class="card-title">
                      Terry
                    </h4>
                    <h6 class="card-category text-muted">
                      Senior AWS Engineer
                    </h6>
                    <p class="card-description">
                      When there is an AWS question, Terry has the answer. He is our resident AWS rock-star. Terry heads up the AWS team providing expert guidence and leadership.  Terry holds many AWS certificates and enjoys working with the AWS platform very much.  
                    </p>
                  </template>
                </profile-card>
              </div>
              <div class="md-layout-item md-size-50 md-small-size-100">
                <profile-card
                  text-center
                  card-plain
                  type="horizontal"
                  :shadow-normal="false"
                  :no-colored-shadow="false"
                  :card-image="profileImages.karthik"
                >
                  <template slot="cardContent">
                    <h4 class="card-title">
                      Karthik
                    </h4>
                    <h6 class="card-category text-muted">
                      Senior Software Engineer
                    </h6>
                    <p class="card-description">
                      Karthik has been building software solutions for over 12 years. With an adventure seeking spirit, Karthik is not afraid to take on any problem.  He believes that software should not only fit the business needs of today, but should scale with your growth.
                    </p>
                  </template>
                </profile-card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2 class="text-center title">
                Work with us
              </h2>
              <h4 class="text-center description">
                Have questions? Drop us a line, our team is ready to help. We firmly believe that when you're name is on a product, it better be perfect. Let us partner with you for a better system design. From AWS infrastructure to Full-Stack development, we have you covered. 
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 md-small-size-100 mx-auto text-center">
                    <a href='mailto:feedback@shift-two.com?subject=Shift-Two%20Feedback'><md-button class="md-success"> Send Message </md-button></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    ProfileCard
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "landing-page",
  data() {
    return {
      image: require("@/assets/img/adf.jpg"),
      name: null,
      email: null,
      message: null,
      profileImages:{
        daniel:require("@/assets/img/daniel.jpg"),
        frank:require("@/assets/img/frank.jpg"),
        terry:require("@/assets/img/terry.jpg"),
        karthik:require("@/assets/img/karthik.jpg")
      },
      productImages: {
        soft: require("@/assets/img/software.png"),
        maint: require("@/assets/img/maint.png"),
        aws: require("@/assets/img/aws.png"),
        open: require("@/assets/img/open.png")
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
.smallOnly {
  display:none;
}
.fullScreen{
  display:block;
}
.spaceBottom{
  margin-bottom:60px;
}
.largeOnly{
  display:block;
}
@media only screen and (max-width: 750px) {
  .fullScreen {
    display:none; 
  }
  .largeOnly{
    display:none;
  }
  .spaceBottom{
    margin-bottom:0px;
  }
  .smallOnly {
    display:block;
    margin-top:70px;
  }

}
</style>
