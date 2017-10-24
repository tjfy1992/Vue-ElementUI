<template>
    <div style="border-radius:5px;">
        <div style="border:1px solid;background-color:#FFFFFF;box-shadow: 2px 2px 5px #888888;overflow: hidden;border-radius:5px;">
            <div style="background-color:#20A0FF;padding:5px;color:white;">
                学生资料查询
            </div>
            <br/>

            <el-form ref="form" :model="form" :inline=true label-width="70px" label-position="left" style="margin-left: 5%">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="7" :md="7" :lg="8">
                        <el-form-item label="名称" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="7" :md="7" :lg="8">
                        <el-form-item label="id" prop="id">
                            <el-input v-model="form.id"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="7" :md="7" :lg="8">
                        <el-form-item label="种类" prop="type">
                            <el-select v-model="form.type" clearable filterable placeholder="---请选择---" style="width:175px">
                                <el-option v-for="item in studentTypeList" :value="item.typeId" :label="item.typeName"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item style="float:right">
                    <el-button type="primary" @click="resetForm('form')">清空</el-button>
                    <el-button type="primary" @click="submitForm()">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data () {
            return {
                //提交的表单
                form: {
                    name:'',
                    id:'',
                    type:''
                },
            }
        },

        methods: {
            ...mapActions({
                saveFormVal: 'changeStudentFormAction',
                search: 'changeStudentQueryFlagAction'
            }),

            //重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            //提交表单
            submitForm: function() {
                this.search(true);
            },
        },

        mounted () {
            this.saveFormVal(this.form);
        },

        computed: {
            studentTypeList(){
                return this.$store.state.navi.studentTypeList;
            }
        }
    }
</script>

<style>

</style>
