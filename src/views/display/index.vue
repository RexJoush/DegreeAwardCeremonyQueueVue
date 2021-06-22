<!--
 * @Description: your project
 * @version: 1.0
 * @Author: Rex Joush
 * @Date: 2021-06-21 20:23:40
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-06-21 22:57:11
-->
<template>
  <div id="main">
    <div id="bz">
      <img src="https://www.rexjoush.com/img/award//bz.png" />
    </div>
    <div id="name">
      <p>
        亲爱的<span>{{ studentInfo.name }}</span
        >:
      </p>
    </div>
    
    <img id="person" :src="studentInfo.image" />
    <div id="content">
      <p>
        西大同窗情，自此更珍惜。<br>同学，愿你乘风破浪，精彩出发！
      </p>
    </div>
    <div id="xw">
      <p style="font-size: 120px; margin-bottom: 20px;">
        恭喜获得<span>{{ studentInfo.degree }}</span
        >学位
      </p>
      <p style="font-size: 120px">{{ studentInfo.department }} {{ studentInfo.major }}专业</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentInfo: {
        number: "",
        name: "",
        image: "",
        department: "",
        major: "",
        degree: "",
      },
    };
  },
  mounted() {
    this.start();
  },

  methods: {
    start() {
      setInterval(() => {
        this.init();
      }, 100);
    },

    init() {
      // this.studentInfo = this.$store.state.queue.studentInfo;
      this.studentInfo.number = window.localStorage.getItem("number");
      this.studentInfo.name = window.localStorage.getItem("name");
      this.studentInfo.image = window.localStorage.getItem("image");
      this.studentInfo.department = window.localStorage.getItem("department");
      this.studentInfo.major = window.localStorage.getItem("major");
      this.studentInfo.degree = window.localStorage.getItem("degree");
    },
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}



* {
  margin: 0;
  padding: 0;
}

/* 背景 */
#main {
  /* background-image: url(https://www.rexjoush.com/img/award/bj.jpg); */
  background-color: #333;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
}
/* 名字 */
#name {
  padding: 0px 5%;
  text-align: left;
}
#name p {
  margin-top: 200px;
  margin-bottom: 230px;
  font-size: 140px;
  letter-spacing: 15px;
  color: #ffffff;
  font-family: SimHei;
  font-weight: bolder;
}
/* 照片 */
#pic {
  height: 700px;
  /*外框大小*/
  width: 700px;
  margin-left: 10%;
  margin-bottom: 100px;
  /* 图片地址 */
  background-size: 600px auto;
  /*图片大小*/
  background-position: 50px -40px;
  /* 图片位置 */
  border-radius: 50%;
  border: 10px solid #fff;
  display: inline-block;
  position: absolute;
}
#person {
  /*height: 700px;*/
  /*border-radius: 50%;*/
  height: 700px;
  /*外框大小*/
  width: 700px;
  margin-left: -40%;
  margin-bottom: 100px;
  /* 图片位置 */
  border-radius: 50%;
  border: 10px solid #fff;
  display: inline-block;
  position: absolute;
}

/* 学位部分 */
#xw {
  padding-bottom: 100px;
  position: absolute;
  /* bottom: 140px; */
  left: 30%;
  top: 30%;
  font-weight: 100;
}

#xw p {
  width: 100%;
  letter-spacing: 8px;
  /* text-align: center; */
  color: #ffffff;
  font-family: SimHei;
  font-weight: bolder;
  font-size: 130px !important;
}

/* 寄语 */
#content {
  height: 2000px;
  width: 700px;
  color: #ffffff;
  display: inline-block;
  position: absolute;
  top: 10%;
  right: 2%;
  text-align: right;
}

#content p {
  writing-mode: vertical-rl;;
  height: 100%;
  /* margin-top: -20px; */
  font-size: 100px;
  letter-spacing: 20px;
  color: #ffffff;
  font-family: STXinwei;
  /* text-decoration: underline; */
  line-height: 200px;
}

#bz {
  width: 800px;
  position: absolute;
  top: 3%;
  right: 5%;
}
/* 标志 */
#bz img {
  width: 100%;
  height: 100%;
}

span {
  color: gold;
  /*font-size: larger;*/
}
</style>