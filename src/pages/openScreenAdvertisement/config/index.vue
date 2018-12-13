<template>
    <div class="openScreenConfig">
        <div class="modifyConfig">
            <div class="previewShare-content">
                    <div class="content-title">
                        <p class="title">裂变活动20180912</p>
                        <div class="btns">
                            <div class="shareGiftButton">
                                <el-button>暂停</el-button>
                                <el-button>编辑</el-button>
                            </div>
                        </div>
                    </div>
                    <div class="content-content">
                        <div class="content-content-left">
                            <!-- <p>10元代金券</p> -->
                        </div>
                        <div class="content-content-right">
                            <div class="right-top">
                                <div class="right-content">
                                    <p class="first">广告状态</p>
                                    <p class="second"></p>
                                </div>
                                <div class="right-content">
                                    <p class="first">广告图片</p>
                                    <p class="second">新人送礼</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="previewShare-inner-d previewShare-content container">
                <div class="title-container fl-row-xbtw-yctr">
                    <div class="left fl">
                        <div class="title">投放素材</div>
                    </div>
                    <el-button class="right" type="primary" @click="addAdvertisement">新建广告</el-button>
                </div>
                <div class="sptable">
                    <el-table :data="advertisementList" style="width: 100%">
                        <el-table-column prop="name" width="300" label="广告名称">
                            <template slot-scope="scope">
                                <span class="my-ellipsis">{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="link" width="380" label="广告跳转">
                            <template slot-scope="scope">
                                <span class="my-ellipsis">{{ scope.row.link }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="operation" label="操作">
                            <template slot-scope="scope">
                                <span class="my-ellipsis operation" @click="goAdvertisementDescription">{{ scope.row.operation }}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
    </div>
</template>
<script>
    export default {
      name: 'openScreenAdvertisementConfig',
      data () {
        return {
          pagetitle: '开屏广告123',
          advertisementList: [
            {
              name: '裂变活动20180912',
              link: '裂变拉辛20180908',
              operation: '查看并投放'
            }
          ],
          nowAdvertisement: {
            id: 3
          }
        }
      },
      computed: {
      },
      methods: {
        initTitleName () {
          this.$emit('setTitleName', '开平光噶片')
        },
        goAdvertisementDescription () {
          this.goUrl(`/openScreenAdvertisement/description?id=${this.nowAdvertisement.id}`)
        },
        addAdvertisement () {
          this.goUrl(`/openScreenAdvertisement/description?id=${this.nowAdvertisement.id}`)
        }
      },
      created () {
      },
      mounted () {
        // 页面名称
        this.initTitleName()
      },
      watch: {
      }
    }
</script>
<style lang="scss">
    @import "@/assets/style/common.scss";
    @import "@/assets/style/modifyConfig.scss";
    @import "@/assets/style/sptable.scss";
    @import './config.scss';
</style>