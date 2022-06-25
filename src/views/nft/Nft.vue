<template>
  <div id="nft" class="relative bg-black">
    <header
      id="header"
      class="
        flex
        justify-between
        items-center
        mx-auto
        fixed
        top-0
        px-5
        xl:px-5
        2xl:px-36
        w-screen
        h-20
        z-40
      "
    >
      <a href="https://udid.network" target="_blank"
        ><img src="@/assets/layout/logo.svg" alt=""
      /></a>
      <div class="flex justify-between items-center space-x-8">
        <a href="https://twitter.com/udidofficial" target="_blank"
          ><img src="@/assets/nft/twitter-w.svg" alt=""
        /></a>
        <a href="https://t.me/+fOvnclkFC8ViMTll" target="_blank"
          ><img src="@/assets/nft/telegram-w.svg" alt=""
        /></a>
        <a href="https://discord.com/invite/3A4vg4T4yg" target="_blank"
          ><img src="@/assets/nft/discord-w.svg" alt=""
        /></a>
        <!-- <ul
          class="
            hidden
            xl:flex
            font-medium
            justify-between
            items-center
            space-x-8
            xl:space-x-14
            mr-8
            xl:mr-14
          "
        >
          <template v-for="(item, index) in rootNav" :key="index">
            <li @click="skip(item.to)" class="cursor-pointer">
              <span>{{ $t(`n.${item.i18n}`) }}</span>
            </li>
          </template>
        </ul> -->
        <!-- <div
          class="
            bg-gray-#1c1c1c
            px-6
            py-2
            text-primary
            font-semibold
            cursor-pointer
          "
        >
          Go to APP
        </div> -->
        <!-- <div>
          <el-switch v-model="loginValue" class="mr-2" active-color="#00a054" />
          <span class="text-primary font-medium">{{ $t("n.login") }}</span>
        </div> -->
        <!-- <div
          @click="flyout"
          class="cursor-pointer xl:hidden flex flex-col space-y-1 ml-4"
        >
          <div class="w-5 h-0.5 bg-white"></div>
          <div class="w-5 h-0.5 bg-white"></div>
          <div class="w-5 h-0.5 bg-white"></div>
        </div> -->
        <!-- <button
          class="min-w-min font-semibold rounded-full bg-go-app py-2 px-4"
        >
          {{ $t("n.goAPP") }}
        </button> -->
      </div>
    </header>
    <div
      id="mask"
      :class="[
        'fixed top-0 w-screen h-screen flex justify-center items-center z-10',
        { dialogShow },
      ]"
      style="font-family: PingFang SC-Heavy, PingFang SC"
    >
      <div id="dialog" class="relative">
        <img
          @click="closeDialog()"
          class="absolute right-5 top-5 cursor-pointer"
          src="@/assets/nft/close.svg"
          alt=""
        />
        <div class="pt-5 px-28 pb-10">
          <div v-if="!isLogin" class="flex flex-col items-center space-y-10">
            <h3 class="text-3xl font-extrabold">Connect Wallet</h3>
            <div
              @click="loginMetamask"
              class="
                px-20
                py-5
                rounded-lg
                cursor-pointer
                flex flex-col
                items-center
                space-y-3
              "
              style="background: rgba(255, 255, 255, 0.1)"
            >
              <img src="@/assets/nft/metamask.png" alt="" />
              <p class="text-red-400 text-sm">
                Please refresh the page if you install or enable MetaMask plugin
                first time
              </p>
            </div>
          </div>
          <div v-else class="flex flex-col items-center">
            <h3 class="text-2xl font-extrabold mb-6">MINT</h3>
            <div v-if="mintSuccess" class="flex flex-col items-center">
              <img class="my-8" src="@/assets/nft/check.svg" alt="" />
              <span class="text-2xl font-extrabold">Congratulations! </span>
              <span class="text-2xl font-extrabold mb-7"
                >Your NFT has been minted successfully</span
              >
              <div class="flex justify-center space-x-14">
                <div class="">
                  <img src="@/assets/nft/color.png" alt="" />
                </div>
                <div class="">
                  <img src="@/assets/nft/gold.png" alt="" />
                </div>
                <div class="">
                  <img src="@/assets/nft/green.png" alt="" />
                </div>
              </div>
              <span class="text-lg font-extrabold opacity-60 mb-1"
                >You can view your NFT details from the website below</span
              >
              <a
                class="text-lg font-extrabold"
                href="https://opensea.io/collection/udidmusik"
                style="color: #1d9bf0"
                >https://opensea.io/collection/udidmusik</a
              >
            </div>
            <div v-else class="flex flex-col items-center space-y-12">
              <div
                class="
                  border border-white border-opacity-10
                  rounded
                  px-28
                  pt-4
                  pb-12
                  flex
                  items-center
                  relative
                  text-xs
                "
              >
                <div class="flex flex-col items-center">
                  <img src="@/assets/nft/color.png" alt="" /><span
                    class="rounded-2xl bg-white bg-opacity-10 px-4 py-px"
                    >7</span
                  >
                </div>
                <div class="flex flex-col items-center ml-14">
                  <img src="@/assets/nft/gold.png" alt="" /><span
                    class="rounded-2xl bg-white bg-opacity-10 px-4 py-px"
                    >67</span
                  >
                </div>
                <div class="flex flex-col items-center ml-14">
                  <img src="@/assets/nft/green.png" alt="" /><span
                    class="rounded-2xl bg-white bg-opacity-10 px-4 py-px"
                    >9925</span
                  >
                </div>
                <div
                  class="
                    absolute
                    bottom-0
                    left-1/2
                    transform
                    -translate-x-1/2
                    translate-y-1/2
                    px-4
                    py-2
                    flex
                    items-center
                    space-x-3
                    rounded
                  "
                  style="background: #43e87a"
                >
                  <p class="text-lg font-normal">Number of NFTs:</p>
                  <p class="text-2xl font-extrabold">9999/9999</p>
                </div>
              </div>
              <div class="text-sm font-normal">
                <span class="">{{ account }}:</span>
                <span
                  v-if="timeClear && isLogin && !mintSuccess"
                  class="opacity-60"
                  >{{
                    balanceEnough
                      ? "Your address is on the whitelist and you can mint up to threeNFTs for free"
                      : "Your address is on the whitelist,But your account ETH balance must exceed 0.1"
                  }}
                </span>
                <span v-else class="opacity-60">
                  "Your address is on the whitelist,Wait for minting to start"
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          @click="mintNow"
          v-if="timeClear && isLogin && !mintSuccess && balanceEnough"
          class="py-5 w-full cursor-pointer"
          style="background: #43e87a"
        >
          <h3 class="text-center text-3xl font-extrabold">MINT NOW</h3>
        </div>
        <div class="flex flex-col">
          <h3></h3>
          <div></div>
        </div>
      </div>
    </div>
    <div id="banner" class="pt-14 l:pt-16 2xl:pt-18 h-screen">
      <MainContainer class="mx-auto items-center">
        <div class="mx-auto w-40 l:w-64 2xl:w-72 opacity-30">
          <img src="@/assets/nft/nft-logo.gif" alt="" />
        </div>
        <span
          id="banner-title"
          style="text-transform: uppercase; letter-spacing: 10px"
          class="text-center text-4xl xl:text-5xl font-bold"
          >UDID Genesis Pass Card</span
        >
        <div class="flex justify-center items-center mt-1 l:mt-5 2xl:mt-10">
          <div class="flex flex-col justify-center items-center">
            <img id="card-1" src="@/assets/nft/color.png" alt="" />
            <img id="shadow-1" src="@/assets/nft/color-b.png" alt="" />
          </div>
          <div class="flex flex-col justify-center items-center">
            <img id="card-2" src="@/assets/nft/gold.png" alt="" />
            <img id="shadow-2" src="@/assets/nft/gold-b.png" alt="" />
          </div>
          <div class="flex flex-col justify-center items-center">
            <img id="card-3" src="@/assets/nft/green.png" alt="" />
            <img id="shadow-3" src="@/assets/nft/green-b.png" alt="" />
          </div>
        </div>
        <div class="flex justify-center items-center space-x-6">
          <div class="flex flex-col items-center justify-center">
            <div class="flex justify-center items-center px-2">
              <span id="count-down" class="px-2" style="">{{ time.d }}</span>
            </div>

            <span style="font-family: Poppins-Regular, Poppins; font-size: 14px"
              >DAYS</span
            >
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="flex justify-center items-center px-2">
              <span id="count-down" class="px-2" style="">{{ time.h }}</span>
            </div>

            <span style="font-family: Poppins-Regular, Poppins; font-size: 14px"
              >HOURS</span
            >
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="flex justify-center items-center px-2">
              <span id="count-down" class="px-2" style="">{{ time.m }}</span>
            </div>

            <span style="font-family: Poppins-Regular, Poppins; font-size: 14px"
              >MINUTES</span
            >
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="flex justify-center items-center px-2">
              <span id="count-down" class="px-2" style="">{{ time.s }}</span>
            </div>

            <span style="font-family: Poppins-Regular, Poppins; font-size: 14px"
              >SECONDS</span
            >
          </div>
        </div>
        <span
          @click="mintLogin"
          id="mint"
          class="px-18 py-4 mt-2 l:mt-4 2xl:mt-8"
          >MINT FREE</span
        >
        <p
          class="text-base mt-2 l:mt-4 2xl:mt-8 font-normal text-center"
          style="font-family: PingFang SC-Regular, PingFang SC; opacity: 0.7"
        >
          MINT 规则，MINGT费用等说明Lorem ipsum dolor sit amet, consectetur
        </p>
      </MainContainer>
    </div>
    <div class="flex flex-col items-center mt-40 space-y-20">
      <MainContainer
        class="space-y-40"
        style="font-family: PingFang SC-Regular, PingFang SC"
      >
        <div class="grid grid-cols-2 gap-x-52">
          <div class="col-span-2 xl:col-span-1 flex flex-col space-y-7">
            <h2 class="text-4xl xl:text-5xl font-bold">
              UDID PASS CARD权益介绍
            </h2>
            <p class="text-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus si Lorem ipsum dolor sit amet, consectetur
              adipiscing elit ut aliquam, purus si
            </p>
            <div class="flex justify-items-start space-x-7">
              <img class="w-20" src="@/assets/nft/mail-icon.png" alt="" />
              <img class="w-20" src="@/assets/nft/shield.png" alt="" />
              <img class="w-20" src="@/assets/nft/map-icon.png" alt="" />
            </div>
          </div>
          <div class="col-span-2 xl:col-span-1">
            <video
              class="w-100"
              controls="controls"
              src="@/assets/nft/nft-video.mp4"
            ></video>
          </div>
        </div>
        <div
          class="grid grid-cols-3 gap-5"
          style="font-family: PingFang SC-Regular, PingFang SC"
        >
          <div
            class="
              col-span-3
              xl:col-span-1
              flex flex-col
              items-center
              space-y-2
              pb-6
              px-4
            "
            style="background: rgba(255, 255, 255, 0.04); border-radius: 4px"
          >
            <img src="@/assets/nft/color-x.png" alt="" />
            <span class="text-xl font-extrabold opacity-60">最⼤的彩蛋</span>
            <span class="text-base font-normal opacity-40 text-center">
              Colorful UDID Network Genesis Pass Card</span
            >
          </div>
          <div
            class="
              col-span-3
              xl:col-span-1
              flex flex-col
              items-center
              space-y-2
              pb-6
              px-4
            "
            style="background: rgba(255, 255, 255, 0.04); border-radius: 4px"
          >
            <img src="@/assets/nft/gold-x.png" alt="" />
            <span class="text-xl font-extrabold opacity-60"
              >⾃定义不限定根域名后缀</span
            >
            <span class="text-base font-normal opacity-40 text-center">
              Golden UDID Network Genesis Pass Card</span
            >
          </div>
          <div
            class="
              col-span-3
              xl:col-span-1
              flex flex-col
              items-center
              space-y-2
              pb-6
              px-4
            "
            style="background: rgba(255, 255, 255, 0.04); border-radius: 4px"
          >
            <img src="@/assets/nft/green-x.png" alt="" />
            <span class="text-xl font-extrabold opacity-60"
              >⾃定义统⼀的⼆级域名后缀.udid</span
            >
            <span class="text-base font-normal opacity-40 text-center">
              green UDID Network Genesis Pass Card</span
            >
          </div>
        </div>
        <div
          class="grid grid-cols-2 gap-x-4 gap-y-4 p-8"
          style="background: rgba(255, 255, 255, 0.04); border-radius: 8px"
        >
          <div class="col-span-2 xl:col-span-1">
            <img src="@/assets/nft/social.png" />
          </div>
          <div
            class="
              col-span-2
              xl:col-span-1
              flex flex-col
              space-y-7
              xl:text-right
              text-left
            "
          >
            <h2 class="text-4xl xl:text-5xl font-bold">what can i do with</h2>
            <h2
              class="text-6xl font-extrabold"
              style="
                background: linear-gradient(90deg, #43e87a 0%, #c5de2d 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
            >
              UDID PASS CARD
            </h2>
            <p class="text-base font-normal opacity-60">
              UDID 域名 使用场景 使用权益，未来期望，当前mint费用 UDID pass card
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit Lorem ipsum dolor sit amet, consectetur
              adipiscing elit ut aliquam
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <h2 class="text-5xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div
            class="px-8 pb-12 pt-4"
            style="background: rgba(255, 255, 255, 0.04); border-radius: 8px"
          >
            <template v-for="(item, index) in msgItems" :key="index">
              <div class="w-full item border-b-2 border-opacity-30 py-4">
                <div
                  @click="handleItem(index)"
                  class="item-h flex justify-between items-center"
                >
                  <span class="text-lg opacity-90">{{ item.title }}</span>
                  <div class="item-h-r f-r-e-c">
                    <img
                      :ref="getItemIcon"
                      src="@/assets/nft/xmark.svg"
                      alt=""
                      class="x"
                    />
                  </div>
                </div>
                <div :ref="getItemB" class="item-b text-base">
                  <p
                    :ref="getItemCon"
                    class="item-b-con text-base opacity-80 px-6 py-4"
                  >
                    {{ item.con }}
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="flex flex-col items-center space-y-8">
          <h2 class="text-3xl font-extrabold text-center">
            Follow us to get the latest information
          </h2>
          <div class="flex justify-center items-center space-x-24">
            <a href="https://twitter.com/udidofficial" target="_blank"
              ><img src="@/assets/nft/twitter.svg" alt=""
            /></a>
            <a href="https://t.me/+fOvnclkFC8ViMTll" target="_blank"
              ><img src="@/assets/nft/telegram.svg" alt=""
            /></a>
            <a href="https://discord.com/invite/3A4vg4T4yg" target="_blank"
              ><img src="@/assets/nft/discord.svg" alt=""
            /></a>
          </div>
          <p class="text-base opacity-30 font-medium">
            Copyright 2022 UDID.Network
          </p>
        </div>
      </MainContainer>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, reactive, ref } from "vue";
