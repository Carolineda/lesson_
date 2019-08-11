<template>
  <div class="check-wrapper">
    <div class="top-part">
      <div class="top-detail">
        <div class="content">
          <div class="total-num">
            <p class="nums">
              今日交易总额
              <i class="el-icon-question"></i>
            </p>
            <div class="detail">￥ 146,657</div>
            <p class="brief">周同比 -200日同比 +100</p>
          </div>
        </div>
        <div class="content">
          <div class="total-num">
            <p class="nums">
              销售目标完成率
              <i class="el-icon-question"></i>
            </p>
            <div class="detail">92 %</div>
            <p class="brief">周同比 -200日同比 +100</p>
          </div>
        </div>
        <div class="content">
          <div class="total-num">
            <p class="nums">
              每秒交易总额
              <i class="el-icon-question"></i>
            </p>
            <div class="detail">￥ 833</div>
            <p class="brief">周同比 -200日同比 +100</p>
          </div>
        </div>
        <div class="content">
          <div class="total-num">
            <p class="nums">
              总销售额
              <i class="el-icon-question"></i>
            </p>
            <div class="detail">￥ 23,333</div>
            <p class="brief">周同比 -200日同比 +100</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 图表 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="收益走势" name="first">
        收益走势
        <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
      </el-tab-pane>
      <el-tab-pane label="成交走势" name="second">
        成交走势
        <div id="dealChart" :style="{width: '500px', height: '300px'}"></div>
      </el-tab-pane>
    </el-tabs>

    <!-- 第三部分：图表 -->

    <div class="new-activity">
      <div class="activity-right">
        <div class="title">
          <p class="active">最新发布活动</p>
          <p class="active-brief">本周发布活动数</p>
          <p class="active-num">123</p>
          <p class="active-brief">累计发布活动数</p>
          <p class="active-num">23,239</p>
        </div>
        <div class="actChart-wrapper">
          <div id="actChart" :style="{width: '60%', height: '300px'}"></div>
        </div>
      </div>
      <div class="activity-right">
        
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "check",
  data() {
    return {
      activeName: "first"
    };
  },
  mounted() {
    this.drawLine();
    this.drawLineTwo();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["Tokyo", "London"]
        },
        grid: {
          left: "2%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "Tokyo",
            type: "line",
            stack: "总量",
            data: [7, 6.9, 9.5, 14.5, 18.4, 21, 25, 26.5, 23, 18.3, 13.9, 9.6]
          },
          {
            name: "London",
            type: "line",
            stack: "总量",
            data: [20, 22, 24, 30, 50, 65, 70, 80, 85, 90, 80, 70]
          }
        ]
      });
    },

    drawLineTwo() {
      // 基于准备好的dom，初始化echarts实例
      let dealChart = this.$echarts.init(document.getElementById("dealChart"));
      // 绘制图表
      dealChart.setOption({
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {},
        grid: {
          left: "2%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2011", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "value",
            type: "line",
            stack: "总量",
            data: [30, 40, 35, 50, 49, 60, 70, 90, 100]
          }
        ]
      });
    },
    drawLineTwo() {
      // 基于准备好的dom，初始化echarts实例
      let actChart = this.$echarts.init(document.getElementById("actChart"));
      // 绘制图表
      actChart.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "count",
            type: "bar",
            barWidth: "38%",
            data: [38, 52, 61, 145, 48, 38, 38]
          }
        ]
      });
    }
  }
};
</script>

<style>
.check-wrapper {
  width: 100%;
  height: 100%;
  margin-top: 60px;
  margin-left: 200px;
}

.top-detail {
  display: flex;
  margin-left: 10px;
}
.content {
  flex: 1;
  text-align: left;
  height: 200px;
  line-height: 30px;
}
.nums,
.brief {
  font-size: 12px;
}
.detail {
  font-weight: bold;
  font-size: 20px;
}
.new-activity {
  margin: 30px 0 0 20px;
}
.title {
  display: flex;
  vertical-align: middle;
}
.title .active {
  font-size: 16px;
  color: black;
}
.active-brief {
  font-size: 14px;
  color: rgb(161, 163, 163);
  margin-left: 10px;
}
.active-num {
  font-size: 14px;
  color: rgb(59, 231, 231);
  margin-left: 10px;
}
/* .actChart-wrapper {
  width: 70%;
  display: inline-block; */
  /* padding-left: 20px; */
  /* border-right: 1px solid rgb(212, 210, 210);
} */


</style>
