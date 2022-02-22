<template>
  <div class="kit-page">
    <el-row>
      <el-col>
        <NuxtLink to="/private">权限页面</NuxtLink>
      </el-col>
      <el-col>
        <NuxtLink to="/user">用户管理</NuxtLink>
      </el-col>
      <el-col>
        <NuxtLink to="/menu">菜单管理</NuxtLink>
      </el-col>
    </el-row>
    <el-form>
      <el-row>
        <el-col :span="24">
          <el-form-item label="密码">
            <el-date-picker v-model="password" type="daterange" placeholder="Pick a day"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus/lib";

const password = ref(null);
const hello = () => ElMessage.info("hello world");
</script>

<style lang="scss">
.kit-page {
  width: 100%;
  z-index: -1;
 
}
</style>