import { useStore } from "vuex";

import MainContainer from "@/layouts/MainContainer.vue";
import { useUdidEffect, encry, countTime } from "@/utils/udidEffects.js";
import { connectMetaMask } from "@/web3-lib";
import { isMetaMask } from "@/bizlib/metamask";
import { udidMint } from "@/web3-lib/apis/view-api.js";

const time = reactive({
  d: 0,
  h: 0,
  m: 0,
  s: 0,
});
const endTime = ref("2021-07-24 12:01:00");
onBeforeMount(() => {
  let countDown = setInterval(() => {
    countTime(endTime.value, time);
    if (new Date(endTime.value).getTime() - new Date() <= 0) {
      clearInterval(countDown);
    }
  }, 1000);
  return countDown;
});
const timeClear = computed(() => {
  return time.d == 0 && time.h == 0 && time.m == 0 && time.s == 0;
});
const store = useStore();
// mint
const dialogShow = ref(false);
const closeDialog = () => {
  dialogShow.value = false;
};
const chainId = ref("");
// 当前metamask网络ID
if (isMetaMask()) {
  chainId.value = parseInt(window.ethereum.chainId);
  console.log(window.ethereum.chainId, chainId.value);
}
// const canLoginState = computed(() => {
//   if (!isMetaMask()) return false;
//   // console.log(chainId.value, !checkSupport(chainId.value));
//   if (chainId.value !== "" && !checkSupport(chainId.value)) return false;
//   return true;
// });
// 是否已登录metamask
const isLogin = computed(() => {
  return !store.getters["metaMaskDisabled"];
});
const balanceEnough = computed(() => {
  return true;
});
const account = computed(() => {
  return encry(store.state.dapp.walletAddress);
});

