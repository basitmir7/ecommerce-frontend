<template>
  <footer class="footer-distributed">
    <div class="footer-left">
      <h3>MARKET PLATFORM</h3>

      <p class="footer-links">
        <a v-for="(link, index) in links" :key="index" :href="link.path">
          {{ link.label }}
          <span v-if="link.label !== 'Contact'" style="margin: 0px 5px;">
            |
          </span>
        </a>
      </p>

      <p class="footer-company-name">&copy; copyright 2021</p>
    </div>

    <div class="footer-center">
      <div>
        <fa class="icons" :icon="['fas', 'map-marker-alt']" />
        <p><span>Islamic University</span> Sringar, kashmir</p>
      </div>

      <div>
        <fa class="icons" :icon="['fas', 'phone-square-alt']" />
        <p>+1 555 123456</p>
      </div>

      <div>
        <fa class="icons" :icon="['fas', 'envelope']" />
        <p><a href=""> contact@gmail.com</a></p>
      </div>
    </div>

    <div class="footer-right">
      <p class="footer-company-about">
        <span>About Us</span>
        this is about us segment
      </p>

      <div class="footer-icons">
        <a href="#"><fa class="icons" :icon="['fab', 'instagram']"/></a>
        <a href="#"> <fa class="icons" :icon="['fab', 'twitter']"/></a>
        <a href="#"> <fa class="icons" :icon="['fab', 'facebook']"/></a>
        <a href="#"> <fa class="icons" :icon="['fab', 'youtube']"/></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
      { label: "Home", path: "/" },
      { label: "Blog", path: "/" },
      { label: "About", path: "/" },
      { label: "Contact", path: "/" },
    ],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
footer {
  font-family: "Oswald";
  position: relative;
  bottom: 0;
  letter-spacing: 1px;
}
.footer-distributed {
  background-color: #000000;
  box-shadow: 0 5px 5px 0 rgba(41, 40, 40, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  padding: 23px 30px;
  margin-top: 70px;
  font: bold 14px Oswald;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

.footer-distributed .footer-left {
  width: 40%;
}

.footer-distributed h3 {
  color: #ffffff;
  font-family: "Oswald";
  font-weight: normal;
  font-size: 25px;
  margin: 0;
  text-decoration: underline;
  text-decoration-color: #b0b435;
}

.footer-distributed h3 span {
  color: #00276b;
}

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 2px;
  letter-spacing: 2px;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #ffffff;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center .icons {
  background-color: #000000;
  color: #ffffff;
  font-size: 15px;
  width: 25px;
  height: 18px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  margin: 4px 10px;
  vertical-align: middle;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 12px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: #b0b435;
  text-decoration: none;
}

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #acb0b3;
  font-size: 13px;
  font-weight: normal;
  margin: 3px;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;
  text-decoration: underline;
  text-decoration-color: #b0b435;
}

.footer-distributed .footer-icons {
  margin-top: 14px;
}

.footer-distributed .footer-icons a .icons {
  display: inline-block;
  width: 30px;
  height: 25px;
  cursor: pointer;
  background-color: #0c0b0b;
  border-radius: 2px;

  font-size: 5px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;

  margin-right: 5px;
  margin-bottom: 8px;
}
.footer-center div {
  padding: 6px;
  margin: 5px;
}
.footer-distributed .footer-links a:hover {
  color: #b0b435;
  transform: scale(1.1);
  transition: 130ms;
}
.footer-icons :hover {
  color: #b0b435;
  transform: scale(1.12);
  transition: 130ms;
}

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 35px;
    text-align: center;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
  .main {
    line-height: normal;
    font-size: auto;
  }
}
</style>
