<template>
    <div>
      <h1>select</h1>
      <div class="select">
        <el-select v-model="SiteValue" @change="ChangeSite" placeholder="请选择站点">
          <el-option
            v-for="item in urllist"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="SplitterValue" @change="ChangeSplitter" clearable :disabled=disabled1 placeholder="请选择spl">
          <el-option
            v-for="item in SplitterList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <!--<button @click="change1"></button>-->
        <el-select v-model="BrandValue" clearable :disabled=disabled2 placeholder="请选择brand">
          <el-option
            v-for="item in BrandList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="ViewData">
        <el-button type="primary" @click.native="IsLoading" :loading="loading">{{ this.start }}</el-button>
      </div>
    </div>
</template>

<script>
import index from "../router";
// import index from "../router";

export default {
  name: "myselect",
  data() {
    return {
      disabled1:true,
      disabled2:true,
      loading: false,
      start: "开始爬取",
      selectedOptions: [],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }
      ],
      SiteValue:'',
      index1:'',
      SplitterValue:'',
      index2:'',
      BrandValue:'',
      index3:'',
      SplitterList:[],
      BrandList:[],
      urllist: [
        {
          url: "japan.com",
          value: 0,
          label: "japan",
          children: [
            {
              url: "jp.laptop.com",
              value:0,
              label: "laptop",
              children: []
            },
            {
              url: "jp.deskyop.com",
              value:1,
              label: "desktop",
              children: []
            }
          ]
        },
        {
          url: "korea.com",
          value: 0,
          label: "korea",
          children: [
            {
              url: "ko.laptop.com",
              value:0,
              label: "laptop",
              children: []
            },
            {
              url: "ko.desktop.com",
              value:1,
              label: "desktop",
              children: []
            }
          ]
        }
      ],
      props: {
        value: 'value',
        label: 'label',
        children: 'children'
      },
      serieslist: [],
      subserieslist: []


    }
  },
  created: function () {
    // console.log(this.urllist)
  },
  methods: {
    brandchange() {
      // var objs = document.getElementById("brand");
      // var brand = objs.options[objs.selectedIndex].getAttribute('value');
      // alert(brand)
      alert("brandchange")
    },
    brandchange2() {
      alert("change")
      console.log(this.urllist[index])
    },
    handleChange(value) {
      // console.log(value);
    },
    handleItemChange(val) {
      console.log('active item:', val);
      // console.log(this.urllist[0]);
      this.urllist[0].children[0].children = [
        {
          value: "thinkpad.com",
          label: "thinkpad",
        },
      ]
      //
      // setTimeout(_ => {
      //   if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
      //     this.options2[0].cities = [{
      //       label: '南京'
      //     }];
      //   } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
      //     this.options2[1].cities = [{
      //       label: '杭州'
      //     }];
      //   }
      // }, 300);
    },
    ChangeSite(val){
      console.log(val)
      this.SplitterList = this.urllist[val].children
      console.log(this.SplitterList)
      this.disabled1 = false
    },
    ChangeSplitter(val){
      this.BrandList = this.SplitterList[val].children
      this.disabled2 = false
      console.log(this.SplitterList)
      console.log(this.BrandList)
    },
    change1() {
      this.disabled1 = false
    },
    IsLoading() {
      this.loading = !this.loading
    }
  }
}
</script>

<style scoped>
.ViewData {
  margin-top: 50px;
}
</style>