const mintLogin = () => {
  dialogShow.value = true;
  if (store.getters["metaMaskDisabled"]) {
    // console.log("未denglu");
  } else {
    // console.log("一denglu");
  }
};

const loginMetamask = () => {
  // console.log(isMetaMask(), "canLoginState", canLoginState.value);
  if (!isMetaMask()) {
    window.open(
      "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
    );
    return;
  }
  connectMetaMask().then((resp) => {
    console.log("Login EWallet", resp);
    store.commit("dapp/setMetaMaskLogin", resp);
  });
  // .catch((ex) => {
  //   if (ex.code === 4001) {
  //     this.$message(this.$basTip.error($t("code.4001")));
  //   } else if (ex.code === -32601) {
  //     this.$message(this.$basTip.error($t("g.NetworkTimeout")));
  //   }
  // });
};
const mintNow = () => {
  const web3State = store.getters["web3State"];
  udidMint(web3State.chainId);
};
const mintSuccess = ref(false);

// faq
const msgItems = ref([
  {
    title: "Where can I doing?",

    con: " craspor ttitore  ismod nulla.",
  },
  {
    title: "Where can I doing?",

    con: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
  {
    title: "Where can I doing?",

    con: "Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions Frequently Asked Questions ",
  },
]);
const itemB = ref([]);
const itemCon = ref([]);
const itemIcon = ref([]);
const getItemB = (el) => {
  if (el) {
    itemB.value.push(el);
  }
};
const getItemCon = (el) => {
  if (el) {
    itemCon.value.push(el);
  }
};
const getItemIcon = (el) => {
  if (el) {
    itemIcon.value.push(el);
  }
};
const handleItem = (index) => {
  useUdidEffect(index, itemB.value, itemCon.value, itemIcon.value);
};
</script>

<style lang='less' scoped>
#header {
  background: rgba(0, 3, 0, 0.1);
  backdrop-filter: blur(50px);
}
#banner {
  background: url("~@/assets/nft/bg.png") no-repeat center center;
  background-size: cover;
}
#banner-title {
  text-shadow: 0 0 1px #43e87a, 0 0 3px #61e28c, 0 0 5px #64e68f,
    0 0 7px #6beb95;
}

