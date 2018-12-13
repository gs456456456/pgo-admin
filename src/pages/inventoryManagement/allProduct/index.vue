<template>
    <div class="inventory-allPro">
        <div class="previewShare-inner previewShare-content container">
            <div class="title-container fl-row-xbtw-yctr">
                <div class="left fl">
                    <div class="title">货品列表</div>
                    <div class="description">选择货品，导出二维码链接，然后接入打印机打印二维码。</div>
                </div>
                <el-button class="right" type="primary" @click="addProduct">添加货品</el-button>
            </div>
            <div class="table">
                <el-table :data="productList" style="width: 100%">
                    <el-table-column prop="name" label="货品名称" width="175">
                        <template slot-scope="scope">
                            <span class="my-ellipsis">{{ scope.row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="numId" label="编号" width="110">
                        <template slot-scope="scope">
                            <span class="my-ellipsis">{{ scope.row.numId }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="series" label="系列" width="60">
                        <template slot-scope="scope">
                            <span class="my-ellipsis">{{ scope.row.series }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="brand" label="品牌" width="100">
                        <template slot-scope="scope">
                            <span class="my-ellipsis">{{ scope.row.brand }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="standards" label="规格" width="80">
                        <template slot-scope="scope">
                            <span class="my-ellipsis">{{ scope.row.standards }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="period" label="使用周期" width="90">
                        <template slot-scope="scope">
                            <span class="my-ellipsis">{{ scope.row.period }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="img" label="图片" width="75">
                        <template slot-scope="scope">
                            <span class="my-ellipsis">{{ scope.row.img }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="operation" label="操作">
                        <template slot-scope="scope">
                            <span class="operation" @click="selectQrCode()">{{ scope.row.operation }}</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <el-dialog title="添加货品" :visible.sync="showAddProduct" width="400px" class="add-pro-form">
            <el-form :model="newProduct" label-position="left">
                <el-form-item label="货物名称">
                    <el-input v-model="newProduct.name" autocomplete="off" placeholder="请填写货品名称"></el-input>
                </el-form-item>
                <el-form-item label="系列">
                    <el-input v-model="newProduct.series" autocomplete="off" placeholder="请填写系列名称"></el-input>
                </el-form-item>
                <el-form-item label="品牌">
                    <el-input v-model="newProduct.brand" autocomplete="off" placeholder="请填写品牌名称"></el-input>
                </el-form-item>
                <el-form-item label="编号">
                    <el-input v-model="newProduct.numId" autocomplete="off" type="number" placeholder="请填写编号"></el-input>
                </el-form-item>
                <el-form-item label="规格">
                    <el-select v-model="newProduct.standards" placeholder="包装数量">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="周期">
                    <el-select v-model="newProduct.period" placeholder="日抛">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="showAddProduct = false">确 定</el-button>
                <el-button @click="showAddProduct = false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="选择二维码参数" :visible.sync="showSelectQrCode" width="400px" class="select-qrcode-form">
            <el-form :model="qrCodeForm" label-position="left">
                <el-form-item label="生成数量">
                    <el-input v-model="qrCodeForm.num" type="number" autocomplete="off" placeholder="请填写货品名称"></el-input>
                </el-form-item>
                <el-form-item label="扫码操作">
                    <el-select v-model="qrCodeForm.operation" placeholder="日抛">
                        <!-- <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option> -->
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="exportQrCode">确 定</el-button>
                <el-button @click="showSelectQrCode = false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="导出成功" :visible.sync="showExportSucess" class="export-success-form">
            <div class="fl-row-yctr">
                <i class="el-icon-success"></i>
                <span class="qrcode-success-text">二维码链接导出成功,点击下载导出Excel文件.</span>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="showExportSucess = false">下 载</el-button>
                <el-button @click="showExportSucess = false">关 闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
      name: 'allProduct',
      data () {
        return {
          productList: [{
            name: 'Miru 隐形眼镜日抛30片装',
            numId: '14787873',
            series: 'Miru',
            brand: 'MENICON',
            standards: '30片装',
            period: '日抛',
            operation: '导出二维码链接',
            img: '111111111111'
          }],
          showAddProduct: false,
          showSelectQrCode: false,
          showExportSucess: false,
          newProduct: {
            name: '',
            numId: '',
            series: '',
            brand: '',
            standards: [],
            period: []
          },
          qrCodeForm: {
            num: 1,
            operation: []
          }
        //   formLabelWidth: '64px',
        //   qrCodeFormLabelWidth: '200px'
        }
      },
      components: {
      },
      computed: {
      },
      methods: {
        addProduct () {
          this.showAddProduct = true
        },
        selectQrCode () {
          this.showSelectQrCode = true
        },
        exportQrCode () {
          this.showExportSucess = true
          this.showSelectQrCode = false
        }
      },
      created () {

      },
      mounted () {
      },
      watch: {
      }
    }
</script>

<style lang='scss'>
    @import './allProduct.scss'
</style>