<!--
 * @Description: your project
 * @version: 1.0
 * @Author: Rex Joush
 * @Date: 2021-06-21 20:23:44
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-06-22 15:05:45
-->
<template>
  <el-container>
    <el-header>学位授予仪式排队后台系统</el-header>
    <el-main>
      <el-card>
        <el-row
          :gutter="25"
          style="padding-bottom: 10px; border-bottom: 1px solid #dcdfe6"
        >
          <el-col :span="8">
            <el-input
              type="text"
              placeholder="输入学号"
              v-model="number"
              clearable
            >
              <el-button
                type="primary"
                slot="append"
                icon="el-icon-search"
                @click="getUserById"
              ></el-button>
            </el-input>
          </el-col>
          <el-col :span="2">
            <el-button @click="toDisplay" type="primary">展示页面</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-table :data="tableData" stripe style="width: 100%">
              <!-- <el-checkbox-group v-model="checkList"> -->
              <el-table-column type="index"> </el-table-column>
              <!-- <el-table-column width="50">
                  <template slot-scope="scope">
                      <el-checkbox :value="scope.row.number"></el-checkbox>
                  </template>
                </el-table-column> -->
              <el-table-column prop="number" label="学号" width="180">
              </el-table-column>
              <el-table-column label="照片" width="180">
                <template slot-scope="scope">
                  <el-image
                    style="width: 100px; height: 100px"
                    :src="scope.row.image"
                    fit="fill"
                  ></el-image>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="department" label="院系">
              </el-table-column>
              <el-table-column prop="major" label="专业"> </el-table-column>
              <el-table-column prop="degree" label="学位"> </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button type="primary" @click="getUserById(scope.row)"
                    >显示</el-button
                  >
                </template>
              </el-table-column>
              <!-- </el-checkbox-group> -->
            </el-table>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      number: "", // 学号
      checkList: [],
      tableData: [
        {
          number: "202032978",
          name: "李一航",
          image: "https://www.rexjoush.com/img/1.jpg",
          department: "网络和数据中心",
          major: "软件工程",
          degree: "硕士",
        },
        {
          number: "202032978",
          name: "赵军壮",
          image: "https://www.rexjoush.com/img/1.jpg",
          department: "网络和数据中心",
          major: "软件工程",
          degree: "硕士",
        },
        {
          number: "202032978",
          name: "邓亚楠",
          image: "https://www.rexjoush.com/img/1.jpg",
          department: "网络和数据中心",
          major: "软件工程",
          degree: "硕士",
        },
        {
          number: "202032978",
          name: "王师蕾",
          image: "https://www.rexjoush.com/img/1.jpg",
          department: "网络和数据中心",
          major: "软件工程",
          degree: "硕士",
        },
        {
          number: "202032978",
          name: "闫博",
          image: "https://www.rexjoush.com/img/1.jpg",
          department: "网络和数据中心",
          major: "软件工程",
          degree: "硕士",
        },
      ],
    };
  },

  created(){
    //this.getInit();  
  },

  methods: {
    
    getInit(){
        this.$http.get("http://10.8.49.195:8088/query").then(res=>{
            this.tableData = res.data;
        })
    },

    getUserById: function (studentInfo) {
      console.log(studentInfo);
    //   this.$store.dispatch("queue/save", studentInfo);
      window.localStorage.setItem("number", studentInfo.number);
      window.localStorage.setItem("name", studentInfo.name);
      window.localStorage.setItem("image", studentInfo.image);
      window.localStorage.setItem("department", studentInfo.department);
      window.localStorage.setItem("major", studentInfo.major);
      window.localStorage.setItem("degree", studentInfo.degree);
    },

    // 前往展示页面
    toDisplay: function () {
      this.$router.push("/display");
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
  font-size: 30px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>