#mask {
  background: rgba(0, 0, 0, 0.8);
  will-change: opacity;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease-in-out;
}

#mask.dialogShow {
  visibility: visible;
  opacity: 1;
  transition: all 0.2s ease-in-out;
}

#dialog {
  background: #181818;
  border-radius: 10px;
  min-width: 42%;
  overflow: hidden;
}

#mint {
  color: #43e87a;
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  background: #000;
  border: 2px solid #43e87a;
  text-shadow: 0 0 0.5px #43e87a, 0 0 1px #61e28c, 0 0 1.5px #64e68f,
    0 0 2px #6beb95;
  letter-spacing: 2px;
  cursor: pointer;
}

#count-down {
  line-height: 60px;
  text-align: center;
  min-width: 52px;
  font-size: 40px;
  font-family: Digital;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.01) 100%
  );
}
video::-webkit-media-controls-fullscreen-button {
  display: block;
}
video::-webkit-media-controls-play-button {
  display: none;
}

.item-b {
  will-change: max-height;
  max-height: auto;
  overflow: hidden;
  transition: max-height 0.2s ease;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  color: #c9c9c9;
  line-height: 1.2;
}

.x {
  transition: all 0.3s ease;
  &.isActive {
    transform: rotateZ(135deg);
  }
}

#card-1,
#card-2,
#card-3 {
  animation-name: card;

  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

#shadow-1,
#shadow-2,
#shadow-3 {
  animation-name: shadow;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
#card-1,
#shadow-1 {
  animation-duration: 2.5s;
  animation-delay: 0.1s;
}

#card-2,
#shadow-2 {
  animation-duration: 2.5s;
  animation-delay: 0.3s;
}

#card-3,
#shadow-3 {
  animation-duration: 2.5s;
  animation-delay: 0.6s;
}

@keyframes card {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes shadow {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>