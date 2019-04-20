<template>
  <div id="hone">
    <el-form ref="form" :model="form" label-width="150px">
      <h3>Добавить текущую задачу</h3>
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item label="Наименование">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Выполнить до">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Выбрать дату" v-model="form.date1" style="width: 85%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="Выбрать время" v-model="form.time1" style="width: 85%;"></el-time-picker>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item label="Краткое описание">
            <el-input type="textarea" v-model="form.description"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Приоритет">
            <el-select v-model="form.priority" placeholder="Выбрать приоритет">
              <el-option label="Горит" value="2"></el-option>
              <el-option label="Выполнить ближайшее время" value="1"></el-option>
              <el-option label="Отложить в долгий ящик" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-button type="primary" @click="onSubmit">Добавить</el-button>
        <el-button>Очистить</el-button>
    </el-form>
    <h3>Список текущих задач</h3>
    <el-table
            :data="tableData"
            style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <p>Краткое описание: {{ props.row.description }}</p>
          <p>Выполнить до: {{ props.row.date1 }}, {{ props.row.time1 }}</p>
        </template>
      </el-table-column>
      <el-table-column
              label="Наименование"
              prop="name">
      </el-table-column>
      <el-table-column
              label="Выполнить до"
              prop="date1">
      </el-table-column>
      <el-table-column
              label="Приоритет"
              prop="priority">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      form: {
        name: '',
        priority: '',
        date1: '',
        time1: '',
        description: '',
      },
      tableData: [{
        name: 'Убрать мусор',
        priority: 'Горит',
        date1: '2019-04-25',
        time1: '03:02:02',
        description: 'Взять ведро, лопату и собирать ей листья!',
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  name: "home",
  components: {
    HelloWorld
  }
}
</script>
