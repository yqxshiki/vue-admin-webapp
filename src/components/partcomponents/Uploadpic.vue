<template>
  <div id="uploadpic">
    <div class="h1">图像上传</div>
    <div class="pic">
      <i class="el-icon-message-solid"></i>
      <span class="text">点击上传用户图像(支持jpg,gif,jpeg,png)</span>
      <div class="upload" title="点击上传图片">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style scoped>
/* el-upload */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

/* 上传 */
.h1 {
  color: #000;
  font-size: 20px;
  margin: 20px;
  height: 40px;
  border-bottom: 1px solid rgb(230, 228, 228);
}
.text {
  color: #000;
  font-size: 14px;
  display: inline-block;
  padding: 20px;
}
i {
  color: orange;
}
.upload {
  margin: 50px;
}
</style>