<template>
  <div>
    <div class="grid grid-cols-1 text-center">
      <div class="flex justify-center mt-20">
        <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
            <el-tab-pane label="User">User</el-tab-pane>
            <el-tab-pane label="Config">Config</el-tab-pane>
            <el-tab-pane label="Role">Role</el-tab-pane>
            <el-tab-pane label="Task">Task</el-tab-pane>
          </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
const tabPosition = ref('left')
</script>
